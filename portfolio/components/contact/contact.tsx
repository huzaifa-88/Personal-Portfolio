import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SocialLinks } from "@/components/ui/social-links";
import { personal } from "@/data/content";

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-border bg-surface px-8 py-16 text-center sm:px-16 sm:py-24">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[100px] motion-safe:animate-blob" />

          <div className="relative flex flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-accent-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Contact
            </span>

            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Let&apos;s build something{" "}
              <span className="text-gradient">great.</span>
            </h2>

            <p className="max-w-md text-muted">
              Have a role, project, or idea in mind? I&apos;d love to hear about it.
            </p>

            <a
              href={`mailto:${personal.email}`}
              className="group mt-2 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground shadow-[0_0_0_1px_var(--accent)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_28px_-4px_var(--accent)]"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <SocialLinks className="mt-4" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
