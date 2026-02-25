import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';

export default function EventCTA() {
    return (
        <section className="py-16 md:py-24 bg-[#105456]">
            <div className="w-full max-w-full min-[700px]:max-w-[70%] lg:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    {/* Content */}
                    <div className="flex-1 max-w-3xl">
                        <div className="mb-6 md:mb-12">
                            <div className="w-16 h-0.5 bg-white mb-3"></div>
                            <svg
                                width="80"
                                height="80"
                                viewBox="0 0 80 80"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-18 h-18 md:w-24 md:h-24"
                            >
                                <rect
                                    x="5"
                                    y="20"
                                    width="70"
                                    height="40"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    className="text-white"
                                />
                                <path
                                    d="M5 20L40 45L75 20"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    className="text-white"
                                />
                            </svg>
                            <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-white mb-4">
                                RVS CAS MBA News & Events to Your Inbox
                            </h2>
                        </div>

                        <p className="text-white text-base md:text-[17px] font-trade-gothic-light mb-8 leading-relaxed">
                            Stay informed with updates from RVS CAS MBA, including event notifications, academic announcements, faculty insights, and stories from our student and alumni community.
                        </p>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white px-4 pt-3 pb-2">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-full border-b-2 border-gray-300 outline-none pb-1 text-booth-dark-gray font-trade-gothic-bold placeholder:text-booth-dark-gray placeholder:font-trade-gothic-bold focus:border-booth-maroon transition-colors"
                                    />
                                </div>
                                <div className="bg-white px-4 pt-3 pb-2">
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-full border-b-2 border-gray-300 outline-none pb-1 text-booth-dark-gray font-trade-gothic-bold placeholder:text-booth-dark-gray placeholder:font-trade-gothic-bold focus:border-booth-maroon transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="bg-white px-4 pt-3 pb-2">
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    className="w-full border-b-2 border-gray-300 outline-none pb-1 text-booth-dark-gray font-trade-gothic-bold placeholder:text-booth-dark-gray placeholder:font-trade-gothic-bold focus:border-booth-maroon transition-colors"
                                />
                            </div>

                            <div className="pt-2">
                                <div className="flex gap-2">
                                    <input
                                        type="checkbox"
                                        className="w-[18px] h-[18px] rounded-none cursor-pointer"
                                    />
                                    <p className="text-white text-[15px] font-trade-gothic-light mb-3">
                                        * I agree to receive electronic communications from the University of Chicago. I understand I may unsubscribe at any time.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="border-2 border-white text-white px-10 py-2.5 text-[15px] font-trade-gothic-bold transition-colors hover:bg-white hover:text-[#105456]"
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </form>

                        <div className="mt-10 text-white text-[11px] md:text-xs font-trade-gothic-light leading-snug max-w-3xl">
                            <p className="font-trade-gothic-bold uppercase mb-1 tracking-wider">YOUR PRIVACY</p>
                            <p>
                                We want to demonstrate our commitment to your privacy. Please review Chicago Booth's <a href="#" className="underline hover:text-gray-200">privacy notice</a>, which provides information explaining how and why we collect particular information when you visit our website.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
