import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import GlobalCommunitySection from "@/components/home/GlobalCommunitySection";
import PathToSuccessSection from "@/components/home/PathToSuccessSection";
import StoriesSection from "@/components/home/StoriesSection";
import SocialSection from "@/components/home/SocialSection";
import FacultyInsightsSection from "@/components/home/FacultyInsightsSection";
import FinalCTASection from "@/components/home/FinalCTASection";
import VideoSeriesSection from "@/components/home/VideoSeriesSection";

export const metadata: Metadata = {
  title: "RVS CAS MBA - Management Education for the Digital Era",
  description:
    "RVS CAS MBA prepares techno-managers who combine strong business fundamentals with technology, analytics, and real-world decision-making.",
};
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProgramsSection />
      <GlobalCommunitySection />
      <PathToSuccessSection />
      <VideoSeriesSection />
      <StoriesSection />
      <SocialSection />
      <FacultyInsightsSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
