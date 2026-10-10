"use client";

import type { MatchResult } from "@/lib/matching/engine";
import { buildAlternativeInsight } from "@/lib/matching/alternativeInsight";
import { en } from "@/lib/i18n/en";
import { ChampionArtwork } from "@/components/champions/ChampionArtwork";
import { getVisualFrame } from "@/data/champions/visualProfiles";

export function AlternativeMatches({ match }: { match: MatchResult }) {
  if (match.alternatives.length === 0) return null;

  const primary = match.primary.champion;

  return (
    <aside className="mt-16 border-t border-white/10 pt-10">
      <p className="type-chapter">{en.results.alsoClose}</p>
      <p className="mt-2 text-xs text-white/40">Near matches — not equal to your primary reading.</p>
      <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {match.alternatives.map((alt) => (
          <li
            key={alt.championId}
            className="overflow-hidden rounded-sm border border-white/[0.06] bg-white/[0.02]"
          >
            <ChampionArtwork
              src={alt.champion.imageUrl}
              mode="full"
              frame={getVisualFrame(alt.championId, "altThumb")}
              alt={alt.champion.name}
              className="w-full"
            />
            <div className="space-y-2 p-4">
              <p className="font-serif text-lg text-white/88">{alt.champion.name}</p>
              <p className="text-xs text-white/45">
                {alt.champion.region} · {alt.compatibility}%
              </p>
              <p className="text-sm leading-relaxed text-white/58">
                {buildAlternativeInsight(match.blendedVector, alt.champion, primary)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
