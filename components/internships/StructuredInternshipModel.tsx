import React from 'react'

export default function StructuredInternshipModel() {
    return (
        <section className="py-8 md:py-20 bg-booth-bg-gray">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Structured Internship Model
                    </h2>
                </div>
                <div className="space-y-6">
                    <p className="text-md md:text-lg text-booth-dark-gray font-trade-gothic-light">Internships are not informal attachments. They are:</p>
                    <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Mandatory across all specializations</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Conducted for a period of 60–90 days</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Evaluated as part of the academic curriculum</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Supervised by faculty mentors</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Aligned with functional learning objectives</span>
                        </li>
                    </ul>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        Students are assessed on problem understanding, analytical application, reporting clarity, and professional conduct.
                    </p>
                </div>
            </div>
        </section>
    )
}
