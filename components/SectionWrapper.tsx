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
    gray: 'bg-gray-50',
    blue: 'bg-green-50',
  };

  return (
    <section id={id} className={`${backgrounds[background]} py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
}
