"use client";
import { useState } from "react";

// 👇 type define karo
type AccordionItem = {
  title: string;
  content: string;
};

export default function Accordion({ items = [] }: { items: AccordionItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <figure className="flex flex-col gap-1 rounded-xl bg-gray-950/5 p-1 inset-ring inset-ring-gray-950/5 dark:bg-white/10 dark:inset-ring-white/10">
      <div className="not-prose rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50 p-5">
        <div className="space-y-4">
          {items.map((item: AccordionItem, index: number) => (
            <div key={index} className="pb-2">
              
              {/* Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left flex font-medium text-slate-900 cursor-pointer"
              >
                <span>{item.title}</span>

                <svg
                  className={`w-4 h-4 ml-auto transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-[500px] mt-3" : "max-h-0"
                }`}
              >
                <div className="p-4 bg-gray-100 rounded-lg text-sm text-left text-slate-700">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}