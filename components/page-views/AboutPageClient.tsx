"use client";

import AboutTheInstitution from "@/components/about/AboutTheInstitution";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
import WhyThisMBA from "@/components/about/WhyThisMBA";
import Leadership from "@/components/about/Leadership";
import LegacyAccreditation from "@/components/about/LegacyAccreditation";
import ContactDetails from "@/components/about/ContactDetails";
import SocialSection from "@/components/about/SocialSection";

export default function AboutPageClient() {
  return (
    <main>
      <Header />
      <HeroSection
        pageName="About"
        title="About RVS CAS MBA"
        description1={<>An Institution Where Management Education Evolves with Industry</>}
        description2={
          <>
            RVS CAS MBA operates within a larger educational ecosystem that values structured thinking, technological fluency, and long-term relevance. The program reflects a deliberate effort to integrate academic rigor with industry-aligned learning — preparing graduates for thoughtful and responsible professional careers.
          </>
        }
        description3={<></>}
        image="/images/herosection/about-mba.jpg"
        button1=""
        button2=""
        button1Link=""
        button2Link=""
      />
      <AboutTheInstitution />
      <WhyThisMBA />
      <Leadership />
      <LegacyAccreditation />
      <ContactDetails />
      <SocialSection />
      <Footer />
    </main>
  );
}
