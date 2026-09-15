"use client";

import { ParticleField } from "@/components/hero/particle-field";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-grid opacity-[0.25] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <ParticleField className="absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)] motion-reduce:hidden" />
      <div className="absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[110px] motion-safe:animate-blob" />
      <div className="absolute right-[10%] top-[20%] h-72 w-72 rounded-full bg-accent-2/20 blur-[100px] motion-safe:animate-blob [animation-delay:-6s]" />
      <div className="absolute bottom-[-10%] left-[15%] h-72 w-72 rounded-full bg-accent/15 blur-[100px] motion-safe:animate-blob [animation-delay:-11s]" />
    </div>
  );
}
