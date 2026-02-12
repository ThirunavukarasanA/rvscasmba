import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/faq/faq2.png"
          alt="FAQ at RVS CAS MBA"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      {/* Title and description overlay - bottom left aligned on image */}
      <div className="relative z-10 h-full flex items-end">
        <div className="w-full pb-16">
          <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
            <div className="w-16 h-0.5 bg-white mb-6"></div>
            <h1 className="text-5xl md:text-7xl font-trade-gothic-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-white font-trade-gothic-light pb-4">
              Choosing an MBA is an important decision, and it’s natural to have questions.
            </p>
            <p className="text-xl md:text-2xl text-white font-trade-gothic-light pb-4">This section addresses common queries about the MBA at RVS College of Arts & Science, covering programs, admissions, learning approach, student life, careers, and fees.</p>
            <p className="text-xl md:text-2xl text-white font-trade-gothic-light">If you don’t find what you’re looking for, the admissions team is always available to help.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
