export default function StillHaveQuestionsSection() {
  return (
    <section className="py-8 md:py-20 bg-booth-teal">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-white mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-white mb-4">
            Still Have Questions?
          </h2>
        </div>

        <div className="space-y-6 mb-8">
          <p className="text-lg md:text-xl text-white font-trade-gothic-light">
            Our admissions team is happy to help.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="/request-information" className="border-2 border-white bg-white text-booth-teal px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-transparent hover:text-white transition text-sm md:text-base">
            Request Information
          </a>
          <a href="/contact" className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-white hover:text-booth-teal transition text-sm md:text-base">
            Contact Admissions
          </a>
        </div>
      </div>
    </section>
  );
}
