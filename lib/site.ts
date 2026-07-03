/**
 * Canonical site URL — set NEXT_PUBLIC_SITE_URL on the deploy platform
 * (e.g. https://haosys.dev). Falls back to localhost for local dev so
 * metadata/sitemap/robots still resolve.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
