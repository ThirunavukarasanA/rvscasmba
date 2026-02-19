import Link from "next/link";

export default function MBAClassroomSection() {
  const mbaEngagements = [
    "Real company case discussions",
    "ROIC diagnostics",
    "Intangible asset analysis",
    "Capital allocation frameworks",
    "M&A failure case studies",
    "Accounting interpretation beyond reported numbers",
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
        <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-6 md:mb-8">
          The Same Framework Used in the MBA Classroom
        </h2>
        <p className="text-booth-dark-gray font-trade-gothic-light text-lg md:text-xl mb-6">
          The Thinking Like a Financial Analyst series reflects the same structured approach used in the MBA – Applied Finance program at RVS CAS.
        </p>
        <p className="text-booth-dark-gray font-trade-gothic-light text-lg mb-6">
          Inside the MBA – Applied Finance classroom, students engage with:
        </p>
        <ul className="space-y-3 mb-8">
          {mbaEngagements.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1.5 text-xs">●</span>
              <span className="text-booth-dark-gray font-trade-gothic-light text-base md:text-lg">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-booth-dark-gray font-trade-gothic-light text-lg mb-4">
          This series gives you a preview of that intellectual environment.
        </p>
        <p className="text-booth-dark-gray font-trade-gothic-light text-lg italic mb-12">
          It is not marketing content.<br />It is a classroom experience made accessible.
        </p>

        {/* MBA Finance CTA - kept together with classroom section */}
        <div className="bg-booth-teal -mx-4 min-[700px]:-mx-6 lg:-mx-8 xl:-mx-12 px-4 min-[700px]:px-6 lg:px-8 xl:px-12 py-10 md:py-12">
          <h3 className="text-2xl md:text-3xl font-trade-gothic-bold text-white mb-4">
            Enquire About the MBA – Applied Finance Course
          </h3>
          <p className="text-white font-trade-gothic-light text-base md:text-lg mb-6">
            This is how Dr. Senthil teaches at RVS CAS MBA. If this way of thinking resonates with you, explore the full MBA – Applied Finance program.
          </p>
          <p className="text-xl font-trade-gothic-bold text-white mb-8">
            Learn finance the way analysts actually practice it.
          </p>
          <Link
            href="/request-information"
            className="inline-block border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-white hover:text-booth-teal transition text-sm md:text-base"
          >
            Enquire About MBA – Applied Finance
          </Link>
        </div>
      </div>
    </section>
  );
}
