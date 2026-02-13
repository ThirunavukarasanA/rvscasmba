export default function IndustryExposureSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Industry Exposure
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-bold">Connecting Classroom Learning with Practice</p>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Industry exposure is integrated into the MBA experience through:
          </p>
          <div>
            <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Guest lectures by industry professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Alumni interactions and discussions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Applied projects aligned to business contexts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Simulation-based learning environments</span>
              </li>
            </ul>
          </div>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">These engagements help students understand how academic concepts translate into real-world decision-making.</p>
        </div>
      </div>
    </section>
  );
}
