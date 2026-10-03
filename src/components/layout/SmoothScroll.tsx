"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/**
 * Lightweight smooth-scroll (Lenis). Skipped entirely when the user prefers
 * reduced motion or is on a touch / coarse-pointer device — those get native
 * scrolling, which is already smooth there.
 */
export function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || coarsePointer) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Space below the fixed navbar we want above a section's heading (px).
    const NAV_GAP = 124;

    // Route in-page anchor clicks through Lenis for a smooth glide.
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!target) return;
      const id = target.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector<HTMLElement>(id);
      if (!el) return;
      e.preventDefault();

      if (id === "#home") {
        lenis.scrollTo(0, { offset: 0 });
        return;
      }

      // Scroll past the section's own top padding so its heading — not the
      // empty padded box — lands just under the navbar.
      const padTop = parseFloat(getComputedStyle(el).paddingTop) || 0;
      lenis.scrollTo(el, { offset: padTop - NAV_GAP });
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
