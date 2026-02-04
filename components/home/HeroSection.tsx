import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section 1 - Title and description on image bottom left */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&h=1080&fit=crop"
            alt="University campus aerial view"
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
                Education for the Digital Era.
              </h1>
              <p className="text-xl md:text-2xl text-white font-trade-gothic-light">
                RVS CAS MBA prepares techno-managers who combine strong business fundamentals with technology, analytics, and real-world decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Text Section Between Heroes */}
      <section className="bg-white py-12">
        <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
              At RVS CAS MBA, management education goes beyond theory. Our Tech MBA model integrates business knowledge with digital tools, analytics, and industry exposure—helping students think critically, adapt quickly, and lead confidently in a rapidly changing economy.
            </p>
            <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
              With over 30 years of management education, RVS CAS MBA focuses on relevance, rigor, and real-world readiness.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section 2 - Separate section with left alignment */}
      <section className="relative bg-white">
        <div className="relative h-[70vh]">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=1080&fit=crop"
              alt="Why RVS CAS MBA - Business education"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          {/* Text overlay - left aligned at bottom */}
          <div className="relative z-10 h-full flex items-end">
            <div className="w-full pb-16">
              <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="w-16 h-0.5 bg-white mb-6"></div>
                <h2 className="text-4xl md:text-6xl font-trade-gothic-bold text-white mb-6">
                  Why RVS CAS MBA
                </h2>
                <p className="text-xl md:text-2xl text-white font-trade-gothic-light">
                  RVS CAS MBA is for leaders who want to combine business excellence with technology expertise. Learn how we can help you unlock your potential in the digital economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
