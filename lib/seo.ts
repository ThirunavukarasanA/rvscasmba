import type { Metadata } from "next";
import { absoluteUrl, getSiteUrl } from "@/lib/site";

export const SITE_NAME = "RVS CAS MBA";

/** Default OG/Twitter image (site-relative). Replace with a 1200×630 asset when available. */
export const DEFAULT_OG_IMAGE = "/images/header/RVSCAS_Logo.svg";

export type PageSeoInput = {
  /** Page title (shown in tab and OG; combined with root `title.template` unless you pass a full title). */
  title: string;
  description: string;
  /** Path including leading slash, e.g. `/admissions` */
  path: string;
  /** Site-relative (e.g. `/images/...`) or absolute URL for OG/Twitter */
  ogImage?: string;
  noIndex?: boolean;
};

/**
 * Server-only: use in `page.tsx` / `layout.tsx` as `export const metadata = buildPageMetadata(...)`.
 * Sets canonical, Open Graph, and Twitter card from one source of truth.
 */
export function buildPageMetadata(input: PageSeoInput): Metadata {
  const { title, description, path, ogImage, noIndex } = input;
  const url = absoluteUrl(path);
  const imageUrl =
    ogImage == null || ogImage === ""
      ? absoluteUrl(DEFAULT_OG_IMAGE)
      : ogImage.startsWith("http")
        ? ogImage
        : absoluteUrl(ogImage);

  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: SITE_NAME,
      title,
      description,
      url,
      images: [{ url: imageUrl, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

/** JSON-LD WebPage node; pair with global graph from layout (`#website`, `#institution`). */
export function getWebPageJsonLd(input: {
  path: string;
  name: string;
  description: string;
}): { "@context": string; "@graph": Record<string, unknown>[] } {
  const base = getSiteUrl();
  const pageUrl = absoluteUrl(input.path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: input.name,
        description: input.description,
        isPartOf: { "@id": `${base}/#website` },
        publisher: { "@id": `${base}/#institution` },
        inLanguage: "en",
      },
    ],
  };
}
