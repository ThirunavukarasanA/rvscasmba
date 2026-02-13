import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
// import HeroSection from "@/components/programs/common/student-experience/HeroSection";
import LearningEnvironmentSection from "@/components/programs/common/student-experience/LearningEnvironmentSection";
import CampusCommunitySection from "@/components/programs/common/student-experience/CampusCommunitySection";
import IndustryExposureSection from "@/components/programs/common/student-experience/IndustryExposureSection";
import StudentSupportSection from "@/components/programs/common/student-experience/StudentSupportSection";
import LifeBeyondAcademicsSection from "@/components/programs/common/student-experience/LifeBeyondAcademicsSection";
import StoriesSection from "@/components/programs/common/student-experience/StoriesSection";
import FinalCTASection from "@/components/programs/common/student-experience/FinalCTASection";
import HeroSection from "@/components/shared/HeroSection";

export const metadata: Metadata = {
  title: "The Student Experience at RVS CAS MBA",
  description: "An immersive learning environment that extends beyond the classroom. Discover life at RVS CAS MBA.",
};

export default function StudentExperiencePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        pageName="Student Experience"
        title="The Student Experience at RVS CAS MBA"
        description1={<>An immersive learning environment that extends beyond the classroom.</>}
        description2={<>At <strong className="font-trade-gothic-bold">RVS CAS MBA</strong>, the student experience combines academic rigor with practical exposure, collaboration, and campus engagement—helping students grow as professionals and individuals.</>}
        description3=""
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop"
        button1=""
        button2=""
        button1Link=""
        button2Link=""
      />
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

// https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop