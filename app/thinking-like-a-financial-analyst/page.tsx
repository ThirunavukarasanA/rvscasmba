import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/thinking-like-a-financial-analyst/HeroSection";
import WhyThisSeriesSection from "@/components/thinking-like-a-financial-analyst/WhyThisSeriesSection";
import DrSenthilIntroSection from "@/components/thinking-like-a-financial-analyst/DrSenthilIntroSection";
import MBAClassroomSection from "@/components/thinking-like-a-financial-analyst/MBAClassroomSection";
import AboutSeriesSection from "@/components/thinking-like-a-financial-analyst/AboutSeriesSection";
import TopicClustersSection from "@/components/thinking-like-a-financial-analyst/TopicClustersSection";
import FinalCTASection from "@/components/thinking-like-a-financial-analyst/FinalCTASection";

export const metadata: Metadata = {
  title: "Thinking Like a Financial Analyst | RVS CAS MBA Learning Series",
  description:
    "A learning series by Dr. K. Senthil Ganesh. Finance is not about formulas—it is about judgment. 66 focused lessons on how real financial analysts think.",
};

export default function ThinkingLikeAFinancialAnalystPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyThisSeriesSection />
      <DrSenthilIntroSection />
      <MBAClassroomSection />
      <AboutSeriesSection />
      <TopicClustersSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
