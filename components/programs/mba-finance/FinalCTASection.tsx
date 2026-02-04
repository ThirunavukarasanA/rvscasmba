export default function FinalCTASection() {
  return (
    <section className="py-8 md:py-20 bg-booth-teal">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-white mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-white mb-4">
            Take the next step toward a finance career.
          </h2>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="/programs/common/request-information" className="bg-booth-maroon text-white px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-opacity-90 transition text-sm md:text-base">
            Request Information
          </a>
          <a href="/programs/common/how-to-apply" className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-white hover:text-booth-teal transition text-sm md:text-base">
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
