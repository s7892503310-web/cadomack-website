import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products.jsx';
import { Star, ShoppingCart } from 'lucide-react';

const slugify = (value) =>
  value?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const titleize = (slug) =>
  slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export default function Products() {
  const { category } = useParams();
  const activeCategorySlug = category ? category : 'all';

  const categories = useMemo(() => {
    const unique = [...new Set(products.map((product) => slugify(product.category)))].filter(Boolean);
    return ['all', ...unique];
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategorySlug === 'all') return products;
    return products.filter((product) => slugify(product.category) === activeCategorySlug);
  }, [activeCategorySlug]);

  const pageTitle = activeCategorySlug === 'all' ? 'Our Products' : titleize(activeCategorySlug);
  const description =
    activeCategorySlug === 'all'
      ? 'A diverse portfolio of high-quality medicines for better healthcare.'
      : `Products from our ${titleize(activeCategorySlug)} segment.`;

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-black mb-4">{pageTitle}</h1>
          <p className="text-xl text-emerald-100 max-w-2xl">{description}</p>
        </div>
      </section>

      {/* Category Filters */}
      <section id="product-view" className="py-8 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((categorySlug) => (
              <Link
                key={categorySlug}
                to={categorySlug === 'all' ? '/products' : `/products/${categorySlug}`}
                className={`inline-flex items-center rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                  categorySlug === activeCategorySlug
                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-700'
                    : 'border-slate-300 bg-white text-slate-600 hover:border-emerald-500 hover:text-emerald-700'
                }`}
              >
                {categorySlug === 'all' ? 'All' : titleize(categorySlug)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          {filteredProducts.length === 0 ? (
            <div className="rounded-3xl bg-slate-50 p-10 text-center shadow">
              <h2 className="text-3xl font-bold text-blue-950 mb-3">No products found</h2>
              <p className="text-slate-600">We could not find any products for this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, idx) => (
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
                    <div className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {product.category}
                    </div>
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
          )}
        </div>
      </section>
    </div>
  );
}
