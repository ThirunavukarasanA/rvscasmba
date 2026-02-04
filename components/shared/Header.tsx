"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <a href="/" className="flex items-center gap-3">
                <div>
                  <div className="font-trade-gothic-bold text-white text-lg">
                    RVS CAS MBA
                  </div>
                  <div className="text-white text-xs font-trade-gothic-light">
                    RVS COLLEGE OF ARTS & SCIENCE
                  </div>
                </div>
                {/* Crest/Logo icon placeholder */}
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded"></div>
              </a>

              {/* Primary Navigation Links - Larger size */}
              <div className="hidden lg:flex items-center gap-4">
                <a
                  href="/#why-rvs"
                  className="text-white hover:text-gray-300 font-trade-gothic-light"
                >
                  Why RVS CAS MBA
                </a>
                <a
                  href="/#programs"
                  className="text-white hover:text-gray-300 font-trade-gothic-light"
                >
                  Programs
                </a>
                <a
                  href="/programs/common/admissions"
                  className="text-white hover:text-gray-300 font-trade-gothic-light"
                >
                  Admissions
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 font-trade-gothic-light"
                >
                  Faculty & Research
                </a>
              </div>
            </div>

            {/* Right Side: Secondary Links (smaller) + Search + Burger */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#"
                className="text-white hover:text-gray-300 font-trade-gothic-light text-sm"
              >
                Alumni
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 font-trade-gothic-light text-sm"
              >
                Industry Connect
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 font-trade-gothic-light text-sm"
              >
                Events
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 font-trade-gothic-light text-sm"
              >
                Placements
              </a>
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
                  <div className="font-trade-gothic-bold text-booth-dark-gray text-xl">
                    RVS CAS MBA
                  </div>
                  <div className="text-booth-dark-gray text-xs font-trade-gothic-light">
                    RVS COLLEGE OF ARTS & SCIENCE
                  </div>
                </div>
                {/* Crest/Logo icon placeholder */}
                <div className="w-8 h-8 bg-booth-maroon bg-opacity-20 rounded"></div>
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
                <a
                  href="#"
                  className="block py-3 text-booth-dark-gray font-trade-gothic-light border-b border-gray-300 flex items-center justify-between"
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
                </a>
                <a
                  href="/#programs"
                  className="block py-3 text-booth-dark-gray font-trade-gothic-light border-b border-gray-300 flex items-center justify-between"
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
                </a>
                <a
                  href="/programs/common/admissions"
                  className="block py-3 text-booth-dark-gray font-trade-gothic-light border-b border-gray-300 flex items-center justify-between"
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
                </a>
                <a
                  href="#"
                  className="block py-3 text-booth-dark-gray font-trade-gothic-light border-b border-gray-300 flex items-center justify-between"
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
                </a>
                <a
                  href="#"
                  className="block py-3 text-booth-dark-gray font-trade-gothic-light border-b border-gray-300 flex items-center justify-between"
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
                </a>
                <a
                  href="#"
                  className="block py-3 text-booth-dark-gray font-trade-gothic-light border-b border-gray-300"
                >
                  Events
                </a>
                <a
                  href="#"
                  className="block py-3 text-booth-dark-gray font-trade-gothic-light border-b border-gray-300 flex items-center justify-between"
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
                </a>
                <a
                  href="/programs/common/how-to-apply"
                  className="block py-3 text-booth-dark-gray font-trade-gothic-light border-b border-gray-300"
                >
                  Apply
                </a>
                <a
                  href="#"
                  className="block py-3 text-booth-dark-gray font-trade-gothic-light border-b border-gray-300 flex items-center justify-between"
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
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
