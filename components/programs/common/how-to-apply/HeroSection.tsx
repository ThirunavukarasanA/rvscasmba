import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop"
          alt="How to Apply to RVS CAS MBA"
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
              How to Apply to RVS CAS MBA
            </h1>
            <p className="text-xl md:text-2xl text-white font-trade-gothic-light mb-6">
              A clear, step-by-step application process designed to guide you from interest to enrollment.
            </p>
            <p className="text-lg md:text-xl text-white font-trade-gothic-light opacity-90">
              Applying to <strong className="font-trade-gothic-bold">RVS CAS MBA</strong> is a straightforward process. This page outlines each step so you know exactly what to expect—from choosing a program to confirming your admission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
