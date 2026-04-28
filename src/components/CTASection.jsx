import React from 'react';

export default function CTASection({ scrollToSection }) {
  return (
    <section className="py-20 bg-blue-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Partner with Cadomack Pharmaceuticals</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Looking for a reliable pharmaceutical partner? Contact us for business inquiries, distribution opportunities, or product information.
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-emerald-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
          >
            Contact Us Today
          </button>
        </div>
      </section>
    );
}