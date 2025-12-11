import React, { useState } from 'react';
import { Logos, Icons } from '../constants';
import { NavItem } from '../types';
import hawkLogo from '../Images/Logo.jpg';
import redHatLogo from '../Images/RedHatLogo.png';

const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: "HawkStack's Approach", href: '#' },
  { label: 'Red Hat Services', href: '#' },
  { label: 'RHCSA Certification', href: '#' },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#030305]/80 border-b border-white/5 h-20 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logos */}
        <div className="flex items-center gap-6 relative z-50">
          <Logos.HawkStack />
          <div className="h-6 w-px bg-white/10 hidden sm:block"></div>
          <div className="hidden sm:flex items-center gap-2">
            <img src={redHatLogo} alt="Red Hat" className="h-8 w-auto rounded-lg" />
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-6 py-2.5 rounded-full border border-white/10 text-sm font-medium text-white hover:bg-white/5 transition-all tracking-wide">
            Contact
          </button>
          <button className="px-6 py-2.5 rounded-full bg-[#4361ee] text-white text-sm font-semibold hover:bg-[#3a56d4] hover:shadow-[0_0_20px_rgba(67,97,238,0.4)] transition-all tracking-wide">
            Talk to Learning Team
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-4 h-0.5 bg-white rounded-full transition-all duration-300 ml-auto ${isMobileMenuOpen ? 'opacity-0' : 'group-hover:w-6'}`} />
          <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#030305] z-40 transition-all duration-500 lg:hidden flex flex-col pt-24 px-6 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'}`}>
        <div className="flex flex-col gap-6">
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              className="text-2xl font-medium text-gray-300 hover:text-white py-2 border-b border-white/5"
              style={{ transitionDelay: `${idx * 50} ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <button className="w-full py-4 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-all">
            Contact
          </button>
          <button className="w-full py-4 rounded-xl bg-[#4361ee] text-white font-bold shadow-lg shadow-blue-600/20">
            Talk to Learning Team
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

