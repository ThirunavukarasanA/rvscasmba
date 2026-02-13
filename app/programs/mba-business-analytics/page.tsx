import AdmissionsSnapshotSection from "@/components/programs/business-analytics/AdmissionsSnapshotSection";
import CareerOutcomesSection from "@/components/programs/business-analytics/CareerOutcomesSection";
import CurriculumSection from "@/components/programs/business-analytics/CurriculumSection";
import FinalCTASection from "@/components/programs/business-analytics/FinalCTASection";
import IndustryConnectSection from "@/components/programs/business-analytics/IndustryConnectSection";
import ProgramExperienceSection from "@/components/programs/business-analytics/ProgramExperienceSection";
import ProgramFitSection from "@/components/programs/business-analytics/ProgramFitSection";
import RequestProgramInformation from "@/components/programs/business-analytics/RequestProgramInformation";
import WhyProgramSection from "@/components/programs/business-analytics/WhyProgramSection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "MBA in Business Analytics - RVS CAS MBA",
    description:
        "Master the art of data-driven decision-making with our MBA in Business Analytics. Gain expertise in data interpretation, predictive modeling, and strategic insights to transform data into business value.",
};
export default function page() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection
                pageName="MBA in Business Analytics"
                title='MBA in Business Analytics'
                description1={
                    <>
                        <strong className="font-trade-gothic-bold">Learn to interpret complexity. Decide with clarity.</strong>
                    </>
                }
                description2={
                    <>
                        MBA in Business Analytics equips you with the analytical frameworks, quantitative understanding, and real tools required to transform data into strategic insight.
                    </>
                }
                description3={
                    <>
                        Build capability to bridge business questions and analytic answers — not just extract reports.
                    </>
                }
                image='/images/business-analytics.png'
                button1='Explore Analytics Curriculum'
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
