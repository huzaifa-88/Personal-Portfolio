import { Code2, Server, Layout, Database, Cloud, Brain } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { TechOrbit } from "@/components/skills/tech-orbit";
import { skills } from "@/data/content";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Languages: Code2,
  Backend: Server,
  Frontend: Layout,
  Databases: Database,
  "Cloud / DevOps": Cloud,
  "AI / ML": Brain,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <Container className="flex flex-col gap-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Skills"
            title="Tools I reach for"
            description="Technologies I use to design, build, and ship production software."
          />
          <TechOrbit />
        </div>

        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => {
            const Icon = icons[group.category] ?? Code2;
            return (
              <RevealItem key={group.category}>
                <div className="group h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_30px_-12px_var(--accent)]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold text-foreground">{group.category}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted transition-colors duration-200 group-hover:border-accent/30"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
