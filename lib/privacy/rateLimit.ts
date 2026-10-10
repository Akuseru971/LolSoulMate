type Bucket = { count: number; resetAt: number };

const globalStore = globalThis as unknown as {
  __soulRateLimit?: Map<string, Bucket>;
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
