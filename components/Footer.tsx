'use client';

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = {
    Products: ['Personal Loans', 'Business Funding', 'Line of Credit', 'Consolidation'],
    Company:  ['About Us', 'Contact Us', 'Security', 'Legal Disclaimers'],
    Legal:    ['Privacy Policy', 'Terms of Service'],
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="#22c55e" />
                </svg>
              </div>
              <span className="text-[15px] font-bold tracking-tight text-white">
                SwiftFund<span className="text-green-500">USA</span>
              </span>
            </div>
            <p className="text-[13px] text-zinc-500 leading-relaxed max-w-[200px]">
              Empowering American dreams through secure, transparent financial technology.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-[0.15em] mb-4">
                {group}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    {item === 'About Us' ? (
                      <button
                        onClick={() => scrollToSection('about')}
                        className="text-[13px] text-zinc-400 hover:text-white transition-colors"
                      >
                        {item}
                      </button>
                    ) : (
                      <a
                        href="#"
                        className="text-[13px] text-zinc-400 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-zinc-600">
            © 2026 SwiftFund USA. All Rights Reserved.
          </p>
          <p className="text-[12px] text-zinc-600">
            Member FDIC &nbsp;·&nbsp; Equal Housing Lender &nbsp;·&nbsp; NMLS #123456
          </p>
        </div>
      </div>
    </footer>
  );
}
