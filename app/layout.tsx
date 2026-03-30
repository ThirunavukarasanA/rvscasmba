import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";
import { getGlobalOrganizationJsonLd } from "@/lib/structuredData";
import { SITE_NAME } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
/**
 * Site-wide defaults only. Per-route SEO (canonical, OG, Twitter, page JSON-LD) belongs in each
 * server `page.tsx` via `buildPageMetadata` / `getWebPageJsonLd` / domain helpers in `lib/structuredData.ts`.
 * Client interactivity stays in `"use client"` components imported by those pages.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RVS CAS MBA - RVS College of Arts & Science",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "RVS CAS MBA - Management education that combines business fundamentals with technology, analytics, and real-world decision-making.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={getGlobalOrganizationJsonLd()} />
        {children}
      </body>
    </html>
  );
}
