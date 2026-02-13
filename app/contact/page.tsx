import type { Metadata } from "next";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
// import HeroSection from "@/components/contact/HeroSection";
import MbaAdmissionsGeneralInquiries from "@/components/contact/MbaAdmissionsGeneralInquiries";
import AdmissionsSupportSection from "@/components/contact/AdmissionsSupportSection";
import VisitTheCampus from "@/components/contact/VisitTheCampus";
import StayConnected from "@/components/contact/StayConnected";
import FinalCTASection from "@/components/contact/FinalCTASection";
import QuickContactForm from "@/components/contact/QuickContactForm";
import HeroSection from "@/components/shared/HeroSection";

export const metadata: Metadata = {
    title: "Contact the RVS CAS MBA Office",
    description:
        "If you have questions about the MBA program, admissions process, eligibility, or next steps, we’re here to help. Our team is available to support you at every stage — from initial enquiries to application guidance and enrollment.",
};
export default function page() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection
                pageName="Contact"
                title="Contact the RVS CAS MBA Office"
                description1=""
                description2="If you have questions about the MBA program, admissions process, eligibility, or next steps, we’re here to help. Our team is available to support you at every stage — from initial enquiries to application guidance and enrollment."
                description3=""
                image="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=1080&fit=crop"
                button1=""
                button2=""
                button1Link=""
                button2Link=""
            />
            <MbaAdmissionsGeneralInquiries />
            <AdmissionsSupportSection />
            <VisitTheCampus />
            <StayConnected />
            <FinalCTASection />
            <QuickContactForm />
            <Footer />
        </main>
    )
}
