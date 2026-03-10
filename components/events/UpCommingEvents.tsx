import Image from "next/image";
import Link from "next/link";
import { generateSlug } from './PastEvents';
export const upcomingEvents = [
    {
        title: "Onam Celebration 2025",
        description:
            "The School of Management Studies (PG) celebrated Onam 2025.",
        image:
            "/images/Social/onam.webp",
    },
    {
        title: "Vidhyarambha 2025 is here!",
        description:
            "RVS College of Arts and Science is all set to welcome the incoming MBA batch with VIDYARAMBHA 2025 — an inspiring and engaging orientation program scheduled from 15th July to 21st July 2025.",
        image:
            "/images/Social/Vidyarambha_2025.webp",
    },
    {
        title: "Campus to Corporate - Bridge Program",
        description:
            "RVS College of Arts & Science (RVS CAS MBA) successfully organized the 'Campus to Corporate - Bridge Program' on 01 Aug 2024, at 9:30 am in the prestigious VM Hall.",
        image:
            "/images/Social/campus-to-corporate.webp",
    },
];
export default function UpCommingEvents() {
    return (
        <section className="py-8 md:py-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-4 md:mb-8">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-3 md:mb-4">
                        Upcoming Events
                    </h2>
                    {/* <p className="text-booth-light-gray text-sm md:text-lg font-trade-gothic-light">
                        Our faculty and thought leaders share their research and insights on
                        the most pressing business and management issues.
                    </p> */}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {upcomingEvents.map((event, index) => (
                        <Link href={`/events/${generateSlug(event.title)}`} key={index} className="group flex flex-col cursor-pointer">
                            <div className="relative w-full aspect-[4/3] overflow-hidden mb-5 bg-gray-100">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="py-2 md:py-6">
                                <h3 className="text-lg md:text-xl font-trade-gothic-bold text-booth-dark-gray mb-2 md:mb-3">
                                    {event.title}
                                </h3>
                                <p className="text-booth-light-gray mb-2 md:mb-4 font-trade-gothic-light text-base line-clamp-2">
                                    {event.description}
                                </p>
                                <span className="inline-flex items-center gap-2 text-booth-maroon font-medium hover:underline">
                                    Read More
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
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* <div className="mt-6 md:mt-12">
                    <button className="bg-booth-maroon text-white px-8 py-4 font-trade-gothic-bold uppercase hover:bg-opacity-90 transition">
                        EXPLORE INSIGHTS
                    </button>
                </div> */}
            </div>
        </section>
    )
}
