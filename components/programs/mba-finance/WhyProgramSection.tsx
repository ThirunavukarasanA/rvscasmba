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
            Unlike traditional programs, this MBA focuses on how finance professionals think and make decisions, not on textbook-driven learning.
          </p>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Most finance programs focus on formulas and ratios, treat accounting numbers as absolute truth, and offer limited exposure to real-world decision-making.
          </p>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            This program starts from a different place: finance is decision-making under uncertainty.
          </p>

          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            This is a serious programme for serious learners. You will not just study finance, you will build the judgment to practice it.
          </p>

          <div className="space-y-4 text-booth-dark-gray font-trade-gothic-light">
            <p className="text-lg md:text-xl"><strong className="font-trade-gothic-bold">Faculty-Led, Thinking-Driven Learning</strong><br />Learn from global-level faculty and industry practitioners. The classroom mirrors professional finance rigor, not textbook repetition.</p>
            <p className="text-lg md:text-xl"><strong className="font-trade-gothic-bold">Applied by Design, Not by Label</strong><br />Concepts are taught through real companies, real decisions, and real consequences. Theory is used only where it improves practice.</p>
            <p className="text-lg md:text-xl"><strong className="font-trade-gothic-bold">Career Readiness Through Clarity, Not Shortcuts</strong><br />Graduate ready to analyze financial statements critically, question what is not visible in the numbers, and evaluate real economic value.</p>
            <p className="text-lg md:text-xl"><strong className="font-trade-gothic-bold">A Serious Programme for Serious Learners</strong><br />Seats are limited and selection is rigorous, designed for students committed to finance as a career.</p>
          </div>

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
