import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import AboutPageClient from "@/components/page-views/AboutPageClient";
import { buildPageMetadata, getWebPageJsonLd } from "@/lib/seo";
import { ROUTE_SEO } from "@/lib/seo/route-seo";

const path = "/about";
const seo = ROUTE_SEO[path];

export const metadata: Metadata = buildPageMetadata({
  title: seo.title,
  description: seo.description,
  path,
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={getWebPageJsonLd({
          path,
          name: seo.jsonLdName,
          description: seo.description,
        })}
      />
      <AboutPageClient />
    </>
  );
}
