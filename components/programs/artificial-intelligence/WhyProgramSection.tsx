export default function WhyProgramSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Why This Program
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Built Around How AI Is Actually Used in Business
          </p>

          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            AI looks powerful in demos, but in real environments it can be incomplete, biased, and hard to apply. The real challenge is not building models alone, but using AI for reliable, context-aware decisions.
          </p>
          <p className="text-md md:text-lg text-booth-dark-gray font-trade-gothic-light">Students learn to:</p>
          <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Frame business problems before building models</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Identify where AI creates real value (and where it does not)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Question assumptions behind data and models</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Select appropriate analytical and AI approaches</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Interpret outputs in a business context</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Convert AI-driven insights into decisions and actions</span>
            </li>
          </ul>

          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            This is a problem-first, tools-second approach. Faculty trained at leading global institutions bring academic rigor and applied clarity, ensuring structured thinking remains central to learning.
          </p>
          {/* <Link
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
          </Link> */}
        </div>
      </div>
    </section>
  );
}
