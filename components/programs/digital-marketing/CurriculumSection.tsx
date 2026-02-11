import CurriculumAccordion from "./CurriculumAccordion";

const curriculumData = [
  {
    title: "Core Learning Areas",
    content: [
      {
        type: "list" as const,
        items: [
          "Marketing Strategy & Customer Insight",
          "Digital Marketing Analytics & Measurement",
          "Search & Performance Marketing",
          "Social Media & Content Strategy",
          "Simulation-Based Digital Campaign Management",
          "Integrated Marketing & Brand Management",
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
          "Introduction to Digital Marketing",
          "Search Engine Optimization (SEO) - Practical",
          "Search Engine Marketing (SEM) - Practical",
          "Social Media Marketing (SMM)",
          "Social Media Marketing (SMM) - Practical",
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
          "Stukent Digital Marketing Simulations",
          "Google Ads",
          "Google Analytics",
          "Google Search Console",
          "Meta Ads Manager",
          "LinkedIn Campaign Manager",
          "Mailchimp",
          "HubSpot CRM",
          "SEMrush",
          "Ahrefs",
          "Hootsuite",
          "Canva",
          "WordPress",
          "Hotjar",
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
            The Capstone Project is the final integrative component of the MBA in Digital Marketing. Students apply the frameworks, concepts, and tools studied throughout the program to either a real organizational marketing problem or the structured creation and growth of a digital brand.
          </p>
        ),
      },
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            The focus is on strategic thinking and decision-making, not isolated campaign execution. Students are expected to define objectives, design integrated digital strategies, implement using appropriate tools, and evaluate outcomes using performance metrics.
          </p>
        ),
      },
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            All capstone work is faculty-guided and framework-driven, with assessment based on the clarity of reasoning, quality of integration across channels, and the ability to connect marketing actions to measurable results.
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
