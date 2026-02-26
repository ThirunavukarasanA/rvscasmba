import React from 'react'

export default function WhyInternshipsMatter() {
    return (
        <section className="py-8 md:py-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Why Internships Matter
                    </h2>
                </div>
                <div className="space-y-6">
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        Internships bridge academic preparation with industry reality. Students gain exposure to workplace systems, decision processes, reporting structures, and performance expectations before entering full-time roles.

                    </p>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        Each internship is aligned with the student’s chosen specialization and career interest.
                    </p>
                    {/* <p className="text-md md:text-lg text-booth-dark-gray font-trade-gothic-light">Students learn to:</p>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        Faculty trained at leading global business schools bring academic rigor and applied clarity, ensuring structured thinking remains central to learning
                    </p> */}
                </div>
            </div>
        </section>
    )
}
