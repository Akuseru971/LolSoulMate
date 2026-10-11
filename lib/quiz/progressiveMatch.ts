import { getMatchableChampions } from "@/data/champions/matchable";
import type { ChampionProfile } from "@/data/champions/types";
import { QUESTIONS } from "@/data/questions";
import { matchChampions, type QuizAnswerSelection } from "@/lib/matching/engine";
import type { ZodiacSign } from "@/lib/zodiac";

export type ChampionArchetype = "Assassin" | "Mage" | "Fighter" | "Tank" | "Support" | "Marksman";
export type ChampionAlignment = "The Hero" | "The Antihero" | "The Villain";

const ARCHETYPES: Record<string, ChampionArchetype> = {
 kindred:"Marksman",ahri:"Mage",akali:"Assassin",ashe:"Marksman",azir:"Mage",braum:"Support",
 caitlyn:"Marksman",darius:"Fighter",diana:"Fighter",ekko:"Assassin",ezreal:"Marksman",fiora:"Fighter",
 garen:"Fighter",gwen:"Fighter",irelia:"Fighter",janna:"Support",jhin:"Marksman",jinx:"Marksman",
 karma:"Mage",kayn:"Assassin",leblanc:"Mage",leesin:"Fighter",leona:"Tank",lux:"Mage",
 missfortune:"Marksman",morgana:"Mage",nami:"Support",nasus:"Fighter",orianna:"Mage",pyke:"Assassin",
 riven:"Fighter",ryze:"Mage",senna:"Marksman",sett:"Fighter",shen:"Tank",sona:"Support",
 swain:"Mage",sylas:"Mage",taliyah:"Mage",thresh:"Support",viego:"Fighter",vi:"Fighter",
 viktor:"Mage",warwick:"Fighter",yasuo:"Fighter",yone:"Assassin",zed:"Assassin",aatrox:"Fighter"
};
const ALIGNMENTS: Record<string, ChampionAlignment> = {
 kindred:"The Antihero",ahri:"The Antihero",akali:"The Antihero",ashe:"The Hero",azir:"The Antihero",
 braum:"The Hero",caitlyn:"The Hero",darius:"The Antihero",diana:"The Antihero",ekko:"The Hero",
 ezreal:"The Hero",fiora:"The Antihero",garen:"The Hero",gwen:"The Hero",irelia:"The Hero",
 janna:"The Hero",jhin:"The Villain",jinx:"The Antihero",karma:"The Hero",kayn:"The Antihero",
 leblanc:"The Villain",leesin:"The Hero",leona:"The Hero",lux:"The Hero",missfortune:"The Antihero",
 morgana:"The Antihero",nami:"The Hero",nasus:"The Antihero",orianna:"The Hero",pyke:"The Antihero",
 riven:"The Antihero",ryze:"The Hero",senna:"The Hero",sett:"The Antihero",shen:"The Hero",
 sona:"The Hero",swain:"The Antihero",sylas:"The Antihero",taliyah:"The Hero",thresh:"The Villain",
 viego:"The Villain",vi:"The Hero",viktor:"The Antihero",warwick:"The Antihero",yasuo:"The Antihero",
 yone:"The Antihero",zed:"The Antihero",aatrox:"The Villain"
};
export function championArchetype(champion: ChampionProfile): ChampionArchetype {
 return ARCHETYPES[champion.id] ?? "Fighter";
}
export function championAlignment(champion: ChampionProfile): ChampionAlignment {
 return ALIGNMENTS[champion.id] ?? "The Antihero";
}
function selections(answers: Record<string,string>, count:number): QuizAnswerSelection[] {
 return QUESTIONS.slice(0,count).flatMap(q=>{
  const a=q.answers.find(a=>a.id===answers[q.id]);
  return a?[{questionId:q.id,answerId:a.id,weights:a.weights}]:[];
 });
}
export function progressiveMatch(answers:Record<string,string>,zodiac?:ZodiacSign|null,count=20) {
 const all=getMatchableChampions();
 // Every milestone is determined only by choices made at that point.
 const region=matchChampions(all,{answers:selections(answers,5),zodiac}).primary.champion.region;
 const inRegion=all.filter(c=>c.region===region);
 const role=championArchetype(matchChampions(inRegion,{answers:selections(answers,10),zodiac}).primary.champion);
 const inRole=inRegion.filter(c=>championArchetype(c)===role);
 const moral=championAlignment(matchChampions(inRole,{answers:selections(answers,15),zodiac}).primary.champion);
 const eligible=inRole.filter(c=>championAlignment(c)===moral);
 const candidates=count<=5?inRegion:count<=10?inRole:eligible;
 return { region, role, moral, result:matchChampions(candidates,{answers:selections(answers,count),zodiac}) };
}
