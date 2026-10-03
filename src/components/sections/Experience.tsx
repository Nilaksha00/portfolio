"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="relative mt-14 max-w-3xl">
          {/* animated timeline line */}
          <motion.span
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className="absolute left-[15px] top-2 h-full w-px origin-top bg-gradient-to-b from-accent via-accent/40 to-transparent sm:left-[19px]"
          />

          <ol className="space-y-12">
            {experience.map((job, i) => (
              <li key={i} className="relative pl-12 sm:pl-16">
                <Reveal delay={i * 0.1}>
                  <span className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border border-accent/30 bg-ink text-accent sm:h-10 sm:w-10">
                    <Briefcase className="h-4 w-4" strokeWidth={1.75} />
                  </span>

                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-accent/25 sm:p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                        {job.role}
                      </h3>
                      <span className="font-mono text-xs text-accent-soft">
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-white/70">
                      {job.company}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((point, j) => (
                        <li
                          key={j}
                          className="flex gap-2.5 text-sm leading-relaxed text-white/55"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
