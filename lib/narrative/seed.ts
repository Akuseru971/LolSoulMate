/** Deterministic seed from questionnaire answer IDs (no PII). */
export function narrativeSeed(
  championId: string,
  answers: { questionId: string; answerId: string }[],
): string {
  const base = answers
    .map((a) => `${a.questionId}:${a.answerId}`)
    .sort()
    .join("|");
  return `${championId}#${base}`;
}

export function hashSeed(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function pickIndex(seed: string, salt: string, modulo: number): number {
  if (modulo <= 0) return 0;
  const h = hashSeed(`${seed}:${salt}`);
  return h % modulo;
}
