import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import EventDetailPageView from "@/components/page-views/EventDetailPageView";
import { pastEvents, generateSlug, featuredEvents, upcomingEvents } from "@/components/events/eventsData";
import { buildPageMetadata } from "@/lib/seo";
import { getEventDetailJsonLd } from "@/lib/structuredData";

const allEvents = [...pastEvents, ...featuredEvents, ...upcomingEvents];

interface EventPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.slug);
  const event = allEvents.find((e) => generateSlug(e.title) === slug);
  if (!event) {
    return { title: "Event not found", robots: { index: false } };
  }
  const description =
    typeof event.description === "string" ? event.description : event.title;
  const ogImage =
    (event as { slugimage?: string; image?: string }).slugimage ??
    (event as { image?: string }).image;
  return buildPageMetadata({
    title: event.title,
    description,
    path: `/events/${slug}`,
    ogImage,
  });
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.slug);
  const event = allEvents.find((e) => generateSlug(e.title) === slug);
  if (!event) {
    notFound();
  }

  const description =
    typeof event.description === "string" ? event.description : event.title;
  const image =
    (event as { slugimage?: string; image?: string }).slugimage ??
    (event as { image?: string }).image;

  return (
    <>
      <JsonLd
        data={getEventDetailJsonLd({
          path: `/events/${slug}`,
          name: event.title,
          description,
          image,
        })}
      />
      <EventDetailPageView event={event} />
    </>
  );
}

export function generateStaticParams() {
  return allEvents.map((event) => ({
    slug: generateSlug(event.title),
  }));
}
