import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import FeaturedEventsPageClient from "@/components/page-views/FeaturedEventsPageClient";
import { buildPageMetadata, getWebPageJsonLd } from "@/lib/seo";
import { ROUTE_SEO } from "@/lib/seo/route-seo";

const path = "/events/featured-events";
const seo = ROUTE_SEO[path];

export const metadata: Metadata = buildPageMetadata({
  title: seo.title,
  description: seo.description,
  path,
});

export default function FeaturedEventsPage() {
  return (
    <>
      <JsonLd
        data={getWebPageJsonLd({
          path,
          name: seo.jsonLdName,
          description: seo.description,
        })}
      />
      <FeaturedEventsPageClient />
    </>
  );
}
