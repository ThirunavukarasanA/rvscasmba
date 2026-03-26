export default function AdditionalCertificationsSection() {
  const certifications = [
    "Financial Modelling",
    "Tax & Accounts",
    "Mergers & Acquisitions",
    "Valuation",
    "NISM",
    "SWAYAM",
    "Coursera",
  ];

  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Make a Better Career Decision
          </h2>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Alongside the core curriculum, students can pursue certification programmes in:
          </p>
        </div>
        <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
          {certifications.map((item) => (
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
