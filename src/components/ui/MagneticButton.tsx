"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  strength?: number;
};

const styles: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary:
    "bg-accent font-medium text-ink hover:bg-accent-soft",
  secondary: "glass text-white/90 hover:text-white hover:border-white/30",
  ghost: "text-white/70 hover:text-white",
};

function useMagnet(strength: number) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 180, damping: 15, mass: 0.4 });
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * strength);
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, springX, springY, onMove, reset };
}

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 will-change-transform";

export function MagneticButton({
  children,
  className,
  variant = "primary",
  strength = 28,
  ...props
}: BaseProps & Omit<HTMLMotionProps<"a">, "children"> & { href?: string }) {
  const reduced = usePrefersReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const enabled = !reduced && isDesktop;
  const { ref, springX, springY, onMove, reset } = useMagnet(strength);

  const Comp = motion.a;

  return (
    <Comp
      ref={ref as never}
      className={cn(base, styles[variant], className)}
      style={enabled ? { x: springX, y: springY } : undefined}
      onMouseMove={enabled ? onMove : undefined}
      onMouseLeave={enabled ? reset : undefined}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </Comp>
  );
}
