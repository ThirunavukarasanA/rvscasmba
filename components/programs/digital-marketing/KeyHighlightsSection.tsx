export default function KeyHighlightsSection() {
  const points = [
    "Strong foundation in business and management",
    "Specialization in digital marketing tools and strategies",
    "Hands-on learning through Stukent simulations and capstone projects",
    "Internship for real-world exposure",
    "Focus on analytics and performance thinking",
    "Structured curriculum aligned with current business needs",
  ];

  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            What Makes This Programme Stand Out
          </h2>
        </div>
        <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
