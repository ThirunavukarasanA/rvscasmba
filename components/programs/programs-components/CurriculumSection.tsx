import CurriculumAccordion from "./CurriculumAccordion";

const curriculumData = [
  {
    title: "Core Courses",
    content: [
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            Foundations in managerial economics, accounting, statistics, data fluency, strategy, and leadership thinking.
          </p>
        ),
      },
    ],
  },
  {
    title: "Specialization Courses",
    content: [
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            In-depth study in each chosen field, integrating analytical frameworks, real cases, and applied decision skills.
          </p>
        ),
      },
    ],
  },
  {
    title: "Applied Labs & Simulations",
    content: [
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            Business challenges, tool-based projects, and live cases that mirror organizational complexity and industry requirements.
          </p>
        ),
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
            An integrative engagement where students apply conceptual, analytical, and strategic tools to real or simulated business situations — demonstrating their ability to move from data and frameworks to decision and impact.
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
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-8 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Curriculum Structure
          </h2>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            MBA at RVS CAS combines:
          </p>
        </div>

        <CurriculumAccordion items={curriculumData} />
      </div>
    </section>
  );
}
