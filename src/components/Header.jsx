import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ isScrolled, mobileMenuOpen, setMobileMenuOpen, scrollToSection }) {
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4 md:py-6'} ${mobileMenuOpen ? 'bg-white' : ''}`} style={{ top: isScrolled ? '0' : 'auto' }}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl tracking-tighter">
                C
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-blue-900 leading-none tracking-tight">CADOMACK</span>
                <span className="text-[10px] text-emerald-600 font-semibold tracking-widest uppercase">Pharmaceuticals</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {['Home', 'About', 'Products', 'Quality', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-slate-600 font-semibold hover:text-emerald-600 transition-colors uppercase text-sm tracking-wider"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://wa.me/919876543210?text=Hi, I would like to inquire about your products', '_blank')}
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50"
            >
              Enquire Now
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-800 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 flex flex-col">
            {['Home', 'About', 'Products', 'Quality', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left px-6 py-4 border-b border-slate-50 text-slate-700 font-semibold uppercase text-sm"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </header>
    );
}