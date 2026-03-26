import AdmissionsSnapshotSection from "@/components/programs/artificial-intelligence/AdmissionsSnapshotSection";
import CareerOutcomesSection from "@/components/programs/artificial-intelligence/CareerOutcomesSection";
import CurriculumSection from "@/components/programs/artificial-intelligence/CurriculumSection";
import FinalCTASection from "@/components/programs/artificial-intelligence/FinalCTASection";
import IndustryConnectSection from "@/components/programs/artificial-intelligence/IndustryConnectSection";
import ProgramExperienceSection from "@/components/programs/artificial-intelligence/ProgramExperienceSection";
import ProgramFitSection from "@/components/programs/artificial-intelligence/ProgramFitSection";
import RequestProgramInformation from "@/components/programs/artificial-intelligence/RequestProgramInformation";
import WhyProgramSection from "@/components/programs/artificial-intelligence/WhyProgramSection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "MBA in Artificial Intelligence - RVS CAS MBA",
    description:
        "MBA in Artificial Intelligence focused on problem-first, decision-oriented learning with applied AI, analytics, and business judgment.",
};
export default function page() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection
                pageName="MBA in Artificial Intelligence"
                title='MBA in Artificial Intelligence'
                description1={
                    <>
                        <strong className="font-trade-gothic-bold">Learn to interpret complexity. Decide with clarity.</strong>
                    </>
                }
                description2={
                    <>
                        MBA in Artificial Intelligence is designed to help you go beyond tools and models and build the ability to use AI for real-world decision-making.
                    </>
                }
                description3={
                    <>
                        Most programs teach algorithms. This program trains you to decide where AI should be used, what problem is worth solving, and what action to take from outputs.
                    </>
                }
                image='/images/herosection/new/artificial-intelligence.png'
                button1='Explore Analytics Curriculum'
                button2='Apply Now'
                button1Link='/request-information'
                button2Link='https://admissions.rvscas.ac.in/'
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
