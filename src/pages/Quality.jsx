import React from 'react';
import { features } from '../data/features.jsx';
import { CheckCircle } from 'lucide-react';

export default function Quality() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-950 to-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-black mb-4">Quality Standards</h1>
          <p className="text-xl text-blue-100 max-w-2xl">Uncompromising commitment to excellence in every product</p>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-20">
            <h2 className="text-4xl font-black text-blue-950 mb-6">Our Quality Policy</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed max-w-3xl">
              We believe that quality is not just a parameter, but the very foundation of our existence in the pharmaceutical industry. Every product is manufactured under strict WHO-GMP guidelines with multiple quality checkpoints.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-950 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-12 rounded-2xl border border-emerald-200">
            <h3 className="text-3xl font-black text-blue-950 mb-8">Our Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'WHO-GMP Certified Manufacturing',
                'ISO 9001:2015 Quality Management',
                'FSSAI Approved Facilities',
                'Strict Quality Control Protocols'
              ].map((cert, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-lg font-semibold text-slate-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
