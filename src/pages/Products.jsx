import React from 'react';
import { products } from '../data/products.jsx';
import { Star, ShoppingCart } from 'lucide-react';

export default function Products() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-black mb-4">Our Products</h1>
          <p className="text-xl text-emerald-100 max-w-2xl">A diverse portfolio of high-quality medicines for better healthcare</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
              <div className="h-48 bg-gradient-to-br from-blue-50 to-emerald-50 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:to-emerald-100 transition-all overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

                {/* Product Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-950 mb-2">{product.name}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{product.description}</p>

                  {/* Uses */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-slate-600 mb-2">Key Uses:</p>
                    <ul className="space-y-1">
                      {product.uses.map((use, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start">
                          <Star className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                          {use}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => window.open('https://wa.me/919876543210?text=I am interested in ' + product.name, '_blank')}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
