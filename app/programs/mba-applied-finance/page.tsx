import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/programs/mba-finance/HeroSection";
import WhyProgramSection from "@/components/programs/mba-finance/WhyProgramSection";
import ProgramExperienceSection from "@/components/programs/mba-finance/ProgramExperienceSection";
import CurriculumSection from "@/components/programs/mba-finance/CurriculumSection";
import CareerOutcomesSection from "@/components/programs/mba-finance/CareerOutcomesSection";
import IndustryConnectSection from "@/components/programs/mba-finance/IndustryConnectSection";
import ProgramFitSection from "@/components/programs/mba-finance/ProgramFitSection";
import AdmissionsSnapshotSection from "@/components/programs/mba-finance/AdmissionsSnapshotSection";
import FinalCTASection from "@/components/programs/mba-finance/FinalCTASection";
import RequestProgramInformation from "@/components/programs/mba-finance/RequestProgramInformation";

export const metadata: Metadata = {
  title: "MBA in Applied Finance - RVS CAS MBA",
  description:
    "A practice-driven finance program that builds strong analytical, valuation, and decision-making skills for modern financial careers.",
};

export default function MBAAppliedFinancePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyProgramSection />
      <ProgramExperienceSection />
      <CurriculumSection />
      <CareerOutcomesSection />
      <FinalCTASection />
      <IndustryConnectSection />
      <ProgramFitSection />
      <AdmissionsSnapshotSection />
      <RequestProgramInformation />
      <Footer />
    </main>
  );
}
