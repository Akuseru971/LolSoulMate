"use client";

import type { MatchResult } from "@/lib/matching/engine";
import { buildAlternativeInsight } from "@/lib/matching/alternativeInsight";
import { ChampionArtwork } from "@/components/champions/ChampionArtwork";
import { getVisualFrame } from "@/data/champions/visualProfiles";

export function AlternativeMatches({ match }: { match: MatchResult }) {
  if (match.alternatives.length === 0) return null;

  const primary = match.primary.champion;

  return (
    <aside className="mt-6">
      <h4 className="font-serif text-lg text-[var(--sor-ivory)]/88 sm:text-xl">
        Other paths your soul might have taken
      </h4>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {match.alternatives.map((alt) => (
          <li
            key={alt.championId}
            className="group overflow-hidden transition duration-300 hover:opacity-95"
          >
            <ChampionArtwork
              src={alt.champion.imageUrl}
              mode="full"
              frame={getVisualFrame(alt.championId, "altThumb")}
              alt={alt.champion.name}
              className="w-full opacity-85 transition group-hover:opacity-100"
            />
            <div className="mt-3 space-y-1 px-0.5">
              <p className="font-serif text-base text-white/82">{alt.champion.name}</p>
              <p className="text-xs text-white/42">
                {alt.champion.region} · {alt.compatibility}%
              </p>
              <p className="text-sm leading-relaxed text-white/52">
                {buildAlternativeInsight(match.blendedVector, alt.champion, primary)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
