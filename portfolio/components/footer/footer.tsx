"use client";

import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SocialLinks } from "@/components/ui/social-links";
import { personal } from "@/data/content";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-10">
      <Container className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm font-semibold text-foreground">{personal.name}</p>
          <p className="text-sm text-muted">{personal.role}</p>
        </div>

        <SocialLinks />

        <div className="flex items-center gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {personal.name}
          </p>
          <button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
