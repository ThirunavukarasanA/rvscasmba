import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import StudentExperiencePageClient from "@/components/page-views/StudentExperiencePageClient";
import { buildPageMetadata, getWebPageJsonLd } from "@/lib/seo";
import { ROUTE_SEO } from "@/lib/seo/route-seo";

const path = "/student-experience";
const seo = ROUTE_SEO[path];

export const metadata: Metadata = buildPageMetadata({
  title: seo.title,
  description: seo.description,
  path,
});

export default function StudentExperiencePage() {
  return (
    <>
      <JsonLd
        data={getWebPageJsonLd({
          path,
          name: seo.jsonLdName,
          description: seo.description,
        })}
      />
      <StudentExperiencePageClient />
    </>
  );
}
