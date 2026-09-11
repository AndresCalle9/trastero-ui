import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "../lib/cn";

export interface HubHeaderProps {
  /** URL del hub Trastero al que apunta el link "Volver a Trastero". */
  hubUrl: string;
  /** Nombre de la app actual, mostrado junto al logo. */
  appName?: string;
  /** Logo del hub. Por defecto renderiza el wordmark "Trastero". */
  logo?: ReactNode;
  className?: string;
}

export function HubHeader({
  hubUrl,
  appName,
  logo,
  className,
}: HubHeaderProps) {
  return (
    <header className={cn("tui-hub-header", className)}>
      <div className="tui-hub-header__brand">
        <Link href={hubUrl} className="tui-hub-header__logo-link">
          {logo ?? "Trastero"}
        </Link>
        {appName ? (
          <>
            <span className="tui-hub-header__sep">/</span>
            <span className="tui-hub-header__app-name">{appName}</span>
          </>
        ) : null}
      </div>
      <Link href={hubUrl} className="tui-hub-header__back-link">
        Volver a Trastero
      </Link>
    </header>
  );
}
