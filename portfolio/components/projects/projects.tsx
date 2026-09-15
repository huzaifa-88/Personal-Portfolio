import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of projects spanning full-stack dashboards to data engineering."
        />

        <RevealGroup className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <RevealItem key={project.name}>
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
