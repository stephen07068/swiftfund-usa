'use client';

import { useState, useEffect } from 'react';

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToApply = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-zinc-200 px-4 py-3 animate-slide-up shadow-[0_-4px_24px_-4px_rgba(0,0,0,0.12)]">
      <button
        onClick={scrollToApply}
        className="w-full py-3 bg-green-600 text-white text-[14px] font-semibold rounded-lg hover:bg-green-700 active:bg-green-800 transition-all duration-150"
      >
        Apply Now — Free &amp; No Credit Impact
      </button>
    </div>
  );
}
