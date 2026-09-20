const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

type RateEntry = {
  count: number;
  resetAt: number;
};

const entries = new Map<string, RateEntry>();

export function checkContactRateLimit(identifier: string) {
  const now = Date.now();
  const current = entries.get(identifier);

  if (!current || current.resetAt <= now) {
    entries.set(identifier, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 } as const;
  }

  if (current.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    } as const;
  }

  current.count += 1;
  return { allowed: true, retryAfterSeconds: 0 } as const;
}

// This memory-only limiter protects a warm server instance. Replace it with a
// shared Vercel-compatible store if abuse requires enforcement across instances.
