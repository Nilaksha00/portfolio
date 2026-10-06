import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/**
 * Project cover. Uses `project.cover` (a path under /public) when set;
 * otherwise renders a quiet typographic placeholder so the layout never breaks.
 */
export function ProjectCover({
  project,
  sizes,
  className,
}: {
  project: Project;
  sizes: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-ink-card",
        className,
      )}
    >
      {project.cover ? (
        <Image
          src={project.cover}
          alt={`${project.title} cover`}
          fill
          sizes={sizes}
          className="object-cover object-center"
        />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 flex items-end justify-between bg-gradient-to-br from-accent/20 via-transparent to-transparent p-[6%]"
        >
          <span className="font-display text-[clamp(1.5rem,6vw,3.5rem)] font-bold leading-none tracking-tight text-white/20">
            {project.id}
          </span>
          <span className="max-w-[60%] text-right font-mono text-[9px] uppercase leading-tight tracking-widest text-white/35 sm:text-[10px]">
            {project.title}
          </span>
        </div>
      )}
    </div>
  );
}
