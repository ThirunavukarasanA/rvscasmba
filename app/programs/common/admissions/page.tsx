import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/programs/common/admissions/HeroSection";
import AdmissionsPhilosophySection from "@/components/programs/common/admissions/AdmissionsPhilosophySection";
import EligibilitySection from "@/components/programs/common/admissions/EligibilitySection";
import RequiredDocumentsSection from "@/components/programs/common/admissions/RequiredDocumentsSection";
import ApplicationProcessSection from "@/components/programs/common/admissions/ApplicationProcessSection";
import ScholarshipsSection from "@/components/programs/common/admissions/ScholarshipsSection";
import AdmissionsSupportSection from "@/components/programs/common/admissions/AdmissionsSupportSection";
import FinalCTASection from "@/components/programs/common/admissions/FinalCTASection";

export const metadata: Metadata = {
  title: "Admissions - RVS CAS MBA",
  description: "A transparent, student-focused admission process designed to help you make informed decisions about your MBA journey.",
};

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AdmissionsPhilosophySection />
      <EligibilitySection />
      <RequiredDocumentsSection />
      <ApplicationProcessSection />
      <ScholarshipsSection />
      <AdmissionsSupportSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
