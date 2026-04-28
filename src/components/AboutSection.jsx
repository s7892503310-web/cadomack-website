import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Laboratory" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-100 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-50 rounded-full z-0"></div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h4 className="text-emerald-600 font-bold tracking-wider uppercase mb-2">About Cadomack</h4>
              <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-6 leading-tight">
                Pioneering Health <br/> For A Better Tomorrow
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                At Cadomack Pharmaceuticals India Pvt Ltd, we are driven by a singular mission: to make high-quality healthcare accessible to everyone. We specialize in developing and marketing a diverse portfolio of life-saving and life-enhancing medicines.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                With a strong emphasis on formulation development and stringent quality control (WHO-GMP standards), our products range from crucial diabetic care to essential vitamin supplements and pain management solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="text-3xl font-black text-blue-900 mb-1">10+</h4>
                  <p className="text-sm text-slate-500 font-semibold uppercase">Premium Products</p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="text-3xl font-black text-blue-900 mb-1">100%</h4>
                  <p className="text-sm text-slate-500 font-semibold uppercase">Quality Assurance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}