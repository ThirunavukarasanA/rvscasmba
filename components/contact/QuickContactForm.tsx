"use client";
import { useState } from "react";

export default function QuickContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        program: "",
        qualification: "",
        city: "",
        source: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
        // In production, this would send data to an API
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    return (
        <section id="reqestform" className="py-8 md:py-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Quick Contact Form
                    </h2>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        Have a question right now? Fill out the form below, and we’ll reply soon.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="firstName" className="block text-booth-dark-gray font-trade-gothic-bold mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-booth-maroon focus:outline-none font-trade-gothic-light"
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-booth-dark-gray font-trade-gothic-bold mb-2">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-booth-maroon focus:outline-none font-trade-gothic-light"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="block text-booth-dark-gray font-trade-gothic-bold mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-booth-maroon focus:outline-none font-trade-gothic-light"
                            />
                        </div>

                        <div>
                            <label htmlFor="mobile" className="block text-booth-dark-gray font-trade-gothic-bold mb-2">
                                Mobile Number
                            </label>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                required
                                value={formData.mobile}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-booth-maroon focus:outline-none font-trade-gothic-light"
                            />
                        </div>
                    </div>

                    {/* <div>
                        <label htmlFor="program" className="block text-booth-dark-gray font-trade-gothic-bold mb-2">
                            Program of Interest
                        </label>
                        <select
                            id="program"
                            name="program"
                            required
                            value={formData.program}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-booth-maroon focus:outline-none font-trade-gothic-light"
                        >
                            <option value="">Select a program</option>
                            <option value="mba-applied-finance">MBA – Applied Finance</option>
                            <option value="mba-business-analytics">MBA – Business Analytics</option>
                            <option value="mba-digital-marketing">MBA – Digital Marketing</option>
                            <option value="mba-human-resources">MBA – Human Resources</option>
                            <option value="mba-logistics-supply-chain">MBA – Logistics & Supply Chain Management</option>
                        </select>
                    </div> */}

                    {/* <div>
                        <label htmlFor="qualification" className="block text-booth-dark-gray font-trade-gothic-bold mb-2">
                            Current Qualification
                        </label>
                        <input
                            type="text"
                            id="qualification"
                            name="qualification"
                            required
                            value={formData.qualification}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-booth-maroon focus:outline-none font-trade-gothic-light"
                        />
                    </div> */}

                    {/* <div>
                        <label htmlFor="city" className="block text-booth-dark-gray font-trade-gothic-bold mb-2">
                            City / State
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            required
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-booth-maroon focus:outline-none font-trade-gothic-light"
                        />
                    </div> */}

                    {/* <div>
                        <label htmlFor="source" className="block text-booth-dark-gray font-trade-gothic-bold mb-2">
                            How did you hear about us? <span className="text-booth-light-gray font-normal">(optional)</span>
                        </label>
                        <input
                            type="text"
                            id="source"
                            name="source"
                            value={formData.source}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-booth-maroon focus:outline-none font-trade-gothic-light"
                        />
                    </div> */}

                    <div>
                        <label htmlFor="message" className="block text-booth-dark-gray font-trade-gothic-bold mb-2">
                            Questions / Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-booth-maroon focus:outline-none font-trade-gothic-light resize-y"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="bg-booth-maroon text-white px-8 py-4 font-trade-gothic-bold uppercase hover:bg-opacity-90 transition text-base md:text-lg"
                        >
                            Submit Request
                        </button>
                    </div>
                </form>
                <p className="text-booth-dark-gray font-trade-gothic-light pt-4 pb-4">
                    By submitting this form, you agree to our <a href="#" className="text-booth-maroon font-trade-gothic-bold">Privacy Policy</a>.
                </p>
                <p className="text-booth-light-gray font-trade-gothic-light italic">We respect your privacy — your contact information is used only for MBA-related communication.</p>
            </div>
        </section>
    )
}
