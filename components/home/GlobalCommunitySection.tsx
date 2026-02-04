import Image from "next/image";
import Link from "next/link";

const locations = [
  {
    title: "Campus Life",
    description:
      "Life at RVS CAS MBA is collaborative, immersive, and growth-oriented. Students learn through classrooms, labs, clubs, and industry interactions.",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&h=600&fit=crop",
  },
  {
    title: "Student Community",
    description:
      "From professional clubs and research forums to cultural and management events, the RVS CAS MBA community supports holistic development.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
  },
  {
    title: "Industry Connect",
    description:
      "Building leadership, teamwork, and confidence beyond academics through real-world industry exposure and campus initiatives.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
];

export default function GlobalCommunitySection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-4 md:mb-8">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-3 md:mb-4">
            Life at RVS CAS MBA
          </h2>
          <p className="text-booth-light-gray text-sm md:text-lg font-trade-gothic-light">
            Life at RVS CAS MBA is collaborative, immersive, and
            growth-oriented. Students learn through classrooms, labs, clubs,
            industry interactions, and campus initiatives that build leadership,
            teamwork, and confidence beyond academics.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 my-8 md:my-16">
          <div>
            <div className="text-6xl md:text-7xl font-trade-gothic-bold text-booth-dark-gray mb-2">
              30+
            </div>
            <p className="text-booth-light-gray font-trade-gothic-light">
              Years of Management Education
            </p>
          </div>
          <div>
            <div className="text-6xl md:text-7xl font-trade-gothic-bold text-booth-dark-gray mb-2">
              5000+
            </div>
            <p className="text-booth-light-gray font-trade-gothic-light">
              Alumni Network
            </p>
          </div>
          <div>
            <div className="text-6xl md:text-7xl font-trade-gothic-bold text-booth-dark-gray mb-2">
              100+
            </div>
            <p className="text-booth-light-gray font-trade-gothic-light">
              Industry Partners
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
              <div className="py-2 md:py-6">
                <p className="text-booth-light-gray mb-2 md:mb-4 font-trade-gothic-light text-base">
                  {location.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-booth-maroon font-medium hover:underline"
                >
                  Learn More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
