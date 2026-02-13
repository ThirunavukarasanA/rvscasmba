import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
// import HeroSection from "@/components/programs/common/faq/HeroSection";
import ProgramEligibilitySection from "@/components/programs/common/faq/ProgramEligibilitySection";
import AdmissionsApplicationSection from "@/components/programs/common/faq/AdmissionsApplicationSection";
import CurriculumLearningSection from "@/components/programs/common/faq/CurriculumLearningSection";
import StudentExperienceSection from "@/components/programs/common/faq/StudentExperienceSection";
import CareersSupportSection from "@/components/programs/common/faq/CareersSupportSection";
import FeesScholarshipsSection from "@/components/programs/common/faq/FeesScholarshipsSection";
import StillHaveQuestionsSection from "@/components/programs/common/faq/StillHaveQuestionsSection";
import HeroSection from "@/components/shared/HeroSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - RVS CAS MBA",
  description: "Find answers to common questions about RVS CAS MBA programs, admissions, curriculum, student experience, and more.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        pageName="Frequently Asked Questions"
        title="Frequently Asked Questions"
        description1={<>Choosing an MBA is an important decision, and it’s natural to have questions.</>}
        description2={<>This section addresses common queries about the MBA at RVS College of Arts & Science, covering programs, admissions, learning approach, student life, careers, and fees.</>}
        description3={<>If you don’t find what you’re looking for, the admissions team is always available to help.</>}
        image="/images/faq/faq2.png"
        button1=""
        button2=""
        button1Link=""
        button2Link=""
      />
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
