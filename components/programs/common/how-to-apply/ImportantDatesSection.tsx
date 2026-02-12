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
            Applications are accepted throughout the admission cycle, subject to seat availability.
          </p>
          <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Early applications are encouraged</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Final-year students may apply while awaiting results</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Admission offers are made on a rolling basis</span>
            </li>
          </ul>
          <p className="text-base md:text-lg text-booth-light-gray font-trade-gothic-light italic">
            Exact dates and deadlines are shared by the admissions team.
          </p>
        </div>
      </div>
    </section>
  );
}
