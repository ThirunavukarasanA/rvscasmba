import Image from "next/image";
import CurriculumAccordion from "./CurriculumAccordion";

const items = [
  {
    title: "Career Opportunities",
    content: [
      {
        type: "list" as const,
        items: [
          "Financial Analyst",
          "FP&A Analyst",
          "Investment Analyst",
          "Credit Risk Analyst",
          "Corporate Finance Executive",
          "Equity Research Analyst",
        ],
      },
    ],
  },
  {
    title: "Top Recruiters",
    content: [
      {
        type: "list" as const,
        items: [
          "Big 4 Firms",
          "Corporate Finance Departments",
          "Financial Services Companies",
          "FinTech Firms",
          "Asset Management Companies",
          "Wealth Management Companies",
        ],
      },
    ],
  },
  {
    title: "Career Support",
    content: [
      {
        type: "list" as const,
        items: [
          "Resume building and interview preparation",
          "Case-based training aligned to interview formats",
          "Industry exposure through internships and live projects",
          "Certification-oriented learning throughout the programme",
        ],
      },
    ],
  },
  {
    title: "Sample Career Trajectory",
    content: [
      {
        type: "list" as const,
        items: [
          "Learn. Apply. Succeed.",
          "Think Finance. Act Strategically.",
          "Beyond Theory. Into Real Finance.",
          "From Concepts to Corporate Decisions.",
          "Where Finance Meets Real-World Impact.",
        ],
      },
    ],
  },
];

export default function CareerOutcomesSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Career Outcomes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
              <strong>Where This Programme Can Take You</strong>
            </p>

            <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
              MBA in Global Finance & Corporate Analyst is designed not just to educate — but to
              build career competence, especially for roles that require
              analytical depth, financial reasoning, and business insight.
            </p>

            <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
              You are trained for decision-focused finance roles, not routine execution.
            </p>

            {/* <CurriculumAccordion items={items} /> */}

            {/* <div>
              <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                Typical Roles
              </h3>
              <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
                <li className="flex items-center gap-3">
                  <span className="text-booth-maroon mt-1">•</span>
                  <span>Financial Analyst</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-booth-maroon mt-1">•</span>
                  <span>Investment Analyst</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-booth-maroon mt-1">•</span>
                  <span>Equity Research Associate</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-booth-maroon mt-1">•</span>
                  <span>Wealth Management Advisor</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-booth-maroon mt-1">•</span>
                  <span>Risk Analyst</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-booth-maroon mt-1">•</span>
                  <span>FinTech Strategist</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-booth-maroon mt-1">•</span>
                  <span>Corporate Finance Executive</span>
                </li>
              </ul>
            </div> */}

            {/* <a
              href="#"
              className="inline-flex items-center gap-2 text-booth-maroon font-trade-gothic-bold hover:underline"
            >
              Career & Placement Support
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a> */}
          </div>
          <div className="relative h-64 md:h-80">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
              alt="Finance professionals working"
              fill
              className="object-cover rounded"
            />
          </div>
        </div>
        <CurriculumAccordion items={items} />
      </div>
    </section>
  );
}
