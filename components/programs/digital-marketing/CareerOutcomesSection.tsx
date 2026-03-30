import Image from "next/image";

export default function CareerOutcomesSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Career Outcomes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
              The MBA in Digital Marketing prepares students for professional roles where strategic thinking, execution capability, and performance analysis matter.
            </p>

            <div>
              <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                Roles
              </h3>
              <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
                <li className="flex items-center gap-3">
                  <span className="text-booth-maroon mt-1">•</span>
                  <span>Digital Marketing Executive</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-booth-maroon mt-1">•</span>
                  <span>SEO / SEM Specialist</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-booth-maroon mt-1">•</span>
                  <span>Social Media Manager</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-booth-maroon mt-1">•</span>
                  <span>Marketing Analyst</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                Career Support
              </h3>
              <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                These roles provide a starting point for building a long-term career in marketing, with opportunities to grow into strategic and managerial positions. The programme builds role-ready graduates by combining academic frameworks, simulation-based learning, and applied projects.
              </p>
            </div>
          </div>
          <div className="relative h-64 md:h-80 min-h-[16rem]">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
              alt="Marketing and analytics professionals"
              fill
              className="object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
