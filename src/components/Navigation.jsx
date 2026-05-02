import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Quality', path: '/quality' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-1">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/cadomack_logo.PNG"
              alt="Cadomack logo"
              className="h-20 w-auto rounded-lg object-contain shadow-lg"
            />
            <div className="flex flex-col">
              {/* <span className="text-xl font-black text-blue-950 leading-none tracking-tight">CADOMACK</span>
              <span className="text-[10px] text-emerald-600 font-semibold tracking-widest uppercase">Pharma</span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-emerald-50 text-emerald-600 border-b-2 border-emerald-600'
                    : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => window.open('https://wa.me/919876543210?text=Hi, I would like to inquire about your products', '_blank')}
            className="hidden md:block bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105"
          >
            Enquire Now
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-800 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-semibold text-sm uppercase transition-all ${
                  isActive(item.path)
                    ? 'bg-emerald-50 text-emerald-600 border-l-4 border-emerald-600'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                window.open('https://wa.me/919876543210?text=Hi, I would like to inquire about your products', '_blank');
                setMobileMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-3 rounded-lg font-bold text-sm mt-4"
            >
              Enquire Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
