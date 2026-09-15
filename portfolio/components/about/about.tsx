import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { personal, stats } from "@/data/content";

export function About() {
  return (
    <section id="about" className="relative py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering software that ships, end to end"
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal delay={0.05} className="lg:col-span-3">
            <p className="text-lg leading-relaxed text-muted">{personal.summary}</p>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 gap-4 lg:col-span-2">
            {stats.map((stat) => (
              <RevealItem key={stat.label}>
                <div className="group h-full rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_30px_-10px_var(--accent)]">
                  <p className="text-2xl font-semibold text-gradient sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
