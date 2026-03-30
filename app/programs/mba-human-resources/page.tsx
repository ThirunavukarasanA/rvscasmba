import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import MbaHumanResourcesPageClient from "@/components/page-views/MbaHumanResourcesPageClient";
import { buildPageMetadata, getWebPageJsonLd } from "@/lib/seo";
import { ROUTE_SEO } from "@/lib/seo/route-seo";

const path = "/programs/mba-human-resources";
const seo = ROUTE_SEO[path];

export const metadata: Metadata = buildPageMetadata({
  title: seo.title,
  description: seo.description,
  path,
});

export default function MbaHumanResourcesPage() {
  return (
    <>
      <JsonLd
        data={getWebPageJsonLd({
          path,
          name: seo.jsonLdName,
          description: seo.description,
        })}
      />
      <MbaHumanResourcesPageClient />
    </>
  );
}
