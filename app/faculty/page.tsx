import ExploreFaculty from "@/components/faculty/ExploreFaculty";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Faculty at RVS CAS MBA",
    description: "Faculty at the RVS CAS MBA bring together students, faculty, alumni, and industry professionals to explore ideas, share experience, and deepen understanding of business, analytics, marketing, and leadership.",
};
export default function page() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection
                pageName="Faculty"
                title="Faculty & Management Scholars"
                description1={<><strong>Academic Rigor. Applied Insight. Mentorship That Matters.</strong></>}
                description2={<>MBA faculty are management scholars — educators who combine deep academic grounding with practical insight. Rather than simply delivering content, they engage students in disciplined thinking, analytical reasoning, and real-world application.</>}
                description3="Our faculty design learning experiences that integrate concepts, frameworks, and decision-making competence across business domains."
                image="/images/herosection/faculty1.png"
                // image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
                button1=""
                button2=""
                button1Link=""
                button2Link=""
            />
            <ExploreFaculty />
            <Footer />
        </main>
    )
}
