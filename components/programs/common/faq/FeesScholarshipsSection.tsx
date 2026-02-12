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
    question: "1. What is the fee structure for the MBA?",
    content: [
      {
        type: "paragraph",
        text: "Fee details are shared during the admissions process."
      }
    ]
  },
  {
    question: "2. Are scholarships available?",
    content: [
      {
        type: "paragraph",
        text: "Yes. Limited scholarships are offered based on merit and eligibility."
      }
    ]
  },
  {
    question: "3. How do I apply for scholarships?",
    content: [
      {
        type: "paragraph",
        text: "Scholarship details are discussed during admissions."
      }
    ]
  },
  {
    question: "4. Are education loans supported?",
    content: [
      {
        type: "paragraph",
        text: "Students may explore bank education loans independently."
      }
    ]
  },
  {
    question: "5. Is there a fee installment option?",
    content: [
      {
        type: "paragraph",
        text: "Fee payment options are communicated upon admission."
      }
    ]
  },
  {
    question: "6. Are there any hidden charges?",
    content: [
      {
        type: "paragraph",
        text: "No. All applicable fees are clearly communicated."
      }
    ]
  },
  {
    question: "7. Do scholarships cover the full fee?",
    content: [
      {
        type: "paragraph",
        text: "Scholarships are partial and subject to guidelines."
      }
    ]
  },
  {
    question: "8. Are scholarships renewed annually?",
    content: [
      {
        type: "paragraph",
        text: "Renewal depends on academic performance and policy."
      }
    ]
  },
  {
    question: "9. Is the MBA cost-effective?",
    content: [
      {
        type: "paragraph",
        text: "The program emphasizes long-term value and skill development."
      }
    ]
  },
  {
    question: "10. Who can I contact for fee-related queries?",
    content: [
      {
        type: "paragraph",
        text: "The admissions office can assist with all fee-related questions."
      }
    ]
  },
];

export default function FeesScholarshipsSection() {
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
            Fees & Scholarships
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
