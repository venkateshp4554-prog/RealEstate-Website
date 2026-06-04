import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, HelpCircle, ShieldCheck } from 'lucide-react';
import heroBanner from '../assets/hero_banner.png';

const offices = [
  {
    id: 1,
    city: "Visakhapatnam (Corporate Office)",
    address: "Door No. 48-14-11, 4th Floor, MVP Double Road, MVP Colony, Visakhapatnam - 530017, Andhra Pradesh",
    phone: "+91-7610-666-999",
    email: "vizag@nexahaven.com",
    map: "https://maps.google.com/?q=MVP+Colony+Visakhapatnam"
  },
  {
    id: 2,
    city: "Hyderabad Branch Office",
    address: "Flat No. 102, Cyber Heights, Gachibowli High Road, Behind IT Park, Gachibowli, Hyderabad - 500032, Telangana",
    phone: "+91-7610-666-999",
    email: "hyd@nexahaven.com",
    map: "https://maps.google.com/?q=Gachibowli+Hyderabad"
  },
  {
    id: 3,
    city: "Bengaluru Branch Office",
    address: "No. 12, 1st Cross, HSR Layout, Sector 6, Outer Ring Road, Near Silk Board, Bengaluru - 560102, Karnataka",
    phone: "+91-7610-666-999",
    email: "blr@nexahaven.com",
    map: "https://maps.google.com/?q=HSR+Layout+Bengaluru"
  }
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Visakhapatnam',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Name and Phone number are required.");
      return;
    }
    console.log("Contact Form Submission:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', city: 'Visakhapatnam', message: '' });
    }, 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* 1. Page Header */}
      <section className="bg-slate-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBanner} 
            alt="Contact Banner" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-primary-400 font-display font-bold text-xs uppercase tracking-widest">Get In Touch</span>
          <h1 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white mt-3">
            Contact NexaHaven
          </h1>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mt-3">
            Have questions? Our team of real estate advisors is here to support you 24/7. Reach out through form or phone.
          </p>
        </div>
      </section>

      {/* 2. Contact Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start text-left">
          
          {/* Contact Details (Left: 2 Cols) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-secondary-900">Direct Support</h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Connect with our centralized helpline or drop us an email. We provide dedicated sales executives for guided site visits.
              </p>
            </div>

            {/* Helpline cards */}
            <div className="space-y-4">
              <a href="tel:+917610666999" className="flex items-center gap-4 bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-primary-500/20 transition-all group">
                <div className="bg-primary-500 text-white p-3 rounded-xl group-hover:scale-115 transition-transform">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider block">Toll-Free Helpline</span>
                  <span className="text-secondary-900 font-bold text-base">+91-7610-666-999</span>
                </div>
              </a>

              <a href="mailto:info@nexahaven.com" className="flex items-center gap-4 bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-primary-500/20 transition-all group">
                <div className="bg-slate-800 text-slate-300 p-3 rounded-xl group-hover:scale-115 transition-transform">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider block">Corporate Email</span>
                  <span className="text-secondary-900 font-semibold text-sm">info@nexahaven.com</span>
                </div>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="bg-primary-50 border border-primary-100 rounded-3xl p-6 space-y-4">
              <h3 className="font-display font-bold text-sm text-primary-800 flex items-center gap-1.5">
                <ShieldCheck className="h-4.5 w-4.5 text-primary-500" />
                <span>NexaHaven Promise</span>
              </h3>
              <ul className="space-y-2 text-xs text-primary-950 font-medium">
                <li className="flex gap-2"><span>✓</span> <span>Free guided site visits in air-conditioned vehicles.</span></li>
                <li className="flex gap-2"><span>✓</span> <span>Zero pressure, transparent pricing policy.</span></li>
                <li className="flex gap-2"><span>✓</span> <span>Complete RERA registration copy provided before booking.</span></li>
              </ul>
            </div>
          </div>

          {/* Contact Form Panel (Right: 3 Cols) */}
          <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8">
            <h3 className="font-display font-bold text-xl text-secondary-900 mb-1">Send a Message</h3>
            <p className="text-slate-500 text-xs mb-6">Fill in the fields below and an advisor will write back within 1 hour.</p>

            {submitted ? (
              <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-2xl p-8 text-center space-y-3">
                <ShieldCheck className="h-12 w-12 text-emerald-600 mx-auto" />
                <h4 className="font-display font-bold text-base">Inquiry Submitted!</h4>
                <p className="text-xs text-emerald-700">Thank you. Your message has been routed to our corporate sales director.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-[11px] font-semibold text-slate-500 mb-1">Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-primary-500 focus:bg-white transition-colors"
                      placeholder="Enter name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-[11px] font-semibold text-slate-500 mb-1">Phone Number *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-primary-500 focus:bg-white transition-colors"
                      placeholder="10-digit number"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] font-semibold text-slate-500 mb-1">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-primary-500 focus:bg-white transition-colors"
                      placeholder="name@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-city" className="block text-[11px] font-semibold text-slate-500 mb-1">Preferred City</label>
                    <select
                      id="contact-city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-primary-500 focus:bg-white transition-colors cursor-pointer"
                    >
                      <option value="Visakhapatnam">Visakhapatnam</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Bengaluru">Bengaluru</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-msg" className="block text-[11px] font-semibold text-slate-500 mb-1">Inquiry Message</label>
                  <textarea
                    id="contact-msg"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-primary-500 focus:bg-white transition-colors resize-none"
                    placeholder="Tell us about the property configurations you are looking for (e.g. 3 BHK villa in Visakhapatnam)..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold text-xs py-3.5 px-4 rounded-xl hover-glow transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-primary-500/10"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 3. Branch Offices Directory Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="font-display font-bold text-2xl text-secondary-900 text-left mb-8">Branch Locations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {offices.map((office) => (
            <div key={office.id} className="bg-white rounded-3xl border border-slate-100 p-6 flex flex-col justify-between hover-glow shadow-sm hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="bg-slate-50 text-primary-500 p-3 rounded-2xl w-fit">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-secondary-900 leading-snug">{office.city}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{office.address}</p>
                <div className="text-xs text-secondary-700 font-semibold space-y-1 pt-2">
                  <div className="flex gap-2">
                    <span className="text-slate-400">Phone:</span>
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-400">Email:</span>
                    <a href={`mailto:${office.email}`} className="text-primary-500 hover:underline">{office.email}</a>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <a 
                  href={office.map} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-slate-50 hover:bg-primary-50 text-secondary-800 hover:text-primary-500 border border-slate-100 hover:border-primary-100 font-semibold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5"
                >
                  <HelpCircle className="h-4 w-4" />
                  <span>View on Google Maps</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
