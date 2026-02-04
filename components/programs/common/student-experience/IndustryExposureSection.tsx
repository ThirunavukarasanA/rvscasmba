export default function IndustryExposureSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Industry Exposure & Practical Learning
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Industry exposure is integrated into the student experience through internships, live projects, and interactions with corporate professionals. These experiences help students understand workplace expectations and real-world problem-solving.
          </p>

          <div>
            <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-4">
              Elements
            </h3>
            <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Industry visits and guest talks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Internships aligned with specialization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Live projects and simulations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
