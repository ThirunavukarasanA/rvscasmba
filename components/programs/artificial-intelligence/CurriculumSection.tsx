import CurriculumAccordion from "./CurriculumAccordion";

const curriculumData = [
  {
    title: "Core Areas of Learning",
    content: [
      {
        type: "list" as const,
        items: [
          "Programming with Python",
          "Structured Query Language (SQL)",
          "Data Visualization (Tableau)",
          "Data Engineering",
          "Generative AI Foundations",
          "Generative AI for Business Applications",
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
          "AI applications in business",
          "Data-driven decision systems",
          "Model development and deployment",
          "Analytical problem-solving",
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
          "Python (Pandas, NumPy, Scikit-Learn)",
          "SQL",
          "Tableau",
          "Web scraping tools (Selenium, Scrapy, Beautiful Soup)",
          "Generative AI tools (Transformers, Hugging Face, LangChain, FAISS)",
          "GitHub",
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
            Students work on real-world projects including social media analytics, retail data projects, stock sentiment analysis, AI-powered assistants, and business-focused AI use cases. The capstone requires solving real business problems, building an end-to-end project portfolio, and demonstrating applied AI capability across domains.
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
