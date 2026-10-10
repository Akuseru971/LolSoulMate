import type { ChampionProfile } from "@/data/champions/types";
import { getAnswerLabel } from "@/data/questions";
import type { NarrativeResponse } from "@/lib/validation/schemas";
import type { PersonalityVector } from "@/lib/matching/dimensions";
import { PERSONALITY_DIMENSIONS } from "@/lib/matching/dimensions";
import type { ZodiacSign } from "@/lib/zodiac";
import { ZODIAC_LABELS } from "@/lib/zodiac";

function topDimensions(
  vector: PersonalityVector,
  count = 3,
): { label: string; key: string }[] {
  const labels: Record<string, string> = {
    ambition: "Ambition",
    empathy: "Empathy",
    independence: "Independence",
    loyalty: "Loyalty",
    discipline: "Discipline",
    impulsivity: "Restless fire",
    idealism: "Idealism",
    pragmatism: "Pragmatism",
    emotionalOpenness: "Emotional honesty",
    resilience: "Resilience",
    desireForRecognition: "Need to be seen",
    protectiveInstinct: "Protective instinct",
    leadershipTendency: "Leadership",
    moralFlexibility: "Moral flexibility",
    needForControl: "Need for control",
    relationshipWithDestiny: "Sense of destiny",
  };
  return [...PERSONALITY_DIMENSIONS]
    .map((d) => ({ key: d, score: vector[d], label: labels[d] ?? d }))
    .sort((a, b) => b.score - a.score)
    .slice(0, count);
}

export interface FallbackInput {
  champion: ChampionProfile;
  compatibility: number;
  nickname?: string;
  zodiac?: ZodiacSign;
  answers: { questionId: string; answerId: string }[];
  userVector: PersonalityVector;
}

export function buildFallbackNarrative(input: FallbackInput): NarrativeResponse {
  const { champion, compatibility, nickname, zodiac, answers, userVector } =
    input;
  const name = nickname?.trim() || "Traveler";
  const traits = topDimensions(userVector).map((t) => t.label);

  const picked = answers.slice(0, 5).map((a) => ({
    q: a.questionId,
    text: getAnswerLabel(a.questionId, a.answerId),
  }));

  const hooks = champion.loreHooks.length
    ? champion.loreHooks
    : [
        {
          theme: "Conviction",
          canonicalBeat: champion.loreSummary,
        },
      ];

  const parallels = picked.slice(0, 4).map((choice, i) => {
    const hook = hooks[i % hooks.length];
    return {
      userChoiceSummary: `You indicated: "${choice.text}"`,
      canonicalBeat: hook.canonicalBeat,
      resonance: `${name}, this mirrors ${champion.name}'s lore around ${hook.theme.toLowerCase()}: not because you lived the same events, but because you weigh choices with a similar gravity—responsibility over comfort, and meaning over noise.`,
    };
  });

  const zodiacLine = zodiac
    ? ` Your chosen zodiac (${ZODIAC_LABELS[zodiac]}) adds a symbolic layer only—it never overrides who you revealed in your answers.`
    : "";

  return {
    reveal: {
      championName: champion.name,
      region: champion.region,
      compatibility,
      oneLiner: `${champion.title} walks paths where ${traits[0].toLowerCase()} and ${traits[1].toLowerCase()} collide.`,
    },
    sharedSoul: `${name}, your answers sketch a soul shaped by ${traits.join(", ").toLowerCase()}. That pattern aligns with ${champion.name} of ${champion.region}: ${champion.loreSummary} Where others see a quiz score, we see a resonance—your repeated emphasis on "${picked[0]?.text ?? "conviction"}" and "${picked[1]?.text ?? "loyalty"}" echoes how ${champion.name} is written in official lore: ${champion.developmentThemes[0] ?? "a story of conflict between duty and desire"}.${zodiacLine}`,
    parallels,
    shadowWithin: `Every legend casts a shadow. Your match suggests you may struggle with ${champion.flaws[0]?.toLowerCase() ?? "the cost of your own standards"} when pressure rises—much as ${champion.name} carries ${champion.emotionalVulnerabilities[0]?.toLowerCase() ?? "canonical inner conflict"}. This is not a diagnosis; it is a mirror for storytelling.`,
    greatestStrength: `Your defining strength appears to be ${traits[0].toLowerCase()}. ${champion.name}'s canon celebrates a comparable quality: ${champion.strengths[0] ?? "the ability to endure and choose again"}.`,
    destiny:
      "Destiny does not always choose the loudest soul. Sometimes it chooses the one who keeps standing when the world asks them to disappear. Between what you have survived and what you still refuse to surrender, your legend is being written—one choice at a time, in the quiet language of Runeterra.",
    shareQuote: `"My soul echoes ${champion.name}—${traits[0].toLowerCase()}, ${traits[1].toLowerCase()}, and unbroken intent."`,
    definingTraits: traits,
  };
}
