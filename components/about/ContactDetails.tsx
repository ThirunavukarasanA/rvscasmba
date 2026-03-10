export default function ContactDetails() {
    return (
        <section className="py-8 md:py-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Contact Details
                    </h2>
                </div>

                <div className="space-y-3">
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        <strong>RVS College of Arts and Science – MBA</strong>
                    </p>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        Sulur, Coimbatore, Tamil Nadu
                    </p>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        For program inquiries, admissions support, or academic information:
                    </p>
                    <div>
                        <div className='flex items-baseline justify-start gap-1.5'>
                            <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-2">
                                Email:
                            </h3>
                            <a href="mailto:enroll@rvsgroup.com" className="text-lg hover:text-booth-maroon hover:underline transition-all duration-300 md:text-xl text-booth-dark-gray font-trade-gothic-light">
                                enroll@rvsgroup.com
                            </a>
                        </div>
                        <div className='flex items-baseline justify-start gap-1.5'>
                            <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-2">
                                Phone:
                            </h3>
                            <a href="tel:+918883322433" className="text-lg hover:text-booth-maroon hover:underline transition-all duration-300 md:text-xl text-booth-dark-gray font-trade-gothic-light">
                                +91 88833 22433
                            </a>
                        </div>
                        {/* <div className='flex items-baseline justify-start gap-1.5'>
                            <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-2">
                                Office Hours:
                            </h3>
                            <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                                Mon – Sat, 9:30 AM to 5:30 PM
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}