export default function BeforeYouApplySection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Before You Apply
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-xl md:text-2xl text-booth-dark-gray font-trade-gothic-bold">Get Ready, Not Stressed</p>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Before starting your application, we recommend that you:
          </p>

          <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Review the MBA program and specialization options</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Ensure you meet basic eligibility requirements</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Keep your academic documents accessible</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Reflect on why you want to pursue an MBA at RVS CAS</span>
            </li>
          </ul>

          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            If you have questions at this stage, the admissions team is available to guide you.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/" className="inline-flex items-center gap-2 text-booth-maroon font-trade-gothic-bold hover:underline">
              View Programs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/admissions" className="inline-flex items-center gap-2 text-booth-maroon font-trade-gothic-bold hover:underline">
              Check Eligibility
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
