import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import HomePageClient from "@/components/page-views/HomePageClient";
import { getHomeSupplementaryJsonLd } from "@/lib/structuredData";
import { buildPageMetadata, getWebPageJsonLd } from "@/lib/seo";
import { ROUTE_SEO } from "@/lib/seo/route-seo";

const path = "/";
const seo = ROUTE_SEO[path];

export const metadata: Metadata = buildPageMetadata({
  title: seo.title,
  description: seo.description,
  path,
});

export default function Home() {
  return (
    <>
      <JsonLd data={getHomeSupplementaryJsonLd()} />
      <JsonLd
        data={getWebPageJsonLd({
          path,
          name: seo.jsonLdName,
          description: seo.description,
        })}
      />
      <HomePageClient />
    </>
  );
}
