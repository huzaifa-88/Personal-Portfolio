import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variantClasses: Record<NonNullable<ButtonBaseProps["variant"]>, string> = {
  primary:
    "bg-accent text-accent-foreground hover:brightness-110 shadow-[0_0_0_1px_var(--accent)] hover:shadow-[0_0_24px_-2px_var(--accent)]",
  secondary:
    "bg-surface text-foreground border border-border hover:border-border-strong hover:bg-surface-hover",
  ghost: "text-foreground hover:text-accent",
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Button({
  href,
  children,
  className,
  variant = "primary",
  target,
  download,
}: ButtonBaseProps & { href: string; target?: string; download?: boolean | string }) {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      target={target ?? (isExternal && !download ? "_blank" : undefined)}
      rel={isExternal ? "noopener noreferrer" : undefined}
      download={download}
      className={cn(base, variantClasses[variant], className)}
    >
      {children}
    </Link>
  );
}
