import Link from "next/link";

export default function RequestProgramInformation() {
  const items = [
    {
      title: "Take Career Guidance",
      href: "/request-information",
      icon: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 md:w-20 md:h-20"
        >
          <circle
            cx="40"
            cy="40"
            r="38"
            stroke="currentColor"
            strokeWidth="3"
            className="text-booth-maroon"
          />
          <path
            d="M40 20V24"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-booth-maroon"
          />
          <rect
            x="38"
            y="18"
            width="4"
            height="4"
            className="fill-booth-maroon"
            rx="2"
          />
          <path
            d="M40 32V60"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="text-booth-maroon"
          />
          {/* Re-drawing 'i' dot and line more cleanly */}
          <path
            d="M40 25C41.6569 25 43 23.6569 43 22C43 20.3431 41.6569 19 40 19C38.3431 19 37 20.3431 37 22C37 23.6569 38.3431 25 40 25Z"
            fill="currentColor"
            className="text-booth-maroon"
          />
        </svg>
      ),
    },
    {
      title: "Download Brochure",
      href: "/how-to-apply",
      icon: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 md:w-20 md:h-20"
        >
          {/* Envelope Body */}
          <rect
            x="5"
            y="25"
            width="70"
            height="45"
            stroke="currentColor"
            strokeWidth="3"
            className="text-booth-maroon"
            fill="none"
          />
          {/* Envelope Flap */}
          <path
            d="M5 25L40 50L75 25"
            stroke="currentColor"
            strokeWidth="3"
            className="text-booth-maroon"
          />
          {/* Paper/Document sticking out */}
          <path
            d="M15 25V10H65V25"
            stroke="currentColor"
            strokeWidth="3"
            className="text-booth-maroon"
            fill="none"
          />
          {/* Lines on paper */}
          <line
            x1="45"
            y1="16"
            x2="60"
            y2="16"
            stroke="currentColor"
            strokeWidth="3"
            className="text-booth-maroon"
          />
          <line
            x1="45"
            y1="22"
            x2="60"
            y2="22"
            stroke="currentColor"
            strokeWidth="3"
            className="text-booth-maroon"
          />

          {/* Seal/Stamp approximation */}
          <circle
            cx="28"
            cy="35"
            r="8"
            stroke="currentColor"
            strokeWidth="2"
            className="text-booth-maroon"
          />
          <path
            d="M26 33L30 37M30 33L26 37"
            stroke="currentColor"
            strokeWidth="2"
            className="text-booth-maroon"
          />
        </svg>
      ),
    },
    {
      title: "Contact Us",
      href: "#",
      icon: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 md:w-20 md:h-20"
        >
          <rect
            x="5"
            y="20"
            width="70"
            height="40"
            stroke="currentColor"
            strokeWidth="3"
            className="text-booth-maroon"
          />
          <path
            d="M5 20L40 45L75 20"
            stroke="currentColor"
            strokeWidth="3"
            className="text-booth-maroon"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Request Program Information
          </h2>
        </div>
        <div className="mb-6 md:mb-12">
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Get detailed insights about the curriculum, pedagogy, outcomes, and admissions process delivered straight to your inbox.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group flex flex-col items-center justify-start gap-y-6 "
            >
              {/* Icon Container with Scale Effect */}
              <div className="transform transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title and Arrow Container */}
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray decoration-booth-maroon transition-opacity decoration-4 group-hover:underline group-hover:underline-offset-4">
                  {item.title}
                </h3>

                {/* Arrow Icon with Translation Effect */}
                <div className="text-booth-maroon transform transition-transform duration-300 group-hover:translate-x-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
