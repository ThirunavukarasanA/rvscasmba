import Link from 'next/link'
import React from 'react'

export default function CurrentOpenings() {
    return (
        <section className="py-8 md:py-20 bg-booth-bg-gray">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Current Openings
                    </h2>
                    <p className="text-xl md:text-2xl text-booth-dark-gray font-trade-gothic-light mb-6">
                        We are currently inviting applications for the following roles:
                    </p>
                </div>

                <div className="space-y-6 md:space-y-8 mb-6">
                    <div className="">
                        <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-2">
                            AssociateProfessor - Digital Marketing
                        </h3>
                        <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light mb-3">
                            Full-Time | MBA Department
                        </p>
                        <a
                            href="#submit-your-resume"
                            className="inline-flex items-center gap-2 text-booth-maroon font-trade-gothic-bold hover:underline"
                        >
                            Apply Now
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
                        </a>
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-2">
                            Associate Professor - Finance
                        </h3>
                        <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light mb-3">
                            Full-Time | MBA Department
                        </p>
                        <a
                            href="#submit-your-resume"
                            className="inline-flex items-center gap-2 text-booth-maroon font-trade-gothic-bold hover:underline"
                        >
                            Apply Now
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
                        </a>
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-2">
                            Associate Professor - HR
                        </h3>
                        <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light mb-3">
                            Full-Time | Career Services
                        </p>
                        <a
                            href="#submit-your-resume"
                            className="inline-flex items-center gap-2 text-booth-maroon font-trade-gothic-bold hover:underline"
                        >
                            Apply Now
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
                        </a>
                    </div>
                    <p className="text-base md:text-lg text-booth-light-gray font-trade-gothic-light italic">
                        If your area of expertise is not listed, you may still submit your profile for future consideration.
                    </p>
                </div>
            </div>
        </section >
    )
}
