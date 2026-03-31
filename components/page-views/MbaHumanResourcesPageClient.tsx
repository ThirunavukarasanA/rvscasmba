"use client";

import AdmissionsSnapshotSection from "@/components/programs/human-resources/AdmissionsSnapshotSection";
import CareerOutcomesSection from "@/components/programs/human-resources/CareerOutcomesSection";
import CurriculumSection from "@/components/programs/human-resources/CurriculumSection";
import FinalCTASection from "@/components/programs/human-resources/FinalCTASection";
import IndustryConnectSection from "@/components/programs/human-resources/IndustryConnectSection";
import ProgramExperienceSection from "@/components/programs/human-resources/ProgramExperienceSection";
import ProgramFitSection from "@/components/programs/human-resources/ProgramFitSection";
import RequestProgramInformation from "@/components/programs/human-resources/RequestProgramInformation";
import WhyProgramSection from "@/components/programs/human-resources/WhyProgramSection";
import KeyHighlightsSection from "@/components/programs/human-resources/KeyHighlightsSection";
import ProgramFlowSection from "@/components/programs/human-resources/ProgramFlowSection";
import ComparisonSection from "@/components/programs/human-resources/ComparisonSection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";

export default function MbaHumanResourcesPageClient() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        pageName="MBA in Human Resources"
        title="MBA in Human Resources"
        description1={
          <>
            Build organizational capability with clarity, structure, and people
            insight.
          </>
        }
        description2={
          <>Most people manage employees. HR leaders build organizations.</>
        }
        description3="This MBA develops professionals who move beyond administrative HR into strategic talent, workforce analytics, and organizational decision-making."
        image="/images/herosection/new/hr.png"
        button1="Download Brochure"
        button2="Apply Now"
        button1Link="/request-information"
        button2Link="https://admissions.rvscas.ac.in?id=6246955d74b78f49cd6c2bc2&leadform=RVSCAS_MBA_Website_Human_Resources_Hero_Section"
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
