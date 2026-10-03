"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/data/portfolio";
import { ProjectCover } from "@/components/ui/ProjectCover";

/**
 * Details dialog for a project. Closes on Escape, backdrop click or the close
 * button; locks page scroll while open and returns focus to the trigger.
 */
export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!project) return;
    const trigger = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      trigger?.focus?.();
    };
  }, [project, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          key="backdrop"
          data-lenis-prevent
          className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative w-full max-w-2xl rounded-t-3xl border border-white/10 bg-ink-soft p-6 shadow-2xl sm:rounded-3xl sm:p-10"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-accent hover:text-accent"
            >
              <X className="h-4 w-4" />
            </button>

            <ProjectCover
              project={project}
              sizes="(min-width: 672px) 592px, 100vw"
              className="mb-8 rounded-xl"
            />

            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Project {project.id}
            </p>
            <h3
              id="project-modal-title"
              className="mt-3 pr-10 font-display text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl"
            >
              {project.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-accent-soft">
              {project.context}
            </p>

            <p className="mt-6 leading-relaxed text-[#998f8f]">
              {project.description}
            </p>

            <h4 className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-white/45">
              Highlights
            </h4>
            <ul className="mt-3 space-y-2.5">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-3 text-sm leading-relaxed text-white/80"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>

            <h4 className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-white/45">
              Built with
            </h4>
            <ul className="mt-3 flex flex-wrap gap-2">
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
              <div className="mt-8 flex items-center gap-5 border-t border-white/10 pt-6 text-sm">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-white/80 transition-colors hover:text-accent"
                  >
                    Live demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-white/60 transition-colors hover:text-white"
                  >
                    <Github className="h-4 w-4" /> Source
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
