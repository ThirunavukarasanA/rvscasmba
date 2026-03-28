import Image from "next/image";
import Link from "next/link";

const insights = [
  {
    title: "Faculty Article / Thought Leadership",
    description:
      "Our faculty share their research and insights on management, technology, and business in the digital era.",
    image:
      "/images/insights/faculty-article.webp",
  },
  {
    title: "Industry Talk / Seminar Highlight",
    description:
      "Explore key insights from industry leaders and seminars that shape modern business thinking.",
    image:
      "/images/insights/industry-talk.webp",
  },
  // {
  //   title: "Student Research or Case Study",
  //   description:
  //     "Discover how our students are applying management principles to solve real-world business challenges.",
  //   image:
  //     "/images/insights/student-research.webp",
  // },
];

export default function FacultyInsightsSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-4 md:mb-8">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-3 md:mb-4">
            Insights & Ideas
          </h2>
          <p className="text-booth-light-gray text-sm md:text-lg font-trade-gothic-light">
            Our faculty and thought leaders share their research and insights on
            the most pressing business and management issues.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-12">
          {insights.map((insight, index) => (
            <div key={index} className="bg-white shadow-md hover:scale-105 transition-all hover:shadow-xl p-3 overflow-hidden">
              <div className="relative h-40 md:h-64">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="py-2 md:py-6">
                <h3 className="text-lg md:text-xl font-trade-gothic-bold text-booth-dark-gray mb-2 md:mb-3">
                  {insight.title}
                </h3>
                <p className="text-booth-light-gray mb-2 md:mb-4 font-trade-gothic-light text-base">
                  {insight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-12">
          <Link href="/insights" className="bg-booth-maroon text-white px-8 py-4 font-trade-gothic-bold uppercase hover:bg-opacity-90 transition">
            EXPLORE INSIGHTS
          </Link>
        </div>
      </div>
    </section>
  );
}
