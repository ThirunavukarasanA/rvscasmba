import Image from "next/image";
import CurriculumAccordion from "./CurriculumAccordion";

const items = [
  {
    title: "Real Roles for Real Financial Thinking",
    content: [
      // {
      //   type: "paragraph" as const,
      //   text: "Real Roles for Real Financial Thinking",
      // },
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            <strong>
              Graduates of the Applied Finance specialization have gone on to
              careers such as:
            </strong>
          </p>
        ),
      },
      {
        type: "list" as const,
        items: [
          "Financial Analyst – corporate, investment & equity research",
          "Corporate Finance Associate – budgeting, capital planning, funding strategy",
          "Valuation & Investment Analyst – valuation modeling, DCF, multiples, scenario analysis",
          "Business Analyst – financial performance and strategic improvement",
          "Consulting Analyst (Finance Focus) – decision frameworks for clients",
        ],
      },
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            This career profile reflects the program’s emphasis on integrated
            financial judgment and applied decision skills.
          </p>
        ),
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
              RVS CAS combines academic rigor with structured career readiness:
            </strong>
          </p>
        ),
      },
      {
        type: "list" as const,
        items: [
          "Dedicated Career Workshops – resume strategy, case interviewing, analytics portfolio",
          "Live Case Challenges & Industry Projects – real problem solving with organizations",
          "Mentoring by Faculty & Industry Experts – feedback that strengthens real skills",
          "Internships with Evaluation – conversion opportunities into full-time roles",
        ],
      },
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            Unlike programs that focus only on placement numbers, we focus on
            career clarity and capability — helping you articulate your
            analytical edge and long-term potential.
          </p>
        ),
      },
    ],
  },
  {
    title: "Sample Career Trajectory",
    content: [
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            Year 1: Build financial foundations and analytical reasoning
          </p>
        ),
      },
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            Summer Break: Internship Offer with faculty support
          </p>
        ),
      },
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            Year 2: Apply frameworks in real signals, cases, and projects
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
              Organizations that commonly recruit RVS CAS Applied Finance
              graduates include:
            </strong>
          </p>
        ),
      },
      {
        type: "list" as const,
        items: [
          "Banks & Financial Institutions",
          "Consulting & Advisory Firms",
          "Investment & Asset Management Houses",
          "Corporate Finance Departments",
          "Startups Seeking Financial Strategy Talent",
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
              A Launchpad for Financial Careers with Real Judgement and
              Analytical Clarity
            </p>

            <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
              MBA in Applied Finance is designed not just to educate — but to
              build career competence, especially for roles that require
              analytical depth, financial reasoning, and business insight.
            </p>

            <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
              This is a specialization that prepares you for decision-focused
              financial careers, not just routine execution.
            </p>

            {/* <CurriculumAccordion items={items} /> */}

            {/* <div>
              <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                Typical Roles
              </h3>
              <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
                <li className="flex items-start gap-3">
                  <span className="text-booth-maroon mt-1">•</span>
                  <span>Financial Analyst</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-booth-maroon mt-1">•</span>
                  <span>Investment Analyst</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-booth-maroon mt-1">•</span>
                  <span>Equity Research Associate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-booth-maroon mt-1">•</span>
                  <span>Wealth Management Advisor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-booth-maroon mt-1">•</span>
                  <span>Risk Analyst</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-booth-maroon mt-1">•</span>
                  <span>FinTech Strategist</span>
                </li>
                <li className="flex items-start gap-3">
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
