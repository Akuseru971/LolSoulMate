import { describe, expect, it } from "vitest";
import { lintAllNarrativeEditorial } from "@/lib/narrative/editorialLint";
import { NARRATIVE_COMPLETE_IDS } from "@/data/narratives/packs/all";
import { QUESTIONS } from "@/data/questions";
import { computeMatch } from "@/lib/quiz/matchFromProgress";
import { composeNarrative } from "@/lib/narrative/composeNarrative";

describe("editorial lint", () => {
  it("has no banned patterns or near-duplicate intros across champions", () => {
    const issues = lintAllNarrativeEditorial();
    const errors = issues.filter((i) => i.level === "error");
    expect(errors).toEqual([]);
  });

  it("covers all narrative-complete champions with distinct packs", () => {
    expect(NARRATIVE_COMPLETE_IDS.size).toBe(25);
  });
});

describe("narrative quality profiles", () => {
  const profiles = [
    Object.fromEntries(QUESTIONS.map((q) => [q.id, "a"])),
    Object.fromEntries(QUESTIONS.map((q) => [q.id, "e"])),
    Object.fromEntries(QUESTIONS.map((q, i) => [q.id, q.answers[i % q.answers.length].id])),
    Object.fromEntries(QUESTIONS.map((q) => [q.id, q.answers[2]?.id ?? "c"])),
    Object.fromEntries(
      QUESTIONS.map((q) => [q.id, q.answers[q.answers.length - 1].id]),
    ),
  ];

  for (const id of NARRATIVE_COMPLETE_IDS) {
    it(`composes coherent result for ${id} across sample profiles`, () => {
      for (const answers of profiles) {
        const match = computeMatch(answers);
        if (match.primary.championId !== id) continue;
        const payload = QUESTIONS.map((q) => ({
          questionId: q.id,
          answerId: answers[q.id],
        }));
        const { narrative } = composeNarrative({ match, answers: payload });
        expect(narrative.destiny.length).toBeGreaterThan(20);
        expect(narrative.sharedSoul).not.toMatch(/[\u2014\u2013]/);
        const bodies = narrative.parallels.map((p) => p.resonance).join(" ");
        expect(bodies).not.toMatch(/Canonical lore:/i);
      }
    });
  }
});
