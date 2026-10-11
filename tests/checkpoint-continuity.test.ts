import { describe, expect, it } from "vitest";
import { QUESTIONS } from "@/data/questions";
import { progressiveMatch, championAlignment, championArchetype } from "@/lib/quiz/progressiveMatch";
import { defaultProgress, validateStoredProgress } from "@/lib/quiz/storage";

describe("checkpoint continuity", () => {
  it("restores a saved five-question reveal", () => {
    const answers = Object.fromEntries(QUESTIONS.slice(0,5).map(q=>[q.id,q.answers[0].id]));
    const progress = { ...defaultProgress(), stage:"quiz" as const, answers, quizIndex:4, pendingCheckpoint:5 as const };
    expect(validateStoredProgress(progress)).toBeNull();
    expect(validateStoredProgress({...progress,pendingCheckpoint:10 as const})).toBe("corrupt");
  });
  it("keeps the final match consistent with all three checkpoints across varied answers", () => {
    for(let seed=0; seed<25; seed++){
      const answers = Object.fromEntries(QUESTIONS.map((q,i)=>[q.id,q.answers[(seed*3+i*7)%q.answers.length].id]));
      const at5=progressiveMatch(answers,null,5);
      const at10=progressiveMatch(answers,null,10);
      const at15=progressiveMatch(answers,null,15);
      const final=progressiveMatch(answers,null,20).result.primary.champion;
      expect(at5.region).toBe(at10.region);
      expect(at10.region).toBe(at15.region);
      expect(final.region).toBe(at5.region);
      expect(championArchetype(final)).toBe(at10.role);
      expect(championAlignment(final)).toBe(at15.moral);
    }
  });
});
