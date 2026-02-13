import Link from "next/link";

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
            Built Around How Analytics Is Actually Used in Business
          </p>

          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Many analytics programs focus on tools and coding. This program begins with something more fundamental — how analytical decisions are made.
          </p>
          <p className="text-md md:text-lg text-booth-dark-gray font-trade-gothic-light">Students learn to:</p>
          <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Frame business problems before building models</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Question assumptions behind data</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Select appropriate analytical approaches</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Interpret results in a business context</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Translate insights into strategic decisions</span>
            </li>
          </ul>

          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Faculty trained at leading global business schools bring academic rigor and applied clarity, ensuring structured thinking remains central to learning
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
