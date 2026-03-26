import CurriculumAccordion from "./CurriculumAccordion";

const curriculumData = [
  {
    title: "Core Learning Areas",
    content: [
      {
        type: "list" as const,
        items: [
          "Financial Accounting (Foundations to Advanced)",
          "Financial Management",
          "Accounting & Financial Analysis",
          "Financial Planning & Analysis (FP&A)",
          "Capital Markets",
          "Planning & Performance Systems",
          "Data-Driven Finance",
          "Finance Business Partnering",
          "AI in Finance",
        ],
      },
    ],
  },
  {
    title: "Specialization Courses",
    content: [
      {
        type: "list" as const,
        items: [
          "Accounting integration with corporate finance",
          "FP&A and decision-support frameworks",
          "Analytics-led financial interpretation",
          "Strategic decision-making through real cases",
        ],
      },
    ],
  },
  {
    title: "Tools & Platforms",
    content: [
      {
        type: "list" as const,
        items: [
          "Excel for financial modelling",
          "Data visualization tools",
          "Business dashboards",
          "AI tools (ChatGPT, Copilot)",
        ],
      },
    ],
  },
  {
    title: "Capstone Project",
    content: [
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            Students complete a capstone project focused on real financial
            problems with end-to-end analysis and recommendation design. The capstone
            demonstrates applied FP&A capability, analytical judgment, and decision-focused
            financial thinking in business-like scenarios.
          </p>
        ),
      },
    ],
  },
  // {
  //   title: "Test",
  //   content: [
  //     { type: "paragraph" as const, text: "Intro text..." },
  //     { type: "list" as const, items: ["Point 1", "Point 2"] },
  //     { type: "paragraph" as const, text: "Conclusion text..." },
  //   ],
  // },
];

export default function CurriculumSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-8 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Curriculum Overview
          </h2>
        </div>

        <CurriculumAccordion items={curriculumData} />
      </div>
    </section>
  );
}
