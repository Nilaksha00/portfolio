"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Recent projects"
          title="Selected work"
          description="Enterprise products and AI/ML projects from work and research."
        />

        <ul className="mt-16 border-t border-white/15">
          {projects.map((project) => (
            <li key={project.id} className="border-b border-white/10">
              <Reveal>
                <div className="group grid gap-4 py-8 transition-colors sm:grid-cols-[4rem_1.2fr_1fr_auto] sm:items-start sm:gap-8 sm:py-10">
                  <span className="font-mono text-xs text-[#998f8f]">
                    {project.id}
                  </span>

                  <div>
                    <h3 className="font-display text-2xl font-medium tracking-tight text-white transition-transform duration-300 group-hover:translate-x-2 group-hover:text-accent sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-[#998f8f]">
                      {project.description}
                    </p>
                  </div>

                  <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-white/50 sm:pt-2">
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-5 text-sm sm:pt-1.5">
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
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
