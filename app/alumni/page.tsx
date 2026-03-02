import AlumniBenefits from "@/components/alumni/AlumniBenefits";
import AlumniNetworkOverview from "@/components/alumni/AlumniNetworkOverview";
import AlumniStories from "@/components/alumni/AlumniStories";
import ConnectWithUs from "@/components/alumni/ConnectWithUs";
import SubmitYourUpdate from "@/components/alumni/SubmitYourUpdate";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Internships at RVS CAS MBA",
    description: "Internships at RVS CAS MBA",
};
export default function page() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection
                pageName="Alumni"
                title="RVS CAS MBA Alumni"
                strong=""
                description1={<><strong>Lifelong Connections. Career Momentum. Meaningful Impact.</strong></>}
                description2={<><strong>A community of thinkers, innovators, and professionals shaping organizations across industries.</strong></>}
                description3={<>The RVS CAS MBA Alumni Network is a vibrant global community of graduates who carry forward our philosophy of <strong>structured thinking, applied decision-making, and professional impact</strong>. Our alumni work in diverse sectors — from analytics and finance to human resources, marketing, logistics, and operations — embodying both academic depth and real-world competence.</>}
                image="/images/herosection/alumni1.png"
                // image="https://images.unsplash.com/photo-1658235081452-c2ded30b8d9f"
                button1=""
                button2=""
                button1Link=""
                button2Link=""
            />
            <AlumniNetworkOverview />
            <AlumniStories />
            <AlumniBenefits />
            <ConnectWithUs />
            <SubmitYourUpdate />
            <Footer />
        </main>
    )
}
