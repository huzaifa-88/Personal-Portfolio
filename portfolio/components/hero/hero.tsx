"use client";

import { motion, type Variants } from "motion/react";
import { ArrowRight, ArrowDown, Download } from "lucide-react";
import { personal } from "@/data/content";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/ui/social-links";
import { HeroBackground } from "@/components/hero/hero-background";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      <HeroBackground />
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex max-w-3xl flex-col gap-6"
        >
          <motion.span
            variants={item}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-accent-2"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available for new opportunities
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{personal.name.split(" ")[0]}</span>
            <br />
            {personal.role}
          </motion.h1>

          <motion.p variants={item} className="max-w-xl text-lg leading-relaxed text-muted">
            {personal.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-2 flex flex-wrap items-center gap-4">
            <Button href="#projects" variant="primary">
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
            <Button href={personal.resumeUrl} variant="ghost" download>
              Download Resume
              <Download className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-4">
            <SocialLinks />
          </motion.div>
        </motion.div>
      </Container>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-accent sm:flex"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
