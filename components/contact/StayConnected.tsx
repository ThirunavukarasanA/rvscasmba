import Link from 'next/link'
import React from 'react'

export default function StayConnected() {
    return (
        <section className="py-8 md:py-20 bg-booth-bg-gray">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Stay Connected
                    </h2>
                </div>

                <div className="space-y-6">
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        Follow us for updates, events, and insights from the RVS CAS MBA community:
                    </p>
                    <div className="flex flex-wrap gap-8 mb-12">
                        {/* Column 1: Follow */}
                        {/* <div className="flex gap-3 flex-wrap"> */}
                        {/* Facebook */}
                        <Link
                            href="#"
                            className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-5xl"
                            aria-label="Facebook"
                        >
                            f
                        </Link>
                        {/* Instagram */}
                        <Link
                            href="#"
                            className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center text-white"
                            aria-label="Instagram"
                        >
                            <svg
                                className="w-8 h-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </Link>
                        {/* YouTube */}
                        <Link
                            href="#"
                            className="w-12 h-12 bg-red-600 rounded flex items-center justify-center text-white"
                            aria-label="YouTube"
                        >
                            <svg
                                className="w-8 h-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </Link>
                        {/* LinkedIn */}
                        <Link
                            href="#"
                            className="w-12 h-12 bg-blue-700 rounded flex items-center justify-center text-white font-bold text-5xl"
                            aria-label="LinkedIn"
                        >
                            in
                        </Link>
                        {/* </div> */}
                    </div>
                    {/* <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        <a href="https://www.facebook.com/RVS-CAS-100222488528274" className="hover:text-booth-maroon hover:underline transition-all duration-300">Facebook</a>
                    </p>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        <a href="https://www.instagram.com/rvs_cas/" className="hover:text-booth-maroon hover:underline transition-all duration-300">Instagram</a>
                    </p>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        <a href="https://www.linkedin.com/school/rvs-cas/" className="hover:text-booth-maroon hover:underline transition-all duration-300">LinkedIn</a>
                    </p> */}
                </div>
            </div>
        </section>
    )
}
