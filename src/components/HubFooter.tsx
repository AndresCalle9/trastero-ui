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
    <footer className={cn("tui-hub-footer", className)}>
      <p className="tui-hub-footer__title">Otras apps del hub</p>
      <nav className="tui-hub-footer__grid">
        {apps.map((app) => (
          <Link key={app.url} href={app.url} className="tui-hub-footer__link">
            {app.name}
            {app.description ? (
              <span className="tui-hub-footer__link-desc">
                {app.description}
              </span>
            ) : null}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
