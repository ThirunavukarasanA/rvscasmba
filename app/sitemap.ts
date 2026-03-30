import type { MetadataRoute } from "next";
import { pastEvents, featuredEvents, upcomingEvents, generateSlug } from "@/components/events/eventsData";
import { facultyMembers } from "@/lib/data/faculty";
import { absoluteUrl } from "@/lib/site";
import { STATIC_SITEMAP_PATHS } from "@/lib/sitemap-paths";

const allEvents = [...pastEvents, ...featuredEvents, ...upcomingEvents];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = STATIC_SITEMAP_PATHS.map(
    (path) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.75,
    }),
  );

  const eventEntries: MetadataRoute.Sitemap = allEvents.map((event) => ({
    url: absoluteUrl(`/events/${generateSlug(event.title)}`),
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const facultyEntries: MetadataRoute.Sitemap = facultyMembers.map((f) => ({
    url: absoluteUrl(`/faculty/${f.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticEntries, ...eventEntries, ...facultyEntries];
}
