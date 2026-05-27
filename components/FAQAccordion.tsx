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
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden transition-all"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900">{item.question}</span>
            <ChevronDown
              className={`text-blue-600 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              size={20}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-gray-700 animate-fade-in">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
