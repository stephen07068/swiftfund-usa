'use client';

import { FileText, Search, CheckCircle } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';

const steps = [
  {
    number: '01',
    Icon: FileText,
    title: 'Fill Application',
    description: 'Complete our secure online form in under 5 minutes. No paperwork required.',
  },
  {
    number: '02',
    Icon: Search,
    title: 'Expert Review',
    description: 'Our specialists review your data instantly to find the best possible rate for you.',
  },
  {
    number: '03',
    Icon: CheckCircle,
    title: 'Receive Funding',
    description: 'Get your decision and funding details immediately. Money in your account fast.',
  },
];

export default function HowItWorksSection() {
  return (
    <SectionWrapper id="how-it-works" background="gray">
      <div className="text-center mb-14">
        <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.18em] mb-3">
          Simple Process
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
          Three steps to funding
        </h2>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Connector line (desktop only) */}
        <div className="hidden md:block absolute top-10 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-px bg-zinc-200 z-0" />

        {steps.map(({ number, Icon, title, description }, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center text-center">
            {/* Step circle */}
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-2xl bg-white border border-zinc-200 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.1)] flex items-center justify-center group-hover:border-green-200 transition-all">
                <Icon size={28} className="text-zinc-800" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-zinc-900 flex items-center justify-center shadow-sm">
                <span className="text-[9px] font-bold text-white">{number}</span>
              </div>
            </div>

            <h3 className="text-[15px] font-semibold text-zinc-900 mb-2 tracking-tight">{title}</h3>
            <p className="text-[13.5px] text-zinc-500 leading-relaxed max-w-[220px]">{description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
