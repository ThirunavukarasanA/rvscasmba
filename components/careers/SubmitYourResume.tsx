"use client";
import React, { useState, useRef } from 'react'

interface FormErrors {
    fullName?: string;
    email?: string;
    phone?: string;
    specialization?: string;
    positionType?: string;
    experience?: string;
    qualification?: string;
    resume?: string;
    global?: string;
}

export default function SubmitYourResume() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        specialization: '',
        positionType: '',
        experience: '',
        qualification: '',
        linkedin: '',
        statement: ''
    });
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const alphabetRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^[0-9+()-\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateField = (name: string, value: string | File | null): string | undefined => {
        if (typeof value === 'string') {
            switch (name) {
                case 'fullName':
                    if (!value.trim()) return 'Full Name is required.';
                    if (!alphabetRegex.test(value)) return 'Only alphabets and spaces are allowed.';
                    break;
                case 'email':
                    if (!value.trim()) return 'Email Address is required.';
                    if (!emailRegex.test(value)) return 'Please enter a valid email address.';
                    break;
                case 'phone':
                    if (!value.trim()) return 'Phone Number is required.';
                    if (!phoneRegex.test(value)) return 'Please enter a valid phone number.';
                    if (value.replace(/\D/g, '').length < 10) return 'Must be at least 10 digits.';
                    break;
                case 'specialization':
                    if (!value) return 'Area of Specialization is required.';
                    break;
                case 'positionType':
                    if (!value) return 'Position Type is required.';
                    break;
                case 'experience':
                    if (!value) return 'Years of Experience is required.';
                    if (Number(value) < 0) return 'Experience cannot be negative.';
                    break;
                case 'qualification':
                    if (!value.trim()) return 'Highest Qualification is required.';
                    if (!alphabetRegex.test(value.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, ""))) return 'Only alphabets and standard characters are allowed.';
                    break;
            }
        }
        if (name === 'resume') {
            if (!value) return 'Please upload a resume.';
            const file = value as File;
            const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!validTypes.includes(file.type)) return 'Invalid file type. Only PDF and DOC allowed.';
            if (file.size > 5 * 1024 * 1024) return 'File size exceeds 5MB limit.';
        }
        return undefined;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // Prevent typing non-alphabets proactively
        if (['fullName', 'qualification'].includes(name)) {
            // allowing basic punctuation for qualifications like "Ph.D."
            const testRegex = name === 'qualification' ? /^[a-zA-Z\s\.,-]+$/ : alphabetRegex;
            if (value && !testRegex.test(value) && value.slice(-1) !== ' ') {
                return;
            }
        }

        // Prevent typing non-numbers in phone proactively
        if (name === 'phone') {
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

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
            if (errors.resume) {
                setErrors(prev => ({ ...prev, resume: undefined }));
            }
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

        // Validate File
        const fileError = validateField('resume', selectedFile);
        if (fileError) {
            newErrors.resume = fileError;
            isValid = false;
        }

        if (!isValid) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        setErrors({});

        // Use FormData to allow file uploading
        const submitData = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            submitData.append(key, value);
        });
        if (selectedFile) {
            submitData.append('resume', selectedFile);
        }

        try {
            const response = await fetch('/api/resume', {
                method: 'POST',
                // Don't set Content-Type header when using FormData; browser sets it with boundaries automatically
                body: submitData,
            });

            const data = await response.json();

            if (!response.ok) {
                setErrors({ global: data.error || 'Something went wrong. Please try again.' });
            } else {
                setIsSuccess(true);
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    specialization: '',
                    positionType: '',
                    experience: '',
                    qualification: '',
                    linkedin: '',
                    statement: ''
                });
                setSelectedFile(null);
                if (fileInputRef.current) fileInputRef.current.value = '';

                setTimeout(() => setIsSuccess(false), 5000);
            }
        } catch (error) {
            setErrors({ global: 'Failed to connect to the server. Please check your network and try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id='submit-your-resume' className="py-8 md:py-20 bg-white">
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

                {isSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 font-trade-gothic-bold rounded">
                        Thank you! Your resume has been successfully submitted. We will be in touch when opportunities arise.
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
                        <div className="flex flex-col gap-2 relative group md:col-span-full">
                            <label htmlFor="fullName" className="text-sm font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                Full Name <span className="text-booth-maroon">*</span>
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border ${errors.fullName ? 'border-red-600 focus:ring-booth-maroon' : 'border-gray-300 focus:border-booth-maroon focus:ring-booth-maroon'} focus:outline-none focus:ring-1 bg-white text-booth-dark-gray font-trade-gothic-light transition-colors`}
                            />
                            {errors.fullName && <span className="text-red-600 text-sm mt-1">{errors.fullName}</span>}
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
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border ${errors.email ? 'border-red-600 focus:ring-red-600' : 'border-gray-300 focus:border-booth-maroon focus:ring-booth-maroon'} focus:outline-none focus:ring-1 bg-white text-booth-dark-gray font-trade-gothic-light transition-colors`}
                            />
                            {errors.email && <span className="text-red-600 text-sm mt-1">{errors.email}</span>}
                        </div>

                        {/* Mobile Number */}
                        <div className="flex flex-col gap-2 relative group">
                            <label htmlFor="phone" className="text-sm font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                Mobile Number <span className="text-booth-maroon">*</span>
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-600 focus:ring-red-600' : 'border-gray-300 focus:border-booth-maroon focus:ring-booth-maroon'} focus:outline-none focus:ring-1 bg-white text-booth-dark-gray font-trade-gothic-light transition-colors`}
                            />
                            {errors.phone && <span className="text-red-600 text-sm mt-1">{errors.phone}</span>}
                        </div>

                        {/* Area of Specialization */}
                        <div className="flex flex-col gap-2 relative group">
                            <label htmlFor="specialization" className="text-sm font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                Area of Specialization <span className="text-booth-maroon">*</span>
                            </label>
                            <select
                                id="specialization"
                                name="specialization"
                                value={formData.specialization}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border ${errors.specialization ? 'border-red-600 focus:ring-red-600' : 'border-gray-300 focus:border-booth-maroon focus:ring-booth-maroon'} focus:outline-none focus:ring-1 bg-white text-booth-dark-gray font-trade-gothic-light transition-colors cursor-pointer`}
                            >
                                <option value="" disabled>Select Area...</option>
                                <option value="Finance">Finance</option>
                                <option value="Artificial Intelligence">Artificial Intelligence</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="HR">HR</option>
                                <option value="Logistics & SCM">Logistics & SCM</option>
                                <option value="Economics">Economics</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.specialization && <span className="text-red-600 text-sm mt-1">{errors.specialization}</span>}
                        </div>

                        {/* Position Type */}
                        <div className="flex flex-col gap-2 relative group">
                            <label htmlFor="positionType" className="text-sm font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                Position Type <span className="text-booth-maroon">*</span>
                            </label>
                            <select
                                id="positionType"
                                name="positionType"
                                value={formData.positionType}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border ${errors.positionType ? 'border-red-600 focus:ring-red-600' : 'border-gray-300 focus:border-booth-maroon focus:ring-booth-maroon'} focus:outline-none focus:ring-1 bg-white text-booth-dark-gray font-trade-gothic-light transition-colors cursor-pointer`}
                            >
                                <option value="" disabled>Select Position...</option>
                                <option value="Full-Time Faculty">Full-Time Faculty</option>
                                <option value="Visiting Faculty">Visiting Faculty</option>
                                <option value="Adjunct">Adjunct</option>
                                <option value="Administrative">Administrative</option>
                                <option value="Research">Research</option>
                            </select>
                            {errors.positionType && <span className="text-red-600 text-sm mt-1">{errors.positionType}</span>}
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
                                value={formData.experience}
                                onChange={handleChange}
                                placeholder="E.g. 5"
                                className={`w-full px-4 py-3 border ${errors.experience ? 'border-red-600 focus:ring-red-600' : 'border-gray-300 focus:border-booth-maroon focus:ring-booth-maroon'} focus:outline-none focus:ring-1 bg-white text-booth-dark-gray font-trade-gothic-light transition-colors`}
                            />
                            {errors.experience && <span className="text-red-600 text-sm mt-1">{errors.experience}</span>}
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
                                value={formData.qualification}
                                onChange={handleChange}
                                placeholder="E.g. Ph.D."
                                className={`w-full px-4 py-3 border ${errors.qualification ? 'border-red-600 focus:ring-red-600' : 'border-gray-300 focus:border-booth-maroon focus:ring-booth-maroon'} focus:outline-none focus:ring-1 bg-white text-booth-dark-gray font-trade-gothic-light transition-colors`}
                            />
                            {errors.qualification && <span className="text-red-600 text-sm mt-1">{errors.qualification}</span>}
                        </div>

                        {/* LinkedIn Profile */}
                        <div className="flex flex-col gap-2 relative group md:col-span-full">
                            <label htmlFor="linkedin" className="text-sm font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                LinkedIn Profile <span className="text-gray-400 font-trade-gothic-light tracking-normal lowercase">(Optional)</span>
                            </label>
                            <input
                                type="text"
                                id="linkedin"
                                name="linkedin"
                                value={formData.linkedin}
                                onChange={handleChange}
                                placeholder="https://linkedin.com/in/yourprofile"
                                className={`w-full px-4 py-3 border border-gray-300 focus:border-booth-maroon focus:outline-none focus:ring-1 focus:ring-booth-maroon bg-white text-booth-dark-gray font-trade-gothic-light transition-colors`}
                            />
                        </div>
                    </div>

                    {/* Upload Resume */}
                    <div className="flex flex-col gap-2 pt-2">
                        <label htmlFor="resume" className="text-sm font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                            Upload Resume <span className="text-booth-maroon">*</span>
                        </label>
                        <p className="text-sm text-gray-500 font-trade-gothic-light -mt-2 mb-2">Upload PDF / DOC</p>
                        <div className={`relative border-2 border-dashed ${errors.resume ? 'border-red-600' : 'border-gray-300'} px-6 py-10 flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition-colors cursor-pointer group`}>
                            <input
                                type="file"
                                id="resume"
                                name="resume"
                                accept=".pdf,.doc,.docx"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-10 w-10 ${selectedFile ? 'text-green-500' : 'text-gray-300 group-hover:text-booth-maroon'} mb-4 transition-colors`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {selectedFile ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                )}
                            </svg>
                            <span className="text-booth-dark-gray font-trade-gothic-bold text-base text-center">
                                {selectedFile ? selectedFile.name : 'Click to upload or drag and drop'}
                            </span>
                            <span className="text-gray-400 font-trade-gothic-light text-sm mt-1 text-center">Maximum file size: 5MB</span>
                        </div>
                        {errors.resume && <span className="text-red-600 text-sm mt-1">{errors.resume}</span>}
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
                            value={formData.statement}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 focus:border-booth-maroon focus:outline-none focus:ring-1 focus:ring-booth-maroon bg-white text-booth-dark-gray font-trade-gothic-light transition-colors resize-none"
                        ></textarea>
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
                                'Submit Application'
                            )}
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}
