import React from 'react';
import { ArrowRight, Pill, TrendingUp, Users, ShieldCheck, Package, Truck, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products.jsx';

const categories = [
  { icon: Package, title: 'Medicine', description: 'Prescription & OTC products' },
  { icon: HeartPulse, title: 'Diabetic Care', description: 'Specialized diabetes support' },
  { icon: ShieldCheck, title: 'Quality Control', description: 'Regulated manufacturing' },
  { icon: Truck, title: 'Fast Delivery', description: 'Reliable distribution network' },
];

const therapeuticSegments = [
  { title: 'Diabetes Care', slug: 'diabetes-care' },
  { title: 'General Medicine', slug: 'general-medicine' },
  { title: 'Antibiotics', slug: 'antibiotics' },
  { title: 'Gynecology', slug: 'gynecology' },
];

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-blue-950 via-blue-900 to-emerald-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="max-w-2xl">
              <span className="inline-block py-2 px-4 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold text-sm mb-6 tracking-wider">
                🌿 Trusted Pharma Manufacturer
              </span>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-tight mb-6">
                Better Healthcare Products, Delivered with Care
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
                Cadomack Pharmaceuticals builds powerful therapeutic solutions across diabetes, cardiovascular, nutrition and wellness with world-class manufacturing, safety and customer support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products#product-view"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/40"
                >
                  View Products <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white/20"
                >
                  About Cadomack
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2.5rem] bg-white/5 ring-1 ring-white/10 p-6 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[2rem] bg-white/95 overflow-hidden shadow-xl">
                  <img
                    src="/cadomack_logo.PNG"
                    alt="Featured product"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-950/90 p-5 text-white shadow-xl">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Trusted Since</p>
                    <p className="text-3xl font-black mt-3">2023</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/90 p-5 text-white shadow-xl">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Active in</p>
                    <p className="text-3xl font-black mt-3">India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Therapeutic Segments */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-blue-950 mb-4">
        Therapeutic Segments We Serve
      </h2>
      <p className="text-slate-600 max-w-2xl mx-auto">
        We develop targeted pharmaceutical solutions across key healthcare areas.
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-6">
      {therapeuticSegments.map((item) => (
        <Link
          key={item.slug}
          to={`/products/${item.slug}#product-view`}
          className="block bg-slate-50 p-6 rounded-2xl text-center shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <h3 className="font-bold text-lg text-blue-950 mb-2">{item.title}</h3>
          <p className="text-sm text-slate-500">View our {item.title.toLowerCase()} portfolio.</p>
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* Explore Categories */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12">
            <div className="max-w-2xl">
              <p className="text-emerald-600 font-semibold uppercase tracking-[0.3em] mb-2">Explore Categories</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950">
                Healthcare products designed for every treatment need.
              </h2>
            </div>
            <Link
              to="/products#product-view"
              className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700"
            >
              See All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {categories.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[2rem] bg-white p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-3xl bg-emerald-500/10 text-emerald-600 mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 mb-3">{item.title}</h3>
                  <p className="text-slate-600 mb-4">{item.description}</p>
                  <p className="text-sm text-slate-400">Trusted solutions for clinics, pharmacies and hospitals.</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold uppercase tracking-[0.3em] text-sm">
                <ShieldCheck className="w-4 h-4" /> Quality & Trust
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 leading-tight">
                Your partner for high-quality pharmaceutical manufacturing and distribution.
              </h2>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                We deliver safety-backed formulations through GMP-certified processes, 24/7 customer support, and a dependable supply chain for hospitals, clinics and pharmacies.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {categories.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-3xl bg-white p-6 shadow-lg border border-slate-100">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-950 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Certifications */}
<section className="py-20 bg-slate-100">
  <div className="container mx-auto px-4 md:px-6 text-center">
    <h2 className="text-4xl font-extrabold text-blue-950 mb-6">
      Quality & Certifications
    </h2>
    <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
      Our products are manufactured under strict regulatory standards ensuring safety, efficacy and reliability.
    </p>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        "WHO-GMP Certified",
        "ISO 9001:2015",
        "Quality Assured Manufacturing"
      ].map((cert) => (
        <div key={cert} className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-bold text-blue-950">{cert}</h3>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Deal Hot of the Month */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h4 className="text-emerald-600 font-bold tracking-wider uppercase mb-2">Deal Hot of the Month</h4>
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-4">Featured Medicines and Care Packages</h2>
            <p className="text-slate-600 text-lg">Explore our most trusted products, carefully curated for better outcomes and affordability.</p>
          </div>

{/* Healthcare Solutions */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-blue-950">
        Healthcare Solutions
      </h2>
      <p className="text-slate-600">
        Designed for real medical needs across patient conditions.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          title: "Diabetes Management",
          desc: "Advanced combination therapies for better glycemic control"
        },
        {
          title: "Pain & Inflammation",
          desc: "Effective relief for acute and chronic pain conditions"
        },
        {
          title: "Bone & Nutrition",
          desc: "Support for bone strength and nutritional health"
        }
      ].map((item) => (
        <div key={item.title} className="bg-slate-50 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-bold text-blue-950 mb-2">{item.title}</h3>
          <p className="text-slate-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group rounded-[2rem] overflow-hidden border border-slate-200 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative h-72 overflow-hidden bg-slate-100">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4">
                    <p className="text-sm text-emerald-300 uppercase tracking-[0.2em]">Hot Pick</p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-extrabold text-blue-950 mb-3">{product.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{product.description}</p>
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Composition</p>
                    <p className="text-slate-700 leading-relaxed">{product.composition}</p>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-emerald-600 font-bold text-xl"></span>
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700"
                    >
                      View Details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
      {/* Distributor Section */}
<section className="py-20 bg-blue-950 text-white">
  <div className="container mx-auto px-4 md:px-6 text-center">
    <h2 className="text-4xl font-extrabold mb-4">
      Partner With Cadomack
    </h2>
    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
      Join our growing network of distributors and healthcare professionals.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link
        to="/contact"
        className="bg-emerald-500 px-8 py-4 rounded-full font-bold hover:bg-emerald-600"
      >
        Become Distributor
      </Link>

      <Link
        to="/products"
        className="border border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-950"
      >
        View Catalogue
      </Link>
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
