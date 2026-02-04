export default function FinalCTASection() {
  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-start gap-4">
          <div className="w-1 h-12 md:h-16 bg-booth-maroon"></div>
          <div>
            <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4 md:mb-6">
              Analytical. Collaborative. Bold. Booth.
            </h2>
            <p className="text-base md:text-xl text-booth-dark-gray mb-4 md:mb-8 font-trade-gothic-light">
              Learn more about studying at Booth
            </p>
            <button className="bg-booth-maroon text-white px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-opacity-90 transition text-sm md:text-base">
              DISCOVER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
