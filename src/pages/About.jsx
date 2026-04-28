import React from 'react';
import { CheckCircle2, Award, Microscope } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-950 to-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-black mb-4">About Cadomack</h1>
          <p className="text-xl text-blue-100 max-w-2xl">Leading the pharmaceutical industry with innovation, quality, and commitment to healthcare excellence</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="rounded-2xl shadow-2xl bg-gradient-to-br from-blue-100 via-emerald-100 to-teal-100 p-12 h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-300 rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4">🔬</div>
                  <p className="text-xl font-bold text-blue-950">Advanced Pharmaceutical Laboratory</p>
                  <p className="text-slate-600 mt-2">WHO-GMP Certified Facilities</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-black text-blue-950 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Cadomack Pharmaceuticals India Pvt Ltd, we are driven by a singular mission: to make high-quality healthcare accessible to everyone. We specialize in developing and marketing a diverse portfolio of life-saving and life-enhancing medicines.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                With a strong emphasis on formulation development and stringent quality control (WHO-GMP standards), our products range from crucial diabetic care to essential vitamin supplements and pain management solutions.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-200">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-blue-950 mb-3">Quality First</h3>
              <p className="text-slate-600">Every product undergoes rigorous testing to ensure maximum efficacy, safety, and reliability for patient care.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-200">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-blue-950 mb-3">Global Standards</h3>
              <p className="text-slate-600">WHO-GMP certified facilities and international compliance ensure our products meet global healthcare standards.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200">
              <Microscope className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-blue-950 mb-3">Innovation</h3>
              <p className="text-slate-600">Continuous research and development drive our commitment to creating better medicines for tomorrow.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
