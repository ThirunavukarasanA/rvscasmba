import React from 'react'

export default function EmployerEngagement() {
    return (
        <section className="py-8 md:py-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Employer Engagement
                    </h2>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">RVS CAS MBA collaborates with industry partners across domains — analytics, consulting, finance, marketing, supply chain, and enterprise technology — ensuring exposure to varied career paths and organizational cultures.</p>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray">Employer partners include:</h3>
                    {/* <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Curriculum advisory for industry relevance</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Joint certification programs</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Live projects and internships</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Industry-sponsored electives</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Executive guest lectures</span>
                        </li>
                    </ul> */}

                    {/* <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        These engagements ensure that students remain connected to current industry practices and expectations.
                    </p> */}
                </div>
            </div>
        </section>
    )
}