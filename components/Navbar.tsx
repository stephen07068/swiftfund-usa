'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="#16a34a"/>
            </svg>
            <span className="text-lg font-bold tracking-tight">
              <span className="text-gray-900">SwiftFund </span>
              <span className="text-green-600">USA</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('apply')} className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium">
              Loans
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium">
              Benefits
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium">
              How it Works
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium">
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('apply')}
              className="px-6 py-2.5 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all text-sm"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-green-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('apply')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md"
              >
                Loans
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md"
              >
                How it Works
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md"
              >
                About Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
