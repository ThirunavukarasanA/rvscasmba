import AdmissionsSnapshotSection from "@/components/programs/digital-marketing/AdmissionsSnapshotSection";
import CareerOutcomesSection from "@/components/programs/digital-marketing/CareerOutcomesSection";
import CurriculumSection from "@/components/programs/digital-marketing/CurriculumSection";
import FinalCTASection from "@/components/programs/digital-marketing/FinalCTASection";
// import HeroSection from "@/components/programs/digital-marketing/HeroSection";
import IndustryConnectSection from "@/components/programs/digital-marketing/IndustryConnectSection";
import ProgramExperienceSection from "@/components/programs/digital-marketing/ProgramExperienceSection";
import ProgramFitSection from "@/components/programs/digital-marketing/ProgramFitSection";
import RequestProgramInformation from "@/components/programs/digital-marketing/RequestProgramInformation";
import WhyProgramSection from "@/components/programs/digital-marketing/WhyProgramSection";
import KeyHighlightsSection from "@/components/programs/digital-marketing/KeyHighlightsSection";
import ProgramFlowSection from "@/components/programs/digital-marketing/ProgramFlowSection";
import ComparisonSection from "@/components/programs/digital-marketing/ComparisonSection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "MBA in Digital Marketing - RVS CAS MBA",
    description:
        "MBA in Digital Marketing at RVS CAS focused on strategy, execution, and performance-driven decisions in digital environments.",
};
export default function page() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection
                pageName="MBA in Digital Marketing"
                title='MBA in Digital Marketing'
                description1={
                    <>
                        Learn to design, execute, and measure marketing decisions in digital environments
                    </>
                }
                description2={
                    <>
                        The MBA in Digital Marketing at RVS CAS is built around how digital marketing actually works across platforms, funnels, and business objectives.
                    </>
                }
                description3='This is not a programme about platforms in isolation. You learn how platforms interact with strategy, data, and outcomes.'
                image='/images/herosection/new/dm.png'
                // image='https://images.unsplash.com/photo-1563986768494-4dee2763ff3f'
                button1='Download Brochure'
                button2='Apply Now'
                button1Link='/request-information'
                button2Link='https://admissions.rvscas.ac.in/'
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
    )
}
