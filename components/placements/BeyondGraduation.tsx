import React from 'react'

export default function BeyondGraduation() {
    return (
        <section className="py-8 md:py-20 bg-booth-bg-gray">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Beyond Graduation
                    </h2>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">Placement is not an endpoint — it is a launchpoint. Alumni remain connected through:</p>
                </div>

                <div className="space-y-6">
                    <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
                        <li className="flex items-center gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span><b>Career advisory sessions</b></span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span><b>Industry refresher courses</b></span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span><b>Networking forums</b></span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span><b>Alumni mentoring for current students</b></span>
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    )
}
