/**
 * Canonical public site URL (no trailing slash).
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://rvscas.ac.in or https://www.rvscas.ac.in).
 */
export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://rvscas.ac.in";
  return raw.replace(/\/+$/, "");
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
