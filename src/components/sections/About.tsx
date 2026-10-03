"use client";

import Image from "next/image";
import { about, profile } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="About" title={about.heading} />

        <div className="mt-14 grid gap-12 lg:grid-cols-[20rem_1fr] lg:gap-16">
          {/* Portrait card */}
          <Reveal direction="right">
            <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-card lg:mx-0">
              <Image
                src="/portrait.png"
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(min-width: 640px) 320px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
                {about.lead}
              </p>
            </Reveal>
            <div className="mt-6 space-y-4">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="leading-relaxed text-white/55">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
