import CurriculumAccordion from "./CurriculumAccordion";

const curriculumData = [
  {
    title: "Core Areas of Learning",
    content: [
      {
        type: "list" as const,
        items: [
          "Managerial Economics",
          "Financial Management",
          "Business Statistics & SPSS",
          "Strategic Management",
          "Lean Six Sigma & Process Optimization",
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
          "Logistics & Distribution Management",
          "Inventory & Warehouse Management",
          "Procurement & Materials Management",
          "Supply Chain Models & Analytics",
          "International Trade & Documentation",
          "Risk & Disruption Management",
        ],
      },
    ],
  },
  {
    title: "Industry Tools & Platforms",
    content: [
      {
        type: "list" as const,
        items: [
          "SAP",
          "Frepple",
          "ERPNext",
          "Supply chain planning and analytics tools",
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
            Students apply concepts through supply chain case studies, network design projects, cost optimization exercises, operational strategy simulations, and ERP-driven projects. Capstone work ensures end-to-end understanding, practical problem-solving, and system-level thinking capability.
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
