import Image from "next/image";

const insights = [
  {
    title: "Is Inflation Here to Stay?",
    description: "Our faculty explore the factors driving inflation and what it means for the global economy.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop"
  },
  {
    title: "How Inflation Makes the Labor Market Appear Hot",
    description: "Understanding the relationship between inflation and labor market dynamics.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
  },
  {
    title: "Job Loss Sustains a Public Business-Making",
    description: "Research on how job loss affects public policy and business decision-making.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
  }
];

export default function FacultyInsightsSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-start gap-4 mb-4 md:mb-8">
          <div className="w-1 h-12 md:h-16 bg-booth-maroon"></div>
          <div>
            <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-3 md:mb-4">
              Insights from Booth's Faculty
            </h2>
            <p className="text-booth-light-gray text-sm md:text-lg max-w-3xl font-trade-gothic-light">
              Our world-renowned faculty share their research and insights on the most pressing business and economic issues.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-12">
          {insights.map((insight, index) => (
            <div key={index} className="bg-white shadow-sm overflow-hidden">
              <div className="relative h-40 md:h-64">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-2 py-2 md:p-6">
                <h3 className="text-lg md:text-xl font-trade-gothic-bold text-booth-dark-gray mb-2 md:mb-3">
                  {insight.title}
                </h3>
                <p className="text-booth-light-gray mb-2 md:mb-4 font-trade-gothic-light text-base">
                  {insight.description}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-booth-maroon font-medium hover:underline">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-12">
          <button className="bg-booth-maroon text-white px-8 py-4 font-trade-gothic-bold uppercase hover:bg-opacity-90 transition">
            VIEW MORE INSIGHTS & RESEARCH
          </button>
        </div>
      </div>
    </section>
  );
}
