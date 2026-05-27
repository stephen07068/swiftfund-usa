'use client';

import { Shield, Scale, Headphones, Building2 } from 'lucide-react';

export default function TrustBar() {
  const features = [
    { Icon: Shield,    label: 'SSL Secure'    },
    { Icon: Scale,     label: 'USA Licensed'  },
    { Icon: Headphones,label: '24/7 Support'  },
    { Icon: Building2, label: 'FDIC Member'   },
  ];

  return (
    <section className="border-y border-zinc-200 bg-zinc-50 py-5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-200">
          {features.map(({ Icon, label }, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-2.5 px-6 py-2 first:pl-0 last:pr-0"
            >
              <div className="w-7 h-7 rounded-md bg-white border border-zinc-200 flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                <Icon size={14} className="text-green-600" />
              </div>
              <span className="text-[11.5px] font-semibold text-zinc-600 tracking-wide uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
