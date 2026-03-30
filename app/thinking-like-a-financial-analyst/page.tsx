import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import ThinkingLikeAFinancialAnalystPageClient from "@/components/page-views/ThinkingLikeAFinancialAnalystPageClient";
import { buildPageMetadata, getWebPageJsonLd } from "@/lib/seo";
import { ROUTE_SEO } from "@/lib/seo/route-seo";

const path = "/thinking-like-a-financial-analyst";
const seo = ROUTE_SEO[path];

export const metadata: Metadata = buildPageMetadata({
  title: seo.title,
  description: seo.description,
  path,
});

export default function ThinkingLikeAFinancialAnalystPage() {
  return (
    <>
      <JsonLd
        data={getWebPageJsonLd({
          path,
          name: seo.jsonLdName,
          description: seo.description,
        })}
      />
      <ThinkingLikeAFinancialAnalystPageClient />
    </>
  );
}
