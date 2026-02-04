import Image from "next/image";

const locations = [
  {
    title: "Booth in North America",
    description: "Our flagship campus in Chicago, Illinois, serves as the heart of our academic community.",
    image: "https://images.unsplash.com/photo-1494522358652-f8ccf5fd7201?w=600&h=400&fit=crop"
  },
  {
    title: "Learn More about Booth in Europe",
    description: "Our London campus brings Booth's rigorous approach to business education to Europe.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop"
  },
  {
    title: "Building Connections in Asia",
    description: "Our Hong Kong campus connects students with opportunities across Asia and the Pacific.",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=600&h=400&fit=crop"
  }
];

export default function GlobalCommunitySection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-start gap-4 mb-4 md:mb-8">
          <div className="w-1 h-12 md:h-16 bg-booth-maroon"></div>
          <div>
            <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-3 md:mb-4">
              Our Global Community
            </h2>
            <p className="text-booth-light-gray text-sm md:text-lg max-w-3xl font-trade-gothic-light">
              With alumni spanning the globe, Chicago Booth has built a network of leaders who are making an impact in every industry and region.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 my-8 md:my-16">
          <div>
            <div className="text-6xl md:text-7xl font-trade-gothic-bold text-booth-dark-gray mb-2">
              60K+
            </div>
            <p className="text-booth-light-gray font-trade-gothic-light">
              Booth Alumni Worldwide
            </p>
          </div>
          <div>
            <div className="text-6xl md:text-7xl font-trade-gothic-bold text-booth-dark-gray mb-2">
              120+
            </div>
            <p className="text-booth-light-gray font-trade-gothic-light">
              Countries, Cities, Towns Served
            </p>
          </div>
          <div>
            <div className="text-6xl md:text-7xl font-trade-gothic-bold text-booth-dark-gray mb-2">
              3
            </div>
            <p className="text-booth-light-gray font-trade-gothic-light">
              Global Campuses (Chicago, London and Hong Kong)
            </p>
          </div>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-8 md:mt-16">
          {locations.map((location, index) => (
            <div key={index} className="bg-white shadow-sm overflow-hidden">
              <div className="relative h-40 md:h-64">
                <Image
                  src={location.image}
                  alt={location.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 px-2 py-2 md:p-6">
                  <h3 className="text-lg md:text-xl font-trade-gothic-bold text-white">
                    {location.title}
                  </h3>
                </div>
              </div>
              <div className="px-2 py-2 md:p-6">
                <p className="text-booth-light-gray mb-2 md:mb-4 font-trade-gothic-light text-base">
                  {location.description}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-booth-maroon font-medium hover:underline">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
