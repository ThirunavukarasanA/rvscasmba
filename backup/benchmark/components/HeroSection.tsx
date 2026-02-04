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
          <div className="w-full pb-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="w-16 h-0.5 bg-white mb-6"></div>
              <h1 className="text-5xl md:text-7xl font-trade-gothic-bold text-white mb-6">
                Analytical. Collaborative. Bold. Booth.
              </h1>
              <p className="text-xl md:text-2xl text-white font-trade-gothic-light max-w-4xl">
                The University of Chicago Booth School of Business is the destination for leaders who want to change the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Text Section Between Heroes */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl space-y-4">
            <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
              At Chicago Booth, you have the freedom to explore your intellectual curiosity in a collaborative community of peers and learn from the world's leading business school faculty at Booth's campuses in Chicago, London, and Hong Kong.
            </p>
            <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
              You will discover how to bring your bold ideas to fruition, while deepening your analytical thinking and sharpening your problem-solving skills. You will join a global community that's committed to supporting your success.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section 2 - Separate section with left alignment */}
      <section className="relative bg-white">
        <div className="relative h-[70vh]">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop"
              alt="Students on campus"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          {/* Text overlay - left aligned at bottom */}
          <div className="relative z-10 h-full flex items-end">
            <div className="w-full pb-16 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-16 bg-white"></div>
                  <div>
                    <div className="w-16 h-0.5 bg-white mb-6"></div>
                    <h2 className="text-4xl md:text-6xl font-trade-gothic-bold text-white mb-6">
                      Discover Why Booth
                    </h2>
                    <p className="text-xl md:text-2xl text-white font-trade-gothic-light max-w-3xl">
                      Chicago Booth is for leaders like you. Learn how Booth can help you unlock the full promise of your potential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
