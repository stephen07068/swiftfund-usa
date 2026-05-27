'use client';

import { FileText, Search, CheckCircle } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      Icon: FileText,
      title: 'Fill Application',
      description: 'Complete our secure online form in less than 5 minutes.',
    },
    {
      number: '2',
      Icon: Search,
      title: 'Review',
      description: 'Our specialists review your data for the best possible rate.',
    },
    {
      number: '3',
      Icon: CheckCircle,
      title: 'Receive Feedback',
      description: 'Get your decision and funding details immediately.',
    },
  ];

  return (
    <SectionWrapper id="how-it-works" background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Simple 3-Step Process
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => {
          const Icon = step.Icon;
          return (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <Icon className="text-green-600 mx-auto mb-4" size={40} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M12 8L20 16L12 24" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
