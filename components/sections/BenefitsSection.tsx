'use client';

import { Zap, Lock, Calendar, ThumbsUp, Eye } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';

const benefits = [
  {
    Icon: Zap,
    title: 'Fast Approval',
    description: 'Instant decisions powered by our advanced scoring engine.',
  },
  {
    Icon: Lock,
    title: 'Secure Data',
    description: 'Bank-grade encryption protecting your personal information.',
  },
  {
    Icon: Calendar,
    title: 'Flexible Repayment',
    description: 'Customizable schedules designed to fit your monthly budget.',
  },
  {
    Icon: ThumbsUp,
    title: 'Trusted Support',
    description: 'Dedicated loan specialists available for every client.',
  },
  {
    Icon: Eye,
    title: 'Transparent Process',
    description: 'No hidden fees. No surprises. Just clear, upfront terms.',
  },
];

export default function BenefitsSection() {
  return (
    <SectionWrapper id="benefits" background="white">
      <div className="text-center mb-12">
        <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.18em] mb-3">
          Why SwiftFund USA
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
          Built for you, not for banks
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {benefits.map(({ Icon, title, description }, i) => (
          <div
            key={i}
            className="group relative bg-white rounded-xl border border-zinc-200/80 p-5 hover:border-zinc-300 hover:shadow-[0_4px_24px_-6px_rgba(0,0,0,0.1)] transition-all duration-200 cursor-default"
          >
            <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center mb-4 shadow-sm group-hover:bg-green-600 transition-colors duration-200">
              <Icon size={16} className="text-white" />
            </div>
            <h3 className="text-[14px] font-semibold text-zinc-900 mb-1.5 tracking-tight">
              {title}
            </h3>
            <p className="text-[13px] text-zinc-500 leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
