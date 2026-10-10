import { z } from "zod";
import { ZODIAC_SIGNS } from "@/lib/zodiac";

export const personalInfoSchema = z.object({
  nickname: z.string().trim().max(40).optional(),
  birthMonth: z.number().int().min(1).max(12).optional(),
  birthDay: z.number().int().min(1).max(31).optional(),
  zodiac: z.enum(ZODIAC_SIGNS).optional(),
  personalityKeywords: z.string().trim().max(200).optional(),
});

export const quizAnswerSchema = z.object({
  questionId: z.string().min(1).max(8),
  answerId: z.string().min(1).max(8),
});

export const narrativeResponseSchema = z.object({
  reveal: z.object({
    championName: z.string(),
    region: z.string(),
    compatibility: z.number(),
    oneLiner: z.string().max(280),
  }),
  sharedSoul: z.string().max(4000),
  parallels: z
    .array(
      z.object({
        userChoiceSummary: z.string().max(500),
        canonicalBeat: z.string().max(800),
        resonance: z.string().max(800),
      }),
    )
    .min(3)
    .max(5),
  shadowWithin: z.string().max(2000),
  greatestStrength: z.string().max(1500),
  destiny: z.string().min(40).max(600),
  shareQuote: z.string().max(220),
  definingTraits: z.array(z.string().max(40)).min(3).max(3),
});

export type NarrativeResponse = z.infer<typeof narrativeResponseSchema>;

export const shareCreateSchema = z.object({
  championId: z.string().min(1).max(64),
  compatibility: z.number().min(0).max(100),
  definingTraits: z.array(z.string()).min(3).max(3),
  shareQuote: z.string().max(220),
});
