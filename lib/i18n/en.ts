export const en = {
  landing: {
    title: "Every Soul Has a Legend.",
    subtitle:
      "Some are born to lead. Others to protect, conquer, or defy destiny. Discover the League of Legends champion whose story mirrors your own.",
    cta: "Discover Your Champion",
    secondary: "An immersive personality journey through Runeterra.",
    duration: "~6 minutes · No account required",
    disclaimer:
      "Soul of Runeterra is an unofficial fan-created experience. It is not endorsed by Riot Games. League of Legends and all related properties are trademarks of Riot Games, Inc.",
  },
  personal: {
    title: "Before the journey begins",
    zodiacNote:
      "Optional birth date and zodiac add symbolic flavor to your story—they are not scientific predictions and never decide your champion alone.",
  },
  loading: {
    title: "Your Destiny Is Taking Shape...",
    messages: [
      "Reading the echoes of your choices...",
      "Searching the legends of Runeterra...",
      "Finding the soul that mirrors yours...",
    ],
  },
  results: {
    compatibilityLabel: "Entertainment similarity score",
    compatibilityNote: "Not a scientific percentage— a lore-inspired resonance score.",
  },
} as const;

export type Messages = typeof en;
