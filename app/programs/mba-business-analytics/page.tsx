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
        "Master the art of data-driven decision-making with our MBA in Artificial Intelligence. Gain expertise in data interpretation, predictive modeling, and strategic insights to transform data into business value.",
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
                        MBA in Artificial Intelligence equips you with the analytical frameworks, quantitative understanding, and real tools required to transform data into strategic insight.
                    </>
                }
                description3={
                    <>
                        Build capability to bridge business questions and analytic answers — not just extract reports.
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
