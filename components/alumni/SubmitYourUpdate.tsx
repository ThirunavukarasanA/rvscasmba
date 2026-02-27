'use client'
import React, { useState } from 'react'

interface FormErrors {
    fullName?: string;
    graduationYear?: string;
    currentPosition?: string;
    organization?: string;
    linkedinUrl?: string;
    professionalHighlights?: string;
    global?: string;
}

export default function SubmitYourUpdate() {
    const [formData, setFormData] = useState({
        fullName: '',
        graduationYear: '',
        currentPosition: '',
        organization: '',
        linkedinUrl: '',
        professionalHighlights: ''
    })

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const alphabetRegex = /^[a-zA-Z\s]+$/;

    const validateField = (name: string, value: string): string | undefined => {
        switch (name) {
            case 'fullName':
                if (!value.trim()) return 'Full Name is required.';
                if (!alphabetRegex.test(value)) return 'Only alphabets and spaces are allowed. No numbers or special characters.';
                break;
            case 'graduationYear':
                if (!value) return 'Graduation Year is required.';
                break;
            case 'currentPosition':
                if (!value.trim()) return 'Current Position is required.';
                if (!alphabetRegex.test(value)) return 'Only alphabets and spaces are allowed. No numbers or special characters.';
                break;
            case 'organization':
                if (!value.trim()) return 'Organization is required.';
                if (!alphabetRegex.test(value)) return 'Only alphabets and spaces are allowed. No numbers or special characters.';
                break;
            case 'linkedinUrl':
                if (!value.trim()) return 'LinkedIn URL is required.';
                try {
                    new URL(value);
                } catch {
                    return 'Please enter a valid URL (e.g., https://linkedin.com/...).';
                }
                break;
            case 'professionalHighlights':
                if (!value.trim()) return 'Professional Highlights are required.';
                if (!alphabetRegex.test(value)) return 'Only alphabets and spaces are allowed. No numbers or special characters.';
                break;
        }
        return undefined;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Prevent typing non-alphabets in strict fields proactively
        if (['fullName', 'currentPosition', 'organization', 'professionalHighlights'].includes(name)) {
            if (value && !alphabetRegex.test(value) && value.slice(-1) !== ' ') {
                // Ignore the keypress by not updating state
                return;
            }
        }

        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error as soon as user types successfully
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined, global: undefined }));
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Final Validation Check
        let isValid = true;
        const newErrors: FormErrors = {};

        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key as keyof typeof formData]);
            if (error) {
                newErrors[key as keyof FormErrors] = error;
                isValid = false;
            }
        });

        if (!isValid) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        setErrors({});

        try {
            const response = await fetch('/api/alumni-update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                setErrors({ global: data.error || 'Something went wrong. Please try again.' });
            } else {
                setIsSuccess(true);
                setFormData({
                    fullName: '',
                    graduationYear: '',
                    currentPosition: '',
                    organization: '',
                    linkedinUrl: '',
                    professionalHighlights: ''
                });
                setTimeout(() => setIsSuccess(false), 5000);
            }
        } catch (error) {
            setErrors({ global: 'Failed to connect to the server. Please check your network and try again.' });
        } finally {
            setIsSubmitting(false);
        }
    }

    // Generate years from 1990 to current year + 1
    const currentYear = new Date().getFullYear();
    const years = Array.from(new Array(currentYear - 1990 + 2), (val, index) => currentYear + 1 - index);

    return (
        <section className="py-8 md:py-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[70%] xl:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-10">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Submit Your Update
                    </h2>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        Alumni Directory | Achievements | Career Milestones | Industry Impact
                    </p>
                </div>

                {isSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 font-trade-gothic-bold rounded">
                        Thank you! Your update has been successfully submitted.
                    </div>
                )}

                {errors.global && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 text-booth-maroon font-trade-gothic-bold rounded">
                        {errors.global}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                        {/* Full Name */}
                        <div className="flex flex-col gap-2 relative group md:col-span-1">
                            <label htmlFor="fullName" className="text-sm font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                Full Name <span className="text-booth-maroon">*</span>
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="E.g. John Doe"
                                className={`w-full px-4 py-3 border ${errors.fullName ? 'border-booth-maroon focus:ring-booth-maroon' : 'border-gray-300 focus:border-booth-maroon focus:ring-booth-maroon'} focus:outline-none focus:ring-1 bg-white text-booth-dark-gray font-trade-gothic-light transition-colors`}
                            />
                            {errors.fullName && <span className="text-booth-maroon text-sm mt-1">{errors.fullName}</span>}
                        </div>

                        {/* Graduation Year */}
                        <div className="flex flex-col gap-2 relative group md:col-span-1">
                            <label htmlFor="graduationYear" className="text-sm font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                Graduation Year <span className="text-booth-maroon">*</span>
                            </label>
                            <select
                                id="graduationYear"
                                name="graduationYear"
                                value={formData.graduationYear}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border ${errors.graduationYear ? 'border-booth-maroon focus:ring-booth-maroon' : 'border-gray-300 focus:border-booth-maroon focus:ring-booth-maroon'} focus:outline-none focus:ring-1 bg-white text-booth-dark-gray font-trade-gothic-light transition-colors cursor-pointer`}
                            >
                                <option value="" disabled>Select Year...</option>
                                {years.map((year) => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                            {errors.graduationYear && <span className="text-booth-maroon text-sm mt-1">{errors.graduationYear}</span>}
                        </div>

                        {/* Current Position */}
                        <div className="flex flex-col gap-2 relative group md:col-span-1">
                            <label htmlFor="currentPosition" className="text-sm font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                Current Position <span className="text-booth-maroon">*</span>
                            </label>
                            <input
                                type="text"
                                id="currentPosition"
                                name="currentPosition"
                                value={formData.currentPosition}
                                onChange={handleChange}
                                placeholder="E.g. Marketing Manager"
                                className={`w-full px-4 py-3 border ${errors.currentPosition ? 'border-booth-maroon focus:ring-booth-maroon' : 'border-gray-300 focus:border-booth-maroon focus:ring-booth-maroon'} focus:outline-none focus:ring-1 bg-white text-booth-dark-gray font-trade-gothic-light transition-colors`}
                            />
                            {errors.currentPosition && <span className="text-booth-maroon text-sm mt-1">{errors.currentPosition}</span>}
                        </div>

                        {/* Organization */}
                        <div className="flex flex-col gap-2 relative group md:col-span-1">
                            <label htmlFor="organization" className="text-sm font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                Organization <span className="text-booth-maroon">*</span>
                            </label>
                            <input
                                type="text"
                                id="organization"
                                name="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                placeholder="E.g. Global Tech Solutions"
                                className={`w-full px-4 py-3 border ${errors.organization ? 'border-booth-maroon focus:ring-booth-maroon' : 'border-gray-300 focus:border-booth-maroon focus:ring-booth-maroon'} focus:outline-none focus:ring-1 bg-white text-booth-dark-gray font-trade-gothic-light transition-colors`}
                            />
                            {errors.organization && <span className="text-booth-maroon text-sm mt-1">{errors.organization}</span>}
                        </div>

                        {/* LinkedIn URL */}
                        <div className="flex flex-col gap-2 relative group md:col-span-full">
                            <label htmlFor="linkedinUrl" className="text-sm font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                LinkedIn URL <span className="text-booth-maroon">*</span>
                            </label>
                            <input
                                type="text"
                                id="linkedinUrl"
                                name="linkedinUrl"
                                value={formData.linkedinUrl}
                                onChange={handleChange}
                                placeholder="https://linkedin.com/in/yourprofile"
                                className={`w-full px-4 py-3 border ${errors.linkedinUrl ? 'border-booth-maroon focus:ring-booth-maroon' : 'border-gray-300 focus:border-booth-maroon focus:ring-booth-maroon'} focus:outline-none focus:ring-1 bg-white text-booth-dark-gray font-trade-gothic-light transition-colors`}
                            />
                            {errors.linkedinUrl && <span className="text-booth-maroon text-sm mt-1">{errors.linkedinUrl}</span>}
                        </div>
                    </div>

                    {/* Professional Highlights */}
                    <div className="flex flex-col gap-2 pt-2">
                        <label htmlFor="professionalHighlights" className="text-sm font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                            Professional Highlights <span className="text-booth-maroon">*</span>
                        </label>
                        <textarea
                            id="professionalHighlights"
                            name="professionalHighlights"
                            value={formData.professionalHighlights}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Share your key achievements, awards, or recent milestones..."
                            className={`w-full px-4 py-3 border ${errors.professionalHighlights ? 'border-booth-maroon focus:ring-booth-maroon' : 'border-gray-300 focus:border-booth-maroon focus:ring-booth-maroon'} focus:outline-none focus:ring-1 bg-white text-booth-dark-gray font-trade-gothic-light transition-colors resize-y`}
                        ></textarea>
                        {errors.professionalHighlights && <span className="text-booth-maroon text-sm mt-1">{errors.professionalHighlights}</span>}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-booth-maroon hover:bg-opacity-90'} text-white font-trade-gothic-bold px-12 py-4 uppercase tracking-wider text-sm transition-colors duration-300 w-full md:w-auto relative flex justify-center items-center`}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </>
                            ) : (
                                'Submit Update'
                            )}
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}
