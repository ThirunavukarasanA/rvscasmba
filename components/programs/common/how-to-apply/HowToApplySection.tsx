import React from 'react'

export default function HowToApplySection() {
    const steps = [
        {
            number: "1",
            title: "Online Application",
            description: "Complete the application form on our admissions portal."
        },
        {
            number: "2",
            title: "Offline Application",
            description: "Submit a printed application form with your documents to the admissions office."
        },
    ];
    return (
        <section className="py-8 md:py-20 bg-booth-bg-gray">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        How to Apply
                    </h2>
                    <p className="text-xl md:text-2xl text-booth-dark-gray font-trade-gothic-light mb-6">
                        You can begin your application in two ways:
                    </p>
                </div>

                <div className="space-y-8 md:space-y-12">
                    {steps.map((step, index) => (
                        <div key={index} className="flex gap-4 md:gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-booth-maroon text-white rounded-full flex items-center justify-center font-trade-gothic-bold text-xl md:text-2xl">
                                {step.number}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">Both options are accepted and processed with equal care</p>
                </div>
            </div>
        </section>
    )
}
