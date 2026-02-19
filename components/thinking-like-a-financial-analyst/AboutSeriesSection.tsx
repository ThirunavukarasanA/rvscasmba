export default function AboutSeriesSection() {
  const clusters = [
    "Return on Capital",
    "Balance sheet incompleteness",
    "Intangible dominance",
    "Digital-era metric failure",
    "Accounting distortions",
    "Capitalization and impairment",
    "M&A and goodwill",
    "Analyst mindset",
  ];

  return (
    <section className="py-12 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
        <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4 md:mb-6">
          Thinking Like a Financial Analyst
        </h2>
        <p className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-4">
          66 Focused Lessons. One Analytical Lens.
        </p>
        <p className="text-booth-dark-gray font-trade-gothic-light text-lg md:text-xl mb-6">
          The series is structured into 10 thematic clusters covering:
        </p>
        <ul className="space-y-3 mb-8">
          {clusters.map((topic, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1.5 text-xs">●</span>
              <span className="text-booth-dark-gray font-trade-gothic-light text-sm md:text-base">
                {topic}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-booth-dark-gray font-trade-gothic-light text-base md:text-lg mb-2">
          Each topic stands alone.
        </p>
        <p className="text-booth-dark-gray font-trade-gothic-light text-base md:text-lg">
          Together, they build analytical depth from foundation to advanced judgment.
        </p>
      </div>
    </section>
  );
}
