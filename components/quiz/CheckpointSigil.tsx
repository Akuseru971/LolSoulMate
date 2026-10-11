"use client";
import { motion, useReducedMotion } from "framer-motion";

const GOLD = "#e8c991";
function RoleSymbol({ role }: { role: string }) {
  const common = { fill: "none", stroke: GOLD, strokeWidth: 3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch(role) {
    case "Assassin": return <g {...common}><path d="M300 91 342 151 300 250 258 151Z"/><path d="m300 115 17 40-17 72-17-72Z" fill={GOLD} fillOpacity=".16"/><path d="m250 179 50-27 50 27"/></g>;
    case "Mage": return <g {...common}><circle cx="300" cy="170" r="35"/><path d="M300 95v150M225 170h150M253 123l94 94m0-94-94 94"/><circle cx="300" cy="170" r="65" strokeWidth="1.5"/></g>;
    case "Tank": return <g {...common}><path d="m300 89 67 29v74q-12 57-67 78-55-21-67-78v-74Z"/><path d="M300 116v120m-40-62h80"/><path d="m267 212 33 21 33-21" strokeWidth="1.5"/></g>;
    case "Support": return <g {...common}><path d="M300 240q-78-51-73-99 5-46 53-40l20 22 20-22q48-6 53 40 5 48-73 99Z"/><path d="M300 130v73m-35-36h70"/><circle cx="300" cy="166" r="70" strokeWidth="1.2" strokeOpacity=".4"/></g>;
    case "Marksman": return <g {...common}><circle cx="300" cy="170" r="68" strokeWidth="1.6"/><circle cx="300" cy="170" r="40" strokeWidth="1.5"/><path d="M218 170h164m-82-82v164"/><path d="m346 149 36 21-36 21" fill={GOLD} fillOpacity=".16"/></g>;
    default: return <g {...common}><path d="m256 115 88 110m0-110-88 110" strokeWidth="7"/><path d="m249 106 24 17-17 14-18-24Zm102 0-24 17 17 14 18-24Z" fill={GOLD} fillOpacity=".2"/><circle cx="300" cy="170" r="74" strokeOpacity=".45" strokeWidth="1.5"/></g>;
  }
}
function AlignmentSymbol({ alignment }: {alignment:string}) {
 const common={fill:"none",stroke:GOLD,strokeWidth:3,strokeLinejoin:"round" as const};
 if(alignment==="The Hero")return <g {...common}><path d="m300 98 25 48 53 8-39 38 9 55-48-25-48 25 9-55-39-38 53-8Z"/><path d="M300 117v98" strokeOpacity=".4"/><circle cx="300" cy="171" r="78" strokeWidth="1" strokeOpacity=".45"/></g>;
 if(alignment==="The Villain")return <g {...common}><path d="m232 111 35 30 33-36 33 36 35-30-16 93-52 40-52-40Z"/><path d="m256 169 28 14m60-14-28 14M300 152v66"/><circle cx="300" cy="173" r="78" strokeWidth="1" strokeOpacity=".4"/></g>;
 return <g {...common}><path d="m300 94 66 47-25 97h-82l-25-97Z"/><path d="M300 95v145" strokeWidth="2"/><path d="m247 148 53 21 53-21M262 215h76" strokeWidth="1.5"/><path d="m300 120-26 22 26 23 26-23Z" fill={GOLD} fillOpacity=".12"/></g>;
}
export function CheckpointSigil({ kind, label }: {kind:"role"|"alignment";label:string}) {
 const reduce=useReducedMotion();
 return <div className="relative aspect-video w-full overflow-hidden bg-[#080b12]">
  <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(211,159,84,0.15),transparent_63%)]"/>
  <motion.div aria-hidden className="absolute inset-0" animate={reduce?undefined:{opacity:[0.2,0.65,0.2]}} transition={{duration:6,repeat:Infinity,ease:"easeInOut"}} style={{background:"radial-gradient(ellipse 34% 70% at 50% 50%, rgba(241,193,109,.14), transparent)"}}/>
  <svg viewBox="0 0 600 340" role="img" aria-label={`Mystical ${label} sigil`} className="relative h-full w-full text-amber-100">
   <defs><radialGradient id="sigil-g"><stop stopColor="#e8c991" stopOpacity=".2"/><stop offset="1" stopColor="#e8c991" stopOpacity="0"/></radialGradient></defs>
   <circle cx="300" cy="170" r="145" fill="url(#sigil-g)"/>
   <motion.g style={{transformOrigin:"300px 170px"}} animate={reduce?undefined:{rotate:360}} transition={{duration:90,repeat:Infinity,ease:"linear"}}>
    <circle cx="300" cy="170" r="120" stroke={GOLD} strokeOpacity=".24" strokeWidth="1.5" fill="none" strokeDasharray="3 14"/>
    <path d="M300 39 410 104 410 236 300 301 190 236 190 104Z" fill="none" stroke={GOLD} strokeOpacity=".22"/>
   </motion.g>
   <circle cx="300" cy="170" r="91" stroke={GOLD} strokeOpacity=".28" fill="none"/>
   {kind==="role"?<RoleSymbol role={label}/>:<AlignmentSymbol alignment={label}/>}
   {[0,1,2,3].map(i=><circle key={i} cx={i%2?300:i===0?161:439} cy={i%2?(i===1?32:308):170} r="3" fill={GOLD} opacity=".65"/>)}
  </svg>
 </div>;
}
