import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import AdmissionsPageClient from "@/components/page-views/AdmissionsPageClient";
import { buildPageMetadata, getWebPageJsonLd } from "@/lib/seo";
import { ROUTE_SEO } from "@/lib/seo/route-seo";

const path = "/admissions";
const seo = ROUTE_SEO[path];

export const metadata: Metadata = buildPageMetadata({
  title: seo.title,
  description: seo.description,
  path,
});

export default function AdmissionsPage() {
  return (
    <>
      <JsonLd
        data={getWebPageJsonLd({
          path,
          name: seo.jsonLdName,
          description: seo.description,
        })}
      />
      <AdmissionsPageClient />
    </>
  );
}
