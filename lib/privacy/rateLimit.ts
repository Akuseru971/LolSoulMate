type Bucket = { count: number; resetAt: number };

const globalStore = globalThis as unknown as {
  __soulRateLimit?: Map<string, Bucket>;
  __soulDailyAi?: { date: string; count: number };
};

function store(): Map<string, Bucket> {
  if (!globalStore.__soulRateLimit) {
    globalStore.__soulRateLimit = new Map();
  }
  return globalStore.__soulRateLimit;
}

export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number,
): { ok: boolean; retryAfterMs?: number } {
  const now = Date.now();
  const bucket = store().get(key);
  if (!bucket || now > bucket.resetAt) {
    store().set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }
  if (bucket.count >= limit) {
    return { ok: false, retryAfterMs: bucket.resetAt - now };
  }
  bucket.count += 1;
  return { ok: true };
}

export function checkDailyAiBudget(): { ok: boolean; reason?: string } {
  const max = Number(process.env.AI_DAILY_REQUEST_CAP ?? "500");
  if (!Number.isFinite(max) || max <= 0) return { ok: true };

  const today = new Date().toISOString().slice(0, 10);
  if (!globalStore.__soulDailyAi || globalStore.__soulDailyAi.date !== today) {
    globalStore.__soulDailyAi = { date: today, count: 0 };
  }
  if (globalStore.__soulDailyAi.count >= max) {
    return { ok: false, reason: "Daily AI budget reached" };
  }
  globalStore.__soulDailyAi.count += 1;
  return { ok: true };
}
