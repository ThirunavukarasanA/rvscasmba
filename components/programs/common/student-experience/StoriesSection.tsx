import Image from "next/image";

const stories = [
  {
    title: "Current Student Experience",
    description: "Placeholder",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
  },
  {
    title: "Alumni Reflection",
    description: "Placeholder",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop"
  },
  {
    title: "Campus Life Highlight",
    description: "Placeholder",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&h=400&fit=crop"
  }
];

export default function StoriesSection() {
  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Student Stories
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-bold">Experiences from the MBA Community</p>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            This section will feature reflections from current students and alumni, sharing their academic journeys, capstone experiences, and professional growth. These stories will provide authentic insights into how the RVS CAS MBA shapes careers and perspectives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            {stories.map((story, index) => (
              <div key={index} className="bg-white shadow-sm overflow-hidden">
                <div className="relative h-40 md:h-64">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="py-2 md:py-6">
                  <h3 className="text-lg md:text-xl font-trade-gothic-bold text-booth-dark-gray mb-2 md:mb-3 px-4 md:px-6">
                    {story.title}
                  </h3>
                  <p className="text-booth-light-gray mb-2 md:mb-4 font-trade-gothic-light text-base px-4 md:px-6">
                    {story.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pt-5">
          <a href="/#stories" className="inline-flex items-center gap-2 text-booth-maroon font-trade-gothic-bold hover:underline">
            View Student Stories
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
