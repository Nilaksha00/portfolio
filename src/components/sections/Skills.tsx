"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

export function Skills() {
  return (
    <section id="skills" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A snapshot of the tools I reach for across the stack — from pixels to pipelines."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, i) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} delay={i * 0.06}>
                <TiltCard className="h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ y: -2 }}
                        className="group/badge relative cursor-default rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-sm text-white/65 transition-colors duration-300 hover:border-accent/40 hover:text-white"
                      >
                        <span className="absolute inset-0 -z-10 rounded-lg bg-accent/0 blur-md transition-colors duration-300 group-hover/badge:bg-accent/25" />
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
