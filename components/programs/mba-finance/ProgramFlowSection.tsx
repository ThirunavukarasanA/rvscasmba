export default function ProgramFlowSection() {
  const steps = [
    {
      title: "01 - Understand the Business First",
      body: "Before you can analyze numbers, you need to understand the business generating them: what drives revenue, cost, and risk, and why business models matter.",
    },
    {
      title: "02 - Decode Financial Statements",
      body: "Go beyond reading statements to questioning them. Learn what balance sheets hide, why profitable companies still fail, and how numbers can reveal and conceal reality.",
    },
    {
      title: "03 - Think in Terms of Capital",
      body: "Use return on capital as the central lens. Evaluate not just what a business earns, but whether it earns more than what it costs to run.",
    },
    {
      title: "04 - Apply Through Real Scenarios",
      body: "Learn through real company cases and decision situations where finance is practiced through judgment, not memorization.",
    },
    {
      title: "05 - Build the FP&A Mindset",
      body: "Develop forecasting, planning, and business-partnering capability with Excel modelling, dashboards, and AI tools applied in context.",
    },
  ];

  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Learn Finance the Way It Works in the Real World
          </h2>
        </div>
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.title}>
              <p className="text-lg md:text-xl font-trade-gothic-bold text-booth-dark-gray">
                {step.title}
              </p>
              <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
