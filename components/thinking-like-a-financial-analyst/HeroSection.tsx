"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative">
      {/* Hero image - shorter to flow into content */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=1080&fit=crop"
          alt="Thinking Like a Financial Analyst - Learning Series"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-end pb-12">
          <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
            <div className="w-16 h-0.5 bg-white mb-4"></div>
            <h1 className="text-4xl md:text-6xl font-trade-gothic-bold text-white mb-2">
              Thinking Like a Financial Analyst
            </h1>
            <p className="text-lg text-white/90 font-trade-gothic-light italic">
              A Learning Series by Dr. K. Senthil Ganesh
            </p>
          </div>
        </div>
      </div>

      {/* Content block with photo - flows from hero */}
      <div className="bg-white py-12 md:py-16">
        <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="flex-shrink-0 w-full md:w-[260px]">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/senthil.jpg"
                  alt="Dr. K. Senthil Ganesh - Series Lead, Thinking Like a Financial Analyst"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 260px"
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray mb-6">
                Finance is not about formulas.<br />It is about judgment.
              </p>
              <p className="text-booth-dark-gray font-trade-gothic-light text-base md:text-lg leading-relaxed mb-4">
                <strong className="font-trade-gothic-bold text-booth-dark-gray">Thinking Like a Financial Analyst</strong> is a structured video series from RVS CAS MBA. It introduces you to how real financial analysts interpret capital, question accounting numbers, and evaluate business performance beyond surface-level metrics.
              </p>
              <p className="text-booth-dark-gray font-trade-gothic-light text-base md:text-lg leading-relaxed mb-6">
                Led by Dr. K. Senthil Ganesh, Managing Trustee of RVS Educational Institutions, the series brings the same analytical framework used in the MBA – Applied Finance classroom to a wider audience. <strong className="font-trade-gothic-bold">66 focused lessons</strong> across 10 thematic clusters—from capital structure and return on capital to M&A and analyst mindset.
              </p>
              <p className="text-booth-dark-gray font-trade-gothic-light text-base md:text-lg italic mb-8">
                This is not simplified content. This is how finance is taught inside the MBA classroom, made accessible.
              </p>
              <Link
                href="#roadmap"
                className="inline-block border-2 border-booth-maroon text-booth-maroon px-6 py-3 font-trade-gothic-bold uppercase hover:bg-booth-maroon hover:text-white transition text-sm"
              >
                Explore the Series
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
