import React from 'react';
import { Pill, ChevronRight } from 'lucide-react';
import { products } from '../data/products.jsx';

export default function ProductsSection() {
  return (
      <section id="products" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-emerald-600 font-bold tracking-wider uppercase mb-2">Our Portfolio</h4>
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-6">Explore Our Products</h2>
            <p className="text-slate-600 text-lg">A comprehensive range of therapeutic solutions spanning across anti-diabetics, vitamins, analgesics, and cardiovascular care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300">
                
                {/* Visual Header / Package Placeholder */}
                <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${product.color} p-6 flex items-center justify-center`}>
                   <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                   
                   {/* Abstract Pill/Box Graphic */}
                   <div className="relative z-10 w-3/4 h-24 bg-white/95 rounded-xl shadow-lg flex items-center px-4 transform group-hover:scale-105 transition-transform duration-500">
                      <div className={`w-8 h-8 rounded-full ${product.bgColor} flex items-center justify-center mr-3 shrink-0`}>
                        <Pill className={`w-4 h-4 ${product.textColor}`} />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-slate-800 leading-tight text-lg truncate w-full">{product.name}</h3>
                        <p className="text-xs font-semibold text-slate-500">{product.type}</p>
                      </div>
                   </div>
                </div>

                {/* Product Info */}
                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-4 flex items-center justify-between">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${product.bgColor} ${product.textColor}`}>
                      {product.type}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded">
                      {product.pack}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-extrabold text-blue-950 mb-3 group-hover:text-emerald-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="mb-6 flex-grow">
                    <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-1">Composition:</p>
                    <p className="text-slate-700 leading-snug font-medium">
                      {product.composition}
                    </p>
                  </div>
                  
                  <button className="mt-auto w-full flex items-center justify-center space-x-2 py-3 rounded-xl border-2 border-slate-100 font-bold text-slate-600 group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      );
}