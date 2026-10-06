"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FileDown } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { TypeCycle } from "@/components/ui/TypeCycle";

function useActiveSection() {
  const [active, setActive] = useState(navLinks[0].href.slice(1));
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((e) => e.isIntersecting)
          .forEach((e) => setActive(e.target.id));
      },
      // thin band near the upper third of the viewport
      { rootMargin: "-30% 0px -65% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

/**
 * Fixed-on-desktop identity column: name, role, short intro, section nav with
 * a scroll-aware indicator, and social links. Stacks above the content on
 * small screens.
 */
export function Sidebar() {
  const active = useActiveSection();

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[44%] lg:flex-col lg:justify-center lg:py-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
      >
        <div className="relative mb-8 h-40 w-40 overflow-hidden rounded-full border border-white/10 bg-ink-card">
          <Image
            src="/images/portrait.webp"
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="160px"
            className="object-cover"
          />
        </div>
        <h1 className="whitespace-nowrap font-display text-[clamp(2rem,9vw,3rem)] font-extrabold leading-none tracking-[-0.04em] text-white lg:text-[clamp(2rem,3.4vw,3rem)]">
          <a href="#about">
            {profile.firstName}{" "}
            <span className="text-accent">
              {profile.name.replace(`${profile.firstName} `, "")}
            </span>
          </a>
        </h1>
        <p className="mt-3 font-mono text-sm text-accent">
          <span>{"> "}</span>
          <TypeCycle words={profile.roles} className="text-white/80" />
        </p>

        <nav aria-label="Sections" className="mt-10 hidden lg:block">
          <ul className="w-max">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center py-2.5"
                  >
                    {/* fixed-width slot: the line scales, nothing else moves */}
                    <span
                      className={cn(
                        "mr-4 h-px w-16 origin-left transition-[transform,background-color] duration-300 motion-reduce:transition-none",
                        isActive
                          ? "scale-x-100 bg-accent"
                          : "scale-x-[0.4] bg-white/30 group-hover:scale-x-100 group-hover:bg-accent",
                      )}
                    />
                    <span
                      className={cn(
                        "text-xs font-medium uppercase tracking-widest transition-colors duration-300 group-hover:text-white",
                        isActive ? "text-white" : "text-white/45",
                      )}
                    >
                      {link.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10 flex flex-col items-start gap-5 lg:mt-12"
      >
        <a
          href={profile.resumeUrl}
          className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-accent"
        >
          <FileDown className="h-4 w-4" />
          Résumé
        </a>
        <SocialIcons />
      </motion.div>
    </header>
  );
}
