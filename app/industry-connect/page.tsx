import IndustryConnectPartners from "@/components/industry-connect/IndustryConnectPartners";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Industry Connect at RVS CAS MBA",
    description: "Industry Connect at RVS CAS MBA",
};
export default function page() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection
                pageName="Industry Connect"
                title="Industry Connect at RVS CAS MBA"
                description1={<><strong>Where Classroom Insight Meets Industry Practice</strong></>}
                description2={<>RVS CAS MBA integrates industry expertise directly into academic learning to ensure students graduate with practical relevance and professional confidence. Through the Industry Connect initiative, curriculum inputs, workshops, simulations, and applied projects are shaped in collaboration with leaders from technology, analytics, finance, and digital business.</>}
                description3="This approach ensures that learning is not isolated from practice — it is informed by it."
                image="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9"
                button1=""
                button2=""
                button1Link=""
                button2Link=""
            />
            <IndustryConnectPartners />
            <Footer />
        </main>
    )
}
