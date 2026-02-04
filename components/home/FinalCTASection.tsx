import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div>
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4 md:mb-6">
            Education for the Digital Era.
          </h2>
          <p className="text-base md:text-xl text-booth-dark-gray mb-4 md:mb-8 font-trade-gothic-light">
            Learn more about studying at RVS CAS MBA
          </p>
          <Link
            href="/programs/mba-applied-finance"
            className="bg-booth-maroon text-white px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-opacity-90 transition text-sm md:text-base inline-block"
          >
            DISCOVER
          </Link>
        </div>
      </div>
    </section>
  );
}
