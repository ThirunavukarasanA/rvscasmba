import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
// import HeroSection from "@/components/programs/common/admissions/HeroSection";
import AdmissionsPhilosophySection from "@/components/programs/common/admissions/AdmissionsPhilosophySection";
import EligibilitySection from "@/components/programs/common/admissions/EligibilitySection";
import RequiredDocumentsSection from "@/components/programs/common/admissions/RequiredDocumentsSection";
import ApplicationProcessSection from "@/components/programs/common/admissions/ApplicationProcessSection";
import ScholarshipsSection from "@/components/programs/common/admissions/ScholarshipsSection";
import AdmissionsSupportSection from "@/components/programs/common/admissions/AdmissionsSupportSection";
import FinalCTASection from "@/components/programs/common/admissions/FinalCTASection";
import HeroSection from "@/components/shared/HeroSection";

export const metadata: Metadata = {
  title: "Admissions - RVS CAS MBA",
  description: "A transparent, student-focused admission process designed to help you make informed decisions about your MBA journey.",
};

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        pageName="Admissions"
        title="Admissions at RVS CAS MBA"
        description1={<>A thoughtful process for serious learners</>}
        description2={<>Admissions to the MBA at RVS College of Arts & Science are designed to identify students who are prepared for rigorous, applied learning and long-term professional growth. We look beyond marks alone to understand a candidate’s intent, readiness, and commitment to learning.</>}
        description3=''
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=1080&fit=crop"
        button1=""
        button2=""
        button1Link=""
        button2Link=""
      />
      <AdmissionsPhilosophySection />
      <FinalCTASection content="Start Your MBA Application" />
      <EligibilitySection />
      <RequiredDocumentsSection />
      <FinalCTASection content="Start Your MBA Application" />
      <ApplicationProcessSection />
      <ScholarshipsSection />
      <AdmissionsSupportSection />
      <FinalCTASection content="Start Your MBA Application" />
      <Footer />
    </main>
  );
}
// https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=1080&fit=crop
