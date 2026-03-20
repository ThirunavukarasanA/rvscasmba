"use client";
import { useState } from "react";

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    mobile?: string;
    message?: string;
    global?: string;
}

export default function QuickContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: ""
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const alphabetRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^[0-9+()-\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateField = (name: string, value: string): string | undefined => {
        switch (name) {
            case 'firstName':
                if (!value.trim()) return 'First Name is required.';
                if (!alphabetRegex.test(value)) return 'Only alphabets and spaces are allowed. No numbers or special characters.';
                break;
            case 'lastName':
                if (!value.trim()) return 'Last Name is required.';
                if (!alphabetRegex.test(value)) return 'Only alphabets and spaces are allowed. No numbers or special characters.';
                break;
            case 'email':
                if (!value.trim()) return 'Email Address is required.';
                if (!emailRegex.test(value)) return 'Please enter a valid email address.';
                break;
            case 'mobile':
                if (!value.trim()) return 'Mobile Number is required.';
                if (!phoneRegex.test(value)) return 'Please enter a valid mobile number.';
                if (value.replace(/\D/g, '').length < 10) return 'Mobile Number must be at least 10 digits.';
                break;
        }
        return undefined;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // Prevent typing non-alphabets in strict fields proactively
        if (['firstName', 'lastName'].includes(name)) {
            if (value && !alphabetRegex.test(value) && value.slice(-1) !== ' ') {
                // Ignore the keypress by not updating state
                return;
            }
        }

        // Prevent typing alphabets in mobile field proactively
        if (name === 'mobile') {
            if (value && !phoneRegex.test(value)) {
                return;
            }
        }

        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error as soon as user types successfully
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined, global: undefined }));
        }
    };

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
            const response = await fetch('/api/contact', {
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
                    firstName: "",
                    lastName: "",
                    email: "",
                    mobile: "",
                    message: ""
                });
                setTimeout(() => setIsSuccess(false), 5000);
            }
        } catch (error) {
            setErrors({ global: 'Failed to connect to the server. Please check your network and try again.' });
        } finally {
            setIsSubmitting(false);
        }
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

                {isSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 font-trade-gothic-bold rounded">
                        Thank you! Your request has been successfully submitted. We will be in touch shortly.
                    </div>
                )}

                {errors.global && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 text-booth-maroon font-trade-gothic-bold rounded">
                        {errors.global}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="firstName" className="block text-booth-dark-gray font-trade-gothic-bold mb-2">
                                First Name <span className="text-booth-maroon">*</span>
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border-2 ${errors.firstName ? 'border-red-600 focus:ring-red-600' : 'border-gray-300 focus:border-booth-maroon'} focus:outline-none font-trade-gothic-light transition-colors`}
                            />
                            {errors.firstName && <span className="text-red-600 text-sm mt-1">{errors.firstName}</span>}
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-booth-dark-gray font-trade-gothic-bold mb-2">
                                Last Name <span className="text-booth-maroon">*</span>
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border-2 ${errors.lastName ? 'border-red-600 focus:ring-red-600' : 'border-gray-300 focus:border-booth-maroon'} focus:outline-none font-trade-gothic-light transition-colors`}
                            />
                            {errors.lastName && <span className="text-red-600 text-sm mt-1">{errors.lastName}</span>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="block text-booth-dark-gray font-trade-gothic-bold mb-2">
                                Email Address <span className="text-booth-maroon">*</span>
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border-2 ${errors.email ? 'border-red-600 focus:ring-red-600' : 'border-gray-300 focus:border-booth-maroon'} focus:outline-none font-trade-gothic-light transition-colors`}
                            />
                            {errors.email && <span className="text-red-600 text-sm mt-1">{errors.email}</span>}
                        </div>

                        <div>
                            <label htmlFor="mobile" className="block text-booth-dark-gray font-trade-gothic-bold mb-2">
                                Mobile Number <span className="text-booth-maroon">*</span>
                            </label>
                            <input
                                type="text"
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border-2 ${errors.mobile ? 'border-red-600 focus:ring-red-600' : 'border-gray-300 focus:border-booth-maroon'} focus:outline-none font-trade-gothic-light transition-colors`}
                            />
                            {errors.mobile && <span className="text-red-600 text-sm mt-1">{errors.mobile}</span>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-booth-dark-gray font-trade-gothic-bold mb-2">
                            Questions / Message <span className="text-booth-light-gray font-normal">(optional)</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 resize-none border-gray-300 focus:border-booth-maroon focus:outline-none font-trade-gothic-light"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-booth-maroon hover:bg-opacity-90'} text-white px-8 py-4 font-trade-gothic-bold uppercase transition text-base md:text-lg flex justify-center items-center`}
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
                                'Submit Request'
                            )}
                        </button>
                    </div>
                </form>
                {/* <p className="text-booth-dark-gray font-trade-gothic-light pt-4 pb-4">
                    By submitting this form, you agree to our <a href="#" className="text-booth-maroon font-trade-gothic-bold">Privacy Policy</a>.
                </p> */}
                <p className="text-booth-light-gray font-trade-gothic-light italic pt-4 pb-4">We respect your privacy — your contact information is used only for MBA-related communication.</p>
            </div>
        </section>
    )
}
