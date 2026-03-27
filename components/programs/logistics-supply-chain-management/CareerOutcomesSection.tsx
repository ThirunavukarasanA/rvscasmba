import Image from "next/image";
import CurriculumAccordion from "./CurriculumAccordion";

const items = [
  {
    title: "Real Roles",
    content: [
      {
        type: "list" as const,
        items: [
          "Supply Chain Executive",
          "Logistics Manager",
          "Procurement Analyst",
          "Inventory Planner",
          "Operations Manager",
          "Distribution Manager",
        ],
      },
    ],
  },
  {
    title: "Career Support with Purpose",
    content: [
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            <strong>
              RVS CAS combines academic discipline with structured career readiness:
            </strong>
          </p>
        ),
      },
      {
        type: "list" as const,
        items: [
          "Interview preparation",
          "Case simulation training",
          "Industry exposure",
          "LinkedIn mastery for career growth and networking",
          "Professional development guidance",
          "Skill-building aligned with ERP and analytics tools",
        ],
      },
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            Graduates are prepared for decision-focused supply chain roles where cost, service, and efficiency must be balanced across complex operations.
          </p>
        ),
      },
    ],
  },
  {
    title: "Sample Career Progression",
    content: [
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            Entry: Operations and supply chain roles {"->"} Mid: Planning, procurement, or logistics leadership {"->"} Growth: Strategic supply chain and operations leadership
          </p>
        ),
      },
    ],
  },
  {
    title: "Employer Ecosystem",
    content: [
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            <strong>
              A diverse range of industries where supply chain expertise drives performance and growth.
            </strong>
          </p>
        ),
      },
      {
        type: "list" as const,
        items: [
          "Manufacturing companies",
          "Retail and e-commerce businesses",
          "Logistics and distribution firms",
          "Global trade and export-import environments",
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
              MBA in Logistics & Supply Chain Management is designed not just to educate, but to build professional competence for roles that require operational precision, analytical thinking, and systems-level insight.
            </p>

            <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
              This specialization prepares you for decision-focused supply chain careers, where managing complexity, optimizing processes, and integrating digital systems matter more than routine coordination.
            </p>
            <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
              After completing the programme, graduates are positioned to work in operations, analytics, and supply chain roles, and progress into strategic and operational leadership over time.
            </p>

            {/* <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
              Graduates are equipped to enter digital marketing functions with the ability to plan campaigns, use tools with intent, analyze outcomes, and explain their decisions clearly.
            </p> */}

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
