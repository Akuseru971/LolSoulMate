"use client";

import type { ChampionResultTheme } from "@/data/champions/resultThemes";
import { EchoMark } from "@/components/ornaments/EchoMark";

export function InnerTruth({
  strength,
  shadow,
  theme,
}: {
  strength: string;
  shadow: string;
  theme: ChampionResultTheme;
}) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 sm:block">
        <div
          className="h-full w-full"
          style={{
            background: `linear-gradient(180deg, transparent, ${theme.palette.accent}44, transparent)`,
          }}
        />
        <span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ color: theme.palette.accent }}
        >
          <EchoMark size={22} />
        </span>
      </div>
      <div className="grid gap-12 sm:grid-cols-2 sm:gap-16">
        <div className="sm:pr-8">
          <p className="font-serif text-sm text-[var(--sor-ivory)]/90">What carries you</p>
          <p className="type-body-narrative mt-5">{strength}</p>
        </div>
        <div className="sm:pl-8">
          <p className="font-serif text-sm text-white/65">What you wrestle with</p>
          <p className="type-body-narrative mt-5 text-white/72">{shadow}</p>
        </div>
      </div>
    </div>
  );
}
