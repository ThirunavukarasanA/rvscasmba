import { notFound } from "next/navigation";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import FacultyProfilePageView from "@/components/page-views/FacultyProfilePageView";
import { facultyMembers } from "@/lib/data/faculty";
import { getFacultyProfileJsonLd } from "@/lib/structuredData";
import { buildPageMetadata } from "@/lib/seo";

interface FacultySlugPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: FacultySlugPageProps): Promise<Metadata> {
  const slug = (await params).slug;
  const faculty = facultyMembers.find((f) => f.slug === slug);
  if (!faculty) return { title: "Faculty Not Found", robots: { index: false } };
  return buildPageMetadata({
    title: faculty.name,
    description: faculty.title,
    path: `/faculty/${faculty.slug}`,
    ogImage: faculty.image,
  });
}

export default async function FacultyProfilePage({ params }: FacultySlugPageProps) {
  const slug = (await params).slug;
  const faculty = facultyMembers.find((f) => f.slug === slug);

  if (!faculty) {
    notFound();
  }

  return (
    <>
      <JsonLd data={getFacultyProfileJsonLd(faculty)} />
      <FacultyProfilePageView params={params} faculty={faculty} />
    </>
  );
}
