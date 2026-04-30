import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi, my name is ${formData.name}. ${formData.message}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-950 to-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-black mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl">We're here to help. Get in touch with our team today</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-10 rounded-2xl border border-slate-200">
              <h2 className="text-3xl font-black text-blue-950 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                    placeholder="Product Inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-4 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-black text-blue-950 mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-950 mb-2">Corporate Office</h3>
                    <p className="text-slate-600 leading-relaxed">
                      #697, 5th Cross, DR Rajkumar Road,<br />
                      Mysore - 570028, Karnataka, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-950 mb-2">Phone Line</h3>
                    <p className="text-slate-600 leading-relaxed">
                      <a href="tel:+919876543210" className="hover:text-emerald-600 transition-colors">+91 98453 02211</a><br />
                      <a href="tel:+918012345678" className="hover:text-emerald-600 transition-colors">+91 98453 02277</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-950 mb-2">Email Support</h3>
                    <p className="text-slate-600 leading-relaxed">
                      <a href="mailto:info@cadomack.in" className="hover:text-emerald-600 transition-colors">cadomackpharma@gmail.com</a><br />
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <button
                onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                className="mt-8 w-full bg-green-500 text-white font-bold py-4 rounded-lg hover:bg-green-600 transition-all flex items-center justify-center gap-2"
              >
                💬 Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
