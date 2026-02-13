import CurriculumAccordion from "./CurriculumAccordion";

const curriculumData = [
  {
    title: "Core Areas",
    content: [
      {
        type: "list" as const,
        items: [
          "Strategic Human Resource Management",
          "Organizational Behavior & Leadership",
          "Talent Acquisition & Workforce Planning",
          "Performance Management Systems",
          "Payroll & Compensation Management",
          "Industrial Relations & Labour Law",
          "HR Analytics & Data-Driven Decision-Making"
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
          "Recruitment and Selection",
          "Human Resource Management",
          "Employee Relationship Management",
          "Organizational Development",
          "Business Leadership",
          "HR Analytics"
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
          "Chatgpt",
          "Excel",
          "Survey monkey",
          "HRIS platforms",
          "G-suite",
          "Workday",
          "bambooHR",
          "iCIMS",
          "Zohorecurit",
          "Greenhouse",
          "JazzHR",
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
            The Capstone Project integrates learning into a structured HR engagement where students address either a real organizational HR challenge or a simulated workforce scenario. This involves workforce analysis and planning, policy design, performance strategy development, data-driven evaluation, and assessment of organizational impact. Evaluation emphasizes clarity of reasoning, strategic alignment, and measurable outcomes rather than procedural execution. The capstone ultimately demonstrates a student’s ability to translate people data into informed leadership decisions.
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
