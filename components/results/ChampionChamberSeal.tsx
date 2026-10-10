"use client";

import type { ChampionResultTheme } from "@/data/champions/resultThemes";
import { SoulSeal } from "@/components/ornaments/SoulSeal";

/** Champion-flavored seal — original geometry, not official logos. */
export function ChampionChamberSeal({
  theme,
  size = 56,
  className = "",
}: {
  theme: ChampionResultTheme;
  size?: number;
  className?: string;
}) {
  const { motif, ornamentStyle } = theme.symbol;
  const color = theme.palette.accent;

  if (motif === "soul" || ornamentStyle === "circle") {
    return <SoulSeal size={size} className={`${className} text-[var(--chamber-accent)]`} />;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden
      style={{ color }}
    >
      <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="0.65" opacity="0.45" />
      {ornamentStyle === "diamond" && (
        <path
          d="M32 10 L42 32 L32 54 L22 32 Z"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.65"
        />
      )}
      {ornamentStyle === "blade" && (
        <>
          <path d="M32 12 L36 48 M32 12 L28 48" stroke="currentColor" strokeWidth="0.7" opacity="0.6" />
          <path d="M24 28 L40 28" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        </>
      )}
      {ornamentStyle === "feather" && (
        <path
          d="M32 14 Q40 32 32 50 Q24 32 32 14"
          stroke="currentColor"
          strokeWidth="0.65"
          opacity="0.55"
        />
      )}
      {ornamentStyle === "arc" && (
        <path
          d="M16 40 Q32 8 48 40"
          stroke="currentColor"
          strokeWidth="0.7"
          opacity="0.55"
        />
      )}
      {motif === "dual-moon" && (
        <circle cx="26" cy="30" r="6" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      )}
      {motif === "four" && (
        <>
          {[0, 90, 180, 270].map((deg) => (
            <line
              key={deg}
              x1="32"
              y1="32"
              x2={32 + 14 * Math.cos((deg * Math.PI) / 180)}
              y2={32 + 14 * Math.sin((deg * Math.PI) / 180)}
              stroke="currentColor"
              strokeWidth="0.55"
              opacity="0.45"
            />
          ))}
        </>
      )}
      <circle cx="32" cy="32" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
