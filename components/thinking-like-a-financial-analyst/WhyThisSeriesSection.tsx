export default function WhyThisSeriesSection() {
  const mostTeach = [
    "Ratio memorization",
    "Formula application",
    "Exam-driven problem solving",
  ];

  const thisSeriesFocuses = [
    { title: "Capital before profit", desc: "" },
    { title: "Business model before numbers", desc: "" },
    { title: "Accounting versus economic reality", desc: "" },
    { title: "Judgment over mechanical calculation", desc: "" },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
        <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-6 md:mb-8">
          Not Accounting. Not Theory. Analysis.
        </h2>

        <p className="text-booth-dark-gray font-trade-gothic-light text-lg mb-6">
          Most finance education teaches:
        </p>
        <ul className="space-y-2 mb-8">
          {mostTeach.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1.5 text-xs">●</span>
              <span className="text-booth-dark-gray font-trade-gothic-light">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-booth-dark-gray font-trade-gothic-bold text-lg mb-6">
          This series is different.
        </p>
        <p className="text-booth-dark-gray font-trade-gothic-light text-lg mb-6">
          It focuses on:
        </p>
        <ul className="space-y-3 mb-8">
          {thisSeriesFocuses.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1.5 text-xs">●</span>
              <span className="text-booth-dark-gray font-trade-gothic-light text-base md:text-lg">
                {item.title}
              </span>
            </li>
          ))}
        </ul>

        <p className="text-booth-dark-gray font-trade-gothic-light text-lg italic">
          This is the analytical lens used in the MBA – Applied Finance program at RVS CAS.
        </p>
      </div>
    </section>
  );
}
