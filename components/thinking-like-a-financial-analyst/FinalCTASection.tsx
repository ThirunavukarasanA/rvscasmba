import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="py-12 md:py-20 bg-booth-maroon">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="w-16 h-0.5 bg-white mb-6"></div>
        <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-white mb-4 md:mb-6">
          Serious About a Career in Finance?
        </h2>
        <p className="text-xl font-trade-gothic-bold text-white mb-4">
          Start thinking beyond formulas.
        </p>
        <p className="text-white font-trade-gothic-light text-base md:text-lg mb-8">
          Explore the MBA – Applied Finance Program
        </p>
        <Link
          href="/request-information"
          className="border-2 border-white bg-white text-booth-maroon px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-transparent hover:text-white transition text-sm md:text-base inline-block"
        >
          Enquire Now
        </Link>
      </div>
    </section>
  );
}
