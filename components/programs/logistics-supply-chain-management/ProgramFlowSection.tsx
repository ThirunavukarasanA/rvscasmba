export default function ProgramFlowSection() {
  const steps = [
    {
      title: "01 - Understand Business Operations",
      body: "Learn how products move across systems, and how cost, service, and efficiency drivers shape business performance.",
    },
    {
      title: "02 - Design Efficient and Scalable Systems",
      body: "Move from operations understanding into network design, procurement strategy, warehousing, and inventory planning as integrated systems.",
    },
    {
      title: "03 - Manage Cost, Risk and Business Trade-offs",
      body: "Evaluate disruption risk and optimize cost-service balance while understanding the financial impact of operational decisions.",
    },
    {
      title: "04 - Apply Through Real Scenarios",
      body: "Build capability through case studies, simulations, ERP projects, and capstone work that mirror live procurement and distribution realities.",
    },
  ];

  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            From Operations to System-Level and Strategic Thinking
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
