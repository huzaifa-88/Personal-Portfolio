import { ArrowUpRight, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/ui/icons";
import type { projects } from "@/data/content";

export function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_50px_-20px_var(--accent)]">
      <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-border bg-background-alt">
        <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
        <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-accent/20 blur-3xl transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />
        <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-accent-2/20 blur-3xl transition-transform duration-500 group-hover:-translate-x-4 group-hover:-translate-y-4" />
        <Layers className="relative h-10 w-10 text-accent transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-accent-2">
              {project.category}
            </p>
            <h3 className="mt-1 text-xl font-semibold text-foreground">{project.name}</h3>
          </div>
          <div className="flex shrink-0 gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} on GitHub`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors duration-200 hover:border-accent/60 hover:text-accent"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} live demo`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors duration-200 hover:border-accent/60 hover:text-accent"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
