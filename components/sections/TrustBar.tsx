'use client';

import { Shield, Scale, Headphones, Building2 } from 'lucide-react';

export default function TrustBar() {
  const features = [
    { Icon: Shield, label: 'SSL SECURE' },
    { Icon: Scale, label: 'USA LICENSED' },
    { Icon: Headphones, label: '24/7 SUPPORT' },
    { Icon: Building2, label: 'FDIC MEMBER' },
  ];

  return (
    <section className="bg-slate-900 py-6">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.Icon;
            return (
              <div key={index} className="flex items-center justify-center gap-3">
                <Icon className="text-green-500" size={20} />
                <span className="text-sm font-semibold text-white tracking-wide">{feature.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
