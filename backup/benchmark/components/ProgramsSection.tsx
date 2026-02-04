import Image from "next/image";

const programs = [
  {
    title: "MBA Programs",
    description: "Full-time, part-time, and executive MBA programs designed to transform your career and expand your impact.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop"
  },
  {
    title: "Access and Live Master in Finance Program",
    description: "A flexible, part-time program that combines online learning with in-person experiences.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop"
  },
  {
    title: "Master in Management Program",
    description: "A one-year program for recent graduates looking to launch their careers in business.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop"
  },
  {
    title: "The Stevens Doctoral Program",
    description: "A rigorous PhD program that prepares students for careers in academia and research.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=400&fit=crop"
  },
  {
    title: "Executive Education",
    description: "Custom and open-enrollment programs for executives and organizations.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop"
  },
  {
    title: "CXO Programs",
    description: "Specialized programs for C-suite executives and senior leaders.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=400&fit=crop"
  }
];

export default function ProgramsSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-start gap-4 mb-6 md:mb-12">
          <div className="w-1 h-12 md:h-16 bg-booth-maroon"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray">
            Explore Our Programs
          </h2>
        </div>

        <div className="space-y-4 md:space-y-8">
          {programs.map((program, index) => (
            <div key={index} className="flex gap-3 md:gap-6 items-start pb-4 md:pb-8 border-b border-gray-200 last:border-b-0">
              <div className="flex-shrink-0">
                <Image
                  src={program.image}
                  alt={program.title}
                  width={120}
                  height={120}
                  className="object-cover rounded w-20 h-20 md:w-[120px] md:h-[120px]"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-2 md:mb-3">
                  {program.title}
                </h3>
                <p className="text-booth-light-gray mb-2 md:mb-4 font-trade-gothic-light text-sm md:text-base">
                  {program.description}
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
