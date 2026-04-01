"use client";

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
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";

export default function MbaGlobalFinancePageClient() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        pageName="MBA in Global Finance & Corporate Analyst"
        title="MBA in Global Finance & Corporate Analyst"
        description1={<>Learn to think, analyze, and decide like a financial analyst</>}
        description2={
          <>A practice-driven MBA at RVS CAS MBA designed around how finance actually works inside businesses, not how it is taught in textbooks.</>
        }
        description3={
          <>Most students learn finance as formulas, but real finance needs judgment. You learn to understand what is actually happening behind the numbers.</>
        }
        image="/images/herosection/new/finance.png"
        button1="Download Brochure"
        button2="Apply Now"
        button1Link="/request-information"
        button2Link="https://admissions.rvscas.ac.in?id=69ccdafa9aadac17d6f6b64a&leadform=RVSCAS_MBA_Website_Global_Finance_Hero_Section"
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
