import CurriculumAccordion from "./CurriculumAccordion";

const curriculumData = [
  {
    title: "Core Learning Areas",
    content: [
      {
        type: "list" as const,
        items: [
          "Financial Reporting & Performance Analysis",
          "Capital Markets & Investment Analysis",
          "Financial Planning & Analysis (FP&A)",
          "Wealth & Portfolio Management",
          "Equity Valuation & Financial Modeling",
          "Financial Decision-Making for Business Leadership",
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
          "Financial Reporting Analysis",
          "Financial Management",
          "Financial Statement Analysis (AFSA)",
          "Accounting and Financial Analysis",
          "Wealth Management",
          "Capital Markets",
          "Financial Planning and Analysis (FP&A) – I",
          "Financial Planning and Analysis (FP&A) – II",
          "Financial Modelling and Equity Valuation",
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
          "Excel",
          "Bloomberg Terminal",
          "RiskMetrics",
          "FactSet",
          "Stata",
          "Moody's",
          "MoneyControl",
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
            cases, complemented by company visits that offer practical insights
            into pricing decisions, cost structures, and applied financial
            concepts used by businesses.
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
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
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
