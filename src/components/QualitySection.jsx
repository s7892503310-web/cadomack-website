import React from 'react';
import { features } from '../data/features.jsx';

export default function QualitySection() {
  return (
    <section id="quality" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-emerald-600 font-bold tracking-wider uppercase mb-2">Why Choose Us</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4">Uncompromising Quality Standards</h2>
            <p className="text-slate-600">We believe that quality is not just a parameter, but the very foundation of our existence in the pharmaceutical industry.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
                <div className="bg-emerald-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}