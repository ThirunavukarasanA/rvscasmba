"use client";

import AdmissionsSnapshotSection from "@/components/programs/artificial-intelligence/AdmissionsSnapshotSection";
import CareerOutcomesSection from "@/components/programs/artificial-intelligence/CareerOutcomesSection";
import CurriculumSection from "@/components/programs/artificial-intelligence/CurriculumSection";
import FinalCTASection from "@/components/programs/artificial-intelligence/FinalCTASection";
import IndustryConnectSection from "@/components/programs/artificial-intelligence/IndustryConnectSection";
import ProgramExperienceSection from "@/components/programs/artificial-intelligence/ProgramExperienceSection";
import ProgramFitSection from "@/components/programs/artificial-intelligence/ProgramFitSection";
import RequestProgramInformation from "@/components/programs/artificial-intelligence/RequestProgramInformation";
import WhyProgramSection from "@/components/programs/artificial-intelligence/WhyProgramSection";
import KeyHighlightsSection from "@/components/programs/artificial-intelligence/KeyHighlightsSection";
import ProgramFlowSection from "@/components/programs/artificial-intelligence/ProgramFlowSection";
import ComparisonSection from "@/components/programs/artificial-intelligence/ComparisonSection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";

export default function MbaArtificialIntelligencePageClient() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        pageName="MBA in Artificial Intelligence"
        title="MBA in Artificial Intelligence"
        description1={
          <>
            <strong className="font-trade-gothic-bold">
              Learn to interpret complexity. Decide with clarity.
            </strong>
          </>
        }
        description2={
          <>
            Most people learn tools. AI leaders learn how to connect data,
            technology, and business insight to solve real-world problems.
          </>
        }
        description3={
          <>
            This MBA equips you with analytical frameworks, quantitative
            understanding, and the judgment to bridge business questions with
            analytic answers.
          </>
        }
        image="/images/herosection/new/artificial-intelligence.png"
        button1="Download Brochure"
        button2="Apply Now"
        button1Link="/request-information"
        button2Link="https://admissions.rvscas.ac.in?id=69b938da3944a9a8e9823781&leadform=RVSCAS_MBA_Website_Artificial_Intelligence_Hero_Section"
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
