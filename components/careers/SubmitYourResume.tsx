import React from 'react'

export default function SubmitYourResume() {
    return (
        <section className="py-8 md:py-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[70%] xl:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-10">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Submit Your Resume
                    </h2>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        If you are interested in future opportunities at RVS CAS MBA, we invite you to share your profile with us.
                    </p>
                    <p className="text-lg md:text-xl text-booth-dark-gray mt-3 font-trade-gothic-bold">Please complete the form below:</p>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                        {/* Full Name */}
                        <div className="flex flex-col gap-2 relative group md:col-span-full">
                            <label htmlFor="fullName" className="text-sm font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                Full Name <span className="text-booth-maroon">*</span>
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                required
                                className="w-full px-4 py-3 border border-gray-300 focus:border-booth-maroon focus:outline-none focus:ring-1 focus:ring-booth-maroon bg-white text-booth-dark-gray font-trade-gothic-light transition-colors"
                            />
                        </div>

                        {/* Email Address */}
                        <div className="flex flex-col gap-2 relative group">
                            <label htmlFor="email" className="text-sm font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                Email Address <span className="text-booth-maroon">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 border border-gray-300 focus:border-booth-maroon focus:outline-none focus:ring-1 focus:ring-booth-maroon bg-white text-booth-dark-gray font-trade-gothic-light transition-colors"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col gap-2 relative group">
                            <label htmlFor="phone" className="text-sm font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                Phone Number <span className="text-booth-maroon">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                className="w-full px-4 py-3 border border-gray-300 focus:border-booth-maroon focus:outline-none focus:ring-1 focus:ring-booth-maroon bg-white text-booth-dark-gray font-trade-gothic-light transition-colors"
                            />
                        </div>

                        {/* Area of Specialization */}
                        <div className="flex flex-col gap-2 relative group">
                            <label htmlFor="specialization" className="text-sm font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                Area of Specialization <span className="text-booth-maroon">*</span>
                            </label>
                            <select
                                id="specialization"
                                name="specialization"
                                required
                                className="w-full px-4 py-3 border border-gray-300 focus:border-booth-maroon focus:outline-none focus:ring-1 focus:ring-booth-maroon bg-white text-booth-dark-gray font-trade-gothic-light transition-colors cursor-pointer"
                                defaultValue=""
                            >
                                <option value="" disabled>Select Area...</option>
                                <option value="Finance">Finance</option>
                                <option value="Business Analytics">Business Analytics</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="HR">HR</option>
                                <option value="Logistics & SCM">Logistics & SCM</option>
                                <option value="Economics">Economics</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Position Type */}
                        <div className="flex flex-col gap-2 relative group">
                            <label htmlFor="positionType" className="text-sm font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                Position Type <span className="text-booth-maroon">*</span>
                            </label>
                            <select
                                id="positionType"
                                name="positionType"
                                required
                                className="w-full px-4 py-3 border border-gray-300 focus:border-booth-maroon focus:outline-none focus:ring-1 focus:ring-booth-maroon bg-white text-booth-dark-gray font-trade-gothic-light transition-colors cursor-pointer"
                                defaultValue=""
                            >
                                <option value="" disabled>Select Position...</option>
                                <option value="Full-Time Faculty">Full-Time Faculty</option>
                                <option value="Visiting Faculty">Visiting Faculty</option>
                                <option value="Adjunct">Adjunct</option>
                                <option value="Administrative">Administrative</option>
                                <option value="Research">Research</option>
                            </select>
                        </div>

                        {/* Years of Experience */}
                        <div className="flex flex-col gap-2 relative group">
                            <label htmlFor="experience" className="text-sm font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                Years of Experience <span className="text-booth-maroon">*</span>
                            </label>
                            <input
                                type="number"
                                id="experience"
                                name="experience"
                                min="0"
                                required
                                placeholder="E.g. 5"
                                className="w-full px-4 py-3 border border-gray-300 focus:border-booth-maroon focus:outline-none focus:ring-1 focus:ring-booth-maroon bg-white text-booth-dark-gray font-trade-gothic-light transition-colors"
                            />
                        </div>

                        {/* Highest Qualification */}
                        <div className="flex flex-col gap-2 relative group">
                            <label htmlFor="qualification" className="text-sm font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                Highest Qualification <span className="text-booth-maroon">*</span>
                            </label>
                            <input
                                type="text"
                                id="qualification"
                                name="qualification"
                                required
                                placeholder="E.g. Ph.D., MBA, M.Sc."
                                className="w-full px-4 py-3 border border-gray-300 focus:border-booth-maroon focus:outline-none focus:ring-1 focus:ring-booth-maroon bg-white text-booth-dark-gray font-trade-gothic-light transition-colors"
                            />
                        </div>

                        {/* LinkedIn Profile */}
                        <div className="flex flex-col gap-2 relative group md:col-span-full">
                            <label htmlFor="linkedin" className="text-sm font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                LinkedIn Profile <span className="text-gray-400 font-trade-gothic-light tracking-normal lowercase">(Optional)</span>
                            </label>
                            <input
                                type="url"
                                id="linkedin"
                                name="linkedin"
                                placeholder="https://linkedin.com/in/yourprofile"
                                className="w-full px-4 py-3 border border-gray-300 focus:border-booth-maroon focus:outline-none focus:ring-1 focus:ring-booth-maroon bg-white text-booth-dark-gray font-trade-gothic-light transition-colors"
                            />
                        </div>
                    </div>

                    {/* Upload Resume */}
                    <div className="flex flex-col gap-2 pt-2">
                        <label htmlFor="resume" className="text-sm font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                            Upload Resume <span className="text-booth-maroon">*</span>
                        </label>
                        <p className="text-sm text-gray-500 font-trade-gothic-light -mt-2 mb-2">Upload PDF / DOC</p>
                        <div className="relative border-2 border-dashed border-gray-300 px-6 py-10 flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition-colors cursor-pointer group">
                            <input
                                type="file"
                                id="resume"
                                name="resume"
                                accept=".pdf,.doc,.docx"
                                required
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-300 group-hover:text-booth-maroon mb-4 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            <span className="text-booth-dark-gray font-trade-gothic-bold text-base">Click to upload or drag and drop</span>
                            <span className="text-gray-400 font-trade-gothic-light text-sm mt-1">Maximum file size: 5MB</span>
                        </div>
                    </div>

                    {/* Statement of Interest */}
                    <div className="flex flex-col gap-2 pt-2">
                        <label htmlFor="statement" className="text-sm font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                            Statement of Interest <span className="text-gray-400 font-trade-gothic-light tracking-normal lowercase">(Optional)</span>
                        </label>
                        <p className="text-sm text-gray-500 font-trade-gothic-light -mt-2 mb-2">Brief note on your teaching, research, or industry interests</p>
                        <textarea
                            id="statement"
                            name="statement"
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 focus:border-booth-maroon focus:outline-none focus:ring-1 focus:ring-booth-maroon bg-white text-booth-dark-gray font-trade-gothic-light transition-colors resize-y"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                        <button
                            type="submit"
                            className="bg-booth-maroon text-white font-trade-gothic-bold px-12 py-4 uppercase tracking-wider text-sm hover:bg-opacity-90 transition-colors duration-300 w-full md:w-auto"
                        >
                            Submit Application
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}
