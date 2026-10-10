"use client";

import { useState } from "react";
import { getMatchableChampions } from "@/data/champions/matchable";
import { allVisualProfiles, getVisualProfile } from "@/data/champions/visualProfiles";
import type { ArtworkDisplayMode, VisualContextKey } from "@/lib/champions/visualTypes";
import { ChampionArtwork } from "@/components/champions/ChampionArtwork";

const CONTEXTS: { key: VisualContextKey; label: string; aspect: string }[] = [
  { key: "revealMobile", label: "Mobile reveal", aspect: "16 / 9" },
  { key: "revealDesktop", label: "Desktop reveal", aspect: "16 / 9" },
  { key: "result", label: "Result artwork", aspect: "16 / 9" },
  { key: "shareCinematic", label: "Cinematic export", aspect: "16 / 9" },
  { key: "shareStory", label: "Story card", aspect: "16 / 9" },
  { key: "sharePortrait", label: "Portrait card", aspect: "16 / 9" },
  { key: "shareSquare", label: "Square card", aspect: "16 / 9" },
  { key: "altThumb", label: "Alt match", aspect: "16 / 9" },
];

function FramingPreview({
  championId,
  context,
}: {
  championId: string;
  context: VisualContextKey;
}) {
  const champs = getMatchableChampions();
  const champion = champs.find((c) => c.id === championId) ?? champs[0];
  const profile = getVisualProfile(championId);
  const frame = profile[context];
  const [mode, setMode] = useState<ArtworkDisplayMode>("full");
  const [focalX, setFocalX] = useState(frame.focalX);
  const [focalY, setFocalY] = useState(frame.focalY);
  const [scale, setScale] = useState(frame.scale);
  const ctxMeta = CONTEXTS.find((c) => c.key === context)!;
  const cropControls = mode === "artisticCrop";

  if (!champion) return null;

  return (
    <div className="grid gap-8 lg:col-span-2 lg:grid-cols-2">
      <div
        className="relative mx-auto w-full max-w-sm overflow-hidden rounded-lg border border-white/15 lg:mx-0"
        style={{ aspectRatio: ctxMeta.aspect }}
      >
        <ChampionArtwork
          src={champion.imageUrl}
          mode={mode}
          frame={{ focalX, focalY, scale }}
          aspectRatio={ctxMeta.aspect}
          alt={champion.name}
          className="h-full w-full"
        />
      </div>

      <div className="space-y-4 text-sm">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setMode("full")}
            className={`rounded-full px-3 py-1.5 ${mode === "full" ? "bg-amber-500/20 text-amber-100" : "border border-white/15"}`}
          >
            Full artwork
          </button>
          <button
            type="button"
            onClick={() => setMode("artisticCrop")}
            className={`rounded-full px-3 py-1.5 ${mode === "artisticCrop" ? "bg-amber-500/20 text-amber-100" : "border border-white/15"}`}
          >
            Artistic crop
          </button>
        </div>
        {!cropControls && (
          <p className="text-xs text-white/45">
            Full mode ignores focal presets — switch to artistic crop to tune cover framing.
          </p>
        )}
        <label className={`block ${cropControls ? "" : "pointer-events-none opacity-40"}`}>
          focalX {focalX.toFixed(0)}
          <input
            type="range"
            min={0}
            max={100}
            value={focalX}
            onChange={(e) => setFocalX(Number(e.target.value))}
            className="w-full"
          />
        </label>
        <label className={`block ${cropControls ? "" : "pointer-events-none opacity-40"}`}>
          focalY {focalY.toFixed(0)}
          <input
            type="range"
            min={0}
            max={100}
            value={focalY}
            onChange={(e) => setFocalY(Number(e.target.value))}
            className="w-full"
          />
        </label>
        <label className={`block ${cropControls ? "" : "pointer-events-none opacity-40"}`}>
          scale {scale.toFixed(2)}
          <input
            type="range"
            min={1}
            max={2.4}
            step={0.01}
            value={scale}
            onChange={(e) => setScale(Number(e.target.value))}
            className="w-full"
          />
        </label>
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            type="button"
            onClick={() =>
              void navigator.clipboard.writeText(
                `${context}: { focalX: ${focalX.toFixed(1)}, focalY: ${focalY.toFixed(1)}, scale: ${scale.toFixed(2)} }`,
              )
            }
            className="rounded-full border border-white/20 px-4 py-2"
          >
            Copy snippet
          </button>
        </div>
        <p className="text-xs text-white/40">
          Profile verified: {profile.verified ? "yes" : "no (needs manual QA)"}
        </p>
      </div>
    </div>
  );
}

export function ChampionFramingDev() {
  const champs = getMatchableChampions();
  const [championId, setChampionId] = useState(champs[0]?.id ?? "irelia");
  const [context, setContext] = useState<VisualContextKey>("revealMobile");

  const exportJson = () => {
    const payload = allVisualProfiles().map((p) => ({
      championId: p.championId,
      verified: p.verified,
      ...CONTEXTS.reduce(
        (acc, c) => {
          acc[c.key] = p[c.key];
          return acc;
        },
        {} as Record<string, unknown>,
      ),
    }));
    void navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 text-white">
      <h1 className="font-serif text-3xl text-amber-100">Champion framing editor</h1>
      <p className="mt-2 text-sm text-white/50">
        Dev-only. Tune focalX/focalY (0–100) and scale, then copy values into{" "}
        <code className="text-amber-200/80">data/champions/visualProfiles.ts</code>.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <select
          className="rounded-lg border border-white/20 bg-black/40 px-3 py-2"
          value={championId}
          onChange={(e) => setChampionId(e.target.value)}
        >
          {champs.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <select
          className="rounded-lg border border-white/20 bg-black/40 px-3 py-2"
          value={context}
          onChange={(e) => setContext(e.target.value as VisualContextKey)}
        >
          {CONTEXTS.map((c) => (
            <option key={c.key} value={c.key}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <button
          type="button"
          onClick={exportJson}
          className="rounded-full border border-amber-500/40 px-4 py-2 text-sm text-amber-100"
        >
          Export all JSON
        </button>
      </div>

      <div key={`${championId}-${context}`} className="mt-8">
        <FramingPreview championId={championId} context={context} />
      </div>
    </div>
  );
}
