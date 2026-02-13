import AdmissionsSnapshotSection from "@/components/programs/human-resources/AdmissionsSnapshotSection";
import CareerOutcomesSection from "@/components/programs/human-resources/CareerOutcomesSection";
import CurriculumSection from "@/components/programs/human-resources/CurriculumSection";
import FinalCTASection from "@/components/programs/human-resources/FinalCTASection";
import IndustryConnectSection from "@/components/programs/human-resources/IndustryConnectSection";
import ProgramExperienceSection from "@/components/programs/human-resources/ProgramExperienceSection";
import ProgramFitSection from "@/components/programs/human-resources/ProgramFitSection";
import RequestProgramInformation from "@/components/programs/human-resources/RequestProgramInformation";
import WhyProgramSection from "@/components/programs/human-resources/WhyProgramSection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "MBA in Human Resources - RVS CAS MBA",
    description:
        "Build organizational capability with clarity, structure, and people insight.",
};
export default function page() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection
                pageName="MBA in Human Resources"
                title='MBA in Human Resources'
                description1={
                    <>
                        Build organizational capability with clarity, structure, and people insight.
                    </>
                }
                description2={
                    <>
                        The MBA in Human Resources at RVS College of Arts & Science is designed to develop professionals who understand how people strategy shapes business outcomes. This specialization goes beyond administrative HR functions to focus on organizational decision-making, workforce analytics, and strategic talent management.
                    </>
                }
                description3=''
                image='https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1471&auto=format&fit=crop'
                button1='Explore the HR Curriculum'
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
