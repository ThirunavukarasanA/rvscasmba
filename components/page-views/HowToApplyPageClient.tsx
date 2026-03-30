"use client";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import BeforeYouApplySection from "@/components/programs/common/how-to-apply/BeforeYouApplySection";
import ApplicationStepsSection from "@/components/programs/common/how-to-apply/ApplicationStepsSection";
import ImportantDatesSection from "@/components/programs/common/how-to-apply/ImportantDatesSection";
import AfterYouApplySection from "@/components/programs/common/how-to-apply/AfterYouApplySection";
import FinalCTASection from "@/components/programs/common/how-to-apply/FinalCTASection";
import HowToApplySection from "@/components/programs/common/how-to-apply/HowToApplySection";
import WeAreHereToHelp from "@/components/programs/common/how-to-apply/WeAreHereToHelp";
import HeroSection from "@/components/shared/HeroSection";

export default function HowToApplyPageClient() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        pageName="How to Apply"
        title="How to Apply"
        description1={<>A clear, guided application process</>}
        description2={
          <>
            Applying to the MBA at RVS College of Arts & Science is designed to be simple and supportive. The goal is to understand your academic readiness and intent to learn, not to test your ability to navigate complex forms.
          </>
        }
        description3=""
        image="/images/herosection/apply.JPG"
        button1=""
        button2=""
        button1Link=""
        button2Link=""
      />
      <BeforeYouApplySection />
      <HowToApplySection />
      <FinalCTASection
        content="Start Your MBA Application"
        para=""
        applyLink="Apply Now"
        requestInfoLink="Request Information"
        admissionsLink=""
      />
      <ApplicationStepsSection />
      <ImportantDatesSection />
      <AfterYouApplySection />
      <WeAreHereToHelp />
      <FinalCTASection
        content="Ready to Apply?"
        para="If you’re ready to begin your MBA journey, take the next step."
        applyLink="Apply Now"
        requestInfoLink=""
        admissionsLink=" Contact Admissions"
      />
      <Footer />
    </main>
  );
}
