import type { ReactNode } from "react";

export type StatusTone = "good" | "warn" | "danger" | "neutral";

export function StatusPill({ children, tone = "neutral" }: { children: ReactNode; tone?: StatusTone }) {
  return <span className={`pill pill-${tone}`}>{children}</span>;
}
