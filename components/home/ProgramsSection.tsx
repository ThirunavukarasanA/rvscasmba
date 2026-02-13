import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Tech MBA",
    description: "A future-focused MBA integrating business and technology.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop",
  },
  {
    title: "Business Analytics",
    description: "Transforming data into strategic business insights.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop",
  },
  {
    title: "Digital Marketing",
    description:
      "Building brands and growth strategies in a digital-first world.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop",
  },
  {
    title: "Human Resources",
    description: "Leading people, culture, and organizational change.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=400&fit=crop",
  },
  {
    title: "Applied Finance",
    description: "Finance skills aligned to modern markets and fintech.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
  },
  {
    title: "Logistics & Supply Chain Management",
    description: "Designing efficient, resilient global supply systems.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=400&fit=crop",
  },
];

export default function ProgramsSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray">
            Programs
          </h2>
        </div>

        <div className="space-y-4 md:space-y-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="flex gap-3 md:gap-6 items-start pb-4 md:pb-8 border-b border-gray-200 last:border-b-0"
            >
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
                <Link
                  href={
                    program.title === "Applied Finance"
                      ? "/programs/mba-applied-finance"
                      : program.title === "Business Analytics"
                        ? "/programs/mba-business-analytics"
                        : program.title === "Digital Marketing"
                          ? "/programs/mba-digital-marketing"
                          : program.title === "Human Resources"
                            ? "#"
                            : program.title ===
                              "Logistics & Supply Chain Management"
                              ? "#"
                              : "#"
                  }
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
