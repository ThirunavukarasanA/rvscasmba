"use client";

import WhyProgramSection from "@/components/events/featured-events/WhyProgramSection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
import FeaturedEvents from "@/components/events/FeaturedEvents";

export default function FeaturedEventsPageClient() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        pageName="Featured Events"
        title="Featured Events"
        description1={
          <>
            <strong>Conversations that shape perspective.</strong>
          </>
        }
        description2={
          <>
            Featured Events at <strong>RVS CAS MBA</strong> highlight important academic forums, industry discussions, workshops, and conferences that bring together students, faculty, alumni, and professionals.
          </>
        }
        description3="These events reflect our commitment to thoughtful learning, applied insight, and meaningful engagement beyond the classroom."
        image="https://images.unsplash.com/photo-1549451371-64aa98a6f660"
        button1=""
        button2=""
        button1Link=""
        button2Link=""
      />
      <WhyProgramSection />
      <FeaturedEvents />
      <Footer />
    </main>
  );
}
