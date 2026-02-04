import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/programs/common/faq/HeroSection";
import ProgramEligibilitySection from "@/components/programs/common/faq/ProgramEligibilitySection";
import AdmissionsApplicationSection from "@/components/programs/common/faq/AdmissionsApplicationSection";
import CurriculumLearningSection from "@/components/programs/common/faq/CurriculumLearningSection";
import StudentExperienceSection from "@/components/programs/common/faq/StudentExperienceSection";
import CareersSupportSection from "@/components/programs/common/faq/CareersSupportSection";
import FeesScholarshipsSection from "@/components/programs/common/faq/FeesScholarshipsSection";
import StillHaveQuestionsSection from "@/components/programs/common/faq/StillHaveQuestionsSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - RVS CAS MBA",
  description: "Find answers to common questions about RVS CAS MBA programs, admissions, curriculum, student experience, and more.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProgramEligibilitySection />
      <AdmissionsApplicationSection />
      <CurriculumLearningSection />
      <StudentExperienceSection />
      <CareersSupportSection />
      <FeesScholarshipsSection />
      <StillHaveQuestionsSection />
      <Footer />
    </main>
  );
}
