export default function ProgramFlowSection() {
  const steps = [
    {
      title: "01 - Understand Human Behavior",
      text: "Build foundations in organizational behavior, motivation, and performance drivers before moving into strategic HR design.",
    },
    {
      title: "02 - Build Performance Systems",
      text: "Design policy, incentives, and performance frameworks that align culture with measurable business outcomes.",
    },
    {
      title: "03 - Manage Talent Strategically",
      text: "Integrate workforce planning, acquisition, learning, development, and compensation as business levers, not isolated functions.",
    },
    {
      title: "04 - Lead Organizations Through Change",
      text: "Apply organizational development, change management, leadership, and HR analytics to complex real-world situations.",
    },
  ];

  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            From People Management to Organizational Strategy
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
