"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const LINES = 16;
const STEP = 10; // px between sampled points along each line

/**
 * Animated backdrop: a field of thin horizontal lines that undulate like slow
 * water. Scrolling shifts the phase and nudges the amplitude, so the page feels
 * alive as you move through it. Canvas 2D, DPR-capped, paused when the tab is
 * hidden; reduced-motion users get a single static frame.
 */
export function Background() {
  const reduced = usePrefersReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let scroll = 0;
    let smooth = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const time = t * 0.00022;
      const amp = 22 + Math.min(Math.abs(smooth - scroll) * 0.06, 28);
      const top = h * 0.12;
      const gap = (h * 0.8) / (LINES - 1);

      for (let i = 0; i < LINES; i++) {
        const baseY = top + i * gap;
        // fade lines toward the edges of the stack, keep the middle brightest
        const edge = 1 - Math.abs(i / (LINES - 1) - 0.5) * 1.6;
        ctx.strokeStyle = `rgba(255, 69, 56, ${0.06 + edge * 0.14})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let x = 0; x <= w + STEP; x += STEP) {
          const y =
            baseY +
            Math.sin(x * 0.004 + time * 2 + i * 0.35 + smooth * 0.0012) * amp +
            Math.sin(x * 0.011 - time * 3 + i * 0.6) * (amp * 0.35);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };

    const loop = (t: number) => {
      smooth += (scroll - smooth) * 0.08;
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    const onScroll = () => {
      scroll = window.scrollY;
    };
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduced) raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    if (reduced) {
      draw(0);
    } else {
      window.addEventListener("scroll", onScroll, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 bg-ink"
    >
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/10 to-ink/50" />
    </div>
  );
}
