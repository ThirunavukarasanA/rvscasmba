import Image from "next/image";
import Link from "next/link";

export default function ProgramExperienceSection() {
  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Academic Experience
          </h2>
          {/* <p className="text-xl md:text-2xl text-booth-dark-gray font-trade-gothic-light mb-6">
            The Applied Finance programme is structured to mirror the way
            finance is practiced, analyzed, and taught in the professional
            world.
          </p> */}
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light mb-6">
            The academic experience in the Digital Marketing MBA is designed around <b>how marketers actually learn to make decisions</b> — through structured thinking, repeated practice, and faculty guidance.
          </p>
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            You will learn:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="relative h-64 md:h-80">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
              alt="Students working on finance projects"
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="space-y-6">
            <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Concept-First, Platform-Second Learning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Continuous Evaluation Through Application</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Integration Across Marketing Functions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Project-based learning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>Case studies</span>
              </li>
            </ul>

            {/* <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
              Students work with real datasets, financial statements, and market
              scenarios throughout the program.
            </p> */}

            <Link
              href="/student-experience"
              className="inline-flex items-center gap-2 text-booth-maroon font-trade-gothic-bold hover:underline"
            >
              View Full Experience
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
      </div>
    </section>
  );
}
