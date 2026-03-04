import BeyondGraduation from "@/components/placements/BeyondGraduation";
import CareerPreparation from "@/components/placements/CareerPreparation";
import ConnectWithUs from "@/components/placements/ConnectWithUs";
import EmployerEngagement from "@/components/placements/EmployerEngagement";
import PlacementEngagement from "@/components/placements/PlacementEngagement";
import RecruiterPerspectives from "@/components/placements/RecruiterPerspectives";
import StudentExperiences from "@/components/placements/StudentExperiences";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Placement at RVS CAS MBA",
    description: "Structured preparation. Measurable readiness. Purposeful outcomes.",
};
export default function page() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection
                pageName="Placements"
                title="Placement at RVS CAS MBA"
                strong=""
                description1={<><strong>Structured preparation. Measurable readiness. Purposeful outcomes.</strong></>}
                description2={<>RVS CAS MBA places career readiness at the center of the student experience. The objective is not simply placement numbers — but capacity building, professional clarity, and industry alignment. Students are supported from the first semester through a series of preparatory initiatives that build confidence, competence, and measurable capability.</>}
                description3={<></>}
                image="/images/herosection/placement.JPG"
                // image="https://images.unsplash.com/photo-1698047682091-782b1e5c6536"
                button1=""
                button2=""
                button1Link=""
                button2Link="" />
            <CareerPreparation />
            <StudentExperiences />
            <RecruiterPerspectives />
            <PlacementEngagement />
            <EmployerEngagement />
            <BeyondGraduation />
            <ConnectWithUs />
            <Footer />
        </main>
    )
}
