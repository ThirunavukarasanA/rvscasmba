"use client";

import AdmissionsSnapshotSection from "@/components/programs/logistics-supply-chain-management/AdmissionsSnapshotSection";
import CareerOutcomesSection from "@/components/programs/logistics-supply-chain-management/CareerOutcomesSection";
import CurriculumSection from "@/components/programs/logistics-supply-chain-management/CurriculumSection";
import FinalCTASection from "@/components/programs/logistics-supply-chain-management/FinalCTASection";
import IndustryConnectSection from "@/components/programs/logistics-supply-chain-management/IndustryConnectSection";
import ProgramExperienceSection from "@/components/programs/logistics-supply-chain-management/ProgramExperienceSection";
import ProgramFitSection from "@/components/programs/logistics-supply-chain-management/ProgramFitSection";
import RequestProgramInformation from "@/components/programs/logistics-supply-chain-management/RequestProgramInformation";
import WhyProgramSection from "@/components/programs/logistics-supply-chain-management/WhyProgramSection";
import KeyHighlightsSection from "@/components/programs/logistics-supply-chain-management/KeyHighlightsSection";
import ProgramFlowSection from "@/components/programs/logistics-supply-chain-management/ProgramFlowSection";
import ComparisonSection from "@/components/programs/logistics-supply-chain-management/ComparisonSection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";

export default function MbaLogisticsSupplyChainPageClient() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        pageName="MBA in Supply Chain Management"
        title="MBA in Logistics & Supply Chain Management"
        description1={<>Design systems. Optimize flow. Lead operational excellence.</>}
        description2={<>Most people see operations. Leaders see systems.</>}
        description3="Build capability in operations, analytics, and strategic supply chain decision-making through case-driven practice, simulation, and industry exposure."
        image="/images/herosection/new/logistics.png"
        button1="Download Brochure"
        button2="Apply Now"
        button1Link="/request-information"
        button2Link="https://admissions.rvscas.ac.in/"
      />
      <WhyProgramSection />
      <KeyHighlightsSection />
      <ProgramFlowSection />
      <ComparisonSection />
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
