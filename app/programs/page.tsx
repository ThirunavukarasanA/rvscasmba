import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
import Footer from "@/components/shared/Footer";
import DualSpecializationModel from "@/components/programs/programs-components/DualSpecializationModel";
import type { Metadata } from "next";
import CurriculumSection from "@/components/programs/programs-components/CurriculumSection";
import SpecializationHighlights from "@/components/programs/programs-components/SpecializationHighlights";
import AppliedLearningIndustryTools from "@/components/programs/programs-components/AppliedLearningIndustryTools";
import CareerOutcomesPlacementSupport from "@/components/programs/programs-components/CareerOutcomesPlacementSupport";
import FinalCTASection from "@/components/programs/programs-components/FinalCTASection";
export const metadata: Metadata = {
    title: "MBA Programs - RVS CAS MBA",
    description:
        "Explore MBA programs at RVS CAS, designed to equip you with essential management skills, leadership qualities, and industry exposure to excel in your career.",
};
export default function page() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection
                pageName="MBA Programs"
                title='MBA Degree Programs'
                description1={
                    <>
                        An integrated curriculum with flexibility and depth — for real careers in a digital era.
                    </>
                }
                description2={
                    <>
                        The MBA at RVS College of Arts & Science is designed to cultivate capable professionals who can think critically, analyze data, and make responsible decisions in complex business environments. The program combines rigorous academic grounding with applied learning, industry linkage, and structured mentorship.
                    </>
                }
                description3="With a dual specialization model, students gain broader competence across business domains while developing depth in two functional or analytical areas."
                image='https://images.unsplash.com/photo-1563986768494-4dee2763ff3f'
                button1=''
                button2=''
                button1Link=''
                button2Link=''
            />
            <DualSpecializationModel />
            <CurriculumSection />
            <SpecializationHighlights />
            <AppliedLearningIndustryTools />
            <CareerOutcomesPlacementSupport />
            <FinalCTASection />
            <Footer />
        </main>
    )
}
