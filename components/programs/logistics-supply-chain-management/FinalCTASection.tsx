import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="py-8 md:py-20 bg-booth-teal">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-white mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-white mb-4">
            Build a Strong Career Foundation in Supply Chain.
          </h2>
        </div>

        <p className="text-lg md:text-xl text-white font-trade-gothic-light mb-8 max-w-4xl">
          Build strong operational and analytical foundations, gain real
          exposure to tools and environments, and grow toward long-term
          leadership in supply chain and operations.
        </p>

        <p className="text-lg md:text-xl text-white font-trade-gothic-bold mb-8">
          Structured. Practical. Outcome-focused.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/request-information"
            className="bg-booth-maroon text-white px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-opacity-90 transition text-sm md:text-base"
          >
            Request Information
          </Link>
          <Link
            href="https://admissions.rvscas.ac.in?id=6246952974b78f49cd6c2bb8&leadform=RVSCAS_MBA_Website_Logistics_Supply_Chain_Build_Strong_Career_Section"
            className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-white hover:text-booth-teal transition text-sm md:text-base"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}
