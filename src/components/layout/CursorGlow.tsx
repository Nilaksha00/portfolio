"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

/**
 * Desktop-only cursor-following glow + small dot.
 * Never shown on touch devices or with reduced motion.
 */
export function CursorGlow() {
  const reduced = usePrefersReducedMotion();
  const hasFinePointer = useMediaQuery("(pointer: fine)");
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const glowX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.5 });
  const glowY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.5 });
  const dotX = useSpring(x, { stiffness: 500, damping: 40 });
  const dotY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    if (reduced || !hasFinePointer) return;
    setReady(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      setActive(
        !!el?.closest(
          "a, button, [role='button'], input, textarea, select, label",
        ),
      );
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [reduced, hasFinePointer, x, y]);

  if (!ready) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[70] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/12 blur-[48px] will-change-transform"
        style={{ x: glowX, y: glowY }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[71] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/70 mix-blend-difference"
        style={{ x: dotX, y: dotY }}
        animate={{
          width: active ? 44 : 10,
          height: active ? 44 : 10,
          opacity: active ? 0.9 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </>
  );
}
