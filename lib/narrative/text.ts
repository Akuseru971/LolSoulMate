/** Join sentences without mid-sentence truncation. */
export function joinSentences(parts: string[], maxSentences = 6): string {
  const cleaned = parts
    .map((p) => p.trim())
    .filter(Boolean)
    .flatMap((p) => p.match(/[^.!?]+[.!?]+|[^.!?]+$/g) ?? [p]);
  return cleaned.slice(0, maxSentences).join(" ").trim();
}

export function limitSentences(text: string, maxSentences: number): string {
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) ?? [text];
  return sentences.slice(0, maxSentences).join(" ").trim();
}

export function firstSentence(text: string): string {
  const m = text.match(/^[^.!?]+[.!?]/);
  return m ? m[0].trim() : text.split(/\s+/).slice(0, 18).join(" ") + ".";
}
