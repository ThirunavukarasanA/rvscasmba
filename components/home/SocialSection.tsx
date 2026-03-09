import Image from "next/image";
import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
const socialImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop",
];

const SOCIAL_POSTS = [
  {
    img: "/images/Social/Vidyarambha_2025.webp",
    text: "Vidhyarambha 2025 is here!",
    icon: <FaInstagram />,
  },
  {
    img: "/images/Social/DIGIGO.webp",
    text: "DIGIGO 5.0 – The Ultimate Digital Marketing Challenge",
    icon: <FaInstagram />,
  },
  {
    img: "/images/Social/IMPORT-PANDAS.webp",
    text: "IMPORT PANDAS – 2K25",
    icon: <FaInstagram />,
  },
  {
    img: "/images/Social/onam.webp",
    text: "Onam Celebration 2025",
    icon: <FaInstagram />,
  },
];

export default function SocialSection() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-4 md:mb-8">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-3 md:mb-4">
            RVS CAS MBA on Social
          </h2>
          <p className="text-booth-light-gray text-sm md:text-lg font-trade-gothic-light">
            Connect with RVS CAS MBA online and stay up to date with the latest
            news, events, and insights from our community.
          </p>
        </div>
      </div>
      {/* cards */}
      <div className="w-full">
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 lge:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-2">
          {SOCIAL_POSTS.map((item, idx) => (
            <div key={idx} className="relative hover:scale-95 transition-all duration-150 2xl:h-[300px] xl:h-[300px] lg:h-[300px] lge:h-[300px] md:h-[300px] mdsm:h-[300px] sm:h-[300px] overflow-hidden">
              {/* background image */}
              <Image
                src={item.img}
                alt={item.text}
                fill
                className="object-cover"
              />

              {/* dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />

              {/* text + icon */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <p className="text-white text-sm md:text-base leading-snug max-w-[85%]">
                  {item.text}
                </p>
                <span className="text-white text-xl shrink-0">
                  {item.icon}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-0 mt-6 md:mt-12">
        {socialImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square group cursor-pointer"
          >
            <Image
              src={image}
              alt={`Social media post ${index + 1}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition"></div>
            {index === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-booth-maroon"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div> */}
    </section>
  );
}
