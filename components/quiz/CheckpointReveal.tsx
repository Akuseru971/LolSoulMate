"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Compass, Swords, Scale, ArrowRight } from "lucide-react";
import { CheckpointSigil } from "./CheckpointSigil";

import { progressiveMatch } from "@/lib/quiz/progressiveMatch";

import type { ZodiacSign } from "@/lib/zodiac";



const REGION_SCENES: Record<string, { sky: string; glow: string; terrain: string; motif: "temple" | "citadel" | "mountain" | "desert" | "sea" | "city" | "ruins" | "jungle" | "cosmos" }> = {
  ionia: { sky:"#261f45",glow:"#dc97cd",terrain:"#273e4d",motif:"temple" },
  noxus: { sky:"#25121e",glow:"#d17662",terrain:"#231e31",motif:"citadel" },
  demacia: { sky:"#28374c",glow:"#f0d3a0",terrain:"#465168",motif:"citadel" },
  freljord: { sky:"#152b45",glow:"#a9e8f3",terrain:"#324d68",motif:"mountain" },
  shurima: { sky:"#49304a",glow:"#f5b66c",terrain:"#805a53",motif:"desert" },
  "shadow-isles": { sky:"#091c23",glow:"#68c3a1",terrain:"#142c2c",motif:"ruins" },
  targon: { sky:"#171837",glow:"#c1b2ff",terrain:"#343552",motif:"cosmos" },
  bilgewater: { sky:"#16253c",glow:"#ecb278",terrain:"#153749",motif:"sea" },
  piltover: { sky:"#233c56",glow:"#f3bc7b",terrain:"#314555",motif:"city" },
  zaun: { sky:"#142d2f",glow:"#a0dd8b",terrain:"#18363b",motif:"city" },
  ixtal: { sky:"#11352d",glow:"#a4df9e",terrain:"#1a4a3d",motif:"jungle" },
  "the-void": { sky:"#201332",glow:"#ac79e8",terrain:"#271a43",motif:"ruins" },
  void: { sky:"#201332",glow:"#ac79e8",terrain:"#271a43",motif:"ruins" },
  "bandle-city": { sky:"#253c50",glow:"#c9c1ff",terrain:"#385852",motif:"jungle" },
  runeterra: { sky:"#192b3d",glow:"#aac9d7",terrain:"#293c4b",motif:"mountain" },
};
const REGION_ART: Record<string, string> = {
  ionia: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/universe_live/5b2f763df14096727e8b38405392126034ab9899-1920x888.jpg",
  noxus: "https://media.esports.gg/uploads/2024/07/noxus_splash-1568x882.jpg",
  demacia: "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e8/Demacia_Hall_Of_Valor.jpg/revision/latest?cb=20190415152320",
  freljord: "https://pbs.twimg.com/media/FPL_9AXXwAEjyAH.jpg",
  shurima: "https://cdn.wallpapersafari.com/39/2/oSq7XC.png",
  "shadow-isles": "https://i.pinimg.com/originals/24/de/49/24de4981e702f5c953d8db7617aa0740.jpg",
  targon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/universe/df7b47a1c0aee886ffc9fcf263e0b7c810f9fac8-1920x1067.jpg",
  bilgewater: "https://cdn.exp.gg/2018/05/bilgewater.jpg",
  piltover: "https://uploads.worldanvil.com/uploads/images/392df19351e2411cf9155da6eeebfe39.jpg",
  zaun: "https://prod.assets.earlygamecdn.com/images/Zaun-underground.jpeg",
  ixtal: "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/db/Ixtal_An_Unexplored_Frontier.jpg/revision/latest?cb=20190610205709",
  "bandle-city": "https://wa-cdn.nyc3.cdn.digitaloceanspaces.com/user-data/production/3d60da4a-6429-4f3c-b833-a6f5db4a3916/uploads/images/bb5be4ce47c8ce5db3b9ac2222bfef79.jpeg",
  void: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/universe_live/0201dc831ca0c28855514831cbe1cc5f825f20f8-1920x839.jpg",
};
function RegionArtwork({ region }: {region:string}) {
  const key = region.toLowerCase().replace(/^the\\s+/,"").replace(/[^a-z0-9]+/g,"-").replace(/-$/,"");
  const src = REGION_ART[key] ?? REGION_ART.ionia;
  return <div className="relative aspect-video w-full overflow-hidden">
    <div className="absolute inset-0"><RegionLandscape region={region}/></div>
    {/* Original regional environment artwork; the illustrated backdrop remains if loading fails. */}
    <img src={src} alt={`Landscape of ${region}`} loading="eager" referrerPolicy="no-referrer"
      className="absolute inset-0 h-full w-full object-cover" onError={e => { e.currentTarget.style.display = "none"; }} />
  </div>;
}
function RegionLandscape({ region }: {region:string}) {
  const key = region.toLowerCase().replace(/^the\s+/,"").replace(/[^a-z0-9]+/g,"-").replace(/-$/,"");
  const scene = REGION_SCENES[key] ?? REGION_SCENES.runeterra;
  const {sky,glow,terrain,motif}=scene;
  return (
    <svg viewBox="0 0 960 540" role="img" aria-label={`Landscape of ${region}`} className="block h-auto w-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="region-sky" x1="0" y1="0" x2="0" y2="1"><stop stopColor={sky}/><stop offset="1" stopColor={terrain}/></linearGradient>
        <radialGradient id="region-light"><stop stopColor={glow} stopOpacity=".66"/><stop offset="1" stopColor={glow} stopOpacity="0"/></radialGradient>
        <linearGradient id="region-foreground" x1="0" y1="0" x2="0" y2="1"><stop stopColor={terrain}/><stop offset="1" stopColor="#070d19"/></linearGradient>
      </defs>
      <rect width="960" height="540" fill="url(#region-sky)"/>
      <ellipse cx="580" cy="195" rx="420" ry="290" fill="url(#region-light)"/>
      <circle cx="700" cy="132" r={motif==="cosmos"?53:28} fill={glow} opacity=".53"/>
      <path d="M0 365 120 282 208 339 333 205 457 315 610 235 748 340 843 272 960 325V540H0Z" fill={terrain} opacity=".55"/>
      <path d="M0 421 128 355 245 401 390 288 523 406 656 313 805 382 960 322V540H0Z" fill="url(#region-foreground)" opacity=".77"/>
      {motif==="temple"&&<g fill="#1d2838"><path d="M360 398V282h235v116H360Z"/><path d="m327 281 150-99 151 99H327Z"/><path d="M404 249v-46h145v46" fill="#31394a"/><path d="M445 398V306h59v92" fill="#0b1424"/><path d="M340 313h269" stroke={glow} strokeOpacity=".4" strokeWidth="3"/></g>}
      {motif==="citadel"&&<g fill="#151d2b"><path d="M337 423V262l47-55 48 55v161ZM419 422V184l55-91 56 91v238ZM519 422V264l56-61 49 61v158Z"/><path d="M290 423V343h375v80" /><path d="M453 91V56h38v35" fill={glow} opacity=".38"/></g>}
      {motif==="mountain"&&<g><path d="m143 462 239-314 210 314Z" fill="#799aad" opacity=".45"/><path d="m256 313 126-165 117 175-115-70Z" fill="#d5edf0" opacity=".75"/><path d="m453 457 225-254 205 254Z" fill="#506c83"/><path d="m574 325 104-122 111 139-112-62Z" fill="#e2f3f2" opacity=".75"/></g>}
      {motif==="desert"&&<g><path d="M0 453Q210 330 415 420T960 382V540H0Z" fill="#b88765" opacity=".45"/><path d="m365 382 114-230 122 230Z" fill="#6b4a48"/><path d="m407 300 72-148 78 148Z" fill="#d7aa7c" opacity=".6"/></g>}
      {motif==="sea"&&<g><path d="M0 398q90-18 180 0t180 0 180 0 180 0 240 0V540H0Z" fill="#163748"/><path d="M410 406V204h18v202M411 212l-120 134h120ZM440 230l123 118H440Z" fill="#141e2c"/><path d="m268 408 70 57h255l88-57" fill="#171d28"/></g>}
      {motif==="city"&&<g fill="#192a37"><path d="M280 435V300h70V242h48v193ZM405 435V180h74v255ZM485 435V263h62v172ZM552 435V217h91v218Z"/><path d="M430 177V115h24v62" stroke={glow} strokeWidth="4"/><path d="M305 325h23M431 225h25M582 255h25" stroke={glow} opacity=".7" strokeWidth="7"/></g>}
      {motif==="ruins"&&<g fill="#13242c"><path d="M328 430V241h52v189M436 430V174h55v256M558 430V223h48v207"/><path d="M297 240h114v20H297ZM413 171h103v21H413ZM533 218h100v22H533Z"/><path d="M355 231q90-85 202 0" fill="none" stroke={glow} strokeOpacity=".35" strokeWidth="9"/></g>}
      {motif==="jungle"&&<g fill="#092b2b"><path d="M70 470V258m0 0-70-53m70 53 103-89M860 470V222m0 0-106-73m106 73 85-99" stroke="#102b2e" strokeWidth="24"/><circle cx="85" cy="206" r="130"/><circle cx="880" cy="170" r="160"/><path d="m377 445 107-191 110 191Z" fill="#1a4d43"/></g>}
      {motif==="cosmos"&&<g><path d="m320 453 172-341 156 341Z" fill="#4b4b7a"/><path d="m430 250 62-138 60 137-60-54Z" fill="#dcd8f9" opacity=".66"/>{Array.from({length:24},(_,i)=><circle key={i} cx={(i*157+47)%950} cy={(i*83+31)%340} r={i%4===0?2:1} fill="#f5eaff" opacity=".75"/>)}</g>}
      <path d="M0 475Q260 421 480 476T960 447V540H0Z" fill="#080f18" opacity=".55"/>
      <rect x="0.5" y="0.5" width="959" height="539" fill="none" stroke={glow} strokeOpacity=".2"/>
    </svg>
  );
}

export type CheckpointCount = 5 | 10 | 15;

export function CheckpointReveal({ count, answers, zodiac, onContinue }: {
  count: CheckpointCount;
  answers: Record<string, string>;
  zodiac?: ZodiacSign | null;
  onContinue: () => void;
}) {
  const reduce = useReducedMotion();
  const { region, role, moral } = progressiveMatch(answers, zodiac, count);
  const label = count === 5 ? region : count === 10 ? role : moral;
  const typeLabel = count === 5 ? "THE LAND THAT CALLS YOU" : count === 10 ? "THE PATH OF YOUR POWER" : "HOW LEGENDS MAY SEE YOU";
  const description = count === 5
    ? "Your first choices echo through a corner of Runeterra. The path is taking shape."
    : count === 10
      ? "A fighting spirit has emerged from your choices. Its true form is still unfolding."
      : "Every legend looks different depending on who tells the story. Your final identity lies ahead.";
  const Icon = count === 5 ? Compass : count === 10 ? Swords : Scale;
  return (
    <section className="relative mx-auto flex min-h-[100svh] w-full max-w-[560px] flex-col items-center justify-center px-5 pb-[calc(36px+env(safe-area-inset-bottom))] pt-10 text-center">
      <motion.div initial={reduce ? false : {opacity:0, scale:0.8, rotate:-15}} animate={{opacity:1, scale:1, rotate:0}} transition={{duration:1.1, ease:[0.19,1,0.22,1]}}
        className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-amber-200/25 bg-amber-300/[0.045]">
        <div className="absolute inset-3 rounded-full border border-amber-200/15" />
        <Icon className="h-8 w-8 text-amber-200/85" strokeWidth={1.1} />
        {!reduce && <motion.div aria-hidden className="pointer-events-none absolute -inset-8 rounded-full border border-amber-200/10"
          animate={{rotate:360, opacity:[0.2,0.7,0.2]}} transition={{rotate:{duration:45,repeat:Infinity,ease:"linear"},opacity:{duration:5,repeat:Infinity}}}/>}
      </motion.div>
      <motion.p initial={reduce ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.8}}
        className="text-[11px] uppercase tracking-[0.38em] text-amber-200/75">REVELATION {count / 5} · {count} OF 20</motion.p>
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24, scale: 1.025, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ delay: reduce ? 0 : 0.4, duration: 1.45, ease: [0.19, 1, 0.22, 1] }}
        className="relative mt-6 w-full max-w-2xl"
      >
        <div className="pointer-events-none absolute -inset-5 rounded-full bg-amber-200/[0.08] blur-3xl" aria-hidden />
        <div className="relative overflow-hidden rounded-md border border-amber-200/20 bg-[#080b12] shadow-[0_24px_90px_rgba(0,0,0,0.65)]">
          {count === 5 ? <RegionArtwork region={label} /> : <CheckpointSigil kind={count === 10 ? "role" : "alignment"} label={label} />}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080b12]/60 via-transparent to-[#080b12]/10" aria-hidden />
          <div className="pointer-events-none absolute inset-x-[8%] bottom-0 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" aria-hidden />
        </div>
        <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/35">{count === 5 ? "A glimpse of your homeland" : count === 10 ? "The sigil of your calling" : "The sigil of your legend"}</p>
      </motion.div>
      <motion.p initial={reduce ? false : {opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:0.42,duration:0.85}}
        className="mt-5 text-xs uppercase tracking-[0.27em] text-white/60">{typeLabel}</motion.p>
      <motion.h2 initial={reduce ? false : {opacity:0,y:26,filter:"blur(9px)"}} animate={{opacity:1,y:0,filter:"blur(0px)"}}
        transition={{delay:0.65,duration:1.25,ease:[0.19,1,0.22,1]}}
        className="mt-3 font-serif text-[clamp(2.7rem,9vw,5rem)] leading-[1.06] text-[#F2E6D4]">{label}</motion.h2>
      <motion.p initial={reduce ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.95,duration:0.8}}
        className="mx-auto mt-5 max-w-lg text-base leading-[1.85] text-white/70">{description}</motion.p>
      <p className="mt-4 text-xs italic text-white/40">Your path is taking shape. Each revelation will remain part of your final legend.</p>
      <motion.button initial={reduce ? false : {opacity:0}} animate={{opacity:1}} transition={{delay:1.2,duration:0.7}}
        type="button" onClick={onContinue}
        className="mt-7 inline-flex min-h-[56px] w-full justify-center sm:w-auto items-center gap-3 rounded-full border border-amber-200/40 bg-amber-200/10 px-8 py-3 font-serif text-lg text-amber-100 transition hover:border-amber-200/80 hover:bg-amber-200/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200">
        Continue the ritual <ArrowRight className="h-5 w-5" />
      </motion.button>
    </section>
  );
}
