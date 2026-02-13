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
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
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
                        A practice-intensive MBA at <strong className="font-trade-gothic-bold">RVS CAS</strong> focused on how digital marketing actually works — across platforms, funnels, and business objectives
                    </>
                }
                description3=''
                image='https://images.unsplash.com/photo-1563986768494-4dee2763ff3f'
                button1='Explore Program Structure'
                button2='Apply Now'
                button1Link='/programs/common/request-information'
                button2Link='/programs/common/how-to-apply'
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
