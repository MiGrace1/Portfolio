const MAX_ATTEMPTS = 5;
const WINDOW_MS = 10 * 60 * 1000;

const attempts = new Map<string, { count: number; resetAt: number }>();

/**
 * In-memory limiter: each serverless instance keeps its own counters, so this
 * slows abuse down without being a hard guarantee. Enough for a portfolio.
 */
export function isRateLimited(key: string): boolean {
  const now = Date.now();
  for (const [storedKey, { resetAt }] of attempts) {
    if (resetAt <= now) {
      attempts.delete(storedKey);
    }
  }

  const entry = attempts.get(key);
  if (!entry) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_ATTEMPTS;
}
