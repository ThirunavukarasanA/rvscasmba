import CurriculumAccordion from "./CurriculumAccordion";

const curriculumData = [
  {
    title: "Core Learning Areas",
    content: [
      {
        type: "list" as const,
        items: [
          "Introduction to Digital Marketing",
          "Search Engine Optimization (SEO)",
          "Search Engine Marketing (SEM)",
          "Social Media Marketing",
          "Content and Brand Strategy",
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
          "Performance marketing",
          "Growth strategy",
          "Customer acquisition and retention",
          "Analytics-led decision making",
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
            Students gain practical exposure through campaign-based simulations, real-world project work, internship experience, and performance-driven marketing scenarios.
          </p>
        ),
      },
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            Capstone work ensures application of digital strategies in business-like environments, hands-on execution across channels, and portfolio-ready practical capability.
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
