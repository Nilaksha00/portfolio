"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";
import { about, profile } from "@/data/portfolio";
import { TypeCycle } from "@/components/ui/TypeCycle";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const rise = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 + i * 0.1, ease },
  }),
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-32 pb-12 sm:pt-40"
    >
      <div className="container-px mx-auto w-full max-w-7xl">
        <motion.div style={{ y, opacity }}>
          <motion.h1
            custom={0}
            variants={rise}
            initial="hidden"
            animate="visible"
            className="font-display text-[clamp(3rem,10vw,8.5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-white"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            custom={1}
            variants={rise}
            initial="hidden"
            animate="visible"
            className="mt-8"
          >
            <div>
              <p className="font-mono text-sm text-white/45">
                <span className="text-accent">{"> "}</span>
                <TypeCycle words={profile.roles} className="text-white/70" />
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#998f8f] sm:text-lg">
                {profile.heroDescription}
              </p>
              <a
                href="#projects"
                className="group mt-8 inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-medium text-white transition-colors hover:text-accent"
              >
                View selected work
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
            </div>

          </motion.div>
        </motion.div>

        {/* stats bar */}
        <motion.dl
          custom={2}
          variants={rise}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-2 border-t border-white/15 sm:grid-cols-4"
        >
          {about.stats.map((s) => (
            <div key={s.label} className="py-6 pr-4">
              <dd className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
                {typeof s.value === "number" ? (
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                ) : (
                  s.value
                )}
              </dd>
              <dt className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#998f8f]">
                {s.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
