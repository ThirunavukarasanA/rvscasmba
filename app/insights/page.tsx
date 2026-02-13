import FacultyArticles from '@/components/programs/common/insights/FacultyArticles';
import FinalCTASection from '@/components/programs/common/insights/FinalCTASection';
import TalksAndSeminars from '@/components/programs/common/insights/TalksAndSeminars';
import WhyInsightsMatter from '@/components/programs/common/insights/WhyInsightsMatter';
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import HeroSection from '@/components/shared/HeroSection';
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Insights - RVS CAS MBA",
    description:
        "Insights - RVS CAS MBA",
};
export default function page() {
    return (
        <div>
            <Header />
            <HeroSection
                pageName="Insights"
                title="Insights"
                description1="Ideas. Analysis. Perspective."
                description2="The MBA at RVS College of Arts & Science is built on the belief that management education should extend beyond the classroom."
                description3="The Insights platform brings together faculty perspectives, academic reflections, applied research, and seminar discussions that shape how we think about business, finance, marketing, and decision-making."
                image="/images/insights/insights-hero.png"
                button1=""
                button2=""
                button1Link=""
                button2Link="" />
            <FacultyArticles />
            <TalksAndSeminars />
            <WhyInsightsMatter />
            <FinalCTASection content="Stay Updated" />
            <Footer />
        </div>
    )
}
