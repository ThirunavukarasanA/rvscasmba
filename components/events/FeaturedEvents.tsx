'use client';

import React from 'react';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import { generateSlug } from './eventsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { featuredEvents } from './eventsData';

export default function FeaturedEvents() {
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

    return (
        <section className="py-16 bg-booth-bg-gray">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Featured Events
                    </h2>
                </div>
                
                <Swiper 
                    {...swiperConfig} 
                    style={{
                        "--swiper-pagination-color": "#900000",
                        "--swiper-pagination-bottom": "0px"
                    } as React.CSSProperties}
                    className="w-full pb-10 mb-8"
                >
                    {featuredEvents.map((event) => (
                        <SwiperSlide key={event.id}>
                            <Link href={`/events/${generateSlug(event.title)}`} className="group flex flex-col cursor-pointer h-full">
                                <div className="relative w-full aspect-[4/3] overflow-hidden mb-5 bg-gray-100">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                                <h3 className="text-lg md:text-xl font-trade-gothic-bold text-booth-dark-gray mb-2 md:mb-3 leading-[1.3] group-hover:text-[#7c0201] transition-colors duration-300">
                                    {event.title}
                                </h3>
                                <p className="text-booth-light-gray mb-2 md:mb-4 font-trade-gothic-light text-base line-clamp-3">
                                    {event.description}
                                </p>
                                <p className="text-booth-maroon font-medium hover:underline mt-auto">
                                    Read More
                                    <span className="inline-flex items-center justify-left ml-1.5 align-middle text-[#7c0201] transition-transform duration-300 group-hover:translate-x-1.5">
                                        <BsArrowRight className="w-[18px] h-[18px]" strokeWidth={0.5} />
                                    </span>
                                </p>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Link
                    href="/events/featured-events"
                    className="inline-flex items-center gap-2 text-booth-maroon font-trade-gothic-bold hover:underline"
                >
                    See All Featured Events
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
