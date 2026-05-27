'use client';

export default function HeroSection() {
  const scrollToApply = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-white pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #f4f4f510 1px, transparent 1px), linear-gradient(to bottom, #f4f4f510 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Radial glow */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-green-500/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full bg-zinc-100 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[11px] font-semibold text-zinc-500 tracking-widest uppercase">
                Fast Decisions · Transparent Terms
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black leading-[1.08] tracking-tight text-zinc-900 mb-6 text-balance">
              Get the Financial{' '}
              <span className="text-zinc-900">Support You Need —</span>{' '}
              <span
                className="relative inline-block"
                style={{
                  background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Fast &amp; Secure
              </span>
            </h1>

            <p className="text-[16px] text-zinc-500 leading-relaxed mb-9 max-w-md">
              Streamlined funding solutions for personal and professional growth. Rapid decisions and transparent terms — no fine print.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={scrollToApply}
                className="px-7 py-3.5 bg-zinc-900 text-white text-[14px] font-semibold rounded-lg hover:bg-zinc-800 active:bg-zinc-950 transition-all duration-150 shadow-sm"
              >
                Apply Now
              </button>
              <button
                onClick={scrollToApply}
                className="px-7 py-3.5 bg-white text-zinc-800 text-[14px] font-semibold rounded-lg border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-150"
              >
                Check Eligibility →
              </button>
            </div>

            {/* Trust micro-row */}
            <div className="mt-8 flex items-center gap-5">
              {['No hard pull', 'FDIC Insured', '256-bit SSL'].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-[12px] text-zinc-400 font-medium">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2.5 6.5L5.5 9.5L10.5 4" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Dashboard card illustration */}
          <div className="hidden md:flex justify-center items-center relative h-96">
            {/* Main card */}
            <div className="absolute right-0 top-4 w-72 bg-white rounded-2xl border border-zinc-200 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)] p-5">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-0.5">Loan Status</p>
                  <p className="text-[15px] font-bold text-zinc-900">Application Review</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-green-50 border border-green-200 text-[10px] font-semibold text-green-700 tracking-wide uppercase">
                  In Progress
                </span>
              </div>
              {/* Progress bar */}
              <div className="mb-5">
                <div className="flex justify-between mb-1.5">
                  <span className="text-[11px] text-zinc-400">Progress</span>
                  <span className="text-[11px] font-semibold text-zinc-700">68%</span>
                </div>
                <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                  <div className="h-full w-[68%] bg-gradient-to-r from-green-500 to-green-400 rounded-full" />
                </div>
              </div>
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Amount', val: '$12,000' },
                  { label: 'Rate',   val: '6.9%'    },
                  { label: 'Term',   val: '36 mo.'  },
                ].map(({ label, val }) => (
                  <div key={label} className="bg-zinc-50 rounded-lg p-2.5 text-center">
                    <p className="text-[10px] text-zinc-400 font-medium mb-0.5">{label}</p>
                    <p className="text-[13px] font-bold text-zinc-800">{val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary floating card */}
            <div className="absolute left-0 bottom-10 w-52 bg-white rounded-xl border border-zinc-200 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.12)] p-4">
              <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-3">Funding Growth</p>
              <div className="flex items-end gap-0.5 h-14">
                {[35, 42, 50, 58, 67, 76, 88, 96, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t transition-all"
                    style={{
                      height: `${h}%`,
                      background: `hsl(${142 - i * 2}, ${60 + i}%, ${40 + i * 2}%)`,
                    }}
                  />
                ))}
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                <span className="text-[11px] font-bold text-green-600">↑ 24%</span>
                <span className="text-[10px] text-zinc-400">vs last quarter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
