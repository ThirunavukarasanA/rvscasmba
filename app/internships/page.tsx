import ExploreFurther from "@/components/internships/ExploreFurther";
import FromInternshipToEmployment from "@/components/internships/FromInternshipToEmployment";
import InternshipSupport from "@/components/internships/InternshipSupport";
import StructuredInternshipModel from "@/components/internships/StructuredInternshipModel";
import WhyInternshipsMatter from "@/components/internships/WhyInternshipsMatter";
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
                pageName="Internships"
                title="Internships at RVS CAS MBA"
                description1={<><strong>Experience Before Employment. Learning Before Leadership.</strong></>}
                description2={<>Internships at RVS CAS MBA are an integral part of the curriculum across all specializations. They are structured engagements designed to help students apply classroom learning in real organizational environments.</>}
                description3=""
                image="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9"
                button1=""
                button2=""
                button1Link=""
                button2Link=""
            />
            <WhyInternshipsMatter />
            <StructuredInternshipModel />
            <InternshipSupport />
            <FromInternshipToEmployment />
            <ExploreFurther />
            <Footer />
        </main>
    )
}
