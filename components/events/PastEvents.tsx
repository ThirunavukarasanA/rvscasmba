import Image from "next/image";
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

const events = [
    {
        id: 1,
        title: "Personality Development Programme – I MBA Students",
        description: "The objective of this programme is to build self-confidence, enhance self-esteem and improve overall personality of the students.",
        image: "/images/Social/personality-development-programme.webp",
        link: "#"
    },
    {
        id: 2,
        title: "Reunion 2025",
        description: "RVS CAS MBA is happy to host reunion for the Alumni batch 2024-2025. It gives us immense pleasure to continue everlasting ties with you.",
        image: "/images/Social/reunion.webp",
        link: "#"
    },
    {
        id: 3,
        title: "Machine Learning",
        description: "Resource Person: Sathya Narayanan, Associate Director, Cognizant Coimbatore",
        image: "/images/Social/machine-learning.webp",
        link: "#"
    },
];
export default function PastEvents() {
    return (
        <section className="py-16 bg-booth-bg-gray">
            {/* Header */}
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Explore Past Events
                    </h2>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light mb-4">
                        Explore past RVS CAS MBA events, including guest lectures, workshops, and academic sessions
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {events.map((event) => (
                        <Link href={event.link} key={event.id} className="group flex flex-col cursor-pointer">
                            {/* Image Container */}
                            <div className="relative w-full aspect-[4/3] overflow-hidden mb-5 bg-gray-100">
                                {/* Using standard img to avoid next/image domain configuration issues with placeholder images */}
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg md:text-xl font-trade-gothic-bold text-booth-dark-gray mb-2 md:mb-3 leading-[1.3] group-hover:text-[#7c0201] transition-colors duration-300 line-clamp-2">
                                {event.title}
                            </h3>
                            <p className="text-booth-light-gray mb-2 md:mb-4 font-trade-gothic-light text-base line-clamp-3">
                                {event.description}
                            </p>
                            <p className="text-booth-maroon font-medium hover:underline">
                                Read More
                                <span className="inline-flex items-center justify-left ml-1.5 align-middle text-[#7c0201] transition-transform duration-300 group-hover:translate-x-1.5">
                                    <BsArrowRight className="w-[18px] h-[18px]" strokeWidth={0.5} />
                                </span>
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
