import type { Metadata } from "next";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/contact/HeroSection";
import MbaAdmissionsGeneralInquiries from "@/components/contact/MbaAdmissionsGeneralInquiries";
import AdmissionsSupportSection from "@/components/contact/AdmissionsSupportSection";
import VisitTheCampus from "@/components/contact/VisitTheCampus";
import StayConnected from "@/components/contact/StayConnected";
import FinalCTASection from "@/components/contact/FinalCTASection";
import QuickContactForm from "@/components/contact/QuickContactForm";

export const metadata: Metadata = {
    title: "Contact the RVS CAS MBA Office",
    description:
        "If you have questions about the MBA program, admissions process, eligibility, or next steps, we’re here to help. Our team is available to support you at every stage — from initial enquiries to application guidance and enrollment.",
};
export default function page() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection />
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
