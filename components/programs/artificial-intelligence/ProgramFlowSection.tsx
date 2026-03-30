export default function ProgramFlowSection() {
  const steps = [
    {
      title: "01 - Understand the Problem",
      body: "Define real-world business problems, identify where AI creates value, and avoid solving irrelevant or poorly framed problems.",
    },
    {
      title: "02 - Work with Real Data",
      body: "Build core analytical thinking before tool application. Learn to question assumptions, handle incomplete data, and interpret data quality limits.",
    },
    {
      title: "03 - Build AI Systems",
      body: "Faculty-led, discussion-driven learning with guided hands-on practice at every step to build confidence progressively.",
    },
    {
      title: "04 - Apply AI in Business Contexts",
      body: "Use case-based learning with real-world AI applications where problem formulation and model justification remain central.",
    },
    {
      title: "05 - Convert Insight into Action",
      body: "Interpret outputs in business context and translate analytical results into decisions through projects, simulations, and live data exercises.",
    },
  ];

  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            From Data to Intelligence to Decision
          </h2>
        </div>
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.title}>
              <p className="text-lg md:text-xl font-trade-gothic-bold text-booth-dark-gray">{step.title}</p>
              <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
