import React from 'react'

export default function InternshipSupport() {
    return (
        <section className="py-8 md:py-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Internship Support
                    </h2>
                </div>
                <div className="space-y-6">
                    <p className="text-md md:text-lg text-booth-dark-gray font-trade-gothic-light">RVS CAS MBA supports students through:</p>
                    <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
                        <li className="flex items-center gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Internship orientation sessions</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Resume alignment workshops</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Interview preparation</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Industry referrals and MoU-linked opportunities</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span>Faculty mentoring during internship execution</span>
                        </li>
                    </ul>
                    {/* <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        Students are assessed on problem understanding, analytical application, reporting clarity, and professional conduct.
                    </p> */}
                </div>
            </div>
        </section>
    )
}
