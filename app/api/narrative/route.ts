import { NextResponse } from "next/server";
import { getChampionById } from "@/data/champions";
import { narrativeRequestSchema } from "@/lib/validation/schemas";
import { generateOpenAINarrative } from "@/lib/ai/openaiNarrative";
import { buildFallbackNarrative } from "@/lib/lore/fallbackNarrative";
import { checkDailyAiBudget, checkRateLimit } from "@/lib/privacy/rateLimit";
import { computeMatch } from "@/lib/quiz/matchFromProgress";
import { PERSONALITY_DIMENSIONS } from "@/lib/matching/dimensions";

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for") ?? "local";
  return forwarded.split(",")[0]?.trim() || "local";
}

export async function POST(request: Request) {
  const rate = checkRateLimit(`narrative:${clientKey(request)}`, 8, 60_000);
  if (!rate.ok) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment." },
      { status: 429, headers: { "Retry-After": String(Math.ceil((rate.retryAfterMs ?? 60000) / 1000)) } },
    );
  }

  let json: unknown;
  try {
    const text = await request.text();
    if (text.length > 20_000) {
      return NextResponse.json({ error: "Payload too large" }, { status: 413 });
    }
    json = JSON.parse(text);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = narrativeRequestSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request", details: parsed.error.flatten() }, { status: 400 });
  }

  const body = parsed.data;
  const champion = getChampionById(body.championId);
  if (!champion) {
    return NextResponse.json({ error: "Unknown champion" }, { status: 404 });
  }

  const match = computeMatch(
    Object.fromEntries(body.answers.map((a) => [a.questionId, a.answerId])),
    body.zodiac,
  );

  const topDimensions = [...PERSONALITY_DIMENSIONS]
    .map((d) => ({ dimension: d, score: match.userVector[d] }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  const fallback = buildFallbackNarrative({
    champion,
    compatibility: body.compatibility,
    nickname: body.nickname,
    zodiac: body.zodiac,
    answers: body.answers,
    userVector: match.userVector,
  });

  const useAi = Boolean(process.env.OPENAI_API_KEY);
  if (!useAi) {
    return NextResponse.json({ source: "fallback", narrative: fallback });
  }

  const budget = checkDailyAiBudget();
  if (!budget.ok) {
    return NextResponse.json({ source: "fallback", narrative: fallback, notice: budget.reason });
  }

  try {
    const narrative = await generateOpenAINarrative(champion, {
      ...body,
      topDimensions,
    });
    return NextResponse.json({ source: "openai", narrative });
  } catch {
    return NextResponse.json({ source: "fallback", narrative: fallback });
  }
}
