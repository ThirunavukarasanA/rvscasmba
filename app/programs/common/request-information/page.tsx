import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/programs/common/request-information/HeroSection";
import WhatYoullReceiveSection from "@/components/programs/common/request-information/WhatYoullReceiveSection";
import RequestFormSection from "@/components/programs/common/request-information/RequestFormSection";
import WhatHappensNextSection from "@/components/programs/common/request-information/WhatHappensNextSection";
import ContactOptionSection from "@/components/programs/common/request-information/ContactOptionSection";
import FinalCTASection from "@/components/programs/common/request-information/FinalCTASection";

export const metadata: Metadata = {
  title: "Request Information - RVS CAS MBA",
  description: "Learn more about RVS CAS MBA programs, admissions, and the student experience. Get in touch with our admissions team.",
};

export default function RequestInformationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatYoullReceiveSection />
      <RequestFormSection />
      <WhatHappensNextSection />
      <ContactOptionSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
