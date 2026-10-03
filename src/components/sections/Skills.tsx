"use client";

import { skills } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="mb-24 scroll-mt-16 md:mb-32 lg:scroll-mt-24">
      <SectionHeading eyebrow="Skills" title="Technologies I work with" />

      <div className="mt-10 space-y-8">
        {skills.map((category, i) => (
          <Reveal key={category.title} delay={i * 0.05}>
            <div className="grid gap-3 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
              <h3 className="pt-1 font-mono text-xs uppercase tracking-wide text-[#998f8f]">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-soft"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
