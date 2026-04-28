import React from 'react';
import { ArrowRight, Pill, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-blue-950 via-blue-900 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-2 px-4 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold text-sm mb-6 tracking-wider">
              🌿 INNOVATION IN HEALTHCARE
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Committed to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Excellence</span> in Pharmaceutical Care
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
              Cadomack Pharmaceuticals delivers high-quality, effective, and affordable medicines to improve health outcomes and enrich lives globally.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/products"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-emerald-500/40 transition-all flex items-center justify-center group hover:scale-105"
              >
                Our Products <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <Pill className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-4xl font-black text-blue-950 mb-2">10+</h3>
              <p className="text-slate-600 font-semibold">Premium Products</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-4xl font-black text-blue-950 mb-2">100%</h3>
              <p className="text-slate-600 font-semibold">Quality Assured</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-4xl font-black text-blue-950 mb-2">50K+</h3>
              <p className="text-slate-600 font-semibold">Happy Patients</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Partner with Us?</h2>
          <p className="text-lg text-emerald-50 mb-10 max-w-2xl mx-auto">
            Contact us for business inquiries, distribution opportunities, or product information.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-emerald-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
