import Link from "next/link";

export default function WhyProgramSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Why MBA in Global Finance & Corporate Analyst at RVS CAS?
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Most finance programs focus on formulas, ratios, and accounting as absolute truth. This program starts from a different place: finance is decision-making under uncertainty.
          </p>

          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            What you’ll build here
          </p>

          <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Think beyond financial statements</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Understand how businesses create or destroy value</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Interpret accounting numbers with skepticism</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Analyze capital allocation decisions</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Connect finance with business models and strategy</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Build FP&A and forecasting thinking</span>
            </li>
          </ul>

          {/* <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            The curriculum emphasizes{" "}
            <strong className="font-trade-gothic-bold">
              application over theory
            </strong>
            , ensuring graduates are industry-ready.
          </p> */}
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            This is a thinking-first, application-driven program, not a content-heavy degree.
          </p>
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
