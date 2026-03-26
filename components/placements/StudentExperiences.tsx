import React from 'react'

export default function StudentExperiences() {
    return (
        <section className="py-8 md:py-20 bg-booth-bg-gray">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-8 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-6">
                        Student Experiences
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray">From Classroom to Corporate Readiness</h3>
                </div>
                <div className='space-y-6 md:space-y-10'>
                    <div>
                        <p className="text-lg md:text-2xl text-booth-dark-gray font-trade-gothic-light italic leading-relaxed mb-2">
                            “The dual specialization model helped me combine Finance and Analytics. The portfolio building sessions and case interview practice gave me clarity during campus recruitment.”
                        </p>
                        <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">— MBA Graduate, Artificial Intelligence & Global Finance & Corporate Analyst</p>
                    </div>
                    <div>
                        <p className="text-lg md:text-2xl text-booth-dark-gray font-trade-gothic-light italic leading-relaxed mb-2">
                            “The Career Enhancement Program helped me develop confidence in team discussions and leadership simulations. That made a real difference during group interviews.”
                        </p>
                        <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">— MBA Graduate, Human Resources</p>
                    </div>
                    <div>
                        <p className="text-lg md:text-2xl text-booth-dark-gray font-trade-gothic-light italic leading-relaxed mb-2">
                            “Working on live digital marketing projects prepared me for performance-based marketing roles. I entered placement with practical experience, not just theory.”
                        </p>
                        <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">— MBA Graduate, Digital Marketing</p>
                    </div>
                </div>

            </div>
        </section>
    )
}
