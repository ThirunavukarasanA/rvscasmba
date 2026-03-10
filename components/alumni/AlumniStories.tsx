import Image from "next/image";
import Link from "next/link";
const insights = [
    {
        title: "DIJO PHILIP",
        batch: "(Batch 2015-17)",
        description:
            "Chief Business Development Officer Box Room Innovations",
        image:
            "/images/alumni/dijo.jpg",
        place: "Cochin",
    },
    {
        title: "ABHIRAJ",
        batch: "(Batch 2015-17)",
        description:
            "Tax Analyst Ernst & Young",
        image:
            "/images/alumni/abhiraj.jpg",
        place: "Bangalore",
    },
    {
        title: "PARTHIBAN",
        batch: "(Batch 2014-16)",
        description:
            "Assistant Manager – Projects Sundaram Finance",
        image:
            "/images/alumni/parthiban.jpg",
        place: "Chennai",
    },
    {
        title: "PREDEESH K. VARGHESE",
        batch: "(Batch 2015-17)",
        description:
            "Resource Specialist NewAgeSys Solutions P.Ltd.,",
        image:
            "/images/alumni/predeesh.jpg",
        place: "Cochin",
    },
];
export default function AlumniStories() {
    return (
        <section className="py-8 md:py-20 bg-booth-bg-gray">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-4 md:mb-8">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-3 md:mb-4">
                        Alumni Stories
                    </h2>
                    {/* <p className="text-booth-light-gray text-sm md:text-lg font-trade-gothic-light">
                        Our faculty and thought leaders share their research and insights on
                        the most pressing business and management issues.
                    </p> */}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6 md:mt-12">
                    {insights.map((insight, index) => (
                        <div key={index} className="bg-booth-bg-gray shadow-md hover:scale-105 transition-all hover:shadow-xl p-3 overflow-hidden">
                            <div className="relative h-40 md:h-60">
                                <Image
                                    src={insight.image}
                                    alt={insight.title} fill
                                    className="object-cover object-top"
                                />
                            </div>
                            <div className="py-2 md:py-6">
                                <h3 className="text-lg md:text-xl font-trade-gothic-bold text-booth-dark-gray mb-2 md:mb-3">
                                    {insight.title}
                                </h3>
                                <p className="text-booth-dark-gray mb-2 md:mb-4 font-trade-gothic-light text-base">
                                    <strong>{insight.batch}</strong>
                                </p>
                                <p className="text-booth-maroon mb-2 md:mb-4 font-trade-gothic-light text-base">
                                    {insight.description}
                                </p>
                                <p className="text-booth-dark-gray mb-2 md:mb-4 font-trade-gothic-bold text-base">
                                    {insight.place}
                                </p>
                                {/* <Link
                                    href="#"
                                    className="inline-flex items-center gap-2 text-booth-maroon font-medium hover:underline"
                                >
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
                                </Link> */}
                            </div>
                        </div>
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
