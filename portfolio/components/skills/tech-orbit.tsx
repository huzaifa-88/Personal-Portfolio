import { Reveal } from "@/components/ui/reveal";

const inner = ["Python", "TypeScript", "React", "FastAPI"];
const outer = ["Next.js", "Node.js", "SQL", "Docker", "MongoDB", "JIRA"];

function Ring({
  items,
  radius,
  duration,
  reverse,
}: {
  items: string[];
  radius: number;
  duration: number;
  reverse?: boolean;
}) {
  return (
    <div
      className="absolute inset-0 motion-safe:animate-[spin_var(--d)_linear_infinite]"
      style={
        {
          "--d": `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        } as React.CSSProperties
      }
    >
      {items.map((item, i) => {
        const angle = (360 / items.length) * i;
        return (
          <div
            key={item}
            className="absolute left-1/2 top-1/2 origin-center"
            style={{
              transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
            }}
          >
            <span
              className="block -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs whitespace-nowrap text-foreground shadow-sm motion-safe:animate-[spin_var(--d)_linear_infinite]"
              style={
                {
                  "--d": `${duration}s`,
                  animationDirection: reverse ? "normal" : "reverse",
                } as React.CSSProperties
              }
            >
              {item}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function TechOrbit() {
  return (
    <Reveal className="relative mx-auto flex h-[280px] w-full max-w-sm items-center justify-center sm:h-[340px]">
      <div className="absolute h-[180px] w-[180px] rounded-full border border-dashed border-border sm:h-[220px] sm:w-[220px]" />
      <div className="absolute h-[260px] w-[260px] rounded-full border border-dashed border-border/70 sm:h-[320px] sm:w-[320px]" />

      <div className="relative z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-accent text-center text-accent-foreground shadow-[0_0_40px_-8px_var(--accent)]">
        <span className="font-mono text-[10px] font-semibold leading-tight">SW</span>
        <span className="font-mono text-[10px] font-semibold leading-tight">ENG</span>
      </div>

      <Ring items={inner} radius={78} duration={26} />
      <Ring items={outer} radius={120} duration={40} reverse />
    </Reveal>
  );
}
