"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { learning } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Learning() {
  return (
    <section id="learning" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="Growth" title={learning.heading} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {learning.items.map((item) => (
            <motion.div
              key={item}
              variants={{
                hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="group flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 transition-colors duration-300 hover:border-accent/40"
            >
              <Sparkles
                className="h-4 w-4 text-accent transition-transform duration-300 group-hover:rotate-12"
                strokeWidth={1.75}
              />
              <span className="text-sm text-white/70 transition-colors group-hover:text-white">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.2}>
          <p className="mt-10 font-display text-xl text-white/40 sm:text-2xl">
            {learning.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
