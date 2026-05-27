'use client';

import { Zap, Lock, Calendar, ThumbsUp, Eye } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';

export default function BenefitsSection() {
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
      description: 'No hidden fees, no surprises. Just clear, upfront terms.',
    },
  ];

  return (
    <SectionWrapper id="benefits" background="white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.Icon;
            return (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-green-600" size={24} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
