"use client";

import { useMemo, useState } from "react";
import { getMatchableChampions } from "@/data/champions/matchable";
import { QUESTIONS } from "@/data/questions";
import { matchChampions } from "@/lib/matching/engine";
import { buildAnswerSelections } from "@/lib/quiz/matchFromProgress";
import { composeNarrative } from "@/lib/narrative/composeNarrative";
import { validateNarrativeContent } from "@/lib/narrative/validateContent";
import { getChampionCoverageStats } from "@/data/champions/matchable";

export function DevNarrativePreview() {
  const champions = getMatchableChampions();
  const [championId, setChampionId] = useState(champions[0]?.id ?? "irelia");
  const [pickMode, setPickMode] = useState<"first" | "last" | "mid">("mid");

  const answers = useMemo(() => {
    const out: Record<string, string> = {};
    QUESTIONS.forEach((q, i) => {
      const idx =
        pickMode === "first" ? 0 : pickMode === "last" ? q.answers.length - 1 : i % q.answers.length;
      out[q.id] = q.answers[idx].id;
    });
    return out;
  }, [pickMode]);

  const preview = useMemo(() => {
    const selections = buildAnswerSelections(answers);
    const allMatch = matchChampions(champions, { answers: selections });
    const forced = champions.find((c) => c.id === championId) ?? allMatch.primary.champion;
    const match = {
      ...allMatch,
      primary: {
        ...allMatch.primary,
        champion: forced,
        championId: forced.id,
      },
    };
    const payload = QUESTIONS.map((q) => ({
      questionId: q.id,
      answerId: answers[q.id],
    }));
    return composeNarrative({ match, answers: payload, nickname: "Preview" });
  }, [answers, championId, champions]);

  const validation = validateNarrativeContent();
  const stats = getChampionCoverageStats();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 text-white">
      <h1 className="font-serif text-3xl text-amber-100">Narrative dev preview</h1>
      <p className="mt-2 text-sm text-white/60">
        Not linked in production. Roster: {stats.complete} complete / {stats.total} total.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <select
          className="rounded-lg border border-white/20 bg-black/40 px-3 py-2"
          value={championId}
          onChange={(e) => setChampionId(e.target.value)}
        >
          {champions.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <select
          className="rounded-lg border border-white/20 bg-black/40 px-3 py-2"
          value={pickMode}
          onChange={(e) => setPickMode(e.target.value as "first" | "last" | "mid")}
        >
          <option value="mid">Varied answers</option>
          <option value="first">All first answers</option>
          <option value="last">All last answers</option>
        </select>
      </div>

      <section className="mt-8 space-y-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 text-sm">
        <h2 className="text-lg text-amber-200">Generated narrative</h2>
        <p>{preview.narrative.sharedSoul}</p>
        <p className="text-white/50">Seed: {preview.meta.seed}</p>
        <p className="text-white/50">
          Fragments: {preview.meta.selectedFragmentIds.join(", ")}
        </p>
        <ul className="list-disc pl-5 text-white/70">
          {preview.meta.influentialAnswers.map((a) => (
            <li key={a.questionId}>{a.label}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8 text-xs text-white/50">
        <h3 className="mb-2 text-white/70">Validation</h3>
        <ul>
          {validation.map((v, i) => (
            <li key={i}>
              [{v.level}] {v.message}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
