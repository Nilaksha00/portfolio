"use client";

import { ArrowUpRight } from "lucide-react";
import { useCallback, useState } from "react";
import { projects, type Project } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { ProjectCover } from "@/components/ui/ProjectCover";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section
      id="projects"
      className="mb-24 scroll-mt-16 md:mb-32 lg:scroll-mt-24"
    >
      <SectionHeading eyebrow="Projects" title="Selected work" />

      <ul className="group/list mt-10 space-y-12">
        {projects.map((project, i) => (
          <li
            key={project.id}
            className="group relative transition-opacity duration-300 lg:group-hover/list:opacity-50 lg:group-hover/list:hover:opacity-100"
          >
            <div
              aria-hidden
              className="absolute -inset-x-6 -inset-y-5 z-0 hidden rounded-xl border border-transparent transition-colors duration-300 motion-reduce:transition-none lg:block lg:group-hover:border-white/10 lg:group-hover:bg-white/[0.04]"
            />
            <Reveal delay={i * 0.05} className="relative z-10">
              <div className="grid gap-4 sm:grid-cols-[8rem_1fr] sm:gap-6">
                <ProjectCover
                  project={project}
                  sizes="(min-width: 640px) 128px, 100vw"
                  className="order-first sm:mt-1"
                />
                <div>
                  <h3 className="font-display text-lg font-semibold leading-snug text-white">
                    {/* the whole entry is the hit area (::after covers the li) */}
                    <button
                      type="button"
                      onClick={() => setSelected(project)}
                      aria-haspopup="dialog"
                      className="text-left transition-colors group-hover:text-accent after:absolute after:-inset-x-6 after:-inset-y-5 after:content-['']"
                    >
                      {project.title}
                      <ArrowUpRight className="ml-1 inline h-4 w-4 align-[-2px] opacity-60" />
                    </button>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#998f8f]">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-soft"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      <ProjectModal project={selected} onClose={close} />
    </section>
  );
}
