import React from 'react'

export default function ConnectWithUs() {
    return (
        <section className="py-8 md:py-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Connect With Us
                    </h2>
                    <p className="text-xl md:text-2xl text-booth-dark-gray font-trade-gothic-light mb-6">
                        To learn more about placement support, employer engagement, or role pathways:
                    </p>
                </div>

                <div className='space-y-2.5 mb-6'>
                    <div className='flex items-baseline justify-start gap-1.5'>
                        <h3 className="text-lg md:text-xl font-trade-gothic-bold text-booth-dark-gray mb-2">
                            Placement Officer Name:
                        </h3>
                        <span className="text-lg transition-all duration-300 md:text-xl text-booth-dark-gray font-trade-gothic-light">
                            Mr. Sharan Krishnan
                        </span>
                    </div>
                    <div className='flex items-baseline justify-start gap-1.5'>
                        <h3 className="text-lg md:text-xl font-trade-gothic-bold text-booth-dark-gray mb-2">
                            Phone Number:
                        </h3>
                        <a href="tel:+919750915171" className="text-lg hover:text-booth-maroon hover:underline transition-all duration-300 md:text-xl text-booth-dark-gray font-trade-gothic-light">
                            +91 97509 15171
                        </a>
                    </div>
                    <div className='flex items-baseline justify-start gap-1.5'>
                        <h3 className="text-lg md:text-xl font-trade-gothic-bold text-booth-dark-gray mb-2">
                            Email:
                        </h3>
                        <a href="mailto:sharankrishnan@rvsgroup.com" className="text-lg hover:text-booth-maroon hover:underline transition-all duration-300 md:text-xl text-booth-dark-gray font-trade-gothic-light">
                            sharankrishnan@rvsgroup.com
                        </a>
                    </div>
                    <div className='flex items-baseline justify-start gap-1.5'>
                        {/* <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-2">
                            Office Hours:
                        </h3> */}
                        <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                            <strong>RVS College of Arts & Science – MBA Office</strong>
                        </p>
                    </div>
                </div>


            </div>
        </section >
    )
}
