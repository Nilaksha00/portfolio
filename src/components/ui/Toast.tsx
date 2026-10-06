"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Small confirmation message pinned to the bottom of the viewport. Portalled
 * to <body> so transformed ancestors (scroll reveals) can't offset it, and
 * announced to screen readers through a polite live region.
 */
export function Toast({
  open,
  message,
  detail,
}: {
  open: boolean;
  message: string;
  detail?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return createPortal(
    <div
      role="status"
      aria-live="polite"
      // sits above the back-to-top button on phones
      className="pointer-events-none fixed inset-x-0 bottom-20 z-[110] flex justify-center px-4 sm:bottom-6"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduced ? 0 : 16 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-ink-soft px-4 py-3 text-sm text-white shadow-2xl"
          >
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
              <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
            <span className="font-medium">{message}</span>
            {detail && (
              <span className="hidden font-mono text-xs text-[#998f8f] sm:inline">
                {detail}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>,
    document.body,
  );
}
