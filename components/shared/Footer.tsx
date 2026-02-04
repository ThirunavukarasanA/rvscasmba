import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-booth-bg-gray">
      {/* Disclaimer */}
      <div className="bg-gray-100 py-6">
        <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
          <p className="text-xs text-booth-light-gray font-trade-gothic-light">
            RVS CAS MBA is recognized by AICTE and affiliated with Bharathiar
            University. All programs are designed to meet industry standards and
            prepare students for successful careers in management and
            technology.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="w-full max-w-full min-[700px]:max-w-[85%] lg:max-w-[75%] xl:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12 py-12">
        {/* Horizontal line separator */}
        <div className="border-t-2 border-booth-maroon mb-12"></div>

        {/* Top Section - 4 columns: Logo + 3 link groups */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo */}
          <div>
            <Link href="/">
              <div className="font-trade-gothic-bold text-booth-maroon text-xl mb-2">
                RVS CAS MBA
              </div>
              <p className="text-booth-dark-gray font-trade-gothic-light text-sm">
                RVS COLLEGE OF ARTS & SCIENCE
              </p>
            </Link>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="font-trade-gothic-bold text-booth-maroon mb-3 md:mb-4">
              Explore
            </h3>
            <ul className="flex flex-wrap gap-3 md:gap-4 md:flex-col md:space-y-2 md:gap-0">
              <li>
                <Link
                  href="#"
                  className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light whitespace-nowrap"
                >
                  About RVS CAS
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light whitespace-nowrap"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light whitespace-nowrap"
                >
                  Faculty
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light whitespace-nowrap"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light whitespace-nowrap"
                >
                  Alumni
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light whitespace-nowrap"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: About */}
          <div>
            <h3 className="font-trade-gothic-bold text-booth-maroon mb-3 md:mb-4">
              About
            </h3>
            <ul className="flex flex-wrap gap-3 md:gap-4 md:flex-col md:space-y-2 md:gap-0">
              <li>
                <Link
                  href="#"
                  className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light whitespace-nowrap"
                >
                  Industry Connect
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/common/admissions"
                  className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light whitespace-nowrap"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light whitespace-nowrap"
                >
                  Placements
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/common/student-experience"
                  className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light whitespace-nowrap"
                >
                  Campus Life
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light whitespace-nowrap"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light whitespace-nowrap"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="font-trade-gothic-bold text-booth-maroon mb-3 md:mb-4">
              Resources
            </h3>
            <ul className="flex flex-wrap gap-3 md:gap-4 md:flex-col md:space-y-2 md:gap-0">
              <li>
                <Link
                  href="#"
                  className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light whitespace-nowrap"
                >
                  Campus Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light whitespace-nowrap"
                >
                  Library
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light whitespace-nowrap"
                >
                  Labs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light whitespace-nowrap"
                >
                  Sulur Campus
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light whitespace-nowrap"
                >
                  Coimbatore
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* First Three Buttons Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div></div>
          <div>
            <Link
              href="/programs/common/request-information"
              className="border-2 border-booth-maroon bg-white text-booth-maroon px-2 md:px-4 py-2 font-trade-gothic-bold uppercase hover:bg-booth-maroon hover:text-white transition text-xs md:text-sm w-full h-full flex items-center justify-center text-center leading-tight"
            >
              REQUEST INFORMATION
            </Link>
          </div>
          <div>
            <Link
              href="/programs/common/how-to-apply"
              className="border-2 border-booth-maroon bg-white text-booth-maroon px-2 md:px-4 py-2 font-trade-gothic-bold uppercase hover:bg-booth-maroon hover:text-white transition text-xs md:text-sm w-full h-full flex items-center justify-center text-center leading-tight"
            >
              APPLY
            </Link>
          </div>
          <div>
            <button className="border-2 border-booth-maroon bg-white text-booth-maroon px-2 md:px-4 py-2 font-trade-gothic-bold uppercase hover:bg-booth-maroon hover:text-white transition text-xs md:text-sm w-full h-full flex items-center justify-center gap-1 leading-tight">
              GIVE
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Other Offerings Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-trade-gothic-bold text-booth-maroon mb-4">
              Other Offerings
            </h3>
          </div>
          <div>
            <button className="border-2 border-booth-maroon bg-white text-booth-maroon px-2 md:px-4 py-2 font-trade-gothic-bold uppercase hover:bg-booth-maroon hover:text-white transition text-xs md:text-sm w-full h-full flex items-center justify-center text-center leading-tight">
              UNDERGRADUATES
            </button>
          </div>
          <div>
            <button className="border-2 border-booth-maroon bg-white text-booth-maroon px-2 md:px-4 py-2 font-trade-gothic-bold uppercase hover:bg-booth-maroon hover:text-white transition text-xs md:text-sm w-full h-full flex items-center justify-center text-center leading-tight">
              TAKING CLASSES
            </button>
          </div>
          <div>
            <button className="border-2 border-booth-maroon bg-white text-booth-maroon px-2 md:px-4 py-2 font-trade-gothic-bold uppercase hover:bg-booth-maroon hover:text-white transition text-xs md:text-sm w-full h-full flex items-center justify-center text-center leading-tight">
              ALL OTHER OFFERINGS
            </button>
          </div>
        </div>

        {/* Horizontal line separator */}
        <div className="border-t-2 border-booth-maroon mb-12"></div>

        {/* Bottom Section 1: Follow and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Follow */}
          <div>
            <h3 className="font-trade-gothic-bold text-booth-maroon mb-4">
              Follow
            </h3>
            <div className="flex gap-3 flex-wrap">
              {/* Facebook */}
              <Link
                href="#"
                className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs"
                aria-label="Facebook"
              >
                f
              </Link>
              {/* Instagram */}
              <Link
                href="#"
                className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center text-white"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              {/* X (Twitter) */}
              <Link
                href="#"
                className="w-8 h-8 bg-black rounded flex items-center justify-center text-white font-bold"
                aria-label="X"
              >
                X
              </Link>
              {/* YouTube */}
              <Link
                href="#"
                className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white"
                aria-label="YouTube"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
              {/* LinkedIn */}
              <Link
                href="#"
                className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center text-white font-bold text-xs"
                aria-label="LinkedIn"
              >
                in
              </Link>
              {/* Pinterest */}
              <Link
                href="#"
                className="w-8 h-8 bg-red-700 rounded flex items-center justify-center text-white"
                aria-label="Pinterest"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.87-1.878.074-.28.447-1.812.447-1.812.234.448.918.836 1.644.836 2.166 0 3.636-1.966 3.636-4.597 0-1.906-1.644-3.434-3.978-3.434-2.723 0-4.22 1.977-4.22 3.75 0 1.174.447 2.214 1.405 2.607.157.073.179.27.066.416-.057.09-.184.32-.238.41-.075.14-.097.19-.063.31.046.15.186.195.336.144.48-.163 1.23-.69 1.61-1.24.15-.22.256-.48.35-.78.15-.48.086-.89-.026-1.31-.32-1.18-1.28-2.4-1.28-3.23 0-.83.5-1.58 1.5-1.58.71 0 1.25.48 1.25 1.12 0 .75-.48 1.88-.73 2.92-.21.8.4 1.45 1.19 1.45 1.43 0 2.4-1.51 2.4-3.69 0-1.53-1.1-2.61-2.68-2.61-1.82 0-2.89 1.37-2.89 2.79 0 .51.2.95.51 1.25.056.067.064.125.047.193-.017.07-.057.23-.074.3-.024.11-.098.15-.18.11-.67-.31-1.09-1.28-1.09-2.06 0-1.68 1.22-3.22 3.55-3.22 1.87 0 3.32 1.33 3.32 3.11 0 1.85-1.17 3.41-2.82 3.41-.55 0-1.07-.29-1.25-.65 0 0-.28 1.08-.35 1.35-.13.5-.48 1.12-.78 1.57C8.13 18.5 9.51 19 12 19c3.866 0 7-3.134 7-7s-3.134-7-7-7S5 5.134 5 9c0 1.76.744 3.369 1.971 4.51-.037.33-.073.66-.073 1.01 0 .5.04.99.12 1.47C5.5 14.5 4.5 12.5 4.5 10.5c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5-3.358 7.5-7.5 7.5z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Columns 2-4: Contact Info */}
          <div className="md:col-span-3">
            <p className="font-trade-gothic-bold text-booth-maroon mb-2">
              RVS CAS MBA
            </p>
            <p className="text-booth-dark-gray font-trade-gothic-light mb-1">
              Sulur Campus, Coimbatore
            </p>
            <p className="text-booth-dark-gray font-trade-gothic-light mb-1">
              Tamil Nadu, India
            </p>
            <p className="text-booth-dark-gray font-trade-gothic-light mb-4">
              Phone: [Placeholder]
            </p>
            <button className="border-2 border-booth-maroon bg-white text-booth-maroon px-4 py-2 font-trade-gothic-bold uppercase hover:bg-booth-maroon hover:text-white transition text-sm">
              CONTACT
            </button>
          </div>
        </div>

        {/* Bottom Section 2: Legal and Copyright */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-wrap gap-4 items-center text-sm">
            <Link
              href="#"
              className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light inline-flex items-center gap-1"
            >
              RVS College
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light inline-flex items-center gap-1"
            >
              NAAC / AICTE
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light"
            >
              Website Feedback
            </Link>
            <span className="text-booth-dark-gray font-trade-gothic-light">
              © RVS CAS MBA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
