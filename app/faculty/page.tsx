import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import FacultyListingPageClient from "@/components/page-views/FacultyListingPageClient";
import { buildPageMetadata, getWebPageJsonLd } from "@/lib/seo";
import { ROUTE_SEO } from "@/lib/seo/route-seo";

const path = "/faculty";
const seo = ROUTE_SEO[path];

export const metadata: Metadata = buildPageMetadata({
  title: seo.title,
  description: seo.description,
  path,
});

export default function FacultyListingPage() {
  return (
    <>
      <JsonLd
        data={getWebPageJsonLd({
          path,
          name: seo.jsonLdName,
          description: seo.description,
        })}
      />
      <FacultyListingPageClient />
    </>
  );
}
