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
      <h4 className="font-serif text-xl text-amber-100/85">{en.results.alsoClose}</h4>
      <p className="mt-1 text-xs text-white/40">Near matches, not equal to your primary reading.</p>
      <ul className="mt-6 space-y-8">
        {match.alternatives.map((alt) => (
          <li key={alt.championId} className="flex gap-4 opacity-90">
            <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-sm sm:h-24 sm:w-20">
              <ChampionArtwork
                src={alt.champion.imageUrl}
                frame={getVisualFrame(alt.championId, "altThumb")}
                alt={alt.champion.name}
                className="h-full w-full"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-serif text-lg text-white/88">{alt.champion.name}</p>
              <p className="text-xs text-white/45">
                {alt.champion.region} · {alt.compatibility}%
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/58">
                {buildAlternativeInsight(match.blendedVector, alt.champion, primary)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
