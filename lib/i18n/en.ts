export const en = {
  landing: {
    kicker: "Soul of Runeterra",
    title: "Some stories are written before we know their names.",
    subtitle:
      "Across Runeterra, countless lives are shaped by love, loss, ambition, and the choices that define them. Somewhere among those stories, there may be one that echoes yours.",
    cta: "Enter Runeterra",
    ctaAlt: "Begin",
    disclaimer:
      "Soul of Runeterra is an unofficial fan-created experience. It is not endorsed by Riot Games. League of Legends and all related properties are trademarks of Riot Games, Inc.",
  },
  personal: {
    title: "Before we begin, tell us a little about yourself.",
    zodiacNote:
      "Birth date and zodiac are optional. They add a small symbolic touch to your result and never decide your champion on their own.",
  },
  loading: {
    title: "Between the stories.",
    subtitle: "Finding the name that fits your pattern.",
    skip: "Continue to result",
  },
  results: {
    compatibilityLabel: "Similarity score",
    compatibilityNote: "An interpretive match for entertainment, not a scientific measure.",
    revealKicker: "The reveal",
    connection: "The connection",
    parallels: "Their story, your choices",
    strength: "What makes you strong",
    shadow: "What may hold you back",
    closing: "The final word",
    shareHeading: "Some stories are worth telling.",
    shareDownload: "Save your portrait",
    shareNative: "Share your story",
    shareCopy: "Copy link",
    alsoClose: "Also close in spirit",
    kofiTitle: "If this reading stayed with you",
    kofiBody: "Optional support helps keep the project alive. The quiz stays free.",
    kofiCta: "Support on Ko-fi",
  },
} as const;

export type Messages = typeof en;
