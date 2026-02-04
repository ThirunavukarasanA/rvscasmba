import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop"
          alt="Request Information at RVS CAS MBA"
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
              Request Information
            </h1>
            <p className="text-xl md:text-2xl text-white font-trade-gothic-light mb-6">
              Learn more about RVS CAS MBA programs, admissions, and the student experience.
            </p>
            <p className="text-lg md:text-xl text-white font-trade-gothic-light opacity-90">
              Complete the form below and the admissions team at <strong className="font-trade-gothic-bold">RVS CAS MBA</strong> will get in touch with details relevant to your interests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
