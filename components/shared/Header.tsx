"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(path);
  };
  return (
    <>
      {/* Top Thin Red Strip - Sticky */}
      <div className="sticky top-0 z-50 bg-booth-maroon h-1"></div>
      {/* Main Navigation - Semi-transparent over hero */}
      <nav className="absolute top-1 left-0 right-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="w-full max-w-full min-[700px]:max-w-[80%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Left Side: Logo + 4 Primary Links */}
            <div className="flex items-center gap-4">
              {/* Logo Section */}
              <Link href="/" className="flex items-center gap-3">
                <div>
                  <Image src="/images/header/RVSCAS_Logo.svg" alt="Logo" width={55} height={55} className="object-contain" />
                </div>
                <div>
                  <div className="font-trade-gothic-bold text-white text-lg">
                    RVS CAS MBA
                  </div>
                  <div className="text-white text-xs font-trade-gothic-light">
                    RVS COLLEGE OF ARTS & SCIENCE
                  </div>
                </div>
                {/* Crest/Logo icon placeholder */}
                <div className=""></div>
              </Link>

              {/* Primary Navigation Links - Larger size */}
              <div className="hidden lg:flex items-center gap-4">
                <Link
                  href="/#why-rvs"
                  className={`${pathname === "/#why-rvs" ? "border-b-4 border-white" : ""} text-white hover:text-gray-300 font-trade-gothic-light`}
                >
                  Why RVS CAS MBA
                </Link>
                <Link
                  href="/programs"
                  className={`${isActive("/programs") ? "border-b-4 border-white" : ""} text-white hover:text-gray-300 font-trade-gothic-light`}
                >
                  Programs
                </Link>
                <Link
                  href="/admissions"
                  className={`${isActive("/admissions") ? "border-b-4 border-white" : ""} text-white hover:text-gray-300 font-trade-gothic-light`}
                >
                  Admissions
                </Link>
                <Link
                  href="#"
                  className={`${isActive("/faculty") ? "border-b-4 border-white" : ""} text-white hover:text-gray-300 font-trade-gothic-light`}
                >
                  Faculty & Research
                </Link>
              </div>
            </div>

            {/* Right Side: Secondary Links (visible only on XL) + Search + Burger */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="hidden xl:flex items-center gap-4">
                <Link
                  href="#"
                  className="text-white hover:text-gray-300 font-trade-gothic-light text-sm"
                >
                  Alumni
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-gray-300 font-trade-gothic-light text-sm"
                >
                  Industry Connect
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-gray-300 font-trade-gothic-light text-sm"
                >
                  Events
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-gray-300 font-trade-gothic-light text-sm"
                >
                  Placements
                </Link>
              </div>

              {/* Search Icon */}
              <button className="text-white hover:text-gray-300 ml-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              {/* Burger Menu */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-300"
                aria-label="Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile: Just burger menu */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-300"
                aria-label="Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-booth-bg-gray overflow-y-auto">
          {/* Top Red Strip */}
          <div className="bg-booth-maroon h-1"></div>

          {/* Menu Content with Side Margins */}
          <div className="w-full max-w-full min-[700px]:max-w-[80%] mx-auto">
            {/* Menu Header */}
            <div className="bg-booth-bg-gray px-4 md:px-6 lg:px-8 xl:px-12 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div>
                  <Image src="/images/header/RVSCAS_Logo_Black.svg" alt="Logo" width={55} height={55} />
                </div>
                <div>
                  <div className="font-trade-gothic-bold text-booth-dark-gray text-xl">
                    RVS CAS MBA
                  </div>
                  <div className="text-booth-dark-gray text-xs font-trade-gothic-light">
                    RVS COLLEGE OF ARTS & SCIENCE
                  </div>
                </div>
                {/* Crest/Logo icon placeholder */}
                {/* <div className="w-8 h-8 bg-booth-maroon bg-opacity-20 rounded"></div> */}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6 text-booth-dark-gray"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Links */}
            <div className="px-4 md:px-6 lg:px-8 xl:px-12 py-4">
              <nav className="grid grid-cols-2 gap-4">
                <Link
                  href="#"
                  className={`py-3 font-trade-gothic-light border-b flex items-center justify-between ${pathname === "/#why-rvs"
                    ? "text-booth-maroon border-booth-maroon font-bold"
                    : "text-booth-dark-gray border-gray-300"
                    }`}
                >
                  Why RVS CAS MBA
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
                <Link
                  href="/programs"
                  className={`py-3 font-trade-gothic-light border-b flex items-center justify-between ${isActive("/programs")
                    ? "text-booth-maroon border-booth-maroon font-bold"
                    : "text-booth-dark-gray border-gray-300"
                    }`}
                >
                  Programs
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
                <Link
                  href="/admissions"
                  className={`py-3 font-trade-gothic-light border-b flex items-center justify-between ${isActive("/admissions")
                    ? "text-booth-maroon border-booth-maroon font-bold"
                    : "text-booth-dark-gray border-gray-300"
                    }`}
                >
                  Admissions
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
                <Link
                  href="#"
                  className="py-3 text-booth-dark-gray font-trade-gothic-light border-b border-gray-300 flex items-center justify-between"
                >
                  Faculty & Research
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
                <Link
                  href="#"
                  className="py-3 text-booth-dark-gray font-trade-gothic-light border-b border-gray-300 flex items-center justify-between"
                >
                  Alumni
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
                <Link
                  href="#"
                  className="block py-3 text-booth-dark-gray font-trade-gothic-light border-b border-gray-300"
                >
                  Events
                </Link>
                <Link
                  href="#"
                  className="block py-3 text-booth-dark-gray font-trade-gothic-light border-b border-gray-300"
                >
                  Placements
                </Link>
                <Link
                  href="#"
                  className="py-3 text-booth-dark-gray font-trade-gothic-light border-b border-gray-300 flex items-center justify-between"
                >
                  Industry Connect
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
                <Link
                  href="/how-to-apply"
                  className={`py-3 font-trade-gothic-light border-b ${isActive("/how-to-apply")
                    ? "text-booth-maroon border-booth-maroon font-bold"
                    : "text-booth-dark-gray border-gray-300"
                    }`}
                >
                  Apply
                </Link>
                <Link
                  href="#"
                  className="py-3 text-booth-dark-gray font-trade-gothic-light border-b border-gray-300 flex items-center justify-between"
                >
                  Privacy Policy
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
                <Link
                  href="/contact"
                  className={`py-3 font-trade-gothic-light border-b flex items-center justify-between ${isActive("/contact")
                    ? "text-booth-maroon border-booth-maroon font-bold"
                    : "text-booth-dark-gray border-gray-300"
                    }`}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
