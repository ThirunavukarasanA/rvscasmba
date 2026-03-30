"use client";

import ExploreFaculty from "@/components/faculty/ExploreFaculty";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";

export default function FacultyListingPageClient() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        pageName="Faculty"
        title="Faculty & Management Scholars"
        description1={
          <>
            <strong>Academic Rigor. Applied Insight. Mentorship That Matters.</strong>
          </>
        }
        description2={
          <>
            MBA faculty are management scholars — educators who combine deep academic grounding with practical insight. Rather than simply delivering content, they engage students in disciplined thinking, analytical reasoning, and real-world application.
          </>
        }
        description3="Our faculty design learning experiences that integrate concepts, frameworks, and decision-making competence across business domains."
        image="/images/herosection/faculty1.png"
        button1=""
        button2=""
        button1Link=""
        button2Link=""
      />
      <ExploreFaculty />
      <Footer />
    </main>
  );
}
