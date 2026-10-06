"use client";

import { skills } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="mb-24 scroll-mt-16 md:mb-32 lg:scroll-mt-24">
      <SectionHeading eyebrow="Skills" title="Technologies I work with" />

      <div className="mt-10 space-y-10">
        {skills.map((category, i) => (
          <Reveal key={category.title} delay={i * 0.05}>
            <h3 className="border-b border-white/10 pb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
              {category.title}
            </h3>

            {/* logo tiles sized to their label so names never wrap; colour-only hover */}
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.skills.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="group flex items-center gap-2.5 whitespace-nowrap rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-2.5 transition-colors duration-300 hover:border-accent/40 hover:bg-accent/[0.06] motion-reduce:transition-none"
                >
                  <Icon
                    aria-hidden
                    className="h-4 w-4 shrink-0 text-white/45 transition-colors duration-300 group-hover:text-accent motion-reduce:transition-none"
                  />
                  <span className="text-[13px] font-medium leading-tight text-white/80 transition-colors duration-300 group-hover:text-white">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
