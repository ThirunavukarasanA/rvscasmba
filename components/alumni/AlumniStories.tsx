import Image from "next/image";

const insights = [
    {
        title: "Suresh",
        batch: "2016 - Batch",
        description:
            "Human Resource Manager",
        image: "/images/alumni/1.jpg",
        company: "Amazon",
    },
    {
        title: "[Name]",
        batch: "[Batch]",
        description:
            "[Role]",
        image: "/images/alumni/2.jpg",
        company: "[Location]",
    },
    {
        title: "Manikanda prabu",
        batch: "2016 - Batch",
        description:
            "Digital Marketing Manager",
        image: "/images/alumni/3.jpg",
        company: "Amazon",
    },
    {
        title: "Babu S",
        batch: "2016 - Batch",
        description:
            "Applied Finance",
        image: "/images/alumni/4.jpg",
        company: "Amazon",
    },
    {
        title: "Arun",
        batch: "2016 - Batch",
        description:
            "Logistics & Supply Chain Management",
        image: "/images/alumni/5.jpg",
        company: "Amazon",
    },
    {
        title: "Anuraj",
        batch: "2016 - Batch",
        description:
            "Bussines Analytics",
        image: "/images/alumni/6.jpg",
        company: "Amazon",
    },
    {
        title: "[Name]",
        batch: "[Batch]",
        description:
            "[Role]",
        image: "/images/alumni/old-1.jpg",
        company: "[Company]",
    },
    {
        title: "[Name]",
        batch: "[Batch]",
        description:
            "[Role]",
        image: "/images/alumni/old-2.jpg",
        company: "[Company]",
    },
    {
        title: "[Name]",
        batch: "[Batch]",
        description:
            "[Role]",
        image: "/images/alumni/old-3.jpg",
        company: "[Company]",
    },
    {
        title: "[Name]",
        batch: "[Batch]",
        description:
            "[Role]",
        image: "/images/alumni/old-4.jpg",
        company: "[Company]",
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
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mt-6 md:mt-12">
                    {insights.map((insight, index) => (
                        <div
                            key={`${insight.image}-${index}`}
                            className="bg-white border border-gray-200 shadow-md hover:scale-[1.02] transition-all hover:shadow-xl p-3 overflow-hidden"
                        >
                            <div className="relative aspect-[3/4] w-full">
                                <Image
                                    src={insight.image}
                                    alt={insight.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover object-top"
                                />
                            </div>
                            <div className="py-2 md:py-4">
                                <h3 className="text-lg md:text-xl font-trade-gothic-bold text-booth-dark-gray mb-2 md:mb-3">
                                    {insight.title}
                                </h3>
                                <p className="text-booth-dark-gray mb-2 md:mb-3 font-trade-gothic-light text-base">
                                    <strong>{insight.batch}</strong>
                                </p>
                                <p className="text-booth-maroon mb-2 md:mb-3 font-trade-gothic-light text-sm md:text-base">
                                    {insight.description}
                                </p>
                                <p className="text-booth-dark-gray font-trade-gothic-bold text-base">
                                    {insight.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
