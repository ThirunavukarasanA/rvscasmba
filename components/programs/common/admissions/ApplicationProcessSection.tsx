export default function ApplicationProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Choose Your Program",
      description: "Identify the MBA specialization aligned with your career goals."
    },
    {
      number: "2",
      title: "Check Eligibility",
      description: "Ensure you meet academic and entrance exam requirements."
    },
    {
      number: "3",
      title: "Submit Application",
      description: "Complete and submit the application form."
    },
    {
      number: "4",
      title: "Application Review",
      description: "The admissions team reviews your application."
    },
    {
      number: "5",
      title: "Offline Verification",
      description: "Visit campus with original documents for verification."
    },
    {
      number: "6",
      title: "Enrollment",
      description: "Confirm admission and begin your MBA journey."
    }
  ];

  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            The Application Process
          </h2>
          <p className="text-xl md:text-2xl text-booth-dark-gray font-trade-gothic-light mb-6">
            6 Steps to Enrollment
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 md:gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-booth-maroon text-white rounded-full flex items-center justify-center font-trade-gothic-bold text-xl md:text-2xl">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-2">
                  {step.title}
                </h3>
                <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
