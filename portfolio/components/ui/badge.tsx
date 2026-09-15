import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted transition-colors duration-300 hover:border-accent/60 hover:text-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
