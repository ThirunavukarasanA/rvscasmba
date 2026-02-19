import Image from "next/image";
import Link from "next/link";

export default function VideoSeriesSection() {
  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="flex-shrink-0 w-full md:w-[45%]">
            <Link href="/thinking-like-a-financial-analyst" className="block group">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=450&fit=crop"
                  alt="Thinking Like a Financial Analyst - Learning Series"
                  width={800}
                  height={450}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-booth-maroon ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex-1">
            <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-trade-gothic-bold text-booth-dark-gray mb-4">
              Thinking Like a Financial Analyst
            </h2>
            <p className="text-booth-maroon font-trade-gothic-bold text-sm mb-4">
              A Learning Series by Dr. K. Senthil Ganesh
            </p>
            <p className="text-booth-dark-gray font-trade-gothic-light text-base md:text-lg mb-6">
              Experience the same analytical framework used in this MBA program. This free video series introduces you to how real financial analysts interpret capital, question accounting numbers, and evaluate business performance—the very approach Dr. Senthil Ganesh brings to the MBA – Applied Finance classroom.
            </p>
            <p className="text-booth-dark-gray font-trade-gothic-light text-base md:text-lg mb-8">
              66 focused lessons. One analytical lens. A preview of how we teach finance at RVS CAS.
            </p>
            <Link
              href="/thinking-like-a-financial-analyst"
              className="inline-block border-2 border-booth-maroon text-booth-maroon px-6 py-3 font-trade-gothic-bold uppercase hover:bg-booth-maroon hover:text-white transition text-sm"
            >
              Explore the Series
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
