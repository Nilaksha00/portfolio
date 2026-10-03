"use client";

import { GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

export function Education() {
  return (
    <section id="education" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {education.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <TiltCard className="h-full p-6">
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                    <GraduationCap className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-xs text-accent-soft">
                    {item.period}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-white/70">
                  {item.institution}
                </p>
                {item.detail && (
                  <p className="mt-3 text-sm text-white/50">{item.detail}</p>
                )}
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-16 font-mono text-xs uppercase tracking-[0.25em] text-white/45">
            Certifications
          </h3>
          <ul className="mt-5 border-t border-white/15">
            {certifications.map((c) => (
              <li
                key={c}
                className="border-b border-white/10 py-4 text-sm text-white/75"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
