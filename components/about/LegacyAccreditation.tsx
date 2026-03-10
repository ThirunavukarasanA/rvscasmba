'use client';

import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function LegacyAccreditation() {
    const swiperConfig = {
        modules: [Autoplay, Pagination],
        spaceBetween: 30,
        slidesPerView: 1,
        breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
        autoplay: { delay: 3000, disableOnInteraction: false },
        pagination: { 
            clickable: true,
            dynamicBullets: true,
        },
        loop: true,
        className: "w-full pb-10"
    };

    const swiperStyle = {
        "--swiper-pagination-color": "#900000",
        "--swiper-pagination-bottom": "0px"
    } as React.CSSProperties;

    return (
        <section className="py-8 md:py-20 bg-booth-bg-gray">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Legacy & Accreditation
                    </h2>
                </div>

                <div className="space-y-6 flex flex-col items-center">
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light w-full">
                        RVS College of Arts and Science is affiliated with Bharathiar University and operates within recognized academic frameworks that ensure quality and compliance.
                    </p>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light w-full">
                        Over the years, the institution has received multiple recognitions and rankings, reflecting its growing academic stature. The MBA program builds on this legacy by integrating:
                    </p>
                    <ul className="space-y-12 text-booth-dark-gray font-trade-gothic-light w-full">
                        <li className="">
                            <div className='flex items-center gap-2 mb-4'>
                                <span className="text-booth-maroon mt-1">•</span>
                                <span className='text-base md:text-lg'><strong>Industry partnerships</strong></span>
                            </div>
                            <Swiper {...swiperConfig} style={swiperStyle}>
                                <SwiperSlide className="flex items-center justify-center">
                                    <Image src="/images/industry-connect/finshiksha.png" alt="Industry Partnerships" width={200} height={200} className="mx-auto" />
                                </SwiperSlide>
                                <SwiperSlide className="flex items-center justify-center">
                                    <Image src="/images/industry-connect/cii.png" alt="Rankings" width={200} height={200} className="mx-auto" />
                                </SwiperSlide>
                                <SwiperSlide className="flex items-center justify-center">
                                    <Image src="/images/industry-connect/stukent.webp" alt="Rankings" width={200} height={200} className="mx-auto" />
                                </SwiperSlide>
                                <SwiperSlide className="flex items-center justify-center">
                                    <Image src="/images/industry-connect/trainedge.webp" alt="Rankings" width={200} height={200} className="mx-auto" />
                                </SwiperSlide>
                                <SwiperSlide className="flex items-center justify-center">
                                    <Image src="/images/industry-connect/pipp.png" alt="Rankings" width={200} height={200} className="mx-auto" />
                                </SwiperSlide>
                                <SwiperSlide className="flex items-center justify-center">
                                    <Image src="/images/industry-connect/ttlogo.png" alt="Rankings" width={200} height={200} className="mx-auto" />
                                </SwiperSlide>
                            </Swiper>
                        </li>
                        <li className="">
                            <div className='flex items-center gap-2 mb-4'>
                                <span className="text-booth-maroon mt-1">•</span>
                                <span className='text-base md:text-lg'><strong>Rankings</strong></span>
                            </div>
                            <Swiper {...swiperConfig} style={swiperStyle}>
                                <SwiperSlide className="flex items-center justify-center">
                                    <Image src="/images/about/ranking/aima.jpg" alt="Rankings" width={200} height={200} className="mx-auto" />
                                </SwiperSlide>
                                <SwiperSlide className="flex items-center justify-center">
                                    <Image src="/images/about/ranking/best-10th-institutes.jpg" alt="Rankings" width={200} height={200} className="mx-auto" />
                                </SwiperSlide>
                                <SwiperSlide className="flex items-center justify-center">
                                    <Image src="/images/about/ranking/careers360.jpg" alt="Rankings" width={200} height={200} className="mx-auto" />
                                </SwiperSlide>
                                <SwiperSlide className="flex items-center justify-center">
                                    <Image src="/images/about/ranking/ranked-2nd-indianexpress.jpg" alt="Rankings" width={200} height={200} className="mx-auto" />
                                </SwiperSlide>
                                <SwiperSlide className="flex items-center justify-center">
                                    <Image src="/images/about/ranking/ranked-2nd-thisweek.jpg" alt="Rankings" width={200} height={200} className="mx-auto" />
                                </SwiperSlide>
                                <SwiperSlide className="flex items-center justify-center">
                                    <Image src="/images/about/ranking/ranked-9th-siliconindia.jpg" alt="Rankings" width={200} height={200} className="mx-auto" />
                                </SwiperSlide>
                            </Swiper>
                        </li>
                        <li className="">
                            <div className='flex items-center gap-2 mb-4'>
                                <span className="text-booth-maroon mt-1">•</span>
                                <span className='text-base md:text-lg'><strong>Accreditation</strong></span>
                            </div>
                            <Swiper {...swiperConfig} style={swiperStyle}>
                                <SwiperSlide className="flex items-center justify-center">
                                    <Image src="/images/about/AICTE.webp" alt="Accreditation" width={200} height={200} className="mx-auto" />
                                </SwiperSlide>
                                <SwiperSlide className="flex items-center justify-center">
                                    <Image src="/images/about/Bharathiyar.webp" alt="Accreditation" width={200} height={200} className="mx-auto" />
                                </SwiperSlide>
                                <SwiperSlide className="flex items-center justify-center">
                                    <Image src="/images/about/NAAC.webp" alt="Accreditation" width={200} height={200} className="mx-auto" />
                                </SwiperSlide>
                            </Swiper>
                        </li>
                        <li className="">
                            <div className='flex items-center gap-2 mb-4'>
                                <span className="text-booth-maroon mt-1">•</span>
                                <span><strong>Digital transformation initiatives</strong></span>
                            </div>
                            <Image src="/images/about/moodle.png" alt="Digital Transformation" width={200} height={200} className="mx-auto md:mx-0" />
                        </li>
                    </ul>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light w-full">The emphasis is not only on institutional history, but on sustained relevance.</p>
                </div>
            </div>
        </section>
    )
}
