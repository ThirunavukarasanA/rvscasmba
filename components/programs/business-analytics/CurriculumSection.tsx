import CurriculumAccordion from "./CurriculumAccordion";

const curriculumData = [
  {
    title: "Core Areas Of Learning",
    content: [
      {
        type: "list" as const,
        items: [
          "Data cleaning and preprocessing",
          "Exploratory Data Analysis (EDA)",
          "Model building using machine learning algorithms",
          "Communicating results through visualization and dashboards",
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
          "SQL** - Practical",
          "Excel for Managers** - Practical",
          "Python for Managers** - Practical",
          "Machine Learning** - Practical",
          "Data Visualization Using Tableau** - Practical",
          "Marketing Analytics** - Practical",
          "Data Engineering** - Practical",
          "LLM and GenAI Applications** - Practical",
        ],
      },
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            Courses are sequenced to build from foundations to applied integration.
          </p>
        ),
      },
    ],
  },
  {
    title: "Tools & Platforms",
    content: [
      {
        type: "list" as const,
        items: [
          "Python",
          "Pandas",
          "NumPy",
          "SQL",
          "Excel",
          "Tableau",
          "Scikit-learn",
          "Seaborn",
          "Matplotlib",
          "Streamlit",
          "GitHub",
          "Transformers",
          "Hugging Face",
          "LangChain",
          "FAISS",
          "ChatGPT",
          "Gemini",
          "DALL·E",
          "Whisper",
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
            The Capstone Project brings together the full spectrum of knowledge gained throughout the Business Analytics specialization into a single, integrated applied engagement. Students work on either a real organizational data challenge or a structured business scenario that requires careful problem formulation, data collection and preparation, model development and validation, insight generation, and strategic recommendations. Evaluation is based on the clarity of analytical reasoning, sound justification of models, and the demonstrated business impact of the recommendations — not merely on technical execution. The capstone ultimately reflects a student’s ability to move from data to informed decision-making, which lies at the core of effective analytics leadership.
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
