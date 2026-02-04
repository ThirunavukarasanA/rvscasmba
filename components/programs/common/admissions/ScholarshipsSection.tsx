export default function ScholarshipsSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Scholarships & Financial Support
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            RVS CAS MBA offers scholarships to recognize merit, encourage excellence, and support deserving students.
          </p>

          <div>
            <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-4">
              Scholarships are offered based on:
            </h3>
            <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span><strong className="font-trade-gothic-bold">Merit</strong> – Academic performance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span><strong className="font-trade-gothic-bold">Entrance Exam</strong> – Performance in exams like TANCET</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span><strong className="font-trade-gothic-bold">Alumni (Ex-RVS Students)</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span><strong className="font-trade-gothic-bold">Community</strong> – As per institutional policy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span><strong className="font-trade-gothic-bold">Sports</strong> – State / national / international level</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span><strong className="font-trade-gothic-bold">Defence</strong> – Children of defence personnel</span>
              </li>
            </ul>
          </div>

          <p className="text-base md:text-lg text-booth-light-gray font-trade-gothic-light italic">
            * Scholarships are non-cumulative. Only the highest applicable scholarship is awarded.
          </p>
        </div>
      </div>
    </section>
  );
}
