import Image from "next/image";

export default function CareerOutcomesSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Career Outcomes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="space-y-6">
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Graduates of the MBA in Applied Finance pursue careers across finance, banking, investment, and fintech domains. The program builds analytical rigor and decision-making confidence valued by employers.
          </p>

          <div>
            <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-4">
              Typical Roles
            </h3>
            <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Financial Analyst</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Investment Analyst</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Equity Research Associate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Wealth Management Advisor</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Risk Analyst</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>FinTech Strategist</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Corporate Finance Executive</span>
              </li>
            </ul>
          </div>

            <a href="#" className="inline-flex items-center gap-2 text-booth-maroon font-trade-gothic-bold hover:underline">
              Career & Placement Support
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="relative h-64 md:h-80">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
              alt="Finance professionals working"
              fill
              className="object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
