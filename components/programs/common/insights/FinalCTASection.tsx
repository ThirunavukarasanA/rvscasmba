export default function FinalCTASection({ content }: { content: string }) {
  return (
    <section className="py-8 md:py-20 bg-booth-teal">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-white mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-white mb-4">
            {content}
          </h2>
          <p className="text-base md:text-xl text-white mb-4 font-trade-gothic-light">
            Follow our updates to explore faculty insights, research notes, and seminar discussions.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="/request-information" className="border-2 border-white bg-white text-booth-teal px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-transparent hover:text-white transition text-sm md:text-base">
            Request Information
          </a>
          <a href="/contact" className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-white hover:text-booth-teal transition text-sm md:text-base">
            Contact MBA Office
          </a>
        </div>
      </div>
    </section>
  );
}
