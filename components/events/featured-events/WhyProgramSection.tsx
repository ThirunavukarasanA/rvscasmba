import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

const events = [
  {
    id: 1,
    title: "DIGIGO 5.0 – The Ultimate Digital Marketing Challenge",
    description: "Presented by MBA Digital Marketing, RVS College of Arts and Science",
    image: "/images/Social/DIGIGO.webp",
    link: "#"
  },
  {
    id: 2,
    title: "IMPORT PANDAS – 2K25",
    description: "Presented by MBA in Artificial Intelligence, RVS College of Arts and Science",
    image: "/images/Social/IMPORT-PANDAS.webp",
    link: "#"
  },
  {
    id: 3,
    title: "LOGISTICIA 2K25",
    description: "Presented by RVS CAS MBA Logistics, RVS College of Arts and Science",
    image: "/images/Social/LOGISTICIA-2K25.webp",
    link: "#"
  },
  {
    id: 4,
    title: "FINESTA 2025 – Fuel Your Competitive Spirit!",
    description: "Presented by RVS CAS MBA in Global Finance & Corporate Analyst, RVS College of Arts and Science",
    image: "/images/Social/FINESTA.webp",
    link: "#"
  },
  {
    id: 5,
    title: "The head hunters 3.0 – HR FEST 2025",
    description: "Presented by RVS CAS MBA Human Resource, RVS College of Arts and Science",
    image: "/images/Social/HR-FEST.webp",
    link: "#"
  },
  {
    id: 6,
    title: "Six-Day Faculty Development Programme",
    description: "The School of Management Studies-PG (MBA) successfully hosted a six-day Faculty Development Programme (FDP)",
    image: "/images/Social/FDP.webp",
    link: "#"
  }
];

export default function WhyProgramSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Why Featured Events Matter
          </h2>
        </div>

        <div className="space-y-6 mb-9">
          {/* <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Unlike traditional programs, the MBA in Global Finance & Corporate Analyst focuses on
            how finance professionals think and make decisions—not on
            textbook-driven learning.
          </p> */}

          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Featured events extend learning beyond coursework. They:
          </p>

          <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Connect theory with professional practice</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Strengthen industry awareness</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Encourage critical thinking and dialogue</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-booth-maroon mt-1">•</span>
              <span>Build professional confidence</span>
            </li>
          </ul>

          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            Participation in these events enriches the overall MBA experience.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {events.map((event) => (
            <Link href={event.link} key={event.id} className="group flex flex-col cursor-pointer">
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-5 bg-gray-100">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg md:text-xl font-trade-gothic-bold text-booth-dark-gray mb-2 md:mb-3 leading-[1.3] group-hover:text-[#7c0201] transition-colors duration-300">
                {event.title}
              </h3>
              <p className="text-booth-light-gray mb-2 md:mb-4 font-trade-gothic-light text-base">
                {event.description}
                <span className="inline-flex items-center justify-center ml-1.5 align-middle text-[#7c0201] transition-transform duration-300 group-hover:translate-x-1.5">
                  <BsArrowRight className="w-[18px] h-[18px]" strokeWidth={0.5} />
                </span>
              </p>
            </Link>
          ))}
        </div> */}
        
      </div>
    </section>
  );
}
