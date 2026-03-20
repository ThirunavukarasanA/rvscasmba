"use client";

import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';

export default function EventCTA() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        agreedToComms: false
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const validateField = (name: string, value: string | boolean) => {
        let errorMsg = "";

        if (typeof value === "string") {
            const trimmedValue = value.trim();
            switch (name) {
                case "firstName":
                    if (!trimmedValue) {
                        errorMsg = "First Name is required";
                    } else if (!/^[A-Za-z\s]+$/.test(trimmedValue)) {
                        errorMsg = "Only text is allowed";
                    }
                    break;
                case "lastName":
                    if (!trimmedValue) {
                        errorMsg = "Last Name is required";
                    } else if (!/^[A-Za-z\s]+$/.test(trimmedValue)) {
                        errorMsg = "Only text is allowed";
                    }
                    break;
                case "email":
                    if (!trimmedValue) {
                        errorMsg = "Email is required";
                    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
                        errorMsg = "Enter a valid email";
                    }
                    break;
            }
        } else if (name === "agreedToComms" && !value) {
            errorMsg = "You must agree to receive communications";
        }

        return errorMsg;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        let newValue: string | boolean = type === 'checkbox' ? checked : value;

        if (type === 'text' && (name === "firstName" || name === "lastName")) {
            newValue = value.replace(/[^A-Za-z\s]/g, ""); // Allow only alphabets and spaces
        }

        setFormData(prev => ({ ...prev, [name]: newValue }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: validateField(name, newValue) }));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setErrors(prev => ({ ...prev, [name]: validateField(name, val) }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus(null);

        const newErrors: { [key: string]: string } = {};
        Object.keys(formData).forEach((key) => {
            const val = formData[key as keyof typeof formData];
            const error = validateField(key, val);
            if (error) newErrors[key] = error;
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/event-subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({ type: 'success', message: 'Successfully subscribed to updates!' });
                setFormData({ firstName: "", lastName: "", email: "", agreedToComms: false });
                setErrors({});
            } else {
                setSubmitStatus({ type: 'error', message: data.error || 'Failed to subscribe. Please try again.' });
            }
        } catch (error) {
            console.error('Subscription error:', error);
            setSubmitStatus({ type: 'error', message: 'An unexpected error occurred. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

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

                        {submitStatus && submitStatus.type === 'success' && (
                            <div className="bg-green-50 border border-green-200 text-green-800 rounded p-4 mb-6 relative z-10">
                                <p className="font-trade-gothic-bold">{submitStatus.message}</p>
                            </div>
                        )}

                        {submitStatus && submitStatus.type === 'error' && (
                            <div className="bg-red-50 border border-red-200 text-red-800 rounded p-4 mb-6 relative z-10">
                                <p className="font-trade-gothic-bold">{submitStatus.message}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <div className="bg-white px-4 pt-3 pb-2">
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="First Name"
                                            className={`w-full border-b-2 ${errors.firstName ? 'border-red-500' : 'border-gray-300'} outline-none pb-1 text-booth-dark-gray font-trade-gothic-bold placeholder:text-booth-dark-gray placeholder:font-trade-gothic-bold focus:border-booth-maroon transition-colors`}
                                        />
                                    </div>
                                    {errors.firstName && <span className="text-red-300 text-xs font-trade-gothic-bold block mt-1">{errors.firstName}</span>}
                                </div>
                                <div>
                                    <div className="bg-white px-4 pt-3 pb-2">
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Last Name"
                                            className={`w-full border-b-2 ${errors.lastName ? 'border-red-500' : 'border-gray-300'} outline-none pb-1 text-booth-dark-gray font-trade-gothic-bold placeholder:text-booth-dark-gray placeholder:font-trade-gothic-bold focus:border-booth-maroon transition-colors`}
                                        />
                                    </div>
                                    {errors.lastName && <span className="text-red-300 text-xs font-trade-gothic-bold block mt-1">{errors.lastName}</span>}
                                </div>
                            </div>

                            <div>
                                <div className="bg-white px-4 pt-3 pb-2">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Enter Email"
                                        className={`w-full border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} outline-none pb-1 text-booth-dark-gray font-trade-gothic-bold placeholder:text-booth-dark-gray placeholder:font-trade-gothic-bold focus:border-booth-maroon transition-colors`}
                                    />
                                </div>
                                {errors.email && <span className="text-red-300 text-xs font-trade-gothic-bold block mt-1">{errors.email}</span>}
                            </div>

                            <div className="pt-2">
                                <div className="flex gap-2">
                                    <input
                                        type="checkbox"
                                        name="agreedToComms"
                                        checked={formData.agreedToComms}
                                        onChange={handleChange}
                                        className="w-[18px] h-[18px] rounded-none cursor-pointer mt-1"
                                    />
                                    <p className="text-white text-[15px] font-trade-gothic-light mb-1">
                                        * I agree to receive electronic communications from the Institution. I understand I may unsubscribe at any time.
                                    </p>
                                </div>
                                {errors.agreedToComms && <span className="text-red-300 text-xs font-trade-gothic-bold block mt-1 ml-6">{errors.agreedToComms}</span>}
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`border-2 border-white text-white px-10 py-2.5 text-[15px] font-trade-gothic-bold transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-white hover:text-[#105456]'}`}
                                >
                                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
