import React from 'react';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

export default function Leadership() {
    return (
        <section className="bg-white py-12 md:py-24">
            <div className="w-full max-w-full min-[700px]:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-center">
                    {/* Content Left */}
                    <div className="order-2 md:order-1 md:col-span-5 flex flex-col justify-center">
                        <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                        <h2 className="text-2xl md:text-[28px] lg:text-[36px] font-trade-gothic-bold text-booth-dark-gray mb-4">
                            Leadership
                        </h2>
                        <div className="group inline-block">
                            <p className="text-lg md:text-xl text-booth-light-gray font-trade-gothic-light mb-4">
                                The vision of the MBA program is guided by leadership committed to educational transformation and digital relevance.
                            </p>
                            <p className="text-lg md:text-xl text-booth-light-gray font-trade-gothic-light mb-4">
                                Under the stewardship of <strong>Dr. K. Senthil Ganesh</strong>, Managing Trustee of RVS Educational Institutions, the group has expanded significantly while embracing technology-driven reform. With over 25 years of leadership experience across strategy, finance, and marketing, he has positioned RVS institutions toward curriculum modernization and industry integration.
                            </p>
                            <Link href="" className="text-base flex items-center gap-3 underline md:text-lg text-booth-maroon font-trade-gothic-bold mb-4">Read More <BsArrowRight className="w-[18px] h-[18px]" strokeWidth={0.5} /></Link>
                            {/* <p className="text-lg md:text-xl text-booth-light-gray font-trade-gothic-light">
                                Academic leadership in the MBA program includes distinguished scholars and administrators with doctoral credentials, extensive experience in public policy and management, and strong industry engagement. Faculty leadership emphasizes academic discipline, applied research, and structured mentorship.
                            </p> */}
                            {/* <p className="text-booth-light-gray font-trade-gothic-light text-base md:text-[17px] leading-relaxed transition-colors group-hover:text-booth-dark-gray">
                                The vision of the MBA program is guided by leadership committed to educational transformation and digital relevance.
                                <span className="inline-flex items-center justify-center ml-1.5 align-middle text-booth-maroon transition-transform duration-300 group-hover:translate-x-1.5">
                                    <BsArrowRight className="w-[18px] h-[18px]" strokeWidth={0.5} />
                                </span>
                            </p> */}
                        </div>
                    </div>

                    {/* Image Right */}
                    <div className="order-1 md:order-2 md:col-span-7 w-full">
                        <div className="relative w-full aspect-[1/1] sm:aspect-[16/10] md:aspect-[1/1] bg-gray-100 overflow-hidden">
                            <Image
                                src="/images/about/trustee.png"
                                alt="Meet David Booth"
                                fill
                                className="object-contain w-full h-full hover:scale-105 transition-transform duration-700 ease-in-out"
                                loading="lazy"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
