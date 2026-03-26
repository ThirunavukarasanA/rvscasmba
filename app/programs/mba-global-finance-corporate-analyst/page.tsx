import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
// import HeroSection from "@/components/programs/mba-finance/HeroSection";
import WhyProgramSection from "@/components/programs/mba-finance/WhyProgramSection";
import ProgramExperienceSection from "@/components/programs/mba-finance/ProgramExperienceSection";
import CurriculumSection from "@/components/programs/mba-finance/CurriculumSection";
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
        description2={<>MBA in Global Finance & Corporate Analyst is designed to help you understand how finance actually works inside businesses — beyond formulas, ratios, and textbook definitions.</>}
        description3={<>You learn to connect business reality, financial statements, capital decisions, and strategic outcomes.</>}
        image="/images/herosection/new/finance.png"
        button1="Explore Program Structure"
        button2="Apply Now"
        button1Link="/request-information"
        button2Link="https://admissions.rvscas.ac.in/"
      />
      <WhyProgramSection />
      <ProgramExperienceSection />
      <CurriculumSection />
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
