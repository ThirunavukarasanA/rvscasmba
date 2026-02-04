"use client";

import { useState, ReactNode } from "react";

type ContentBlock =
  | { type: "paragraph"; text: string | ReactNode }
  | { type: "list"; items: string[] };

type AccordionItem = {
  title: string;
  content: ContentBlock[];
};

interface CurriculumAccordionProps {
  items: AccordionItem[];
}

export default function CurriculumAccordion({
  items,
}: CurriculumAccordionProps) {
  // Allow single open item at a time (standard accordion behavior)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-8">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="w-full">
            <button
              onClick={() => toggleItem(index)}
              className={`w-full text-left py-4 flex justify-between items-center group transition-colors border-b-4 ${
                isOpen
                  ? "border-booth-maroon"
                  : "border-gray-300 hover:border-booth-maroon"
              }`}
              aria-expanded={isOpen}
            >
              <h3
                className={`text-xl md:text-2xl font-trade-gothic-bold transition-colors ${
                  isOpen
                    ? "text-booth-maroon"
                    : "text-booth-dark-gray group-hover:text-booth-maroon"
                }`}
              >
                {item.title}
              </h3>
              <div
                className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
              >
                {/* Custom Chevron Icon */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={
                    isOpen ? "text-booth-maroon" : "text-booth-dark-gray"
                  }
                >
                  <path
                    d="M2 5L8 11L14 5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="py-6 space-y-6">
                  {item.content.map((block, blockIdx) => (
                    <div key={blockIdx}>
                      {block.type === "paragraph" ? (
                        // <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                        <>{block.text}</>
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
        );
      })}
    </div>
  );
}
