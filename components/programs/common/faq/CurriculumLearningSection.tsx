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
    question: "1. How is the MBA curriculum structured?",
    content: [
      {
        type: "paragraph",
        text: "The curriculum combines core management subjects with specialization-focused learning."
      }
    ]
  },
  {
    question: "2. Is the program theory-based or practical?",
    content: [
      {
        type: "paragraph",
        text: "The program emphasizes applied learning, supported by strong academic foundations."
      }
    ]
  },
  {
    question: "3. Are real-world projects included?",
    content: [
      {
        type: "paragraph",
        text: "Yes. Projects, simulations, and a capstone are integral to learning."
      }
    ]
  },
  {
    question: "4. How are classes conducted?",
    content: [
      {
        type: "paragraph",
        text: "Classes are faculty-led and discussion-oriented."
      }
    ]
  },
  {
    question: "5. Are exams the only form of evaluation?",
    content: [
      {
        type: "paragraph",
        text: "No. Assessment includes projects, presentations, participation, and applied work."
      }
    ]
  },
  {
    question: "6. What is simulation-based learning?",
    content: [
      {
        type: "paragraph",
        text: "Students practice decision-making using structured business simulations."
      }
    ]
  },
  {
    question: "7. Who teaches the courses?",
    content: [
      {
        type: "paragraph",
        text: "Courses are taught by experienced faculty with academic and industry exposure."
      }
    ]
  },
  {
    question: "8. Are tools and platforms taught?",
    content: [
      {
        type: "paragraph",
        text: "Yes, tools are introduced as part of applied coursework."
      }
    ]
  },
  {
    question: "9. How intensive is the program?",
    content: [
      {
        type: "paragraph",
        text: "The MBA requires consistent engagement and academic commitment."
      }
    ]
  },
  {
    question: "10. Will I receive academic mentoring?",
    content: [
      {
        type: "paragraph",
        text: "Yes. Faculty guidance is available throughout the program."
      }
    ]
  },
];

export default function CurriculumLearningSection() {
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
            Curriculum & Learning
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
