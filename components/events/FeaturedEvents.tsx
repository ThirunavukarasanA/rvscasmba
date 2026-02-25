import React from 'react';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

const events = [
    {
        id: 1,
        title: "Attend a Full-Time MBA Admissions Event",
        description: "Join us at an information session or another admissions event to learn how Booth's Full-Time MBA Program can transform your career.",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop",
        link: "#"
    },
    {
        id: 2,
        title: "Attend a Part-Time MBA Admissions Event",
        description: "Take advantage of opportunities throughout the year to get an inside look at Booth's Part-Time MBA Program.",
        image: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=2574&auto=format&fit=crop",
        link: "#"
    },
    {
        id: 3,
        title: "Attend an Executive MBA Admissions Event",
        description: "Join us at an admissions event to get an inside look of the Sokolov Executive MBA Program at Chicago Booth.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
        link: "#"
    },
    {
        id: 4,
        title: "Attend a PhD Admissions Event",
        description: "Join us at an information session or recruiting forum to learn more about the Stevens Doctoral Program at Chicago Booth.",
        image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=2670&auto=format&fit=crop",
        link: "#"
    },
    {
        id: 5,
        title: "Attend a Master in Management Admissions Event",
        description: "Join us at an information session or a Master in Management admissions event to learn how Booth's MiM Program can transform your career.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop",
        link: "#"
    },
    {
        id: 6,
        title: "Attend a Master in Finance Admissions Event",
        description: "Attend an open house or information session to learn more about how the Asness and Liew Master in Finance Program can kickstart your career.",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop",
        link: "#"
    }
];

export default function FeaturedEvents() {
    return (
        <section className="py-16 bg-booth-bg-gray">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Featured Events
                    </h2>
                    {/* <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light mb-4">
                    Whether you’re exploring the MBA or preparing your application, here’s how we can assist you:
                </p> */}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {events.map((event) => (
                        <Link href={event.link} key={event.id} className="group flex flex-col cursor-pointer">
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
                            <p className="text-booth-light-gray mb-2 md:mb-4 font-trade-gothic-light text-base">
                                {event.description}
                                <span className="inline-flex items-center justify-center ml-1.5 align-middle text-[#7c0201] transition-transform duration-300 group-hover:translate-x-1.5">
                                    <BsArrowRight className="w-[18px] h-[18px]" strokeWidth={0.5} />
                                </span>
                            </p>
                        </Link>
                    ))}
                </div>
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
