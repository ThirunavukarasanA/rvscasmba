import CurriculumAccordion from "./CurriculumAccordion";

const curriculumData = [
  {
    title: "Core Areas of Learning",
    content: [
      {
        type: "list" as const,
        items: [
          "Supply Chain Strategy & Network Design",
          "Procurement & Vendor Management",
          "Inventory & Warehouse Management",
          "Logistics & Transportation Planning",
          "Lean Six Sigma & Process Optimization",
          "Operations Analytics",
          "Risk Management & Global Trade",
          "Digital Supply Chain Management",
        ],
      },
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            The curriculum reflects the increasing digitalization of logistics and supply networks.
          </p>
        ),
      },
    ],
  },
  {
    title: "Specialization Courses",
    content: [
      {
        type: "list" as const,
        items: [
          "Introduction to Logistics Management",
          "Sourcing and Procurement",
          "Warehousing and Distribution Facilities Management",
          "Logistics and Supply Chain Management Models",
          "International Logistics & Global Supply Chain Management",
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
          "SAP MM (Materials Management)",
          "ERP systems and supply chain modules",
          "Advanced Excel for operations analytics",
          "Lean Six Sigma tools",
          "Power BI / Tableau for performance visualization",
          "Inventory planning and demand forecasting models",
          "Process mapping and optimization frameworks",
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
            The Capstone Project integrates supply chain strategy and digital tools into a structured applied engagement. Students work on either a real logistics challenge or a simulated operational scenario involving supply network analysis, cost and efficiency evaluation, digital system integration, risk assessment, and strategic performance recommendations. Evaluation emphasizes clarity of reasoning, process improvement logic, and measurable operational impact, rather than routine execution.
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
