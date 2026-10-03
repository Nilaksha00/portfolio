"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Node = { x: number; y: number; vx: number; vy: number; r: number; hot: boolean };

const ACCENT = "255, 69, 56"; // matches accent (#ff4538)
const LINK = 150; // px — max distance for two nodes to connect
const LINK_MOUSE = 190; // px — reach of the cursor

/**
 * Living network: drifting nodes link to their neighbours with lines that
 * fade as they stretch apart. The cursor acts as a bright node that pulls
 * nearby points toward it and wires them in red, and scrolling nudges the
 * whole net so it feels attached to the page. Canvas 2D, DPR-capped, paused
 * when the tab is hidden; reduced-motion users get one still frame.
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
    let nodes: Node[] = [];
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(120, Math.floor((w * h) / 13000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1 + Math.random() * 1.4,
        hot: Math.random() < 0.18,
      }));
    };

    const draw = (move: boolean) => {
      ctx.clearRect(0, 0, w, h);

      if (move) {
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          // gentle pull toward the cursor
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_MOUSE * LINK_MOUSE && d2 > 1) {
            const d = Math.sqrt(d2);
            const f = (1 - d / LINK_MOUSE) * 0.035;
            n.x += (dx / d) * f * d * 0.06;
            n.y += (dy / d) * f * d * 0.06;
          }
          // wrap around the edges
          if (n.x < -20) n.x = w + 20;
          else if (n.x > w + 20) n.x = -20;
          if (n.y < -20) n.y = h + 20;
          else if (n.y > h + 20) n.y = -20;
        }
      }

      // links between nodes
      ctx.lineWidth = 0.8;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > LINK * LINK) continue;
          const alpha = (1 - Math.sqrt(d2) / LINK) * 0.22;
          ctx.strokeStyle =
            a.hot && b.hot
              ? `rgba(${ACCENT}, ${alpha * 2.2})`
              : `rgba(244, 241, 238, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // cursor wires
      if (mouse.x > -9000) {
        for (const n of nodes) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d > LINK_MOUSE) continue;
          ctx.strokeStyle = `rgba(${ACCENT}, ${(1 - d / LINK_MOUSE) * 0.65})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(n.x, n.y);
          ctx.stroke();
        }
      }

      // the nodes themselves
      for (const n of nodes) {
        ctx.fillStyle = n.hot ? `rgba(${ACCENT}, 0.9)` : "rgba(244, 241, 238, 0.45)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.hot ? n.r + 0.5 : n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      draw(true);
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduced) {
      draw(false);
    } else {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
      document.addEventListener("visibilitychange", onVisibility);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 bg-ink"
    >
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/0 via-ink/20 to-ink/45" />
    </div>
  );
}
