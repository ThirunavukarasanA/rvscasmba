export default function EligibilitySection() {
  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Eligibility
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-bold">Who Can Apply</p>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Applicants must meet the following criteria:
          </p>

          <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>A <strong className="font-trade-gothic-bold">recognized undergraduate degree</strong> in any discipline</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Final-year students awaiting results may also apply</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Minimum 50% aggregate marks in 10th, 12th, and undergraduate degree</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Valid score in CAT / MAT / CMAT / TANCET (or equivalent)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Work experience is welcome but <strong className="font-trade-gothic-bold">not mandatory</strong></span>
            </li>
          </ul>

          <p className="text-base md:text-lg text-booth-light-gray font-trade-gothic-light italic">
            The program is open to candidates from diverse academic backgrounds, provided they demonstrate motivation and learning intent.
          </p>
        </div>
      </div>
    </section>
  );
}
