export default function StudentSupportSection() {
  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Student Support
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-bold">Guidance at Every Stage</p>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Student support at RVS CAS MBA is consistent and accessible. Faculty members provide academic guidance throughout the program, helping students navigate coursework and develop clarity in their chosen specialization. Administrative and admissions teams offer assistance with program-related queries, while career support services help students prepare for internships and placement opportunities. The aim is to ensure that students feel supported at every stage of their MBA journey.
          </p>
          <p className="text-md md:text-lg text-booth-dark-gray font-trade-gothic-light">
            The objective is to ensure students feel supported academically and professionally.
          </p>
        </div>
      </div>
    </section>
  );
}
