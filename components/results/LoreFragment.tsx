"use client";

import type { ChampionResultTheme } from "@/data/champions/resultThemes";

const ROMAN = ["I", "II", "III", "IV", "V"] as const;

function fragmentEpigraph(summary: string): string {
  const words = summary.replace(/\s+/g, " ").trim().split(" ");
  if (words.length <= 6) return summary;
  return `${words.slice(0, 6).join(" ")}…`;
}

export function LoreFragment({
  index,
  userChoiceSummary,
  canonicalBeat,
  resonance,
  theme,
}: {
  index: number;
  userChoiceSummary: string;
  canonicalBeat: string;
  resonance: string;
  theme: ChampionResultTheme;
}) {
  const marker = ROMAN[index] ?? String(index + 1);
  const epigraph = fragmentEpigraph(userChoiceSummary);

  return (
    <article className="relative pl-6 sm:pl-8">
      <div
        className="absolute bottom-0 left-0 top-0 w-px"
        style={{
          background: `linear-gradient(180deg, transparent, ${theme.palette.accent}55, transparent)`,
        }}
        aria-hidden
      />
      <p
        className="font-serif text-[11px] tracking-[0.28em] text-[var(--chamber-accent)]/80"
        style={{ color: theme.palette.accent }}
      >
        Fragment {marker}
      </p>
      <h4 className="mt-3 font-serif text-[1.35rem] leading-snug text-[var(--sor-ivory)] sm:text-[1.55rem]">
        {epigraph}
      </h4>
      <p className="mt-5 text-sm leading-relaxed text-[var(--sor-ivory)]/65">{userChoiceSummary}</p>
      <p className="mt-6 font-serif text-[1.05rem] italic leading-relaxed text-white/65">
        {canonicalBeat}
      </p>
      <p className="type-body-narrative mt-6 text-[1.06rem] leading-[1.85]">
        {resonance}
      </p>
    </article>
  );
}
