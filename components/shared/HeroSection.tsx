import Image from "next/image";
import Link from "next/link";

export default function HeroSection({
  title, strong, pageName,
  description1, description2, description3, image,
  button1, button2, button1Link,
  button2Link }:
  {
    pageName: string,
    title: string,
    strong?: string,
    description1: string | React.ReactNode,
    description2: string | React.ReactNode,
    description3: string | React.ReactNode,
    image: string, button1: string,
    button2: string, button1Link: string,
    button2Link: string
  }) {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <div className="relative z-10 h-full flex items-end">
        <div className="w-full pb-16">
          {/* w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12 */}
          <div className={`w-full max-w-full min-[700px]:max-w-[${pageName === "MBA in Applied Finance"
            || pageName === "MBA in Business Analytics"
            || pageName === "MBA in Digital Marketing"
            || pageName === "MBA in Human Resource Management"
            || pageName === "MBA in Supply Chain Management" ? "70%" : "60%"}] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12`}>
            <div className="w-16 h-0.5 bg-white mb-6"></div>
            <h1 className="text-5xl md:text-7xl font-trade-gothic-bold text-white mb-6">
              {title}
            </h1>
            {description1 && <p className="text-xl md:text-2xl text-white font-trade-gothic-light mb-6">
              {description1}
            </p>}
            {description2 && <p className="text-lg md:text-xl text-white font-trade-gothic-light mb-8 opacity-90">
              {description2}
            </p>}
            {description3 && <p className="text-lg md:text-xl text-white font-trade-gothic-light mb-8 opacity-90">
              {description3}
            </p>}
            <div className="flex flex-wrap gap-4">
              {button1 && <Link
                href={button1Link}
                className="bg-booth-maroon text-white px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-opacity-90 transition text-sm md:text-base"
              >
                {button1}
              </Link>}
              {button2 && <Link
                href={button2Link}
                className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-white hover:text-booth-maroon transition text-sm md:text-base"
              >
                {button2}
              </Link>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
