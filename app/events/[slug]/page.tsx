import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { pastEvents, generateSlug, featuredEvents, upcomingEvents } from "@/components/events/eventsData";

const allEvents = [...pastEvents, ...featuredEvents, ...upcomingEvents];

interface EventPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.slug);
  const event = allEvents.find((e) => generateSlug(e.title) === slug);
  // console.log("INCOMING SLUG:", slug);
  // console.log("AVAILABLE SLUGS:", pastEvents.map(e => generateSlug(e.title)));
  if (!event) {
    return (
      <main className="min-h-screen bg-white pt-32 px-12 text-black">
        <Header />
        <h1>Event Not Found Debug</h1>
        <p>Looking for slug: "{slug}"</p>
        <p>Available slugs:</p>
        <ul>
          {allEvents.map((e) => (
            <li key={e.title}>{generateSlug(e.title)}</li>
          ))}
        </ul>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section for Event Detail */}
      <section className="relative py-12 md:py-32 bg-booth-bg-gray">
        <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-trade-gothic-bold text-booth-dark-gray mb-6">
            {event.title}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
          <div className="prose prose-lg max-w-none font-trade-gothic-light text-booth-dark-gray">
            {/* Extended properties from PastEvents data */}
            {(event as any).slugtitle && (
              <h2 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-maroon mb-6">
                {(event as any).slugtitle}
              </h2>
            )}

            {(event as any).date && (
              <p className="font-trade-gothic-bold text-lg mb-2">
                {(event as any).date}
              </p>
            )}

            {(event as any).venue && (
              <p className="font-trade-gothic-bold text-lg mb-2">
                {(event as any).venue}
              </p>
            )}

            {(event as any).resource && (
              <p className="font-trade-gothic-bold text-lg mb-6">
                {(event as any).resource}
              </p>
            )}

            {/* Content paragraph */}
            {/* <p className="text-xl leading-relaxed mb-8">
              {(event as any).slugpara ? (event as any).slugpara : event.description}
            </p> */}
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-4"> */}
          <div className="relative w-full overflow-hidden mb-12">
            <Image
              src={(event as any).slugimage}
              alt={event.title}
              width={1000}
              height={1000}
              className=""
              priority
            />
          </div>
          <p className="text-xl leading-relaxed mb-8 font-trade-gothic-light text-booth-dark-gray">
            {(event as any).slugpara ? (event as any).slugpara : event.description}
          </p>
          {/* </div> */}
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Generate static params for SSG
export function generateStaticParams() {
  return allEvents.map((event) => ({
    slug: generateSlug(event.title),
  }));
}
