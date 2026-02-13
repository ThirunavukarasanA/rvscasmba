import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
// import HeroSection from "@/components/programs/common/how-to-apply/HeroSection";
import BeforeYouApplySection from "@/components/programs/common/how-to-apply/BeforeYouApplySection";
import ApplicationStepsSection from "@/components/programs/common/how-to-apply/ApplicationStepsSection";
import ImportantDatesSection from "@/components/programs/common/how-to-apply/ImportantDatesSection";
import AfterYouApplySection from "@/components/programs/common/how-to-apply/AfterYouApplySection";
// import NeedHelpSection from "@/components/programs/common/how-to-apply/NeedHelpSection";
import FinalCTASection from "@/components/programs/common/how-to-apply/FinalCTASection";
import HowToApplySection from "@/components/programs/common/how-to-apply/HowToApplySection";
import WeAreHereToHelp from "@/components/programs/common/how-to-apply/WeAreHereToHelp";
import HeroSection from "@/components/shared/HeroSection";

export const metadata: Metadata = {
  title: "How to Apply - RVS CAS MBA",
  description: "Step-by-step guide to applying for MBA programs at RVS CAS MBA. Learn about requirements, deadlines, and the application process.",
};

export default function HowToApplyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        pageName="How to Apply"
        title="How to Apply to RVS CAS MBA"
        description1={<>A clear, guided application process</>}
        description2={<>Applying to the MBA at RVS College of Arts & Science is designed to be simple and supportive. The goal is to understand your academic readiness and intent to learn, not to test your ability to navigate complex forms.</>}
        description3=""
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop"
        button1=""
        button2=""
        button1Link=""
        button2Link=""
      />
      <BeforeYouApplySection />
      <HowToApplySection />
      <FinalCTASection content="Start Your MBA Application" para="" applyLink="Apply Now" requestInfoLink="Request Information" admissionsLink="" />
      <ApplicationStepsSection />
      <ImportantDatesSection />
      <AfterYouApplySection />
      <WeAreHereToHelp />
      <FinalCTASection content="Ready to Apply?" para="If you’re ready to begin your MBA journey, take the next step." applyLink="Apply Now" requestInfoLink="" admissionsLink=" Contact Admissions" />
      <Footer />
    </main>
  );
}
