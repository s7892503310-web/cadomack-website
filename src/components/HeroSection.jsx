import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ scrollToSection }) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Pharmaceutical background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-emerald-900/80"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold text-sm mb-6 tracking-wider">
              INNOVATION IN HEALTHCARE
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Committed to <span className="text-emerald-400">Excellence</span> in Pharmaceutical Care
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
              Cadomack Pharmaceuticals India Pvt Ltd delivers high-quality, effective, and affordable medicines to improve health outcomes and enrich lives globally.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => scrollToSection('products')}
                className="bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/30 flex items-center justify-center group"
              >
                Our Products <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>
    );
}