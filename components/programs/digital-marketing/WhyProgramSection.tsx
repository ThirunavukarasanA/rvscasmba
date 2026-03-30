import Link from "next/link";

export default function WhyProgramSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Why Digital Marketing at RVS CAS MBA
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Digital marketing is not just about running ads or posting content. It is about making decisions under uncertainty, where budgets, channels, and outcomes keep changing.
          </p>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Many programs focus on tools in isolation and surface-level execution. This program starts with how digital marketing decisions are actually made in real businesses.
          </p>

          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Students learn to:
          </p>

          <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Understand how businesses use digital channels to grow</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Connect platforms with strategy and business objectives</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Evaluate which channels to use and why</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Design campaigns with measurable outcomes</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Interpret performance data and optimise decisions</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Balance brand-building and performance marketing</span>
            </li>
          </ul>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            This ensures digital marketing is learned as a decision discipline, not just a toolset.
          </p>

          {/* <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            The curriculum emphasizes{" "}
            <strong className="font-trade-gothic-bold">
              application over theory
            </strong>
            , ensuring graduates are industry-ready.
          </p> */}
          <Link
            href="/request-information"
            className="inline-flex items-center gap-2 text-booth-maroon font-trade-gothic-bold hover:underline"
          >
            Talk to an Academic Advisor
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
          </Link>
        </div>
      </div>
    </section>
  );
}
