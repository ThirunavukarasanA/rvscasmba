"use client";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import LearningEnvironmentSection from "@/components/programs/common/student-experience/LearningEnvironmentSection";
import CampusCommunitySection from "@/components/programs/common/student-experience/CampusCommunitySection";
import IndustryExposureSection from "@/components/programs/common/student-experience/IndustryExposureSection";
import StudentSupportSection from "@/components/programs/common/student-experience/StudentSupportSection";
import LifeBeyondAcademicsSection from "@/components/programs/common/student-experience/LifeBeyondAcademicsSection";
import StoriesSection from "@/components/programs/common/student-experience/StoriesSection";
import FinalCTASection from "@/components/programs/common/student-experience/FinalCTASection";
import HeroSection from "@/components/shared/HeroSection";

export default function StudentExperiencePageClient() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        pageName="Student Experience"
        title="Student Experience"
        description1={<>Learning that shapes how you think — and who you become.</>}
        description2={
          <>
            MBA experience is designed to go beyond lectures. It is built around{" "}
            <strong className="font-trade-gothic-bold">
              structured thinking, applied learning, faculty interaction, and collaborative engagement.
            </strong>
          </>
        }
        description3="The goal is to help students grow academically, professionally, and personally."
        image="/images/herosection/why-rvscasmba.webp"
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
