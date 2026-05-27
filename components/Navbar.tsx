'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navLinks = [
    { label: 'Loans',        id: 'apply'        },
    { label: 'Benefits',     id: 'benefits'     },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'About',        id: 'about'        },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-zinc-200/80 shadow-[0_1px_8px_0_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <div className="w-7 h-7 rounded-md bg-zinc-900 flex items-center justify-center shadow-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="#22c55e" />
              </svg>
            </div>
            <span className="text-[15px] font-bold tracking-tight text-zinc-900 leading-none">
              SwiftFund<span className="text-green-600">USA</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="px-4 py-2 text-[13.5px] font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-all duration-150"
              >
                {label}
              </button>
            ))}
            <div className="w-px h-5 bg-zinc-200 mx-2" />
            <button
              onClick={() => scrollToSection('apply')}
              className="px-5 py-2 bg-green-600 text-white text-[13.5px] font-semibold rounded-lg hover:bg-green-700 active:bg-green-800 transition-all duration-150 shadow-sm"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 shadow-lg animate-slide-down">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-0.5">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="block w-full text-left px-4 py-3 text-[14px] font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 rounded-md transition-colors"
              >
                {label}
              </button>
            ))}
            <div className="pt-2 pb-1">
              <button
                onClick={() => scrollToSection('apply')}
                className="w-full px-4 py-3 bg-green-600 text-white text-[14px] font-semibold rounded-lg hover:bg-green-700 transition-all"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
