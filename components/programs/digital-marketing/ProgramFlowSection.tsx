export default function ProgramFlowSection() {
  const steps = [
    {
      title: "01 - Build Core Business Foundation",
      text: "Understand management fundamentals and how businesses function before entering marketing specialization.",
    },
    {
      title: "02 - Learn Digital Marketing Concepts",
      text: "Concept-first and platform-second learning that explains strategy, channels, and funnel logic before execution.",
    },
    {
      title: "03 - Practice with Stukent Simulations",
      text: "Apply learning in business-like scenarios with budgets, campaign trade-offs, and measurable outcomes.",
    },
    {
      title: "04 - Apply Through Projects and Internship",
      text: "Hands-on projects, structured internship exposure, and capstone work that converts learning into portfolio-ready capability.",
    },
  ];

  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            From Learning to Simulation to Industry Application
          </h2>
        </div>
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.title}>
              <p className="text-lg md:text-xl font-trade-gothic-bold text-booth-dark-gray">{step.title}</p>
              <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
