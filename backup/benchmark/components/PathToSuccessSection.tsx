export default function PathToSuccessSection() {
  return (
    <section className="py-8 md:py-20 bg-booth-teal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-start gap-4">
          <div className="w-1 h-12 md:h-16 bg-white"></div>
          <div>
            <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-white mb-4 md:mb-6">
              Choose Your Path to Success
            </h2>
            <p className="text-base md:text-xl text-white mb-4 md:mb-8 font-trade-gothic-light">
              Tell us about yourself, and we will show you the value of a Booth education.
            </p>
            <button className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-white hover:text-booth-teal transition text-sm md:text-base">
              Start Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
