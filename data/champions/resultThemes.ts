export type AtmosphereParticleType = "mist" | "embers" | "petals" | "stars" | "shadows";

export type ResultScrollScene =
  | "reveal"
  | "connection"
  | "fragments"
  | "inner"
  | "conclusion"
  | "legacy";

export interface ChampionResultTheme {
  championId: string;
  palette: {
    background: string;
    secondary: string;
    accent: string;
    glow: string;
    text: string;
  };
  atmosphere: {
    type: AtmosphereParticleType;
    intensity: number;
    speed: number;
  };
  symbol: {
    motif: string;
    ornamentStyle: "circle" | "diamond" | "arc" | "feather" | "blade";
  };
  lighting: {
    positionX: number;
    positionY: number;
    opacity: number;
  };
}

const FALLBACK: Omit<ChampionResultTheme, "championId"> = {
  palette: {
    background: "#050608",
    secondary: "#111b2a",
    accent: "#c5a46d",
    glow: "rgba(197,164,109,0.18)",
    text: "#e6ddce",
  },
  atmosphere: { type: "mist", intensity: 0.45, speed: 1 },
  symbol: { motif: "soul", ornamentStyle: "circle" },
  lighting: { positionX: 50, positionY: 28, opacity: 0.35 },
};

function t(
  championId: string,
  partial: Partial<Omit<ChampionResultTheme, "championId">> & Pick<ChampionResultTheme, "palette" | "atmosphere">,
): ChampionResultTheme {
  return {
    championId,
    ...partial,
    palette: { ...FALLBACK.palette, ...partial.palette },
    atmosphere: { ...FALLBACK.atmosphere, ...partial.atmosphere },
    symbol: { ...FALLBACK.symbol, ...partial.symbol },
    lighting: { ...FALLBACK.lighting, ...partial.lighting },
  };
}

const THEMES: ChampionResultTheme[] = [
  t("kindred", {
    palette: {
      background: "#060a12",
      secondary: "#0c1820",
      accent: "#8ec4bc",
      glow: "rgba(142,196,188,0.22)",
      text: "#e8ece8",
    },
    atmosphere: { type: "mist", intensity: 0.55, speed: 0.85 },
    symbol: { motif: "dual-moon", ornamentStyle: "circle" },
    lighting: { positionX: 62, positionY: 18, opacity: 0.42 },
  }),
  t("jhin", {
    palette: {
      background: "#080608",
      secondary: "#1a0a10",
      accent: "#8b2030",
      glow: "rgba(139,32,48,0.25)",
      text: "#e6ddd6",
    },
    atmosphere: { type: "embers", intensity: 0.4, speed: 0.7 },
    symbol: { motif: "four", ornamentStyle: "diamond" },
    lighting: { positionX: 50, positionY: 75, opacity: 0.5 },
  }),
  t("viego", {
    palette: {
      background: "#040806",
      secondary: "#0a1410",
      accent: "#3d8a68",
      glow: "rgba(61,138,104,0.28)",
      text: "#dce8e0",
    },
    atmosphere: { type: "shadows", intensity: 0.5, speed: 0.65 },
    symbol: { motif: "ruin", ornamentStyle: "arc" },
    lighting: { positionX: 40, positionY: 40, opacity: 0.38 },
  }),
  t("irelia", {
    palette: {
      background: "#100a14",
      secondary: "#1a1020",
      accent: "#b87888",
      glow: "rgba(184,120,136,0.2)",
      text: "#f0e6e8",
    },
    atmosphere: { type: "petals", intensity: 0.48, speed: 0.9 },
    symbol: { motif: "blade-dance", ornamentStyle: "blade" },
    lighting: { positionX: 55, positionY: 30, opacity: 0.4 },
  }),
  t("braum", {
    palette: {
      background: "#081018",
      secondary: "#0c1828",
      accent: "#d4a054",
      glow: "rgba(212,160,84,0.22)",
      text: "#eef2f8",
    },
    atmosphere: { type: "stars", intensity: 0.42, speed: 0.75 },
    symbol: { motif: "gate", ornamentStyle: "circle" },
    lighting: { positionX: 35, positionY: 55, opacity: 0.45 },
  }),
  t("swain", {
    palette: {
      background: "#0a0608",
      secondary: "#180c10",
      accent: "#6b2830",
      glow: "rgba(107,40,48,0.22)",
      text: "#e8e0dc",
    },
    atmosphere: { type: "shadows", intensity: 0.38, speed: 0.6 },
    symbol: { motif: "raven", ornamentStyle: "feather" },
    lighting: { positionX: 70, positionY: 25, opacity: 0.35 },
  }),
  t("yasuo", {
    palette: {
      background: "#0a1018",
      secondary: "#142028",
      accent: "#6a90a8",
      glow: "rgba(106,144,168,0.18)",
      text: "#e4eaef",
    },
    atmosphere: { type: "mist", intensity: 0.44, speed: 1.1 },
    symbol: { motif: "wind", ornamentStyle: "arc" },
    lighting: { positionX: 80, positionY: 35, opacity: 0.32 },
  }),
  t("lux", {
    palette: {
      background: "#101018",
      secondary: "#181828",
      accent: "#d4c078",
      glow: "rgba(212,192,120,0.24)",
      text: "#f4f0e8",
    },
    atmosphere: { type: "stars", intensity: 0.36, speed: 0.8 },
    symbol: { motif: "ray", ornamentStyle: "diamond" },
    lighting: { positionX: 50, positionY: 15, opacity: 0.48 },
  }),
  t("garen", {
    palette: {
      background: "#080c14",
      secondary: "#101828",
      accent: "#8090a8",
      glow: "rgba(128,144,168,0.2)",
      text: "#e8ecf2",
    },
    atmosphere: { type: "mist", intensity: 0.32, speed: 0.65 },
    symbol: { motif: "shield", ornamentStyle: "circle" },
    lighting: { positionX: 45, positionY: 22, opacity: 0.36 },
  }),
  t("akali", {
    palette: {
      background: "#0a0814",
      secondary: "#140f20",
      accent: "#6a5088",
      glow: "rgba(106,80,136,0.22)",
      text: "#e8e4f0",
    },
    atmosphere: { type: "shadows", intensity: 0.45, speed: 0.85 },
    symbol: { motif: "shroud", ornamentStyle: "blade" },
    lighting: { positionX: 60, positionY: 45, opacity: 0.3 },
  }),
  t("thresh", {
    palette: {
      background: "#040806",
      secondary: "#0a1210",
      accent: "#48a878",
      glow: "rgba(72,168,120,0.26)",
      text: "#dceee4",
    },
    atmosphere: { type: "embers", intensity: 0.35, speed: 0.55 },
    symbol: { motif: "chain", ornamentStyle: "arc" },
    lighting: { positionX: 50, positionY: 60, opacity: 0.4 },
  }),
  t("karma", {
    palette: {
      background: "#081210",
      secondary: "#102018",
      accent: "#58a090",
      glow: "rgba(88,160,144,0.22)",
      text: "#e8f0ec",
    },
    atmosphere: { type: "petals", intensity: 0.38, speed: 0.7 },
    symbol: { motif: "lotus", ornamentStyle: "circle" },
    lighting: { positionX: 50, positionY: 35, opacity: 0.38 },
  }),
  t("riven", {
    palette: {
      background: "#0c0c0a",
      secondary: "#181814",
      accent: "#788068",
      glow: "rgba(120,128,104,0.18)",
      text: "#e8e6e0",
    },
    atmosphere: { type: "shadows", intensity: 0.42, speed: 0.75 },
    symbol: { motif: "fracture", ornamentStyle: "blade" },
    lighting: { positionX: 55, positionY: 50, opacity: 0.32 },
  }),
  t("ekko", {
    palette: {
      background: "#0a0818",
      secondary: "#141028",
      accent: "#38b0a8",
      glow: "rgba(56,176,168,0.24)",
      text: "#e8f0f0",
    },
    atmosphere: { type: "stars", intensity: 0.4, speed: 1.05 },
    symbol: { motif: "clock", ornamentStyle: "diamond" },
    lighting: { positionX: 40, positionY: 40, opacity: 0.36 },
  }),
  t("senna", {
    palette: {
      background: "#060608",
      secondary: "#101018",
      accent: "#c8b878",
      glow: "rgba(200,184,120,0.26)",
      text: "#f0ece4",
    },
    atmosphere: { type: "mist", intensity: 0.48, speed: 0.8 },
    symbol: { motif: "light", ornamentStyle: "arc" },
    lighting: { positionX: 50, positionY: 20, opacity: 0.44 },
  }),
  t("diana", {
    palette: {
      background: "#080a14",
      secondary: "#101828",
      accent: "#a8b0c8",
      glow: "rgba(168,176,200,0.24)",
      text: "#eef0f8",
    },
    atmosphere: { type: "stars", intensity: 0.5, speed: 0.65 },
    symbol: { motif: "moon", ornamentStyle: "circle" },
    lighting: { positionX: 58, positionY: 12, opacity: 0.46 },
  }),
  t("leona", {
    palette: {
      background: "#141008",
      secondary: "#201810",
      accent: "#d8a850",
      glow: "rgba(216,168,80,0.28)",
      text: "#f8f0e4",
    },
    atmosphere: { type: "embers", intensity: 0.34, speed: 0.7 },
    symbol: { motif: "sun", ornamentStyle: "circle" },
    lighting: { positionX: 50, positionY: 10, opacity: 0.52 },
  }),
  t("morgana", {
    palette: {
      background: "#0c0814",
      secondary: "#181020",
      accent: "#9080a8",
      glow: "rgba(144,128,168,0.22)",
      text: "#ece8f0",
    },
    atmosphere: { type: "shadows", intensity: 0.46, speed: 0.72 },
    symbol: { motif: "wing", ornamentStyle: "feather" },
    lighting: { positionX: 45, positionY: 38, opacity: 0.34 },
  }),
  t("nasus", {
    palette: {
      background: "#100c08",
      secondary: "#1a140c",
      accent: "#c8a858",
      glow: "rgba(200,168,88,0.22)",
      text: "#f0e8dc",
    },
    atmosphere: { type: "mist", intensity: 0.36, speed: 0.55 },
    symbol: { motif: "stone", ornamentStyle: "diamond" },
    lighting: { positionX: 50, positionY: 25, opacity: 0.4 },
  }),
  t("azir", {
    palette: {
      background: "#140e08",
      secondary: "#201810",
      accent: "#d0a840",
      glow: "rgba(208,168,64,0.26)",
      text: "#f4ece0",
    },
    atmosphere: { type: "embers", intensity: 0.32, speed: 0.6 },
    symbol: { motif: "monument", ornamentStyle: "diamond" },
    lighting: { positionX: 50, positionY: 18, opacity: 0.42 },
  }),
  t("missfortune", {
    palette: {
      background: "#080c14",
      secondary: "#101820",
      accent: "#b86858",
      glow: "rgba(184,104,88,0.2)",
      text: "#ece8e4",
    },
    atmosphere: { type: "mist", intensity: 0.4, speed: 0.85 },
    symbol: { motif: "compass", ornamentStyle: "arc" },
    lighting: { positionX: 65, positionY: 30, opacity: 0.35 },
  }),
  t("pyke", {
    palette: {
      background: "#040810",
      secondary: "#0a1420",
      accent: "#389878",
      glow: "rgba(56,152,120,0.24)",
      text: "#dce8ec",
    },
    atmosphere: { type: "shadows", intensity: 0.44, speed: 0.9 },
    symbol: { motif: "depth", ornamentStyle: "blade" },
    lighting: { positionX: 50, positionY: 70, opacity: 0.38 },
  }),
  t("yone", {
    palette: {
      background: "#100808",
      secondary: "#1a1010",
      accent: "#984848",
      glow: "rgba(152,72,72,0.22)",
      text: "#ece4e4",
    },
    atmosphere: { type: "mist", intensity: 0.46, speed: 0.78 },
    symbol: { motif: "dual", ornamentStyle: "blade" },
    lighting: { positionX: 48, positionY: 32, opacity: 0.36 },
  }),
  t("zed", {
    palette: {
      background: "#060608",
      secondary: "#120808",
      accent: "#882830",
      glow: "rgba(136,40,48,0.24)",
      text: "#e8e0e0",
    },
    atmosphere: { type: "shadows", intensity: 0.5, speed: 0.95 },
    symbol: { motif: "shadow", ornamentStyle: "blade" },
    lighting: { positionX: 72, positionY: 40, opacity: 0.3 },
  }),
  t("sett", {
    palette: {
      background: "#100808",
      secondary: "#1a1018",
      accent: "#c86858",
      glow: "rgba(200,104,88,0.22)",
      text: "#f0e8e4",
    },
    atmosphere: { type: "embers", intensity: 0.38, speed: 0.8 },
    symbol: { motif: "arena", ornamentStyle: "circle" },
    lighting: { positionX: 50, positionY: 65, opacity: 0.42 },
  }),
];

const MAP = new Map(THEMES.map((th) => [th.championId, th]));

export function getResultTheme(championId: string): ChampionResultTheme {
  return MAP.get(championId) ?? { championId, ...FALLBACK };
}

export function sceneAtmosphereScale(scene: ResultScrollScene): number {
  switch (scene) {
    case "reveal":
      return 1;
    case "connection":
      return 0.72;
    case "fragments":
      return 0.52;
    case "inner":
      return 0.38;
    case "conclusion":
      return 0.58;
    case "legacy":
      return 0.28;
    default:
      return 0.5;
  }
}
