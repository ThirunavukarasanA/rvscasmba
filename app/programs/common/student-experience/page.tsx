import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/programs/common/student-experience/HeroSection";
import LearningEnvironmentSection from "@/components/programs/common/student-experience/LearningEnvironmentSection";
import CampusCommunitySection from "@/components/programs/common/student-experience/CampusCommunitySection";
import IndustryExposureSection from "@/components/programs/common/student-experience/IndustryExposureSection";
import StudentSupportSection from "@/components/programs/common/student-experience/StudentSupportSection";
import LifeBeyondAcademicsSection from "@/components/programs/common/student-experience/LifeBeyondAcademicsSection";
import StoriesSection from "@/components/programs/common/student-experience/StoriesSection";
import FinalCTASection from "@/components/programs/common/student-experience/FinalCTASection";

export const metadata: Metadata = {
  title: "Student Experience - RVS CAS MBA",
  description: "An immersive learning environment that extends beyond the classroom. Discover life at RVS CAS MBA.",
};

export default function StudentExperiencePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <LearningEnvironmentSection />
      <CampusCommunitySection />
      <IndustryExposureSection />
      <StudentSupportSection />
      <LifeBeyondAcademicsSection />
      <StoriesSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
