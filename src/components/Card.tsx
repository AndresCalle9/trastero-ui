import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-black/10 bg-white p-6 shadow-sm",
        className
      )}
      {...props}
    />
  );
}
