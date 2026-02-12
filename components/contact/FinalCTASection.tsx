import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="py-8 md:py-20 bg-booth-teal">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-white mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-white mb-4 md:mb-8">
            Request a Call Back
          </h2>
          <p className="text-base md:text-xl text-white mb-4 font-trade-gothic-light">
            Prefer a direct conversation?
          </p>
          <p className="text-base md:text-xl text-white mb-4 md:mb-8 font-trade-gothic-light">
            Fill out our short Call Back form, and a member of our team will contact you promptly.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="#reqestform" className="border-2 border-white bg-white text-booth-teal px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-transparent hover:text-white transition text-sm md:text-base">
            Request a Call Back
          </a>
          {/* <Link href="/programs/common/admissions" className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-white hover:text-booth-teal transition text-sm md:text-base">
            Contact Admissions
          </Link> */}
          {/* <a href="/programs/common/how-to-apply" className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-white hover:text-booth-teal transition text-sm md:text-base">
            How to Apply
          </a> */}
        </div>
      </div>
    </section>
  );
}
