'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-zinc-100">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="group">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between py-5 text-left gap-4 transition-colors"
              aria-expanded={isOpen}
            >
              <span className={`text-[14.5px] font-semibold tracking-tight transition-colors ${isOpen ? 'text-zinc-900' : 'text-zinc-700'} group-hover:text-zinc-900`}>
                {item.question}
              </span>
              <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-200 ${
                isOpen
                  ? 'bg-zinc-900 border-zinc-900'
                  : 'bg-white border-zinc-200 group-hover:border-zinc-300'
              }`}>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-white' : 'text-zinc-500'}`}
                />
              </div>
            </button>
            {isOpen && (
              <div className="pb-5 text-[13.5px] text-zinc-500 leading-relaxed animate-fade-in">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
