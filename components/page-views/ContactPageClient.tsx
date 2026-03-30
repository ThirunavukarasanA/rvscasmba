"use client";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import MbaAdmissionsGeneralInquiries from "@/components/contact/MbaAdmissionsGeneralInquiries";
import AdmissionsSupportSection from "@/components/contact/AdmissionsSupportSection";
import VisitTheCampus from "@/components/contact/VisitTheCampus";
import StayConnected from "@/components/contact/StayConnected";
import FinalCTASection from "@/components/contact/FinalCTASection";
import QuickContactForm from "@/components/contact/QuickContactForm";
import HeroSection from "@/components/shared/HeroSection";

export default function ContactPageClient() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        pageName="Contact"
        title="Contact the RVS CAS MBA Office"
        description1=""
        description2="If you have questions about the MBA program, admissions process, eligibility, or next steps, we’re here to help. Our team is available to support you at every stage — from initial enquiries to application guidance and enrollment."
        description3=""
        image="/images/herosection/contact.JPG"
        button1=""
        button2=""
        button1Link=""
        button2Link=""
      />
      <MbaAdmissionsGeneralInquiries />
      <AdmissionsSupportSection />
      <VisitTheCampus />
      <StayConnected />
      <FinalCTASection />
      <QuickContactForm />
      <Footer />
    </main>
  );
}
