import AboutTheInstitution from "@/components/about/AboutTheInstitution";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
import WhyThisMBA from "@/components/about/WhyThisMBA";
import type { Metadata } from "next";
import Leadership from "@/components/about/Leadership";
import LegacyAccreditation from "@/components/about/LegacyAccreditation";
import ContactDetails from "@/components/about/ContactDetails";
import SocialSection from "@/components/about/SocialSection";

export const metadata: Metadata = {
    title: "About - RVS CAS MBA",
    description:
        "Learn about RVS CAS MBA, our faculty, campus, and what makes us a top choice for management education.",
};

export default function page() {
    return (
        <main>
            <Header />
            <HeroSection
                pageName="About"
                title="About RVS CAS MBA"
                description1={<>An Institution Where Management Education Evolves with Industry</>}
                description2={<>RVS CAS MBA operates within a larger educational ecosystem that values structured thinking, technological fluency, and long-term relevance. The program reflects a deliberate effort to integrate academic rigor with industry-aligned learning — preparing graduates for thoughtful and responsible professional careers.</>}
                description3={<></>}
                image="/images/herosection/why-mba.webp"
                // image="https://images.unsplash.com/photo-1531545514256-b1400bc00f31"
                button1=""
                button2=""
                button1Link=""
                button2Link=""
            />
            <AboutTheInstitution />
            <WhyThisMBA />
            <Leadership />
            <LegacyAccreditation />
            <ContactDetails />
            <SocialSection />
            <Footer />
        </main>
    )
}
