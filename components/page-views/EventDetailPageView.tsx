import type { ReactNode } from "react";
import Image from "next/image";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

type EventLike = {
  title: string;
  description?: string;
  slugtitle?: string;
  date?: string;
  venue?: string;
  resource?: string;
  slugimage?: string;
  slugpara?: ReactNode;
};

/** Server UI for event detail (uses `next/image` and rich content; keep out of client shell). */
export default function EventDetailPageView({
  event,
}: {
  event: EventLike & { slugimage?: string };
}) {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="relative py-12 md:py-32 bg-booth-bg-gray">
        <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-trade-gothic-bold text-booth-dark-gray mb-6">
            {event.title}
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
          <div className="prose prose-lg max-w-none font-trade-gothic-light text-booth-dark-gray">
            {event.slugtitle && (
              <h2 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-maroon mb-6">
                {event.slugtitle}
              </h2>
            )}

            {event.date && (
              <p className="font-trade-gothic-bold text-lg mb-2">{event.date}</p>
            )}

            {event.venue && (
              <p className="font-trade-gothic-bold text-lg mb-2">{event.venue}</p>
            )}

            {event.resource && (
              <p className="font-trade-gothic-bold text-lg mb-6">{event.resource}</p>
            )}
          </div>

          <div className="relative w-full overflow-hidden mb-12">
            <Image
              src={event.slugimage ?? ""}
              alt={event.title}
              width={1000}
              height={1000}
              className=""
              priority
            />
          </div>
          <p className="text-xl leading-relaxed mb-8 font-trade-gothic-light text-booth-dark-gray">
            {event.slugpara ? event.slugpara : event.description}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
