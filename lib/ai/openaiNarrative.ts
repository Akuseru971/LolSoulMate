import OpenAI from "openai";
import type { ChampionProfile } from "@/data/champions/types";
import { getAnswerLabel, QUESTIONS } from "@/data/questions";
import {
  narrativeResponseSchema,
  type NarrativeRequest,
  type NarrativeResponse,
} from "@/lib/validation/schemas";

const SYSTEM = `You are a League of Legends lore expert writing for "Soul of Runeterra", an unofficial fan experience.
Rules:
- The champion match is FIXED; never suggest a different champion.
- Ground personality claims in the user's questionnaire answers provided.
- Parallels must cite specific user answers AND specific canonical lore beats from the champion profile.
- Never invent canon events; use only provided lore summaries and hooks.
- Do not quote in-game dialogue.
- Distinguish canon from interpretive comparison.
- Zodiac is symbolic at most; never primary.
- Output valid JSON matching the schema exactly.
- shareQuote: short poetic line for social card.
- definingTraits: exactly 3 short trait labels.`;

export async function generateOpenAINarrative(
  champion: ChampionProfile,
  body: NarrativeRequest,
): Promise<NarrativeResponse> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY not configured");
  }

  const client = new OpenAI({ apiKey, timeout: 25_000, maxRetries: 2 });

  const qa = body.answers.map((a) => {
    const q = QUESTIONS.find((x) => x.id === a.questionId);
    return {
      question: q?.text ?? a.questionId,
      answer: getAnswerLabel(a.questionId, a.answerId),
    };
  });

  const userPayload = {
    champion: {
      id: champion.id,
      name: champion.name,
      region: champion.region,
      title: champion.title,
      loreSummary: champion.loreSummary,
      loreHooks: champion.loreHooks,
      flaws: champion.flaws,
      strengths: champion.strengths,
      values: champion.values,
      motivations: champion.motivations,
    },
    fixedCompatibility: body.compatibility,
    nickname: body.nickname,
    zodiac: body.zodiac,
    personalityKeywords: body.personalityKeywords,
    questionnaire: qa,
    topDimensions: body.topDimensions,
  };

  const completion = await client.chat.completions.create({
    model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
    response_format: { type: "json_object" },
    max_tokens: 1800,
    messages: [
      { role: "system", content: SYSTEM },
      {
        role: "user",
        content: `Generate the narrative JSON for this match:\n${JSON.stringify(userPayload)}`,
      },
    ],
  });

  const raw = completion.choices[0]?.message?.content;
  if (!raw) throw new Error("Empty AI response");

  const parsed = JSON.parse(raw) as unknown;
  const validated = narrativeResponseSchema.safeParse(parsed);
  if (!validated.success) {
    throw new Error(`AI schema validation failed: ${validated.error.message}`);
  }

  validated.data.reveal.championName = champion.name;
  validated.data.reveal.region = champion.region;
  validated.data.reveal.compatibility = body.compatibility;

  return validated.data;
}
