import Link from "next/link";
import { cn } from "../lib/cn";

export interface HubApp {
  name: string;
  url: string;
  description?: string;
}

export interface HubFooterProps {
  /** Apps del hub a listar (normalmente excluyendo la app actual). */
  apps: HubApp[];
  className?: string;
}

export function HubFooter({ apps, className }: HubFooterProps) {
  return (
    <footer
      className={cn(
        "border-t border-black/10 bg-bg px-4 py-8 sm:px-6",
        className
      )}
    >
      <p className="mb-4 font-heading text-sm font-semibold text-text/60">
        Otras apps del hub
      </p>
      <nav className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {apps.map((app) => (
          <Link
            key={app.url}
            href={app.url}
            className="font-body text-sm text-text hover:text-accent-2"
          >
            {app.name}
            {app.description ? (
              <span className="block text-xs text-text/50">
                {app.description}
              </span>
            ) : null}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
