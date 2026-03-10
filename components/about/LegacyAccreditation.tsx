import Image from 'next/image'
import React from 'react'

export default function LegacyAccreditation() {
    return (
        <section className="py-8 md:py-20 bg-booth-bg-gray">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Legacy & Accreditation
                    </h2>
                </div>

                <div className="space-y-6">
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        RVS College of Arts and Science is affiliated with Bharathiar University and operates within recognized academic frameworks that ensure quality and compliance.
                    </p>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        Over the years, the institution has received multiple recognitions and rankings, reflecting its growing academic stature. The MBA program builds on this legacy by integrating:
                    </p>
                    <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
                        <li className="">
                            <div className='flex items-center gap-2'>
                                <span className="text-booth-maroon mt-1">•</span>
                                <span>Industry partnerships</span>
                            </div>
                            <Image
                                src="/images/about/siliconIndia.webp"
                                alt="Industry Partnerships"
                                width={200}
                                height={200}
                                className='' />
                        </li>
                        <li className="">
                            <div className='flex items-center gap-2'>
                                <span className="text-booth-maroon mt-1">•</span>
                                <span>Rankings</span>
                            </div>
                            <Image src="/images/about/the-week.webp" alt="Rankings" width={200} height={200} />
                        </li>
                        <li className="">
                            <div className='flex items-center gap-2 pb-2'>
                                <span className="text-booth-maroon mt-1">•</span>
                                <span>Accreditation</span>
                            </div>
                            <div className='flex flex-wrap items-center gap-4'>
                                <Image src="/images/about/AICTE.webp" alt="Accreditation" width={200} height={200} />
                                <Image src="/images/about/Bharathiyar.webp" alt="Accreditation" width={200} height={200} />
                                <Image src="/images/about/NAAC.webp" alt="Accreditation" width={200} height={200} />
                            </div>
                        </li>
                        <li className="">
                            <div className='flex items-center gap-2'>
                                <span className="text-booth-maroon mt-1">•</span>
                                <span>Digital transformation initiatives</span>
                            </div>
                            <Image src="/images/about/indian.webp" alt="Digital Transformation" width={200} height={200} />
                        </li>
                    </ul>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">The emphasis is not only on institutional history, but on sustained relevance.</p>
                </div>
            </div>
        </section>
    )
}
