"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Renders <main> and dims every top-level <section> except the one the viewer
 * is currently focused on (the section crossing the vertical middle of the
 * viewport). Purely presentational — links stay clickable, and the effect is
 * disabled for `prefers-reduced-motion`.
 */
export function SectionSpotlight({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const main = mainRef.current;
    if (!main || reduced) return;

    const sections = Array.from(main.children).filter(
      (el): el is HTMLElement => el.tagName === "SECTION",
    );
    if (sections.length < 2) return;

    const inBand = new Set<HTMLElement>();
    let active: HTMLElement | null = null;

    const apply = () => {
      // First section (in document order) currently crossing the middle band.
      const next = sections.find((s) => inBand.has(s)) ?? active;
      if (next === active) return;
      active = next;
      for (const s of sections) {
        s.dataset.dimmed = active && s !== active ? "true" : "false";
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inBand.add(entry.target as HTMLElement);
          else inBand.delete(entry.target as HTMLElement);
        }
        apply();
      },
      // Root shrunk to a thin strip through the viewport centre.
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => {
      observer.disconnect();
      sections.forEach((s) => delete s.dataset.dimmed);
    };
  }, [reduced]);

  return (
    <main ref={mainRef} data-spotlight>
      {children}
    </main>
  );
}
