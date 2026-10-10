"use client";

import type { ReactNode } from "react";

export function CardCanvas({
  width,
  height,
  children,
  background,
}: {
  width: number;
  height: number;
  background: string;
  children: ReactNode;
}) {
  return (
    <div
      className="relative overflow-hidden text-[var(--sor-ivory)]"
      style={{ width, height, background, fontFamily: "var(--font-body), system-ui, sans-serif" }}
    >
      {children}
    </div>
  );
}

export function fitNameSize(name: string, base: number): number {
  if (name.length > 22) return base * 0.58;
  if (name.length > 16) return base * 0.72;
  if (name.length > 11) return base * 0.85;
  return base;
}
