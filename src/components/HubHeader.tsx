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
    <header
      className={cn(
        "flex h-16 items-center justify-between border-b border-black/10 bg-bg px-4 sm:px-6",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Link
          href={hubUrl}
          className="font-heading text-lg font-semibold text-text"
        >
          {logo ?? "Trastero"}
        </Link>
        {appName ? (
          <>
            <span className="text-black/20">/</span>
            <span className="font-body text-sm text-text/70">{appName}</span>
          </>
        ) : null}
      </div>
      <Link
        href={hubUrl}
        className="font-body text-sm font-medium text-accent-2 hover:underline"
      >
        Volver a Trastero
      </Link>
    </header>
  );
}
