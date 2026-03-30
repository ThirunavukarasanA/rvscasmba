import CurriculumAccordion from "./CurriculumAccordion";

const curriculumData = [
  {
    title: "Core Learning Areas",
    content: [
      {
        type: "list" as const,
        items: [
          "Introduction to Digital Marketing",
          "Search Engine Optimisation (SEO)",
          "Search Engine Marketing (SEM)",
          "Social Media Marketing",
          "Content and Brand Strategy",
        ],
      },
    ],
  },
  {
    title: "Tools & Platforms",
    content: [
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed mb-4">
            Students gain hands-on exposure to industry platforms used by companies:
          </p>
        ),
      },
      {
        type: "list" as const,
        items: [
          "Stukent Digital Marketing Simulations",
          "Google Ads, Google Analytics, Google Search Console",
          "Meta Ads Manager, LinkedIn Campaign Manager",
          "Mailchimp, HubSpot CRM",
          "SEMrush, Ahrefs",
          "Hootsuite, Canva, WordPress, Hotjar",
        ],
      },
    ],
  },
  {
    title: "Capstone Project",
    content: [
      {
        type: "list" as const,
        items: [
          "Apply digital strategies in real business-like environments",
          "Work with campaign and performance scenarios",
          "Translate learning into portfolio-ready practical capability",
        ],
      },
    ],
  },
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
