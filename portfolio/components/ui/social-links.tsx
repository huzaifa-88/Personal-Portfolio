import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { personal } from "@/data/content";
import { cn } from "@/lib/utils";

const links = [
  { label: "GitHub", href: personal.social.github, icon: GithubIcon },
  { label: "LinkedIn", href: personal.social.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${personal.email}`, icon: Mail },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
