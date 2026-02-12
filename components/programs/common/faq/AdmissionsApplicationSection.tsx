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
    question: "1. How do I apply for the MBA?",
    content: [
      {
        type: "paragraph",
        text: <>You can apply online or through the admissions office.</>
      }
    ]
  },
  {
    question: "2. What is the application process like?",
    content: [
      {
        type: "paragraph",
        text: <>The process is simple: application submission, document review, interaction (if required), and admission decision.</>
      }
    ]
  },
  {
    question: "3. Is there an interview?",
    content: [
      {
        type: "paragraph",
        text: <>A short personal or academic interaction may be conducted to understand your readiness.</>
      }
    ]
  },
  {
    question: "4. How long does the admissions process take?",
    content: [
      {
        type: "paragraph",
        text: <>Decisions are usually communicated within a few working days after review.</>
      }
    ]
  },
  {
    question: "5. Are applications accepted throughout the year?",
    content: [
      {
        type: "paragraph",
        text: <>Admissions are conducted in multiple cycles; early applications are encouraged.</>
      }
    ]
  },
  {
    question: "6. Can parents speak to the admissions team?",
    content: [
      {
        type: "paragraph",
        text: <>Yes. Parents are welcome to connect with the admissions office.</>
      }
    ]
  },
  {
    question: "7. Is there an application fee?",
    content: [
      {
        type: "paragraph",
        text: <>Details regarding application fees are shared during the application process.</>
      }
    ]
  },
  {
    question: "8. Can I visit the campus before applying?",
    content: [
      {
        type: "paragraph",
        text: <>Yes. Campus visits can be scheduled through the admissions team.</>
      }
    ]
  },
  {
    question: "9. What happens after I receive an offer?",
    content: [
      {
        type: "paragraph",
        text: <>You will receive guidance on enrollment formalities and next steps.</>
      }
    ]
  },
  {
    question: "10. Is admission guaranteed after applying?",
    content: [
      {
        type: "paragraph",
        text: <>Admission depends on eligibility, document review, and interaction outcomes.</>
      }
    ]
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
            Admissions
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
