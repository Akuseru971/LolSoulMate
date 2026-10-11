"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Compass, Swords, Scale, ArrowRight } from "lucide-react";
import { QUESTIONS } from "@/data/questions";
import { getMatchableChampions } from "@/data/champions/matchable";
import { matchChampions } from "@/lib/matching/engine";
import type { ZodiacSign } from "@/lib/zodiac";
import type { PersonalityVector } from "@/lib/matching/dimensions";

export type CheckpointCount = 5 | 10 | 15;

function classifyArchetype(v: PersonalityVector): string {
  const options = [
    { label: "Assassin", score: v.independence + v.impulsivity + v.desireForFreedom + v.moralFlexibility },
    { label: "Mage", score: v.relationshipWithDestiny + v.emotionalSensitivity + v.idealism + v.desireForPower },
    { label: "Fighter", score: v.courage + v.resilience + v.ambition + v.independence },
    { label: "Tank", score: v.protectiveInstinct + v.discipline + v.loyalty + v.resilience },
    { label: "Support", score: v.empathy + v.socialConnection + v.capacityForSacrifice + v.protectiveInstinct },
    { label: "Strategist", score: v.pragmatism + v.discipline + v.relationshipWithAuthority + v.ambition },
  ];
  return options.sort((a,b) => b.score - a.score)[0].label;
}

function alignment(v: PersonalityVector): string {
  const heroic = v.empathy + v.protectiveInstinct + v.idealism + v.capacityForSacrifice + v.loyalty;
  const ruthless = v.moralFlexibility + v.desireForPower + v.ambition + v.pragmatism + v.needForRecognition;
  if (Math.abs(heroic - ruthless) < 0.32) return "The Antihero";
  return heroic > ruthless ? "The Hero" : "The Villain";
}

export function CheckpointReveal({ count, answers, zodiac, onContinue }: {
  count: CheckpointCount;
  answers: Record<string, string>;
  zodiac?: ZodiacSign | null;
  onContinue: () => void;
}) {
  const reduce = useReducedMotion();
  const selections = QUESTIONS.slice(0,count).flatMap(q => {
    const answer = q.answers.find(a => a.id === answers[q.id]);
    return answer ? [{ questionId:q.id, answerId:answer.id, weights:answer.weights }] : [];
  });
  const result = matchChampions(getMatchableChampions(), {answers:selections, zodiac});
  const label = count === 5 ? result.primary.champion.region : count === 10 ? classifyArchetype(result.blendedVector) : alignment(result.blendedVector);
  const typeLabel = count === 5 ? "THE LAND THAT CALLS YOU" : count === 10 ? "THE PATH OF YOUR POWER" : "HOW LEGENDS MAY SEE YOU";
  const description = count === 5
    ? "Your first choices echo through a corner of Runeterra. The path is taking shape."
    : count === 10
      ? "A fighting spirit has emerged from your choices. Its true form is still unfolding."
      : "Every legend looks different depending on who tells the story. Your final identity lies ahead.";
  const Icon = count === 5 ? Compass : count === 10 ? Swords : Scale;
  return (
    <section className="relative mx-auto flex min-h-[calc(100dvh-7rem)] w-full max-w-3xl flex-col items-center justify-center px-5 py-16 text-center">
      <motion.div initial={reduce ? false : {opacity:0, scale:0.8, rotate:-15}} animate={{opacity:1, scale:1, rotate:0}} transition={{duration:1.1, ease:[0.19,1,0.22,1]}}
        className="relative mb-10 flex h-28 w-28 items-center justify-center rounded-full border border-amber-200/25 bg-amber-300/[0.045]">
        <div className="absolute inset-3 rounded-full border border-amber-200/15" />
        <Icon className="h-10 w-10 text-amber-200/85" strokeWidth={1.1} />
        {!reduce && <motion.div aria-hidden className="pointer-events-none absolute -inset-8 rounded-full border border-amber-200/10"
          animate={{rotate:360, opacity:[0.2,0.7,0.2]}} transition={{rotate:{duration:45,repeat:Infinity,ease:"linear"},opacity:{duration:5,repeat:Infinity}}}/>}
      </motion.div>
      <motion.p initial={reduce ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.8}}
        className="text-[11px] uppercase tracking-[0.38em] text-amber-200/75">REVELATION {count / 5} · {count} OF 20</motion.p>
      <motion.p initial={reduce ? false : {opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:0.42,duration:0.85}}
        className="mt-7 text-xs uppercase tracking-[0.27em] text-white/60">{typeLabel}</motion.p>
      <motion.h2 initial={reduce ? false : {opacity:0,y:26,filter:"blur(9px)"}} animate={{opacity:1,y:0,filter:"blur(0px)"}}
        transition={{delay:0.65,duration:1.25,ease:[0.19,1,0.22,1]}}
        className="mt-5 font-serif text-[clamp(3rem,9vw,6rem)] leading-[1.06] text-[#F2E6D4]">{label}</motion.h2>
      <motion.p initial={reduce ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.95,duration:0.8}}
        className="mx-auto mt-8 max-w-lg text-base leading-[1.85] text-white/70">{description}</motion.p>
      <p className="mt-4 text-xs italic text-white/40">A glimpse, not a final verdict. Your remaining choices may change the path.</p>
      <motion.button initial={reduce ? false : {opacity:0}} animate={{opacity:1}} transition={{delay:1.2,duration:0.7}}
        type="button" onClick={onContinue}
        className="mt-12 inline-flex min-h-12 items-center gap-3 rounded-full border border-amber-200/40 bg-amber-200/10 px-8 py-3 font-serif text-lg text-amber-100 transition hover:border-amber-200/80 hover:bg-amber-200/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200">
        Continue the ritual <ArrowRight className="h-5 w-5" />
      </motion.button>
    </section>
  );
}
