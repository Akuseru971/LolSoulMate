import { randomBytes } from "crypto";

export interface ShareSnapshot {
  championId: string;
  compatibility: number;
  definingTraits: string[];
  shareQuote: string;
  createdAt: number;
}

const TTL_MS = 7 * 24 * 60 * 60 * 1000;

const globalStore = globalThis as unknown as {
  __soulShareStore?: Map<string, ShareSnapshot>;
};

function store(): Map<string, ShareSnapshot> {
  if (!globalStore.__soulShareStore) {
    globalStore.__soulShareStore = new Map();
  }
  return globalStore.__soulShareStore;
}

function purgeExpired(): void {
  const now = Date.now();
  for (const [token, snap] of store()) {
    if (now - snap.createdAt > TTL_MS) store().delete(token);
  }
}

export function createShareToken(snapshot: Omit<ShareSnapshot, "createdAt">): string {
  purgeExpired();
  const token = randomBytes(24).toString("base64url");
  store().set(token, { ...snapshot, createdAt: Date.now() });
  return token;
}

export function getShareSnapshot(token: string): ShareSnapshot | null {
  purgeExpired();
  const snap = store().get(token);
  if (!snap) return null;
  if (Date.now() - snap.createdAt > TTL_MS) {
    store().delete(token);
    return null;
  }
  return snap;
}
