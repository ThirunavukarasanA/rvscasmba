export default function KeyHighlightsSection() {
  const highlights = [
    "Duration: 2 Years (4 Semesters)",
    "Mode: Full-Time",
    "Affiliation: Bharathiar University",
    "Credits: 60-120 (as per university norms)",
    "Internship: Mandatory Industry Exposure",
    "Capstone: Real-Time Finance Project",
    "Re-Accredited with A+ Grade by NAAC",
    "40+ years legacy institution",
    "Strong alumni network with graduates in leading global companies",
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
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
