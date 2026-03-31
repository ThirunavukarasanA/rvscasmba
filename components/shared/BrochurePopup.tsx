import React, { useState } from "react";

interface BrochurePopupProps {
  courseName: string;
  onClose: () => void;
  brochurePath: string;
}

const BrochurePopup: React.FC<BrochurePopupProps> = ({
  courseName,
  onClose,
  brochurePath,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  // Validation functions
  const validateName = (value: string) => {
    if (!value.trim()) return "Name is required";
    if (!/^[a-zA-Z\s]+$/.test(value))
      return "Name can only contain alphabets and spaces";
    return "";
  };

  const validateEmail = (value: string) => {
    if (!value.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Please enter a valid email address";
    return "";
  };

  const validateMobile = (value: string) => {
    if (!value.trim()) return "Mobile number is required";
    if (!/^[6-9]\d{9}$/.test(value))
      return "Please enter a valid 10-digit Indian mobile number starting with 6-9";
    return "";
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    setFieldErrors((prev) => ({ ...prev, name: validateName(value) }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setFieldErrors((prev) => ({ ...prev, email: validateEmail(value) }));
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Only allow digits
    if (value.length <= 10) {
      setMobile(value);
      setFieldErrors((prev) => ({ ...prev, mobile: validateMobile(value) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate all fields
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const mobileError = validateMobile(mobile);

    setFieldErrors({
      name: nameError,
      email: emailError,
      mobile: mobileError,
    });

    if (nameError || emailError || mobileError) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/brochure-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, mobile, courseName }),
      });
      if (res.status === 201) {
        // Trigger download
        const link = document.createElement("a");
        link.href = brochurePath;
        link.download = brochurePath.split("/").pop() || "brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        onClose();
      } else {
        const errorData = await res.json().catch(() => null);
        setError(
          errorData?.error
            ? `Failed to submit: ${errorData.error}`
            : `Failed to submit: ${res.status}`,
        );
      }
    } catch (err) {
      setError(
        `An error occurred: ${err instanceof Error ? err.message : String(err)}`,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Download Brochure</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              className={`w-full border px-3 py-2 ${fieldErrors.name ? "border-red-500" : "border-gray-300"}`}
            />
            {fieldErrors.name && (
              <div className="text-red-500 text-sm mt-1">
                {fieldErrors.name}
              </div>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className={`w-full border px-3 py-2 ${fieldErrors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {fieldErrors.email && (
              <div className="text-red-500 text-sm mt-1">
                {fieldErrors.email}
              </div>
            )}
          </div>
          <div>
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobile}
              onChange={handleMobileChange}
              maxLength={10}
              className={`w-full border px-3 py-2 ${fieldErrors.mobile ? "border-red-500" : "border-gray-300"}`}
            />
            {fieldErrors.mobile && (
              <div className="text-red-500 text-sm mt-1">
                {fieldErrors.mobile}
              </div>
            )}
          </div>
          {/* Hidden courseName field */}
          <input type="hidden" value={courseName} readOnly />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-booth-maroon text-white py-2 hover:bg-booth-maroon/90"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Download"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BrochurePopup;
