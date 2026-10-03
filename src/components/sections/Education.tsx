"use client";

import { certifications, education } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section
      id="education"
      className="mb-24 scroll-mt-16 md:mb-32 lg:scroll-mt-24"
    >
      <SectionHeading eyebrow="Education" title="Academic background" />

      <ol className="group/list mt-10 space-y-10">
        {education.map((item, i) => (
          <li
            key={i}
            className="transition-opacity duration-300 lg:group-hover/list:opacity-50 lg:group-hover/list:hover:opacity-100"
          >
            <Reveal delay={i * 0.06}>
              <div className="grid gap-2 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
                <p className="whitespace-nowrap pt-1 font-mono text-[11px] uppercase tracking-normal text-[#998f8f]">
                  {item.period}
                </p>
                <div>
                  <h3 className="font-display font-medium text-white">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm text-white/60">
                    {item.institution}
                  </p>
                  {item.detail && (
                    <p className="mt-2 text-sm text-[#998f8f]">{item.detail}</p>
                  )}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal>
        <h3 className="mt-14 font-mono text-xs uppercase tracking-[0.25em] text-[#998f8f]">
          Certifications
        </h3>
        <ul className="mt-4 border-t border-white/15">
          {certifications.map((c) => (
            <li
              key={c}
              className="border-b border-white/10 py-3 text-sm text-white/75"
            >
              {c}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
