import CurrentOpenings from "@/components/careers/CurrentOpenings";
import FacultyDevelopmentSupport from "@/components/careers/FacultyDevelopmentSupport";
import HowToApply from "@/components/careers/HowToApply";
import SubmitYourResume from "@/components/careers/SubmitYourResume";
import WhyJoinRVSCASMBA from "@/components/careers/WhyJoinRVSCASMBA";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Careers at RVS CAS MBA",
    description: "Join a community committed to rigorous teaching and applied learning.",
};
export default function page() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection
                pageName="Careers"
                title="Careers at RVS CAS MBA"
                description1={<><strong>Join a community committed to rigorous teaching and applied learning.</strong></>}
                description2={<>RVS CAS MBA seeks to engage faculty and professional staff who are committed to advancing our mission: to deliver academically rigorous, industry-aligned management education and to prepare students for thoughtful, analytical, and responsible professional careers.</>}
                description3=""
                image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                button1=""
                button2=""
                button1Link=""
                button2Link=""
            />
            <WhyJoinRVSCASMBA />
            <CurrentOpenings />
            <FacultyDevelopmentSupport />
            <HowToApply />
            <SubmitYourResume />
            <Footer />
        </main>
    )
}
