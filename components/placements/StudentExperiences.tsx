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

                <div className="mt-10 md:mt-14">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
                        {[1, 2, 3, 4].map((slot) => (
                            <div
                                key={`student-placeholder-${slot}`}
                                className="w-full bg-white border border-dashed border-gray-300 overflow-hidden"
                            >
                                <div className="aspect-[16/10] flex items-center justify-center bg-gray-200">
                                    <span className="text-booth-dark-gray font-trade-gothic-bold text-xs uppercase tracking-wide">
                                        Coming Soon
                                    </span>
                                </div>
                                <div className="p-3">
                                    <p className="text-sm md:text-base font-trade-gothic-bold text-booth-dark-gray">
                                        Student Video {slot}
                                    </p>
                                    <p className="text-xs md:text-sm text-booth-dark-gray font-trade-gothic-light mt-1">
                                        Placeholder for upcoming student stories.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
