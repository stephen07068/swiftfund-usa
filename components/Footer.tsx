'use client';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="#16a34a"/>
              </svg>
              <h3 className="text-xl font-bold">
                <span className="text-white">SwiftFund</span>
                <span className="text-green-400"> USA</span>
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering American dreams through secure, efficient, and transparent financial technology.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">Personal Loans</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Business Funding</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Line of Credit</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Consolidation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-green-400 transition-colors">
                  About Us
                </button>
              </li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Legal Disclaimers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 SwiftFund USA. All Rights Reserved. Member FDIC. Equal Housing Lender.</p>
        </div>
      </div>
    </footer>
  );
}
