import React from 'react'

export default function AlumniNetworkOverview() {
    return (
        <section className="py-8 md:py-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Alumni Network Overview
                    </h2>
                </div>
                <div className="space-y-6">
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        The strength of an MBA lies in the paths graduates take after the program. Our alumni connect through shared experience, continued learning, and collaborative professional growth.

                    </p>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        Through formal events, informal meetups, and digital platforms, the RVS CAS MBA Alumni Network supports lifelong engagement, mentorship, industry exposure, and career progression.
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
