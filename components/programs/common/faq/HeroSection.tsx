import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=1080&fit=crop"
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
            <p className="text-xl md:text-2xl text-white font-trade-gothic-light">
              Answers to common questions about MBA programs, admissions, and student life at RVS CAS MBA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
