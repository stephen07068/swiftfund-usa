'use client';

import SectionWrapper from '../SectionWrapper';

const stats = [
  { value: '50K+',   label: 'Clients Funded'    },
  { value: '$2B+',   label: 'Loans Originated'  },
  { value: '< 24h',  label: 'Average Decision'  },
  { value: '4.9 ★',  label: 'Customer Rating'   },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" background="white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.18em] mb-3">
              About SwiftFund USA
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-6 leading-tight">
              Modernizing lending through speed &amp; security
            </h2>
            <p className="text-[15px] text-zinc-500 leading-relaxed">
              At SwiftFund USA, we believe accessing capital should be simple and secure. Founded on the principles of transparency and technological excellence, we&apos;ve replaced antiquated banking processes with a streamlined digital experience. Our mission is to provide Americans with reliable financial support precisely when they need it.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-zinc-50 border border-zinc-100 rounded-xl p-5 hover:border-zinc-200 transition-colors"
              >
                <p className="text-2xl font-black text-zinc-900 tracking-tight mb-1">{value}</p>
                <p className="text-[12px] font-medium text-zinc-400 uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
