import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Quality Policy', path: '/quality' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Footer({ scrollToSection }) {
  return (
    <footer className="bg-blue-950 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/cadomack_logo.PNG"
                alt="Cadomack logo"
                className="h-20 w-auto rounded-lg object-contain shadow-lg"
              />
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Committed to delivering high-quality, effective, and affordable pharmaceutical products to improve healthcare outcomes.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-emerald-400 transition-colors flex items-center"
                  >
                    <ChevronRight className="w-3 h-3 mr-2" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-emerald-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" /> Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" /> Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" /> Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {2025} Enlivo Global Tech Solutions Pvt Ltd. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed for Healthcare Excellence</p>
        </div>
      </div>
    </footer>
  );
}