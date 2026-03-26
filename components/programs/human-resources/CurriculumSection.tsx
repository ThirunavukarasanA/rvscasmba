import CurriculumAccordion from "./CurriculumAccordion";

const curriculumData = [
  {
    title: "Core Areas",
    content: [
      {
        type: "list" as const,
        items: [
          "Management and Organizational Behaviour",
          "Human Resource Management",
          "Economics for Decision Making",
          "Leadership & Strategy",
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
          "Talent Acquisition & Workforce Planning",
          "Employee Relationship Management",
          "Organizational Development",
          "Business Leadership",
          "HR Analytics",
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
          "HR analytics tools",
          "Workforce data systems",
          "Performance tracking frameworks",
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
            Students apply HR concepts through organizational case studies, talent strategy design, policy drafting and implementation, and performance system evaluation. Capstone work demonstrates practical, leadership-ready capability in solving real organizational challenges.
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
