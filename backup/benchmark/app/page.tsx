import Image from "next/image";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import GlobalCommunitySection from "@/components/GlobalCommunitySection";
import PathToSuccessSection from "@/components/PathToSuccessSection";
import StoriesSection from "@/components/StoriesSection";
import SocialSection from "@/components/SocialSection";
import FacultyInsightsSection from "@/components/FacultyInsightsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProgramsSection />
      <GlobalCommunitySection />
      <PathToSuccessSection />
      <StoriesSection />
      <SocialSection />
      <FacultyInsightsSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
