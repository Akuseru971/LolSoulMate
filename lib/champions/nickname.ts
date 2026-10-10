const MAX = 40;

export function sanitizeNickname(raw?: string | null): string | undefined {
  if (!raw) return undefined;
  const trimmed = raw.trim().replace(/\s+/g, " ").slice(0, MAX);
  if (!trimmed) return undefined;
  return trimmed.replace(/[<>"'`]/g, "");
}

export function revealLeadLabel(nickname?: string): string {
  if (nickname) return `${nickname}, your story leads to`;
  return "Your story leads to";
}

export function possessiveStory(nickname?: string): string {
  if (!nickname) return "Your story";
  if (nickname.length > 22) return `${nickname.slice(0, 20)}…'s story`;
  return `${nickname}'s story`;
}

export function soulPortraitLabel(nickname?: string): string {
  if (!nickname) return "Your soul";
  if (nickname.length > 18) return `${nickname.slice(0, 16)}…'s soul`;
  return `${nickname}'s soul`;
}

export function legendPortraitLabel(nickname?: string): string {
  if (!nickname) return "Your legend";
  if (nickname.length > 18) return `The legend of ${nickname.slice(0, 16)}…`;
  return `The legend of ${nickname}`;
}
