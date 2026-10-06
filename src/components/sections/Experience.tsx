"use client";

import { experience } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="mb-24 scroll-mt-16 md:mb-32 lg:scroll-mt-24"
    >
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      {/* hovering one entry dims the others (opacity only — nothing moves) */}
      <ol className="group/list mt-10 space-y-10">
        {experience.map((job, i) => (
          <li
            key={i}
            className="group relative transition-opacity duration-300 lg:group-hover/list:opacity-50 lg:group-hover/list:hover:opacity-100"
          >
            <div
              aria-hidden
              className="absolute -inset-x-6 -inset-y-5 z-0 hidden rounded-xl border border-transparent transition-colors duration-300 motion-reduce:transition-none lg:block lg:group-hover:border-white/10 lg:group-hover:bg-white/[0.04]"
            />
            <Reveal delay={i * 0.08} className="relative z-10">
              <div className="grid gap-2 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
                <p className="whitespace-nowrap pt-1 font-mono text-[11px] uppercase tracking-normal text-[#998f8f]">
                  {job.period}
                </p>
                <div>
                  <h3 className="font-display text-lg font-semibold leading-snug text-white">
                    {job.role}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-accent-soft">
                    {job.company}
                    {job.type && (
                      <span className="font-normal text-[#998f8f]">
                        {" · "}
                        {job.type}
                      </span>
                    )}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {job.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex gap-2.5 text-sm leading-relaxed text-[#998f8f]"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
