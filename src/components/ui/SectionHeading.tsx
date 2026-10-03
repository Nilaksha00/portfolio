"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {/* hairline that draws in as the section scrolls into view */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease }}
        className={cn(
          "mb-5 h-px w-16 bg-accent",
          align === "center" ? "mx-auto origin-center" : "origin-left",
        )}
      />
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-white/45"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease }}
        className="font-display text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-white/90 sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-base leading-relaxed text-[#998f8f] sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
