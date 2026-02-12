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
    question: "1. What MBA programs are offered at RVS CAS MBA?",
    content: [
      {
        type: "paragraph",
        text: "RVS CAS offers a general MBA with focused specializations designed around applied learning and career relevance."
      },
      {
        type: "list",
        items: [
          "Applied Finance",
          "Digital Marketing",
          "Human Resource Management",
          "Business Analytics",
          "Logistics & Supply Chain Management"
        ]
      },
      {
        type: "paragraph",
        text: <>Each specialization is designed with an <strong className="font-trade-gothic-bold">applied, industry-relevant learning approach.</strong></>
      }
    ]
  },
  {
    question: "2. Is the MBA degree recognized?",
    content: [
      {
        type: "paragraph",
        text: "Yes. The MBA is offered by RVS College of Arts & Science, which is affiliated with Bharathiar University, and follows the university’s academic regulations and degree recognition."
      }
    ]
  },
  {
    question: "3. What makes the RVS CAS MBA unique compared to other programs?",
    content: [
      {
        type: "paragraph",
        text: <>All students at RVS CAS MBA graduate with a <strong className="font-trade-gothic-bold">dual specialization</strong>, giving them expertise across two functional areas and greater flexibility in career opportunities.</>
      }
    ]
  },
  {
    question: "4. Who is eligible to apply for the MBA?",
    content: [
      {
        type: "paragraph",
        text: <> Candidates with a recognized undergraduate degree in any discipline are eligible to apply.</>
      }
    ]
  },
  {
    question: "5. Can final-year students apply?",
    content: [
      {
        type: "paragraph",
        text: <>Yes. Final-year undergraduate students awaiting results may apply.</>
      }
    ]
  },
  {
    question: "6. Is work experience required?",
    content: [
      {
        type: "paragraph",
        text: <>No. Work experience is not mandatory, though it is considered positively.</>
      }
    ]
  },
  {
    question: "7. Can students from non-commerce backgrounds apply?",
    content: [
      {
        type: "paragraph",
        text: <>Yes. Students from arts, science, engineering, and other backgrounds are welcome.</>
      }
    ]
  },
  {
    question: "8. Is mathematics or statistics mandatory?",
    content: [
      {
        type: "paragraph",
        text: <>Strong fundamentals are helpful, but prior specialization is not mandatory.</>
      }
    ]
  },
  {
    question: "9. Are there entrance exams required?",
    content: [
      {
        type: "paragraph",
        text: <>Admissions are based on academic review and interaction; no mandatory national entrance exam is required.</>
      }
    ]
  },
  {
    question: "10. Can I switch specializations after joining?",
    content: [
      {
        type: "paragraph",
        text: <>Specialization flexibility depends on academic timelines and institutional guidelines.</>
      }
    ]
  },
  {
    question: "11. How do I know which specialization is right for me?",
    content: [
      {
        type: "paragraph",
        text: <>Admissions counselors can help you understand which specialization aligns with your goals.</>
      }
    ]
  },
];

export default function ProgramEligibilitySection() {
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
            Program & Eligibility
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
