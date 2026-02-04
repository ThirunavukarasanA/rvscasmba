import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/programs/common/how-to-apply/HeroSection";
import BeforeYouApplySection from "@/components/programs/common/how-to-apply/BeforeYouApplySection";
import ApplicationStepsSection from "@/components/programs/common/how-to-apply/ApplicationStepsSection";
import ImportantDatesSection from "@/components/programs/common/how-to-apply/ImportantDatesSection";
import AfterYouApplySection from "@/components/programs/common/how-to-apply/AfterYouApplySection";
import NeedHelpSection from "@/components/programs/common/how-to-apply/NeedHelpSection";
import FinalCTASection from "@/components/programs/common/how-to-apply/FinalCTASection";

export const metadata: Metadata = {
  title: "How to Apply - RVS CAS MBA",
  description: "Step-by-step guide to applying for MBA programs at RVS CAS MBA. Learn about requirements, deadlines, and the application process.",
};

export default function HowToApplyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BeforeYouApplySection />
      <ApplicationStepsSection />
      <ImportantDatesSection />
      <AfterYouApplySection />
      <NeedHelpSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
