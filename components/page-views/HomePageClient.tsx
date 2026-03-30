"use client";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import GlobalCommunitySection from "@/components/home/GlobalCommunitySection";
import PathToSuccessSection from "@/components/home/PathToSuccessSection";
import SocialSection from "@/components/home/SocialSection";
import FacultyInsightsSection from "@/components/home/FacultyInsightsSection";
import FinalCTASection from "@/components/home/FinalCTASection";
import VideoSeriesSection from "@/components/home/VideoSeriesSection";

export default function HomePageClient() {
  return (
    <main className="">
      <Header />
      <HeroSection />
      <ProgramsSection />
      <GlobalCommunitySection />
      <PathToSuccessSection />
      <VideoSeriesSection />
      <SocialSection />
      <FacultyInsightsSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
