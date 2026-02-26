import React from 'react'

export default function FacultyDevelopmentSupport() {
    return (
        <section className="py-8 md:py-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Faculty Development & Support
                    </h2>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        At RVS CAS MBA, faculty growth is integral to institutional success. We support:
                    </p>
                </div>

                <div className="space-y-6">
                    {/* <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        Many analytics programs focus on tools and coding. This program begins with something more fundamental — how analytical decisions are made.
                    </p> */}
                    {/* <p className="text-md md:text-lg text-booth-dark-gray font-trade-gothic-light">Students learn to:</p> */}
                    <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Research mentoring and publication pathways</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Participation in academic conferences and workshops</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Faculty development programs (national and international)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Opportunities for curriculum leadership and co-creation</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Collaboration with industry partners and research centers</span>
                        </li>
                    </ul>

                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        We invest in your intellectual growth as much as in ours
                    </p>
                    {/* <Link
            href="/request-information"
            className="inline-flex items-center gap-2 text-booth-maroon font-trade-gothic-bold hover:underline"
          >
            Talk to an Academic Advisor
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link> */}
                </div>
            </div>
        </section>
    )
}
