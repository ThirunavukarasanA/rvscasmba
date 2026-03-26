"use client";

import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { facultyMembers } from '@/lib/data/faculty';
import { useState } from 'react';

const categories = [
    "Leadership & Strategy",
    "Global Finance & Corporate Analyst",
    "Digital Marketing",
    "Artificial Intelligence",
    "Human resource",
    "Logistics & Supply Chain",
    "Aptitude & Career Readiness",
    "Economics & Statistics",
];

export default function ExploreFaculty() {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    const filteredFaculty = activeFilter ? facultyMembers.filter((faculty) => {
        const searchString = `${faculty.academicArea} ${faculty.teachingAreas?.join(' ')} ${faculty.title}`.toLowerCase();

        // Advanced mapping for specific categories
        const filterMap: Record<string, string[]> = {
            'Global Finance & Corporate Analyst': ['finance'],
            'Human resource': ['hr', 'human resource'],
            'Economics & Statistics': ['statistics'],
            'Logistics & Supply Chain': ['logistics & supply chain'],
            'Aptitude & Career Readiness': ['aptitude', 'career'],
            'Artificial Intelligence': ['artificial intelligence', 'data science & analytics', 'data engineering'],
        };

        const searchTerms = filterMap[activeFilter] || [activeFilter.toLowerCase()];
        return searchTerms.some(term => searchString.includes(term));
    }) : facultyMembers;
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                {/* Header */}
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-6">
                        Explore Faculty by Academic Area
                    </h2>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-x-6 gap-y-4 md:gap-x-10 md:gap-y-6 max-w-4xl pt-4">
                        <button
                            onClick={() => setActiveFilter(null)}
                            className={`text-lg md:text-xl font-trade-gothic-light pb-0.5 transition-colors duration-300 ${activeFilter === null ? 'text-booth-maroon border-booth-maroon font-trade-gothic-bold border-b-2' : 'text-booth-dark-gray hover:text-booth-maroon border-booth-maroon'}`}
                        >
                            All
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`text-lg md:text-xl font-trade-gothic-light pb-0.5 transition-colors duration-300  ${activeFilter === category ? 'text-booth-maroon border-booth-maroon font-trade-gothic-bold border-b-2' : 'text-booth-dark-gray hover:text-booth-maroon border-booth-maroon'}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12">
                    {filteredFaculty.map((faculty, index) => (
                        <div key={index} className="flex flex-col group cursor-pointer">
                            <div className="relative w-full aspect-[3/4] mb-4 overflow-hidden bg-gray-100">
                                <Link href={`/faculty/${faculty.slug}`}>
                                    <Image
                                        fill
                                        src={faculty.image}
                                        alt={faculty.name}
                                        className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </Link>
                            </div>
                            <Link href={`/faculty/${faculty.slug}`}>
                                <h3 className="text-lg md:text-xl font-trade-gothic-bold text-booth-dark-gray mb-2 md:mb-3 group-hover:text-booth-maroon transition-colors duration-300">
                                    {faculty.name}
                                </h3>
                            </Link>
                            <Link href={`/faculty/${faculty.slug}`} className="group-hover:text-booth-maroon block">
                                <p className="text-booth-light-gray mb-2 md:mb-4 font-trade-gothic-light text-base leading-snug group-hover:text-booth-maroon transition-colors duration-300">
                                    {faculty.title}
                                    <span className="inline-flex items-center justify-center ml-1.5 align-middle transition-transform duration-300 group-hover:translate-x-1">
                                        <BsArrowRight className="w-[15px] h-[15px]" strokeWidth={0.5} />
                                    </span>
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                {/* <div className="mt-16 flex flex-col md:flex-row items-start md:items-center gap-6">
                    <button className="border-2 border-booth-maroon text-booth-maroon px-8 py-3 text-[14px] font-trade-gothic-bold uppercase tracking-wider hover:bg-booth-maroon hover:text-white transition-colors whitespace-nowrap">
                        SEE ALL RVS CAS MBA FACULTY
                    </button>
                    <div className="hidden md:block flex-1 w-full h-0.5 bg-booth-maroon"></div>
                </div> */}
            </div>
        </section>
    );
}
