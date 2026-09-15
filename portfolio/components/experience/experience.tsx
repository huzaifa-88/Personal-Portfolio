"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/content";
import { Briefcase } from "lucide-react";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've built"
          description="A track record of owning features end-to-end in production systems."
        />

        <div ref={ref} className="relative flex flex-col gap-10 pl-10 sm:pl-14">
          <div className="absolute left-[11px] top-1 bottom-1 w-px bg-border sm:left-[19px]" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[11px] top-1 w-px bg-gradient-to-b from-accent to-accent-2 sm:left-[19px]"
          />

          {experience.map((role, i) => (
            <Reveal key={role.company} delay={i * 0.1} className="relative">
              <span className="absolute -left-10 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-accent/60 bg-background text-accent sm:-left-14 sm:h-10 sm:w-10">
                <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </span>

              <div className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_0_40px_-16px_var(--accent)] sm:p-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold text-foreground">
                    {role.role} · <span className="text-accent-2">{role.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted">{role.duration}</span>
                </div>

                <p className="mt-3 text-muted leading-relaxed">{role.description}</p>

                <ul className="mt-4 flex flex-col gap-2">
                  {role.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 text-sm text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {role.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
