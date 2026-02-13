export default function LifeBeyondAcademicsSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Life Beyond Academics
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-bold">Growth Outside the Classroom</p>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            The MBA experience also includes opportunities for:
          </p>
          <div>
            <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Academic clubs and student initiatives</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Leadership participation in events</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Cultural and community engagement activities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Collaborative learning beyond coursework</span>
              </li>
            </ul>
          </div>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">Students are encouraged to develop communication, leadership, and teamwork skills alongside academic learning.</p>
        </div>
      </div>
    </section>
  );
}
