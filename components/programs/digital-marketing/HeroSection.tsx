import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f"
          alt="Finance and analytics"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      {/* Title and description overlay - bottom left aligned on image */}
      <div className="relative z-10 h-full flex items-end">
        <div className="w-full pb-16">
          <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
            <div className="w-16 h-0.5 bg-white mb-6"></div>
            <h1 className="text-5xl md:text-7xl font-trade-gothic-bold text-white mb-6">
              MBA in Digital Marketing
            </h1>
            <p className="text-xl md:text-2xl text-white font-trade-gothic-light mb-6">
              Learn to design, execute, and measure marketing decisions in digital environments
            </p>
            <p className="text-lg md:text-xl text-white font-trade-gothic-light mb-8 opacity-90">
              A practice-intensive MBA at{" "}
              <strong className="font-trade-gothic-bold">
                RVS CAS
              </strong>{" "}
              focused on how digital marketing actually works — across platforms, funnels, and business objectives
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/request-information"
                className="bg-booth-maroon text-white px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-opacity-90 transition text-sm md:text-base"
              >
                Explore Program Structure
              </Link>
              <Link
                href="/how-to-apply"
                className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-white hover:text-booth-maroon transition text-sm md:text-base"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
