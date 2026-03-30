import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import MbaArtificialIntelligencePageClient from "@/components/page-views/MbaArtificialIntelligencePageClient";
import { buildPageMetadata, getWebPageJsonLd } from "@/lib/seo";
import { ROUTE_SEO } from "@/lib/seo/route-seo";

const path = "/programs/mba-artificial-intelligence";
const seo = ROUTE_SEO[path];

export const metadata: Metadata = buildPageMetadata({
  title: seo.title,
  description: seo.description,
  path,
});

export default function MbaArtificialIntelligencePage() {
  return (
    <>
      <JsonLd
        data={getWebPageJsonLd({
          path,
          name: seo.jsonLdName,
          description: seo.description,
        })}
      />
      <MbaArtificialIntelligencePageClient />
    </>
  );
}
