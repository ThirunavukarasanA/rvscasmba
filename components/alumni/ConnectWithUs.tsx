import React from 'react'

export default function ConnectWithUs() {
    return (
        <section className="py-8 md:py-20 bg-booth-bg-gray">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Stay Connected
                    </h2>
                    <p className="text-xl md:text-2xl text-booth-dark-gray font-trade-gothic-light mb-6">
                        Whether you are just graduating or several years into your career, stay involved:
                    </p>
                    <p className='text-xl md:text-2xl text-booth-dark-gray font-trade-gothic-light mb-3'><strong>Join the Alumni Network</strong></p>
                    <p className='text-xl md:text-2xl text-booth-dark-gray font-trade-gothic-light mb-3'><strong>Share Your Story</strong></p>
                </div>

                <div className='space-y-4 mb-6'>
                    {/* <div className='flex items-baseline justify-start gap-1.5'>
                        <p className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-2">
                            Placement Officer Name:
                        </p>
                        <span className="text-lg transition-all duration-300 md:text-xl text-booth-dark-gray font-trade-gothic-light">
                            Mr. Sharan Krishnan
                        </span>
                    </div> */}
                    <h3 className="text-xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray mb-2">
                        Contact:
                    </h3>
                    <p className='text-xl md:text-2xl text-booth-dark-gray font-trade-gothic-light mb-6'>MBA Alumni Office</p>
                    <div className='flex items-baseline justify-start gap-1.5'>
                        <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-2">
                            Email:
                        </h3>
                        <a href="mailto:rajarajeswari@rvsgroup.com" className="text-lg hover:text-booth-maroon hover:underline transition-all duration-300 md:text-xl text-booth-dark-gray font-trade-gothic-light">
                            rajarajeswari@rvsgroup.com
                        </a>
                    </div>
                    <div className='flex items-baseline justify-start gap-1.5'>
                        <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-2">
                            Phone Number:
                        </h3>
                        <a href="tel:+919865860917" className="text-lg hover:text-booth-maroon hover:underline transition-all duration-300 md:text-xl text-booth-dark-gray font-trade-gothic-light">
                            +91 98658 60917
                        </a>
                    </div>
                </div>
            </div>
        </section >
    )
}
