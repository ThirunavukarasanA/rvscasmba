"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
      setIsMenuOpen(false);
    }
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(path);
  };

  const mobileLinkClass = (active: boolean) =>
    `block py-3 font-trade-gothic-light border-b border-gray-300 ${
      active ? "text-booth-maroon font-bold border-booth-maroon" : "text-booth-dark-gray"
    }`;

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Thin Red Strip - Sticky */}
      <div className="sticky top-0 z-50 bg-booth-maroon lg:h-1 h-2"></div>
      {/* Main Navigation - Semi-transparent over hero */}
      <nav className="relative lg:absolute top-0 lg:top-1 left-0 right-0 z-40 bg-white lg:bg-black lg:bg-opacity-50 backdrop-blur-sm">
        <div className="w-full max-w-full min-[700px]:max-w-[100%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12 py-2">
          <div className="flex items-center justify-between relative">
            {/* Search Overlay */}
            {isSearchOpen && (
              <div className="absolute inset-0 bg-white lg:bg-black z-50 flex items-center justify-between px-2 lg:px-4 rounded transition-all duration-300">
                <form onSubmit={handleSearch} className="flex-1 flex items-center gap-3 h-full">
                  <svg className="w-5 h-5 text-booth-maroon lg:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="flex-1 bg-transparent border-none outline-none text-black lg:text-white placeholder-gray-500 lg:placeholder-gray-400 font-trade-gothic-light focus:ring-0 text-lg w-full"
                  />
                  <button 
                    type="button" 
                    onClick={() => setIsSearchOpen(false)}
                    className="text-booth-dark-gray lg:text-white hover:text-booth-maroon lg:hover:text-gray-300 p-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </form>
              </div>
            )}

            {/* Left Side: Logo + 4 Primary Links */}
            <div className="flex items-center gap-4">
              {/* Logo Section */}
              <Link href="/" className="flex items-center gap-3">
                <div className="hidden lg:block">
                  <Image src="/images/header/RVSCAS_Logo.svg" alt="Logo" width={55} height={55} className="object-contain" />
                </div>
                <div className="block lg:hidden">
                  <Image src="/images/header/RVSCAS_Logo_Black.svg" alt="Logo" width={55} height={55} className="object-contain" />
                </div>
                <div>
                  <div className="font-trade-gothic-bold lg:text-white text-black text-lg">
                    RVS CAS MBA
                  </div>
                  <div className="lg:text-white text-black text-xs font-trade-gothic-light">
                    RVS COLLEGE OF ARTS & SCIENCE
                  </div>
                </div>
                {/* Crest/Logo icon placeholder */}
                <div className=""></div>
              </Link>

              {/* Primary Navigation Links - Larger size */}
              <div className="hidden lg:flex items-center gap-4">
                <Link
                  href="/about"
                  className={`${pathname === "/about" ? "border-b-4 border-white" : ""} text-white hover:text-gray-300 font-trade-gothic-light`}
                >
                  About CAS MBA
                </Link>
                <Link
                  href="/programs"
                  className={`${isActive("/programs") ? "border-b-4 border-white" : ""} text-white hover:text-gray-300 font-trade-gothic-light`}
                >
                  Program
                </Link>
                <Link
                  href="/admissions"
                  className={`${isActive("/admissions") ? "border-b-4 border-white" : ""} text-white hover:text-gray-300 font-trade-gothic-light`}
                >
                  Admissions
                </Link>
                <Link
                  href="/request-information"
                  className={`${isActive("/request-information") ? "border-b-4 border-white" : ""} text-white hover:text-gray-300 font-trade-gothic-light`}
                >
                  Request Info
                </Link>
                <Link
                  href="/insights"
                  className={`${isActive("/insights") ? "border-b-4 border-white" : ""} text-white hover:text-gray-300 font-trade-gothic-light`}
                >
                  Faculty & Insights
                </Link>
              </div>
            </div>

            {/* Right Side: Video series + Secondary Links (XL) + Search + Burger */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4">
              <Link
                href="/thinking-like-a-financial-analyst"
                className={`text-white hover:text-gray-300 font-trade-gothic-light text-sm text-center leading-snug max-w-[11rem] xl:max-w-[14rem] ${isActive("/thinking-like-a-financial-analyst") ? "border-b-4 border-white pb-0 -mb-0.5" : ""}`}
              >
                Thinking Like a Financial Analyst
              </Link>
              <div className="hidden xl:flex items-center gap-4">
                <Link
                  href="/alumni"
                  className="text-white hover:text-gray-300 font-trade-gothic-light text-sm"
                >
                  Alumni
                </Link>
                <Link
                  href="/industry-connect"
                  className="text-white hover:text-gray-300 font-trade-gothic-light text-sm"
                >
                  Industry Connect
                </Link>
                <Link
                  href="/events"
                  className="text-white hover:text-gray-300 font-trade-gothic-light text-sm"
                >
                  Events
                </Link>
                <Link
                  href="/placements"
                  className="text-white hover:text-gray-300 font-trade-gothic-light text-sm"
                >
                  Placements
                </Link>
              </div>

              {/* Search Icon */}
              <button 
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="text-white hover:text-gray-300 ml-2"
                aria-label="Search"
              >
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
                className="text-booth-maroon hover:text-gray-800"
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

            {/* Menu Links — grouped single column */}
            <div className="px-4 md:px-6 lg:px-8 xl:px-12 py-4 pb-10">
              <nav className="flex flex-col">
                <p className="text-xs font-trade-gothic-bold uppercase tracking-wider text-booth-maroon mb-1 mt-1">
                  Explore
                </p>
                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className={mobileLinkClass(pathname === "/about")}
                >
                  About CAS MBA
                </Link>
                <Link
                  href="/programs"
                  onClick={closeMobileMenu}
                  className={mobileLinkClass(isActive("/programs"))}
                >
                  Programs
                </Link>

                <p className="text-xs font-trade-gothic-bold uppercase tracking-wider text-booth-maroon mb-1 mt-6">
                  Learn &amp; insights
                </p>
                <Link
                  href="/insights"
                  onClick={closeMobileMenu}
                  className={mobileLinkClass(isActive("/insights"))}
                >
                  Faculty &amp; Insights
                </Link>
                <Link
                  href="/thinking-like-a-financial-analyst"
                  onClick={closeMobileMenu}
                  className={mobileLinkClass(isActive("/thinking-like-a-financial-analyst"))}
                >
                  Thinking Like a Financial Analyst
                </Link>

                <p className="text-xs font-trade-gothic-bold uppercase tracking-wider text-booth-maroon mb-1 mt-6">
                  Admissions
                </p>
                <Link
                  href="/admissions"
                  onClick={closeMobileMenu}
                  className={mobileLinkClass(isActive("/admissions"))}
                >
                  Admissions
                </Link>
                <Link
                  href="/request-information"
                  onClick={closeMobileMenu}
                  className={mobileLinkClass(isActive("/request-information"))}
                >
                  Request Info
                </Link>
                <Link
                  href="/how-to-apply"
                  onClick={closeMobileMenu}
                  className={mobileLinkClass(isActive("/how-to-apply"))}
                >
                  Apply
                </Link>
                <Link
                  href="/internships"
                  onClick={closeMobileMenu}
                  className={mobileLinkClass(isActive("/internships"))}
                >
                  Internships
                </Link>

                <p className="text-xs font-trade-gothic-bold uppercase tracking-wider text-booth-maroon mb-1 mt-6">
                  Campus &amp; network
                </p>
                <Link
                  href="/alumni"
                  onClick={closeMobileMenu}
                  className={mobileLinkClass(isActive("/alumni"))}
                >
                  Alumni
                </Link>
                <Link
                  href="/events"
                  onClick={closeMobileMenu}
                  className={mobileLinkClass(isActive("/events"))}
                >
                  Events
                </Link>
                <Link
                  href="/placements"
                  onClick={closeMobileMenu}
                  className={mobileLinkClass(isActive("/placements"))}
                >
                  Placements
                </Link>
                <Link
                  href="/industry-connect"
                  onClick={closeMobileMenu}
                  className={mobileLinkClass(isActive("/industry-connect"))}
                >
                  Industry Connect
                </Link>

                <p className="text-xs font-trade-gothic-bold uppercase tracking-wider text-booth-maroon mb-1 mt-6">
                  Connect
                </p>
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className={mobileLinkClass(isActive("/contact"))}
                >
                  Contact
                </Link>
                <Link
                  href="/careers"
                  onClick={closeMobileMenu}
                  className={mobileLinkClass(isActive("/careers"))}
                >
                  Careers
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
