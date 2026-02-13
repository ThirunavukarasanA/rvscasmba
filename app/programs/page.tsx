import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
import type { Metadata } from "next";
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
                title='MBA Programs'
                description1={
                    <>
                        Explore MBA programs at <strong className="font-trade-gothic-bold">RVS CAS</strong>, designed to equip you with essential management skills, leadership qualities, and industry exposure to excel in your career.
                    </>
                }
                description2={
                    <>
                        Explore MBA programs at <strong className="font-trade-gothic-bold">RVS CAS</strong>, designed to equip you with essential management skills, leadership qualities, and industry exposure to excel in your career.
                    </>
                }
                description3=""
                image='https://images.unsplash.com/photo-1563986768494-4dee2763ff3f'
                button1='Explore Program Structure'
                button2='Apply Now'
                button1Link='/request-information'
                button2Link='/how-to-apply'
            />
            <Footer />
        </main>
    )
}
