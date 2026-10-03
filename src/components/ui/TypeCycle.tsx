"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Cycles through a list of words with a typing / erasing effect.
 * Falls back to a plain crossfade when reduced motion is requested.
 */
export function TypeCycle({
  words,
  className,
  typingSpeed = 55,
  erasingSpeed = 28,
  holdTime = 1600,
}: {
  words: string[];
  className?: string;
  typingSpeed?: number;
  erasingSpeed?: number;
  holdTime?: number;
}) {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "erasing">("typing");

  useEffect(() => {
    if (reduced) return;
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (display.length < current.length) {
        timeout = setTimeout(
          () => setDisplay(current.slice(0, display.length + 1)),
          typingSpeed,
        );
      } else {
        timeout = setTimeout(() => setPhase("holding"), holdTime);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("erasing"), 120);
    } else {
      if (display.length > 0) {
        timeout = setTimeout(
          () => setDisplay(current.slice(0, display.length - 1)),
          erasingSpeed,
        );
      } else {
        setIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [display, phase, index, words, reduced, typingSpeed, erasingSpeed, holdTime]);

  if (reduced) {
    return (
      <span className={className}>
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {words[index % words.length]}
          </motion.span>
        </AnimatePresence>
      </span>
    );
  }

  return (
    <span className={className} aria-live="polite">
      {display}
      <motion.span
        aria-hidden
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-accent"
      />
    </span>
  );
}
