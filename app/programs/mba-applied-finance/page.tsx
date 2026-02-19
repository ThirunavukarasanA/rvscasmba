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
  title: "MBA in Applied Finance - RVS CAS MBA",
  description:
    "A practice-driven finance program that builds strong analytical, valuation, and decision-making skills for modern financial careers.",
};
export default function MBAAppliedFinancePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        pageName="MBA in Applied Finance"
        title="MBA in Applied Finance"
        description1={<>Learn to think, analyze, and decide like a financial analyst</>}
        description2={<>A practice-driven <strong className="font-trade-gothic-bold">MBA at RVS CAS MBA</strong> is designed around real financial decision-making rather than textbook theory. The program develops analyst-style thinking, emphasizes company and valuation-led learning, and is delivered through a faculty-led approach that prioritizes clarity, judgment, and application over content-heavy instruction.</>}
        description3=''
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=1080&fit=crop"
        button1="Explore Program Structure"
        button2="Apply Now"
        button1Link="/request-information"
        button2Link="/how-to-apply"
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
