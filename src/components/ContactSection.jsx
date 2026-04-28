import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50">
            <h3 className="text-2xl font-extrabold text-blue-950 mb-6">Send us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" placeholder="Product Inquiry" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-950 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center">
            <h4 className="text-emerald-600 font-bold tracking-wider uppercase mb-2">Get In Touch</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-8">We are here to help you</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-emerald-100 p-4 rounded-full mr-6">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-950 mb-1">Corporate Office</h4>
                  <p className="text-slate-600 leading-relaxed">
                    #697, 5th Cross, DR Rajkumar Road,<br />
                    Mysore - 570028, Karnataka, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-4 rounded-full mr-6">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-950 mb-1">Phone Line</h4>
                  <p className="text-slate-600 leading-relaxed">
                    +91 98765 43210<br />
                    +91 80 1234 5678 (Landline)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-fuchsia-100 p-4 rounded-full mr-6">
                  <Mail className="w-6 h-6 text-fuchsia-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-950 mb-1">Email Support</h4>
                  <p className="text-slate-600 leading-relaxed">
                    info@cadomack.in<br />
                    sales@cadomack.in
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}