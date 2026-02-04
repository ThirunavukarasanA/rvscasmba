import Image from "next/image";

const stories = [
  {
    title: "Student Experience Story",
    description: "Discover how RVS CAS MBA students are transforming their careers through our Tech MBA program. Learn from their journey and experiences.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
  },
  {
    title: "Alumni Journey",
    description: "Explore the career paths of our alumni who are making an impact in technology, business, and leadership roles across industries.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop"
  },
  {
    title: "Faculty Perspective",
    description: "Gain insights from our faculty members on management education, industry trends, and the future of business in the digital era.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
  }
];

export default function StoriesSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-4 md:mb-8">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-3 md:mb-4">
            Stories from RVS CAS MBA
          </h2>
          <p className="text-booth-light-gray text-sm md:text-lg font-trade-gothic-light">
            Discover inspiring stories from our students, alumni, and faculty who are making a difference in the world.
          </p>
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
              <div className="py-2 md:py-6">
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
