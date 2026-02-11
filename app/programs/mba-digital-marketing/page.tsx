import AdmissionsSnapshotSection from "@/components/programs/digital-marketing/AdmissionsSnapshotSection";
import CareerOutcomesSection from "@/components/programs/digital-marketing/CareerOutcomesSection";
import CurriculumSection from "@/components/programs/digital-marketing/CurriculumSection";
import FinalCTASection from "@/components/programs/digital-marketing/FinalCTASection";
import HeroSection from "@/components/programs/digital-marketing/HeroSection";
import IndustryConnectSection from "@/components/programs/digital-marketing/IndustryConnectSection";
import ProgramExperienceSection from "@/components/programs/digital-marketing/ProgramExperienceSection";
import ProgramFitSection from "@/components/programs/digital-marketing/ProgramFitSection";
import RequestProgramInformation from "@/components/programs/digital-marketing/RequestProgramInformation";
import WhyProgramSection from "@/components/programs/digital-marketing/WhyProgramSection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "MBA in Digital Marketing - RVS CAS MBA",
    description:
        "A practice-intensive MBA at RVS CAS focused on how digital marketing actually works — across platforms, funnels, and business objectives",
};
export default function page() {
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
    )
}