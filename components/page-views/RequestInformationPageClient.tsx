"use client";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import WhatYoullReceiveSection from "@/components/programs/common/request-information/WhatYoullReceiveSection";
import RequestFormSection from "@/components/programs/common/request-information/RequestFormSection";
import WhatHappensNextSection from "@/components/programs/common/request-information/WhatHappensNextSection";
import ContactOptionSection from "@/components/programs/common/request-information/ContactOptionSection";
import FinalCTASection from "@/components/programs/common/request-information/FinalCTASection";
import HeroSection from "@/components/shared/HeroSection";

export default function RequestInformationPageClient() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        pageName="Request Information"
        title="Request Information"
        description1={<>Get the details you need to decide with confidence</>}
        description2={
          <>
            If you’re considering the MBA at RVS College of Arts & Science, this is the easiest way to receive clear, relevant information about the program, specializations, and admissions.
          </>
        }
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
