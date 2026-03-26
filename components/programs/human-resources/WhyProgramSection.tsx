import Link from "next/link";

export default function WhyProgramSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Why MBA in Human Resource at RVS CAS MBA?
          </h2>
        </div>

        <p className="text-lg pb-7 md:text-xl text-booth-dark-gray font-trade-gothic-light"><b>Where People Decisions Drive Business Outcomes</b></p>

        <div className="space-y-6">
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Human Resources is not a support function. It is a business-critical discipline that shapes how organizations perform.
          </p>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Many HR programs focus on processes, compliance, and administrative execution. This program starts from a different place: HR is about systems, performance, and organizational effectiveness.
          </p>

          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Students learn to:
          </p>

          <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Connect HR strategy with business objectives</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Design performance management and incentive systems</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Understand how behavior drives outcomes</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Analyze workforce data for decision-making</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Evaluate leadership impact on organizational performance</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Apply HR analytics in real-world scenarios</span>
            </li>
          </ul>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            This ensures HR is learned as a strategic and decision-oriented function, not just execution.
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
