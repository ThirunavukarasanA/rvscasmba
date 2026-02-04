export default function ApplicationStepsSection() {
  const steps = [
    {
      number: "1",
      title: "Choose Your MBA Program",
      description: "Select the MBA specialization that best aligns with your academic background and career goals."
    },
    {
      number: "2",
      title: "Complete the Application Form",
      description: "Fill in your personal, academic, and entrance exam details accurately in the application form."
    },
    {
      number: "3",
      title: "Submit Required Documents",
      description: "Upload or submit the necessary documents for verification, including academic records and entrance exam scorecards."
    },
    {
      number: "4",
      title: "Application Review",
      description: "The admissions team reviews your application to assess eligibility and academic readiness."
    },
    {
      number: "5",
      title: "Campus Visit & Verification",
      description: "Shortlisted candidates are invited to visit the campus for offline document verification."
    },
    {
      number: "6",
      title: "Confirm Admission",
      description: "Upon successful verification, confirm your admission and secure your seat in the program."
    }
  ];

  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Application Steps
          </h2>
        </div>

        <div className="space-y-8 md:space-y-12">
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
