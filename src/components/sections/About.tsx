"use client";

import Image from "next/image";
import { about, profile } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="mb-24 scroll-mt-16 md:mb-32 lg:scroll-mt-24">
      <SectionHeading eyebrow="About" title={about.heading} />

      <div className="mt-8 grid gap-8 sm:grid-cols-[9rem_1fr]">
        <Reveal>
          <div className="relative aspect-square w-36 overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-card">
            <Image
              src="/portrait.png"
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="144px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-white/80">{about.lead}</p>
          </Reveal>
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={(i + 1) * 0.05}>
              <p className="leading-relaxed text-[#998f8f]">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
