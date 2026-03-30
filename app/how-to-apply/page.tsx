import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import HowToApplyPageClient from "@/components/page-views/HowToApplyPageClient";
import { buildPageMetadata, getWebPageJsonLd } from "@/lib/seo";
import { ROUTE_SEO } from "@/lib/seo/route-seo";

const path = "/how-to-apply";
const seo = ROUTE_SEO[path];

export const metadata: Metadata = buildPageMetadata({
  title: seo.title,
  description: seo.description,
  path,
});

export default function HowToApplyPage() {
  return (
    <>
      <JsonLd
        data={getWebPageJsonLd({
          path,
          name: seo.jsonLdName,
          description: seo.description,
        })}
      />
      <HowToApplyPageClient />
    </>
  );
}
