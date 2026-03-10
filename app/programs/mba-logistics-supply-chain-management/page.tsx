import AdmissionsSnapshotSection from "@/components/programs/logistics-supply-chain-management/AdmissionsSnapshotSection";
import CareerOutcomesSection from "@/components/programs/logistics-supply-chain-management/CareerOutcomesSection";
import CurriculumSection from "@/components/programs/logistics-supply-chain-management/CurriculumSection";
import FinalCTASection from "@/components/programs/logistics-supply-chain-management/FinalCTASection";
import IndustryConnectSection from "@/components/programs/logistics-supply-chain-management/IndustryConnectSection";
import ProgramExperienceSection from "@/components/programs/logistics-supply-chain-management/ProgramExperienceSection";
import ProgramFitSection from "@/components/programs/logistics-supply-chain-management/ProgramFitSection";
import RequestProgramInformation from "@/components/programs/logistics-supply-chain-management/RequestProgramInformation";
import WhyProgramSection from "@/components/programs/logistics-supply-chain-management/WhyProgramSection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "MBA in Logistics & Supply Chain Management - RVS CAS MBA",
    description:
        "Build organizational capability with clarity, structure, and people insight.",
};
export default function page() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection
                pageName="MBA in Supply Chain Management"
                title='MBA in Logistics & Supply Chain Management'
                description1={
                    <>
                        Design systems. Optimize flow. Lead operational excellence.
                    </>
                }
                description2={
                    <>
                        MBA in Logistics & Supply Chain Management at RVS CAS prepares students to design, manage, and improve integrated supply networks in a digitally connected economy. Supply chain leadership today demands more than coordination — it requires structured thinking, data fluency, and systems optimization.
                    </>
                }
                description3=''
                image='/images/herosection/new/logistics.png'
                // image='https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1471&auto=format&fit=crop'
                button1='Explore the Curriculum'
                button2='Apply Now'
                button1Link='/request-information'
                button2Link='/how-to-apply'
            />
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
