"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <section
      id="projects"
      className="mb-24 scroll-mt-16 md:mb-32 lg:scroll-mt-24"
    >
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="Enterprise products and AI/ML projects from work and research."
      />

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
              <div className="grid gap-2 sm:grid-cols-[3rem_1fr] sm:gap-6">
                <span className="pt-1 font-mono text-xs text-[#998f8f]">
                  {project.id}
                </span>
                <div>
                  <h3 className="font-display font-medium text-white">
                    {project.title}
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
                  {(project.liveUrl || project.githubUrl) && (
                    <div className="mt-4 flex items-center gap-5 text-sm">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-white/80 transition-colors hover:text-accent"
                        >
                          Live <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} on GitHub`}
                          className="text-white/50 transition-colors hover:text-white"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
