'use client';

import SectionWrapper from '../SectionWrapper';

export default function AboutSection() {
  return (
    <SectionWrapper id="about" background="white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-green-600 text-sm font-bold tracking-widest uppercase mb-4">
          ABOUT SWIFTFUND USA
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Modernizing Lending Through Speed & Security
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          At SwiftFund USA, we believe that accessing capital should be simple and secure. Founded on the principles of transparency and technological excellence, we've replaced antiquated banking processes with a streamlined digital experience. Our mission is to provide Americans with reliable financial support precisely when they need it, backed by robust data security and a commitment to fair lending.
        </p>
      </div>
    </SectionWrapper>
  );
}
