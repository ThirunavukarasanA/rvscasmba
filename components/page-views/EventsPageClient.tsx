"use client";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/shared/HeroSection";
import FeaturedEvents from "@/components/events/FeaturedEvents";
import PastEvents from "@/components/events/PastEvents";
import UpCommingEvents from "@/components/events/UpCommingEvents";
import EventCTA from "@/components/events/EventCTA";

export default function EventsPageClient() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        pageName="Events"
        title="Events"
        description1={
          <>
            <strong>Conversations. Insights. Connections.</strong>
          </>
        }
        description2={
          <>
            Events at the RVS CAS MBA bring together students, faculty, alumni, and industry professionals to explore ideas, share experience, and deepen understanding of business, analytics, marketing, and leadership.
          </>
        }
        description3="We host seminars, workshops, conferences, industry talks, and experiential learning opportunities throughout the year."
        image="/images/herosection/events.png"
        button1=""
        button2=""
        button1Link=""
        button2Link=""
      />
      <section className="bg-white py-12">
        <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
          <div className="space-y-4">
            <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
            <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
              All MBA students are encouraged to participate — whether as attendees, contributors, or organizers.
            </p>
          </div>
        </div>
      </section>
      <FeaturedEvents />
      <UpCommingEvents />
      <PastEvents />
      <EventCTA />
      <Footer />
    </main>
  );
}
