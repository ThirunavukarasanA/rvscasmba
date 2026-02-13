import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
// import HeroSection from "@/components/programs/common/request-information/HeroSection";
import WhatYoullReceiveSection from "@/components/programs/common/request-information/WhatYoullReceiveSection";
import RequestFormSection from "@/components/programs/common/request-information/RequestFormSection";
import WhatHappensNextSection from "@/components/programs/common/request-information/WhatHappensNextSection";
import ContactOptionSection from "@/components/programs/common/request-information/ContactOptionSection";
import FinalCTASection from "@/components/programs/common/request-information/FinalCTASection";
import HeroSection from "@/components/shared/HeroSection";

export const metadata: Metadata = {
  title: "Request Information - RVS CAS MBA",
  description: "Learn more about RVS CAS MBA programs, admissions, and the student experience. Get in touch with our admissions team.",
};

export default function RequestInformationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        pageName="Request Information"
        title="Request Information"
        description1={<>Get the details you need to decide with confidence</>}
        description2={<>If you’re considering the MBA at RVS College of Arts & Science, this is the easiest way to receive clear, relevant information about the program, specializations, and admissions.</>}
        description3=""
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop"
        button1=""
        button2=""
        button1Link=""
        button2Link=""
      />
      <WhatYoullReceiveSection />
      <RequestFormSection />
      <WhatHappensNextSection />
      <ContactOptionSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
