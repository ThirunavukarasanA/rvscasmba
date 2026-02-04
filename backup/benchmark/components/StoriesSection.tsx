import Image from "next/image";

const stories = [
  {
    title: "MBA Application Tips: Keys to an MBA Letter of Recommendation",
    description: "Learn what makes a strong recommendation letter and how to help your recommenders write compelling letters on your behalf.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
  },
  {
    title: "Tips for Applying to the Access and Live Master in Finance Program",
    description: "Get expert advice on crafting a standout application for our Master in Finance program.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop"
  },
  {
    title: "Application Advice for Master in Management Program",
    description: "Discover what admissions committees look for in Master in Management applications.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
  }
];

export default function StoriesSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-start gap-4 mb-4 md:mb-8">
          <div className="w-1 h-12 md:h-16 bg-booth-maroon"></div>
          <div>
            <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-3 md:mb-4">
              Stories from the Booth Community
            </h2>
            <p className="text-booth-light-gray text-sm md:text-lg max-w-3xl font-trade-gothic-light">
              Discover inspiring stories from our students, alumni, and faculty who are making a difference in the world.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-12">
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
              <div className="px-2 py-2 md:p-6">
                <h3 className="text-lg md:text-xl font-trade-gothic-bold text-booth-dark-gray mb-2 md:mb-3">
                  {story.title}
                </h3>
                <p className="text-booth-light-gray mb-2 md:mb-4 font-trade-gothic-light text-base">
                  {story.description}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-booth-maroon font-medium hover:underline">
                  Read More
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
