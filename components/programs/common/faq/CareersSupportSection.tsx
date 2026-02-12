"use client";
import { useState, ReactNode } from "react";
type ContentBlock =
  | { type: "paragraph"; text: string | ReactNode }
  | { type: "list"; items: string[] };

interface FAQItem {
  question: string;
  content: ContentBlock[];
}
const faqs: FAQItem[] = [
  {
    question: "1. Does RVS CAS offer placement support?",
    content: [
      {
        type: "paragraph",
        text: "Yes. Career guidance and placement support are provided."
      }
    ]
  },
  {
    question: "2. What kind of roles do graduates typically enter?",
    content: [
      {
        type: "paragraph",
        text: "Graduates enter entry-level and growth-oriented management roles."
      }
    ]
  },
  {
    question: "3. Are internships part of the MBA?",
    content: [
      {
        type: "paragraph",
        text: "Yes. Internships are part of the MBA curriculum across all specializations and are an integral component of the learning experience."
      }
    ]
  },
  {
    question: "4. How does the college help with career readiness?",
    content: [
      {
        type: "paragraph",
        text: "Through resume guidance, interview preparation, and applied learning."
      }
    ]
  },
  {
    question: "5. Are alumni involved in career support?",
    content: [
      {
        type: "paragraph",
        text: "Yes. Alumni interactions and guidance sessions are conducted."
      }
    ]
  },
  {
    question: "6. Is placement guaranteed?",
    content: [
      {
        type: "paragraph",
        text: "Placements depend on individual performance and market conditions."
      }
    ]
  },
  {
    question: "7. Can entrepreneurs benefit from this MBA?",
    content: [
      {
        type: "paragraph",
        text: "Yes. The program builds decision-making and business clarity."
      }
    ]
  },
  {
    question: "8. Are students guided on career choices?",
    content: [
      {
        type: "paragraph",
        text: "Yes. Faculty and career teams provide direction."
      }
    ]
  },
  {
    question: "9. Can I pursue higher studies after this MBA?",
    content: [
      {
        type: "paragraph",
        text: "Yes. The degree supports academic and professional progression."
      }
    ]
  },
  {
    question: "10. Is long-term career growth emphasized?",
    content: [
      {
        type: "paragraph",
        text: "Yes. The focus is on building durable skills and thinking ability."
      }
    ]
  },

];

export default function CareersSupportSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Careers & Support
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
                  className={`w-5 h-5 text-booth-maroon flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
              >
                <div className="overflow-hidden">
                  <div className="py-6 space-y-6">
                    {faq.content.map((block, blockIdx) => (
                      <div key={blockIdx}>
                        {block.type === "paragraph" ? (
                          <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                            {block.text}
                          </p>
                        ) : (
                          // </p>
                          <ul className="space-y-3">
                            {block.items.map((point, pointIdx) => (
                              <li
                                key={pointIdx}
                                className="flex items-start gap-3"
                              >
                                {/* Bullet Point */}
                                <span className="text-booth-maroon mt-1.5 text-xs">
                                  ●
                                </span>
                                <span className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light">
                                  {point}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
