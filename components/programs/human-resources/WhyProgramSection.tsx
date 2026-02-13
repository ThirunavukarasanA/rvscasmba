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

        <p className="text-lg pb-7 md:text-xl text-booth-dark-gray font-trade-gothic-light">
          <b>Where Human Capital Decisions Shape Organizational Success</b>
        </p>

        <div className="space-y-6">
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Human Resources is not limited to recruitment or compliance. It involves shaping culture, improving productivity, aligning incentives, and using data to guide workforce decisions.
          </p>

          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Students learn to:
          </p>

          <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Connect HR strategy with business objectives</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Analyze workforce data to support decision-making</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Design performance management systems</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Evaluate organizational behavior and leadership impact</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Apply HR analytics to real business scenarios</span>
            </li>
          </ul>

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
