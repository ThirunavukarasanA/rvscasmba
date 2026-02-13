"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiArrowRightDoubleFill } from "react-icons/ri";

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
  const pathname = usePathname();

  const isWidePage = [
    "MBA in Applied Finance",
    "MBA in Business Analytics",
    "MBA in Digital Marketing",
    "MBA in Human Resource Management",
    "MBA Programs",
    "MBA in Supply Chain Management"
  ].includes(pageName);

  const containerWidthClass = `w-full max-w-full min-[700px]:max-w-[${isWidePage ? "70%" : "60%"}] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12`;

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

      {/* Main Container: Flex Column to separate Menu (Top) and Content (Bottom) */}
      <div className="relative z-10 h-full flex flex-col justify-between pt-32 pb-16">

        {/* Top Section: Programs Menu */}
        <div className={containerWidthClass}>
          {pathname && pathname.includes("/programs") && (
            <div className="relative group inline-block">
              <div className="flex">
                <Link href="/programs">
                  <div className="flex space-x-3 items-center border border-white group-hover:border-0 group-hover:bg-booth-maroon p-2 transition-all duration-300">
                    <p className="text-white cursor-pointer font-trade-gothic-light uppercase tracking-wide text-sm">Programs</p>
                    <RiArrowRightDoubleFill className="text-[16px] text-white transform transition-transform duration-300 group-hover:rotate-90" />
                  </div>
                </Link>
              </div>
              {/* Dropdown Menu */}
              <div className="absolute bg-booth-maroon w-[300px] transition duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 z-50 top-full left-0">
                <div className="">
                  <ul className="">
                    <li className="relative group/item">
                      <div className="pr-4 pl-6 transition-all hover:pl-8 cursor-pointer flex items-center justify-between hover:bg-booth-maroon text-white py-3 w-full border-b border-white/20">
                        <Link href="/programs/mba-applied-finance">
                          <div className="flex items-center space-x-2">
                            <RiArrowRightDoubleFill className="text-[18px]" />
                            <span className="font-trade-gothic-light">MBA in Applied Finance</span>
                          </div>
                        </Link>
                      </div>
                    </li>
                    <Link href="/programs/mba-digital-marketing">
                      <li
                        className="pr-4 pl-6 transition-all hover:pl-8 cursor-pointer flex space-x-4 hover:bg-bg_color py-3 w-full text-white"
                      >
                        <RiArrowRightDoubleFill className="text-[18px] mt-1" />
                        <span className="font-trade-gothic-light">MBA in Digital Marketing</span>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Section: Hero Content */}
        <div className={containerWidthClass}>
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
    </section>
  );
}
