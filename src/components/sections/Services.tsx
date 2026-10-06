"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

export function Services() {
  return (
    <section id="services" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="What I can build"
          description="From a single API to a full product, here's how I can help."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 0.06}>
                <TiltCard className="group h-full p-6">
                  <div className="flex items-start justify-between">
                    <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                    <motion.span
                      className="text-white/20 transition-colors group-hover:text-accent"
                      whileHover={{ x: 3, y: -3 }}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </motion.span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {service.description}
                  </p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
