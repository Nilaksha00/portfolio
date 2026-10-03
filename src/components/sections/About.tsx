"use client";

import { about } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="mb-24 scroll-mt-16 md:mb-32 lg:scroll-mt-24">
      <SectionHeading eyebrow="About" title={about.heading} />

      <div className="mt-8 max-w-xl space-y-4">
        <Reveal>
          <p className="text-lg leading-relaxed text-white/85">{about.lead}</p>
        </Reveal>
        {about.paragraphs.map((p, i) => (
          <Reveal key={i} delay={(i + 1) * 0.05}>
            <p className="leading-relaxed text-[#998f8f]">{p}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
