'use client';

import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'blue';
}

export default function SectionWrapper({
  children,
  className = '',
  id,
  background = 'white',
}: SectionWrapperProps) {
  const backgrounds = {
    white: 'bg-white',
    gray:  'bg-zinc-50',
    blue:  'bg-zinc-50',
  };

  return (
    <section id={id} className={`${backgrounds[background]} py-20 md:py-28 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
