import React from 'react'

export default function RecruiterPerspectives() {
    return (
        <section className="py-8 md:py-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-8 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-6">
                        Recruiter Perspectives
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray">Why Employers Engage with RVS CAS MBA</h3>
                </div>
                <div className='space-y-6 md:space-y-10'>
                    <div>
                        <p className="text-lg md:text-2xl text-booth-dark-gray font-trade-gothic-light italic leading-relaxed mb-2">
                            “RVS students demonstrate structured thinking and strong analytical fundamentals. They are prepared to contribute from day one.”
                        </p>
                        <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed"> — Hiring Manager, Analytics Firm</p>
                    </div>
                    <div>
                        <p className="text-lg md:text-2xl text-booth-dark-gray font-trade-gothic-light italic leading-relaxed mb-2">
                            “Candidates show practical exposure to tools and real-world problem solving. Their readiness reflects deliberate academic preparation.”
                        </p>
                        <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">— HR Lead, Manufacturing Company</p>
                    </div>
                    <div>
                        <p className="text-lg md:text-2xl text-booth-dark-gray font-trade-gothic-light italic leading-relaxed mb-2">
                            “The dual specialization structure gives students broader perspective. They understand cross-functional impact.”
                        </p>
                        <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">— Talent Acquisition Manager, Financial Services</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
