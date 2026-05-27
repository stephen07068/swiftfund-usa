'use client';

import Button from '../Button';

export default function HeroSection() {
  const scrollToApply = () => {
    const element = document.getElementById('apply');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-white pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              <span className="text-gray-900">Get the Financial</span>
              <br />
              <span className="text-gray-900">Support You Need —</span>
              <br />
              <span className="text-green-600">Fast, Secure, and</span>
              <br />
              <span className="text-green-600">Reliable</span>
            </h1>
            <p className="text-base text-gray-600 mb-8 max-w-md leading-relaxed">
              Streamlined funding solutions for your personal and professional growth. Experience rapid decisions and transparent terms with SwiftFund USA's modern lending platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToApply}
                className="px-7 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all shadow-md text-base"
              >
                Apply Now
              </button>
              <button 
                onClick={scrollToApply}
                className="px-7 py-3 bg-white text-gray-900 font-semibold rounded-full border-2 border-gray-900 hover:bg-gray-50 transition-all text-base"
              >
                Check Eligibility
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center relative h-96">
            {/* Back document - gray with green line */}
            <div className="absolute top-20 left-12 w-36 h-48 bg-gray-200 rounded-lg shadow-lg transform -rotate-12 overflow-hidden">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-green-500"></div>
            </div>
            
            {/* Middle document - white */}
            <div className="absolute top-28 left-32 w-36 h-48 bg-white rounded-lg shadow-xl transform rotate-8"></div>
            
            {/* Growth chart card - front */}
            <div className="absolute bottom-16 right-8 w-56 h-36 bg-white rounded-xl shadow-2xl border-4 border-green-500 p-4">
              <div className="flex items-end justify-between h-full gap-0.5">
                <div className="w-full bg-green-400 rounded-t" style={{height: '35%'}}></div>
                <div className="w-full bg-green-400 rounded-t" style={{height: '42%'}}></div>
                <div className="w-full bg-green-500 rounded-t" style={{height: '48%'}}></div>
                <div className="w-full bg-green-500 rounded-t" style={{height: '55%'}}></div>
                <div className="w-full bg-green-600 rounded-t" style={{height: '65%'}}></div>
                <div className="w-full bg-green-600 rounded-t" style={{height: '75%'}}></div>
                <div className="w-full bg-green-700 rounded-t" style={{height: '85%'}}></div>
                <div className="w-full bg-green-700 rounded-t" style={{height: '92%'}}></div>
                <div className="w-full bg-green-800 rounded-t" style={{height: '100%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
