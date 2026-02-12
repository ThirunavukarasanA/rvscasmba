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
    question: "1. What is the classroom environment like?",
    content: [
      {
        type: "paragraph",
        text: "The environment is interactive, collaborative, and academically focused."
      }
    ]
  },
  {
    question: "2. Are there group activities and discussions?",
    content: [
      {
        type: "paragraph",
        text: "Yes. Team-based learning is an important part of the experience."
      }
    ]
  },
  {
    question: "3. Does the college support holistic development?",
    content: [
      {
        type: "paragraph",
        text: "Yes. Learning extends beyond academics through events and activities."
      }
    ]
  },
  {
    question: "4. Will I interact with students from other backgrounds?",
    content: [
      {
        type: "paragraph",
        text: "Yes. Cohorts are diverse in academic and personal backgrounds."
      }
    ]
  },
  {
    question: "5. Are guest lectures conducted?",
    content: [
      {
        type: "paragraph",
        text: "Yes. Industry and alumni interactions are part of the experience."
      }
    ]
  },
  {
    question: "6. Is attendance mandatory?",
    content: [
      {
        type: "paragraph",
        text: "Regular attendance is expected to support learning outcomes."
      }
    ]
  },
  {
    question: "7. Are there leadership opportunities?",
    content: [
      {
        type: "paragraph",
        text: "Students can participate in academic and co-curricular initiatives."
      }
    ]
  },
  {
    question: "8. What support systems are available for students?",
    content: [
      {
        type: "paragraph",
        text: "Faculty and administrative support is available throughout the program."
      }
    ]
  },
  {
    question: "9. Is there a mentoring culture?",
    content: [
      {
        type: "paragraph",
        text: "Yes. Faculty engagement goes beyond the classroom."
      }
    ]
  },
  {
    question: "10. How does student life balance academics and activities?",
    content: [
      {
        type: "paragraph",
        text: "The program is structured to support focused learning with healthy engagement."
      }
    ]
  },
];

export default function StudentExperienceSection() {
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
            Student Experience
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
