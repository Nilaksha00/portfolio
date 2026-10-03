"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

/**
 * Card wrapper that adds a subtle 3D tilt + a cursor-tracking glow.
 * Disabled on touch devices and when reduced motion is requested.
 * The glow is a transformed blob (compositor-only) rather than an animated
 * background-gradient, so hovering many cards stays cheap.
 */
export function TiltCard({
  children,
  className,
  glow = false,
  max = 0,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  max?: number;
}) {
  const reduced = usePrefersReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const enabled = !reduced && isDesktop;

  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const gx = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 });
  const gy = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rx.set((0.5 - py) * max * 2);
    ry.set((px - 0.5) * max * 2);
    gx.set(e.clientX - rect.left);
    gy.set(e.clientY - rect.top);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "surface group relative overflow-hidden rounded-2xl transition-colors duration-300 hover:border-white/20",
        className,
      )}
    >
      {glow && enabled && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-accent/20 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100 will-change-transform"
          style={{ x: gx, y: gy }}
        />
      )}
      <div className="relative">{children}</div>
    </motion.div>
  );
}
