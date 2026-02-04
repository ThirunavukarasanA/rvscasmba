export default function ImportantDatesSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Application Timeline
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Applications are accepted throughout the admission cycle, subject to seat availability. Early application is encouraged to secure preferred specialization options.
          </p>
          <p className="text-base md:text-lg text-booth-light-gray font-trade-gothic-light italic">
            (Exact dates and deadlines will be communicated by the admissions team.)
          </p>
        </div>
      </div>
    </section>
  );
}
