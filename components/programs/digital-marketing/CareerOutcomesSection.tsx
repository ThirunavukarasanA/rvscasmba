import Image from "next/image";
import CurriculumAccordion from "./CurriculumAccordion";

const items = [
  {
    title: "Real Roles",
    content: [
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            <strong>
              Graduates are equipped for roles such as:
            </strong>
          </p>
        ),
      },
      {
        type: "list" as const,
        items: [
          "Digital Marketing Executive",
          "Performance Marketing Analyst",
          "Social Media Strategist",
          "SEO & Content Marketing Executive",
          "Marketing Operations Executive",
        ],
      },
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            The emphasis is on <b>role readiness</b>, not inflated titles.
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
              Career support at RVS CAS MBA is designed to strengthen long-term employability, not short-term placement outcomes.
            </strong>
          </p>
        ),
      },
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            Support includes:
          </p>
        ),
      },
      {
        type: "list" as const,
        items: [
          "Resume and profile building aligned to digital marketing roles",
          "Interview preparation focused on decision-making and reasoning",
          "Guidance on presenting academic projects, simulations, and capstone work",
        ],
      },
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            Students learn to <b>articulate how they think</b>, not just what tools they used.
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
            Graduates typically grow through capability-based progression.
          </p>
        ),
      },
      {
        type: "list" as const,
        items: ["Entry-level digital or performance marketing roles",
          "Channel-specific specialist or analyst positions",
          "Strategic or managerial responsibilities with experience"],
      },
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            The program builds foundations for sustained career growth, not one-time placement.
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
              The Digital Marketing specialization connects students to a diverse employer ecosystem, including:
            </strong>
          </p>
        ),
      },
      {
        type: "list" as const,
        items: [
          "Digital marketing and performance agencies",
          "Small and mid-sized businesses building in-house teams",
          "Startups and entrepreneurial ventures",
          "Marketing functions within established organizations",
        ],
      },
      {
        type: "paragraph" as const,
        text: (
          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
            This reflects the wide applicability of digital marketing expertise across sectors.
          </p>
        ),
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
              The MBA in Digital Marketing prepares students for professional marketing roles where strategic thinking, execution capability, and performance analysis matter.
            </p>

            <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
              The program focuses on building role-ready graduates by combining academic frameworks, simulation-based learning, and applied projects.
            </p>

            <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
              Graduates are equipped to enter digital marketing functions with the ability to plan campaigns, use tools with intent, analyze outcomes, and explain their decisions clearly.
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
