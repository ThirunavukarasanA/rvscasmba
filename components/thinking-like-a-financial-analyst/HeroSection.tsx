"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=1080&fit=crop"
          alt="Thinking Like a Financial Analyst - Learning Series"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-16">
        <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
          <div className="w-16 h-0.5 bg-white mb-6"></div>
          <h1 className="text-5xl md:text-7xl font-trade-gothic-bold text-white mb-4">
            Thinking Like a Financial Analyst
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-trade-gothic-light italic mb-8">
            A Learning Series by Dr. K. Senthil Ganesh
          </p>

          <p className="text-2xl md:text-3xl font-trade-gothic-bold text-white mb-4">
            Finance is not about formulas.<br />It is about judgment.
          </p>
          <p className="text-lg md:text-xl text-white font-trade-gothic-light mb-6 max-w-2xl">
            This series introduces you to how real financial analysts interpret capital, question accounting numbers, and evaluate business performance beyond surface-level metrics.
          </p>
          <p className="text-lg md:text-xl text-white font-trade-gothic-light mb-8 max-w-2xl">
            This is not simplified content.<br />This is how finance is taught inside the MBA classroom.
          </p>
          <Link
            href="#roadmap"
            className="inline-block border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-white hover:text-booth-maroon transition text-sm md:text-base"
          >
            Start Exploring the Series
          </Link>
        </div>
      </div>
    </section>
  );
}
