"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { useState } from "react";
import BrochurePopup from "../shared/BrochurePopup";

export default function HeroSection({
  title,
  strong,
  pageName,
  description1,
  description2,
  description3,
  image,
  button1,
  button2,
  button1Link,
  button2Link,
}: {
  pageName: string;
  title: string;
  strong?: string;
  description1: string | React.ReactNode;
  description2: string | React.ReactNode;
  description3: string | React.ReactNode;
  image: string;
  button1: string;
  button2: string;
  button1Link: string;
  button2Link: string;
}) {
  const pathname = usePathname();

  const isWidePage = [
    "MBA in Global Finance & Corporate Analyst",
    "MBA in Artificial Intelligence",
    "MBA in Digital Marketing",
    "MBA in Human Resources",
    "MBA Programs",
    "MBA in Supply Chain Management",
  ].includes(pageName);

  const containerWidthClass = `w-full max-w-full min-[700px]:max-w-[${isWidePage ? "70%" : "60%"}] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12`;
  // Determine if this page should show the Download Brochure popup
  const brochurePrograms = [
    "MBA in Global Finance & Corporate Analyst",
    "MBA in Artificial Intelligence",
    "MBA in Digital Marketing",
    "MBA in Human Resources",
    "MBA in Logistics & Supply Chain Management",
  ];
  const showBrochure = brochurePrograms.includes(pageName);
  const [showPopup, setShowPopup] = useState(false);
  // Map program to brochure PDF filename
  const brochureMap: Record<string, string> = {
    "MBA in Global Finance & Corporate Analyst":
      "/pdfs/MBA in Global Finance & Corporate Analyst.pdf",
    "MBA in Artificial Intelligence":
      "/pdfs/MBA in Artificial Intelligence.pdf",
    "MBA in Digital Marketing": "/pdfs/MBA in Digital Marketing.pdf",
    "MBA in Human Resources": "/pdfs/MBA in Human Resources.pdf",
    "MBA in Logistics & Supply Chain Management":
      "/pdfs/MBA in Logistics and Supply chain Management.pdf",
  };
  const brochurePath = brochureMap[pageName] || "/pdfs/MBA Brochure.pdf";
  return (
    <section className="relative bg-white">
      {showPopup && (
        <BrochurePopup
          courseName={pageName}
          onClose={() => setShowPopup(false)}
          brochurePath={brochurePath}
        />
      )}
      <div className="hidden lg:block relative h-[88svh]">
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            className={`object-cover ${isWidePage ? "object-top" : ""}`}
            priority
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>

        {/* Main Container: Flex Column to separate Menu (Top) and Content (Bottom) */}
        <div
          className={`relative z-10 h-full flex justify-between ${isWidePage ? "pb-10" : "pb-3"}`}
        >
          {/* Top Section: Programs Menu */}
          <div
            className={`${containerWidthClass} flex space-x-4 md:space-x-12 absolute top-1/4 `}
          >
            {pathname && pathname.includes("/programs") && (
              <div className="relative group inline-block">
                <div className="flex">
                  <Link href="/programs">
                    <div className="flex space-x-3 items-center border border-white group-hover:border-booth-maroon group-hover:bg-booth-maroon p-2 transition-all duration-300">
                      <p className="text-white cursor-pointer font-trade-gothic-light tracking-wide text-md group-hover:text-white">
                        Programs
                      </p>
                      <RiArrowRightDoubleFill className="text-[16px] text-white transform transition-transform duration-300 group-hover:rotate-90" />
                    </div>
                  </Link>
                </div>
                {/* Dropdown Menu */}
                <div className="absolute bg-booth-maroon w-[390px] transition duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 z-50 top-full left-0">
                  <div className="">
                    <ul className="">
                      {/* <li className="relative group/item">
                      <div className="pr-4 pl-6 transition-all hover:pl-8 cursor-pointer flex items-center justify-between bg-booth-maroon hover:bg-white hover:text-booth-maroon text-white py-3 w-full border-b border-white/30">
                        <Link href="/programs/mba-global-finance-corporate-analyst">
                          <div className="flex items-center space-x-2">
                            <RiArrowRightDoubleFill className="text-[18px]" />
                            <span className="font-trade-gothic-light">MBA in Global Finance & Corporate Analyst</span>
                          </div>
                        </Link>
                      </div>
                    </li> */}
                      <Link href="/programs/mba-global-finance-corporate-analyst">
                        <li className="pr-4 pl-6 transition-all hover:pl-8 cursor-pointer flex space-x-4 bg-booth-maroon hover:bg-white hover:text-booth-maroon py-3 w-full text-white border-b border-white/30">
                          <RiArrowRightDoubleFill className="text-[18px] mt-1" />
                          <span className="font-trade-gothic-light">
                            MBA in Global Finance & Corporate Analyst
                          </span>
                        </li>
                      </Link>
                      <Link href="/programs/mba-digital-marketing">
                        <li className="pr-4 pl-6 transition-all hover:pl-8 cursor-pointer flex space-x-4 bg-booth-maroon hover:bg-white hover:text-booth-maroon py-3 w-full text-white border-b border-white/30">
                          <RiArrowRightDoubleFill className="text-[18px] mt-1" />
                          <span className="font-trade-gothic-light">
                            MBA in Digital Marketing
                          </span>
                        </li>
                      </Link>
                      <Link href="/programs/mba-artificial-intelligence">
                        <li className="pr-4 pl-6 transition-all hover:pl-8 cursor-pointer flex space-x-4 bg-booth-maroon hover:bg-white hover:text-booth-maroon py-3 w-full text-white border-b border-white/30">
                          <RiArrowRightDoubleFill className="text-[18px] mt-1" />
                          <span className="font-trade-gothic-light">
                            MBA in Artificial Intelligence
                          </span>
                        </li>
                      </Link>
                      <Link href="/programs/mba-human-resources">
                        <li className="pr-4 pl-6 transition-all hover:pl-8 cursor-pointer flex space-x-4 bg-booth-maroon hover:bg-white hover:text-booth-maroon py-3 w-full text-white border-b border-white/30">
                          <RiArrowRightDoubleFill className="text-[18px] mt-1" />
                          <span className="font-trade-gothic-light">
                            MBA in Human Resources
                          </span>
                        </li>
                      </Link>
                      <Link href="/programs/mba-logistics-supply-chain-management">
                        <li className="pr-4 pl-6 transition-all hover:pl-8 cursor-pointer flex space-x-4 bg-booth-maroon hover:bg-white hover:text-booth-maroon py-3 w-full text-white">
                          <RiArrowRightDoubleFill className="text-[18px] mt-1" />
                          <span className="font-trade-gothic-light">
                            MBA in Logistics & Supply Chain Management
                          </span>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {pathname === "/programs/mba-digital-marketing" ? (
              <>
                <div className="relative group">
                  <div className="flex">
                    <div className="flex space-x-3 items-center border border-white group-hover:border-booth-maroon group-hover:bg-booth-maroon p-2 transition-all duration-300">
                      <p className="text-white cursor-pointer font-trade-gothic-light tracking-wide text-md group-hover:text-white">
                        Digital Marketing
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            {pathname === "/programs/mba-global-finance-corporate-analyst" ? (
              <>
                <div className="relative group">
                  <div className="flex">
                    <div className="flex space-x-3 items-center border border-white group-hover:border-booth-maroon group-hover:bg-booth-maroon p-2 transition-all duration-300">
                      <p className="text-white cursor-pointer font-trade-gothic-light tracking-wide text-md group-hover:text-white">
                        Global Finance & Corporate Analyst
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            {pathname === "/programs/mba-artificial-intelligence" ? (
              <>
                <div className="relative group">
                  <div className="flex">
                    <div className="flex space-x-3 items-center border border-white group-hover:border-booth-maroon group-hover:bg-booth-maroon p-2 transition-all duration-300">
                      <p className="text-white cursor-pointer font-trade-gothic-light tracking-wide text-md group-hover:text-white">
                        Artificial Intelligence
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            {pathname === "/programs/mba-human-resources" ? (
              <>
                <div className="relative group">
                  <div className="flex">
                    <div className="flex space-x-3 items-center border border-white group-hover:border-booth-maroon group-hover:bg-booth-maroon p-2 transition-all duration-300">
                      <p className="text-white cursor-pointer font-trade-gothic-light tracking-wide text-md group-hover:text-white">
                        Human Resources
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            {pathname === "/programs/mba-logistics-supply-chain-management" ? (
              <>
                <div className="relative group">
                  <div className="flex">
                    <div className="flex space-x-3 items-center border border-white group-hover:border-booth-maroon group-hover:bg-booth-maroon p-2 transition-all duration-300">
                      <p className="text-white cursor-pointer font-trade-gothic-light tracking-wide text-md group-hover:text-white">
                        MBA in Logistics & Supply Chain Management
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            {pathname && pathname.includes("/events") && (
              <div className="relative group inline-block">
                <div className="flex">
                  <Link href="/events">
                    <div className="flex space-x-3 items-center border border-white group-hover:border-booth-maroon group-hover:bg-booth-maroon p-2 transition-all duration-300">
                      <p className="text-white cursor-pointer font-trade-gothic-light tracking-wide text-md group-hover:text-white">
                        Events
                      </p>
                      <RiArrowRightDoubleFill className="text-[16px] text-white transform transition-transform duration-300 group-hover:rotate-90" />
                    </div>
                  </Link>
                </div>
                {/* Dropdown Menu */}
                <div className="absolute bg-booth-maroon w-[250px] transition duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 z-50 top-full left-0">
                  <div className="">
                    <ul className="">
                      <Link href="/events/featured-events">
                        <li className="pr-4 pl-6 transition-all hover:pl-8 cursor-pointer flex space-x-4 bg-booth-maroon hover:bg-white hover:text-booth-maroon py-3 w-full text-white border-b border-white/30">
                          <RiArrowRightDoubleFill className="text-[18px] mt-1" />
                          <span className="font-trade-gothic-light">
                            Featured Events
                          </span>
                        </li>
                      </Link>
                      {/* <Link href="#">
                      <li
                        className="pr-4 pl-6 transition-all hover:pl-8 cursor-pointer flex space-x-4 bg-booth-maroon hover:bg-white hover:text-booth-maroon py-3 w-full text-white border-b border-white/30"
                      >
                        <RiArrowRightDoubleFill className="text-[18px] mt-1" />
                        <span className="font-trade-gothic-light">MBA in Digital Marketing</span>
                      </li>
                    </Link> */}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {pathname === "/events/featured-events" ? (
              <>
                <div className="relative group">
                  <div className="flex">
                    <div className="flex space-x-3 items-center border border-white group-hover:border-booth-maroon group-hover:bg-booth-maroon p-2 transition-all duration-300">
                      <p className="text-white cursor-pointer font-trade-gothic-light tracking-wide text-md group-hover:text-white">
                        Featured Events
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            {pathname && pathname.includes("/placements") && (
              <div className="relative group inline-block">
                <div className="flex">
                  <Link href="/placements">
                    <div className="flex space-x-3 items-center border border-white group-hover:border-booth-maroon group-hover:bg-booth-maroon p-2 transition-all duration-300">
                      <p className="text-white cursor-pointer font-trade-gothic-light tracking-wide text-md group-hover:text-white">
                        Placements
                      </p>
                      <RiArrowRightDoubleFill className="text-[16px] text-white transform transition-transform duration-300 group-hover:rotate-90" />
                    </div>
                  </Link>
                </div>
                {/* Dropdown Menu */}
                <div className="absolute bg-booth-maroon w-[250px] transition duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 z-50 top-full left-0">
                  <div className="">
                    <ul className="">
                      <Link href="/internships">
                        <li className="pr-4 pl-6 transition-all hover:pl-8 cursor-pointer flex space-x-4 bg-booth-maroon hover:bg-white hover:text-booth-maroon py-3 w-full text-white border-b border-white/30">
                          <RiArrowRightDoubleFill className="text-[18px] mt-1" />
                          <span className="font-trade-gothic-light">
                            Internships
                          </span>
                        </li>
                      </Link>
                      {/* <Link href="#">
                      <li
                        className="pr-4 pl-6 transition-all hover:pl-8 cursor-pointer flex space-x-4 bg-booth-maroon hover:bg-white hover:text-booth-maroon py-3 w-full text-white border-b border-white/30"
                      >
                        <RiArrowRightDoubleFill className="text-[18px] mt-1" />
                        <span className="font-trade-gothic-light">MBA in Digital Marketing</span>
                      </li>
                    </Link> */}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {pathname && pathname.includes("/insights") && (
              <div className="relative group inline-block">
                <div className="flex">
                  <Link href="/insights">
                    <div className="flex space-x-3 items-center border border-white group-hover:border-booth-maroon group-hover:bg-booth-maroon p-2 transition-all duration-300">
                      <p className="text-white cursor-pointer font-trade-gothic-light tracking-wide text-md group-hover:text-white">
                        Insights
                      </p>
                      <RiArrowRightDoubleFill className="text-[16px] text-white transform transition-transform duration-300 group-hover:rotate-90" />
                    </div>
                  </Link>
                </div>
                {/* Dropdown Menu */}
                <div className="absolute bg-booth-maroon w-[200px] transition duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 z-50 top-full left-0">
                  <div className="">
                    <ul className="">
                      <Link href="/faculty">
                        <li className="pr-4 pl-6 transition-all hover:pl-8 cursor-pointer flex space-x-4 bg-booth-maroon hover:bg-white hover:text-booth-maroon py-3 w-full text-white border-b border-white/30">
                          <RiArrowRightDoubleFill className="text-[18px] mt-1" />
                          <span className="font-trade-gothic-light">
                            Faculty
                          </span>
                        </li>
                      </Link>
                      {/* <Link href="#">
                      <li
                        className="pr-4 pl-6 transition-all hover:pl-8 cursor-pointer flex space-x-4 bg-booth-maroon hover:bg-white hover:text-booth-maroon py-3 w-full text-white border-b border-white/30"
                      >
                        <RiArrowRightDoubleFill className="text-[18px] mt-1" />
                        <span className="font-trade-gothic-light">MBA in Digital Marketing</span>
                      </li>
                    </Link> */}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Section: Hero Content */}
          <div className={`${containerWidthClass} flex flex-col justify-end`}>
            <div className="w-16 h-0.5 bg-white mb-6"></div>
            <h1 className="text-5xl md:text-7xl font-trade-gothic-bold text-white mb-6">
              {title}
            </h1>
            {description1 && (
              <p className="text-xl md:text-2xl text-white font-trade-gothic-light mb-6">
                {description1}
              </p>
            )}
            {description2 && (
              <p className="text-lg md:text-xl text-white font-trade-gothic-light mb-8 opacity-90">
                {description2}
              </p>
            )}
            {description3 && (
              <p className="text-lg md:text-xl text-white font-trade-gothic-light mb-8 opacity-90">
                {description3}
              </p>
            )}
            <div className="flex flex-wrap gap-4">
              {showBrochure && (
                <button
                  type="button"
                  className="bg-booth-maroon text-white px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-opacity-90 transition text-sm md:text-base"
                  onClick={() => setShowPopup(true)}
                >
                  Download Brochure
                </button>
              )}
              {button1 && !showBrochure && (
                <Link
                  href={button1Link}
                  className="bg-booth-maroon text-white px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-opacity-90 transition text-sm md:text-base"
                >
                  {button1}
                </Link>
              )}
              {button2 && (
                <Link
                  href={button2Link}
                  className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-white hover:text-booth-maroon transition text-sm md:text-base"
                >
                  {button2}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="block lg:hidden bg-white ">
        {" "}
        {/* Added top margin to account for absolute header */}
        {/* Mobile Sub Navigation (Scrollable) - Placed BEFORE the image */}
        {/* {pathname && pathname.includes("/programs") || pathname && pathname.includes("/events") || pathname && pathname.includes("/insights") && ()} */}
        <div className="border-t border-gray-200">
          <div className="w-full overflow-x-auto hide-scrollbar">
            <div className="flex pt-2 pb-3 min-w-max">
              {/* Programs Links Data */}
              {pathname &&
                pathname.includes("/programs") &&
                (() => {
                  const links = [
                    { href: "/programs", label: "Programs" },
                    {
                      href: "/programs/mba-global-finance-corporate-analyst",
                      label: "Global Finance & Corporate Analyst",
                    },
                    {
                      href: "/programs/mba-digital-marketing",
                      label: "Digital Marketing",
                    },
                    {
                      href: "/programs/mba-artificial-intelligence",
                      label: "Artificial Intelligence",
                    },
                    {
                      href: "/programs/mba-human-resources",
                      label: "Human Resources",
                    },
                    {
                      href: "/programs/mba-logistics-supply-chain-management",
                      label: "Logistics & Supply Chain",
                    },
                  ];
                  // Sort so active link is first
                  const sortedLinks = [...links].sort((a, b) =>
                    pathname === a.href ? -1 : pathname === b.href ? 1 : 0,
                  );

                  return (
                    <>
                      {sortedLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`px-4 text-sm font-trade-gothic-light transition-colors border-r border-gray-300 last:border-0 ${pathname === link.href ? "text-booth-maroon font-bold" : "text-booth-dark-gray hover:text-booth-maroon"}`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </>
                  );
                })()}
              {/* Events Links Data */}
              {pathname &&
                pathname.includes("/events") &&
                (() => {
                  const links = [
                    { href: "/events", label: "Events" },
                    {
                      href: "/events/featured-events",
                      label: "Featured Events",
                    },
                  ];
                  const sortedLinks = [...links].sort((a, b) =>
                    pathname === a.href ? -1 : pathname === b.href ? 1 : 0,
                  );

                  return (
                    <>
                      {sortedLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`px-4 text-sm font-trade-gothic-light transition-colors border-r border-gray-300 last:border-0 ${pathname === link.href ? "text-booth-maroon font-bold" : "text-booth-dark-gray hover:text-booth-maroon"}`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </>
                  );
                })()}
              {/* Insights Links Data */}
              {pathname &&
                pathname.includes("/insights") &&
                (() => {
                  const links = [
                    { href: "/insights", label: "Insights" },
                    { href: "/faculty", label: "Faculty" }, // Fixed capitalization based on previous link
                  ];
                  // Using includes / starting with logic for faculty edge case if needed, but strict equality is safer based on original code structure
                  const sortedLinks = [...links].sort((a, b) => {
                    // Check if active based on previous code logic:
                    const isActiveA =
                      pathname === a.href ||
                      (a.href === "/faculty" &&
                        pathname === "/insights/featured-events");
                    const isActiveB =
                      pathname === b.href ||
                      (b.href === "/faculty" &&
                        pathname === "/insights/featured-events");
                    return isActiveA ? -1 : isActiveB ? 1 : 0;
                  });

                  return (
                    <>
                      {sortedLinks.map((link) => {
                        const isActive =
                          pathname === link.href ||
                          (link.href === "/faculty" &&
                            pathname === "/insights/featured-events");
                        return (
                          <Link
                            key={link.href}
                            href={link.href}
                            className={`px-4 text-sm font-trade-gothic-light transition-colors border-r border-gray-300 last:border-0 ${isActive ? "text-booth-maroon font-bold" : "text-booth-dark-gray hover:text-booth-maroon"}`}
                          >
                            {link.label}
                          </Link>
                        );
                      })}
                    </>
                  );
                })()}
            </div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="relative h-[400px] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        {/* Hero Content below image and sub nav */}
        <div className={`${containerWidthClass} py-8`}>
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h1 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-6">
            {title}
          </h1>
          {description1 && (
            <p className="text-xl md:text-2xl text-booth-dark-gray font-trade-gothic-light mb-6">
              {description1}
            </p>
          )}
          {description2 && (
            <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light mb-6">
              {description2}
            </p>
          )}
          {description3 && (
            <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light mb-6">
              {description3}
            </p>
          )}
          <div className="flex flex-wrap gap-4">
            {showBrochure && (
              <button
                type="button"
                className="bg-booth-maroon text-white px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-opacity-90 transition text-sm md:text-base"
                onClick={() => setShowPopup(true)}
              >
                Download Brochure
              </button>
            )}
            {button1 && !showBrochure && (
              <Link
                href={button1Link}
                className="bg-booth-maroon text-white px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-opacity-90 transition text-sm md:text-base"
              >
                {button1}
              </Link>
            )}
            {button2 && (
              <Link
                href={button2Link}
                className="border-2 border-booth-dark-gray text-booth-dark-gray px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-white hover:text-booth-maroon transition text-sm md:text-base"
              >
                {button2}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
