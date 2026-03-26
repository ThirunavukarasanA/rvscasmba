"use client";

import { useState } from "react";

export default function RequestFormSection() {
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

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateField = (name: string, value: string) => {
    let errorMsg = "";
    const trimmedValue = value.trim();

    switch (name) {
      case "firstName":
        if (!trimmedValue) {
          errorMsg = "First Name is required";
        } else if (!/^[A-Za-z]+$/.test(trimmedValue)) {
          errorMsg = "Only alphabets are allowed";
        }
        break;
      case "lastName":
        if (!trimmedValue) {
          errorMsg = "Last Name is required";
        } else if (!/^[A-Za-z]+$/.test(trimmedValue)) {
          errorMsg = "Only alphabets are allowed";
        }
        break;
      case "email":
        if (!trimmedValue) {
          errorMsg = "Email Address is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
          errorMsg = "Please enter a valid email address";
        }
        break;
      case "mobile":
        if (!trimmedValue) {
          errorMsg = "Mobile Number is required";
        } else if (!/^[6-9]\d{9}$/.test(trimmedValue)) {
          errorMsg = "Please enter a valid 10-digit Indian mobile number";
        }
        break;
      case "program":
        if (!trimmedValue) {
          errorMsg = "Please select a program of interest";
        }
        break;
      case "qualification":
        if (!trimmedValue) {
          errorMsg = "Current Qualification is required";
        }
        break;
      case "city":
        if (!trimmedValue) {
          errorMsg = "City / State is required";
        }
        break;
      default:
        break;
    }

    return errorMsg;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    let { name, value } = e.target;

    if (name === "firstName" || name === "lastName") {
      value = value.replace(/[^A-Za-z]/g, "");
    } else if (name === "mobile") {
      value = value.replace(/[^\d]/g, "").slice(0, 10);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    const newErrors: { [key: string]: string } = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/request-information', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your request has been submitted successfully.' });
        setFormData({
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
        setErrors({});
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'An unexpected error occurred. Please try again later.' });
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
            Request Information Form
          </h2>
          <p className="text-sm md:text-lg text-booth-dark-gray font-trade-gothic-light">The request form is simple and quick to complete. You’ll just need to provide your name and contact details, academic background, and your area of interest or specialization so we can share information that’s most relevant to you.</p>
        </div>

        {submitStatus && submitStatus.type === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-800 rounded p-4 mb-6">
            <p className="font-trade-gothic-bold">{submitStatus.message}</p>
          </div>
        )}

        {submitStatus && submitStatus.type === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-800 rounded p-4 mb-6">
            <p className="font-trade-gothic-bold">{submitStatus.message}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border-2 ${errors.firstName ? 'border-red-600' : 'border-gray-300'} focus:border-booth-maroon focus:outline-none font-trade-gothic-light`}
              />
              {errors.firstName && <span className="text-red-600 text-sm mt-1 block">{errors.firstName}</span>}
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
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border-2 ${errors.lastName ? 'border-red-600' : 'border-gray-300'} focus:border-booth-maroon focus:outline-none font-trade-gothic-light`}
              />
              {errors.lastName && <span className="text-red-600 text-sm mt-1 block">{errors.lastName}</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-booth-dark-gray font-trade-gothic-bold mb-2">
                Email Address <span className="text-booth-maroon">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border-2 ${errors.email ? 'border-red-600' : 'border-gray-300'} focus:border-booth-maroon focus:outline-none font-trade-gothic-light`}
              />
              {errors.email && <span className="text-red-600 text-sm mt-1 block">{errors.email}</span>}
            </div>

            <div>
              <label htmlFor="mobile" className="block text-booth-dark-gray font-trade-gothic-bold mb-2">
                Mobile Number <span className="text-booth-maroon">*</span>
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border-2 ${errors.mobile ? 'border-red-600' : 'border-gray-300'} focus:border-booth-maroon focus:outline-none font-trade-gothic-light`}
              />
              {errors.mobile && <span className="text-red-600 text-sm mt-1 block">{errors.mobile}</span>}
            </div>
          </div>

          <div>
            <label htmlFor="program" className="block text-booth-dark-gray font-trade-gothic-bold mb-2">
              Program of Interest <span className="text-booth-maroon">*</span>
            </label>
            <select
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 border-2 ${errors.program ? 'border-red-600' : 'border-gray-300'} focus:border-booth-maroon focus:outline-none font-trade-gothic-light`}
            >
              <option value="">Select a program</option>
              <option value="mba-global-finance-corporate-analyst">MBA in Global Finance & Corporate Analyst</option>
              <option value="mba-artificial-intelligence">MBA – Artificial Intelligence</option>
              <option value="mba-digital-marketing">MBA – Digital Marketing</option>
              <option value="mba-human-resources">MBA – Human Resources</option>
              <option value="mba-logistics-supply-chain">MBA – Logistics & Supply Chain Management</option>
            </select>
            {errors.program && <span className="text-red-600 text-sm mt-1 block">{errors.program}</span>}
          </div>

          <div>
            <label htmlFor="qualification" className="block text-booth-dark-gray font-trade-gothic-bold mb-2">
              Current Qualification <span className="text-booth-maroon">*</span>
            </label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 border-2 ${errors.qualification ? 'border-red-600' : 'border-gray-300'} focus:border-booth-maroon focus:outline-none font-trade-gothic-light`}
            />
            {errors.qualification && <span className="text-red-600 text-sm mt-1 block">{errors.qualification}</span>}
          </div>

          <div>
            <label htmlFor="city" className="block text-booth-dark-gray font-trade-gothic-bold mb-2">
              City / State <span className="text-booth-maroon">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 border-2 ${errors.city ? 'border-red-600' : 'border-gray-300'} focus:border-booth-maroon focus:outline-none font-trade-gothic-light`}
            />
            {errors.city && <span className="text-red-600 text-sm mt-1 block">{errors.city}</span>}
          </div>

          <div>
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
              className="w-full px-4 py-3 border-2 border-gray-300 focus:border-booth-maroon focus:outline-none font-trade-gothic-light resize-none"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-booth-maroon hover:bg-opacity-90'} text-white font-trade-gothic-bold px-12 py-4 uppercase tracking-wider text-sm transition-colors duration-300 w-full md:w-auto relative flex justify-center items-center`}
            >
              {isSubmitting ? <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </> : 'Submit Request'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
