export default function IndustryConnectSection() {
  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Who Will Train You?
          </h2>
        </div>

        <div className="space-y-6">
          <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Global-level faculty trained at institutions including LBS, IIM, and SDA Bocconi</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Industry experts including CFA charterholders, stock brokers, and senior corporate professionals</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Learn from real practitioners, not just textbooks</span>
            </li>
          </ul>

          <div>
            {/* <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-4">
              Tools & Platforms
            </h3> */}
            {/* <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
              Excel · Bloomberg Terminal · RiskMetrics · FactSet · Stata · Moody's · MoneyControl
            </p> */}
            <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
              Throughout the programme, students engage with faculty, alumni, and industry professionals who actively shape financial decision-making across corporate finance teams, advisory roles, analytics functions, and emerging financial domains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
