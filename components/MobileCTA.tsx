'use client';

import { useState, useEffect } from 'react';
import Button from './Button';

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToApply = () => {
    const element = document.getElementById('apply');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t shadow-lg p-4 animate-slide-up">
      <Button onClick={scrollToApply} className="w-full" size="lg">
        Apply Now
      </Button>
    </div>
  );
}
