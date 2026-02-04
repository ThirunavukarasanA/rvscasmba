"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I apply to RVS CAS MBA?",
    answer: "You can apply by completing the application process outlined on the How to Apply page. The admissions team will guide you through each step.",
    link: "/programs/common/how-to-apply"
  },
  {
    question: "Is there an application deadline?",
    answer: "Applications are accepted based on seat availability. Early application is recommended."
  },
  {
    question: "Is an entrance exam mandatory?",
    answer: "Yes. A valid score from CAT / MAT / CMAT / TANCET (or equivalent) is required."
  }
];

export default function AdmissionsApplicationSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Admissions & Application
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex items-center justify-between py-4"
              >
                <span className="text-lg md:text-xl font-trade-gothic-bold text-booth-dark-gray pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-booth-maroon flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="pb-4">
                  <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light">
                    {index === 0 ? (
                      <>
                        You can apply by completing the application process outlined on the{" "}
                        <a href="/programs/common/how-to-apply" className="text-booth-maroon hover:underline font-trade-gothic-bold">
                          How to Apply
                        </a>{" "}
                        page. The admissions team will guide you through each step.
                      </>
                    ) : (
                      faq.answer
                    )}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
