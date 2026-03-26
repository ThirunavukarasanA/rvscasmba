import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
// import HeroSection from "@/components/programs/mba-finance/HeroSection";
import WhyProgramSection from "@/components/programs/mba-finance/WhyProgramSection";
import KeyHighlightsSection from "@/components/programs/mba-finance/KeyHighlightsSection";
import ProgramFlowSection from "@/components/programs/mba-finance/ProgramFlowSection";
import FinanceComparisonSection from "@/components/programs/mba-finance/FinanceComparisonSection";
import ProgramExperienceSection from "@/components/programs/mba-finance/ProgramExperienceSection";
import CurriculumSection from "@/components/programs/mba-finance/CurriculumSection";
import AdditionalCertificationsSection from "@/components/programs/mba-finance/AdditionalCertificationsSection";
import CareerOutcomesSection from "@/components/programs/mba-finance/CareerOutcomesSection";
import VideoSeriesSection from "@/components/programs/mba-finance/VideoSeriesSection";
import IndustryConnectSection from "@/components/programs/mba-finance/IndustryConnectSection";
import ProgramFitSection from "@/components/programs/mba-finance/ProgramFitSection";
import AdmissionsSnapshotSection from "@/components/programs/mba-finance/AdmissionsSnapshotSection";
import FinalCTASection from "@/components/programs/mba-finance/FinalCTASection";
import RequestProgramInformation from "@/components/programs/mba-finance/RequestProgramInformation";
import HeroSection from "@/components/shared/HeroSection";
export const metadata: Metadata = {
  title: "MBA in Global Finance & Corporate Analyst - RVS CAS MBA",
  description:
    "MBA in Global Finance & Corporate Analyst focused on financial judgment, FP&A thinking, and decision-making under uncertainty.",
};
export default function MBAAppliedFinancePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        pageName="MBA in Global Finance & Corporate Analyst"
        title="MBA in Global Finance & Corporate Analyst"
        description1={<>Learn to think, analyze, and decide like a financial analyst</>}
        description2={<>A practice-driven MBA at RVS CAS MBA designed around how finance actually works inside businesses, not how it is taught in textbooks.</>}
        description3={<>Most students learn finance as formulas, but real finance needs judgment. You learn to understand what is actually happening behind the numbers.</>}
        image="/images/herosection/new/finance.png"
        button1="Download Brochure"
        button2="Apply Now"
        button1Link="/how-to-apply"
        button2Link="https://admissions.rvscas.ac.in/"
      />
      <WhyProgramSection />
      <KeyHighlightsSection />
      <ProgramFlowSection />
      <FinanceComparisonSection />
      <ProgramExperienceSection />
      <CurriculumSection />
      <AdditionalCertificationsSection />
      <CareerOutcomesSection />
      <VideoSeriesSection />
      <FinalCTASection />
      <IndustryConnectSection />
      <ProgramFitSection />
      <AdmissionsSnapshotSection />
      <RequestProgramInformation />
      <Footer />
    </main>
  );
}
