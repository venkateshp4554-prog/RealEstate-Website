import React, { useState } from 'react';
import { Building, Key, Award, Search, CheckCircle2, ChevronRight, Phone, Send } from 'lucide-react';
import heroBanner from '../assets/hero_banner.png';
import interiorImage from '../assets/interior_design.png';

export default function Services() {
  const [activeTab, setActiveTab] = useState('construction');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'construction',
    message: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Name and Phone fields are required.");
      return;
    }
    console.log("Service Inquiry:", formData);
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setFormData({ name: '', phone: '', service: 'construction', message: '' });
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const servicesList = [
    {
      id: 'construction',
      title: "Building & Construction",
      desc: "Top-tier structural engineering, concrete masonry, architectural planning, and interior-exterior finishing.",
      icon: Building,
      points: [
        "Architectural Layout and 3D modeling",
        "Soil investigation and robust foundation works",
        "High-grade steel reinforcement (TMT bars)",
        "Qualified supervisors and third-party safety audits",
        "Timely delivery with penal provisions for delays",
        "Premium brand painting and sanitary installations"
      ]
    },
    {
      id: 'loans',
      title: "Home Loan Assistance",
      desc: "End-to-end guidance to secure home loans from nationalized and leading private sector banks at lowest rates.",
      icon: Key,
      points: [
        "Pre-approved projects ensuring direct and fast approvals",
        "Affiliations with SBI, HDFC, ICICI, LIC, and Axis Bank",
        "Absolute guidance on eligibility, CIBIL scoring, and EMI plans",
        "Minimal paperwork with free doorstep service",
        "Single-point liaison with bank officials",
        "No processing fee options for select premium projects"
      ]
    },
    {
      id: 'interiors',
      title: "NexaInteriors (Apple Interiors)",
      desc: "High-end, modern interior designing service tailored to add aesthetics and value to your apartments and villas.",
      icon: Award,
      image: interiorImage,
      points: [
        "Modular kitchens with acrylic finishes & soft-close cabinets",
        "Premium wardrobes and customized TV consoles",
        "Creative false ceiling designs with ambient LED layouts",
        "Space-saving multi-functional custom furniture",
        "Vastu-compliant colors, textures, and wall finishes",
        "Complete installation within 45 days with 5-year warranty"
      ]
    },
    {
      id: 'consulting',
      title: "Real Estate Advisory",
      desc: "Professional guidance on land legalities, document checking, tax benefits, and high-yield real estate investments.",
      icon: Search,
      points: [
        "Comprehensive land title report validation",
        "Link documents and mutation record checking",
        "Guidance on RERA rules, registrations, and stamping",
        "High YOY appreciation analysis for open plots",
        "Free tax benefit advisory (under Section 80C & 24b)",
        "Post-purchase portfolio analysis and resale support"
      ]
    }
  ];

  const currentService = servicesList.find(s => s.id === activeTab);
  const CurrentIcon = currentService.icon;

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* 1. Page Header */}
      <section className="bg-slate-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBanner} 
            alt="Services Banner" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-primary-400 font-display font-bold text-xs uppercase tracking-widest">Our Offerings</span>
          <h1 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white mt-3">
            Premium Real Estate Services
          </h1>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mt-3">
            NexaHaven Group delivers complete, end-to-end assistance throughout your property design, buying, and decoration process.
          </p>
        </div>
      </section>

      {/* 2. Interactive Service tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Tabs Menu Column (Left) */}
          <div className="flex flex-col gap-3">
            {servicesList.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-left font-display font-bold p-5 rounded-2xl flex items-center gap-4 transition-all border cursor-pointer ${
                    activeTab === service.id
                      ? 'bg-primary-500 text-white border-primary-500 shadow-lg shadow-primary-500/10'
                      : 'bg-white text-secondary-800 border-slate-100 hover:bg-slate-100/50'
                  }`}
                >
                  <div className={`p-2 rounded-xl ${activeTab === service.id ? 'bg-white/20 text-white' : 'bg-primary-50 text-primary-500'}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm">{service.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel (Right Detail View) */}
          <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 text-left">
            <div className="flex flex-col lg:flex-row gap-8 justify-between items-start">
              
              <div className="space-y-6 flex-1">
                <div className="flex items-center gap-3">
                  <div className="bg-primary-50 text-primary-500 p-3 rounded-2xl">
                    <CurrentIcon className="h-6 w-6" />
                  </div>
                  <h2 className="font-display font-bold text-2xl text-secondary-900">{currentService.title}</h2>
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed">{currentService.desc}</p>
                
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-sm text-secondary-900 uppercase tracking-wide">Key Features & Inclusions</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {currentService.points.map((point, idx) => (
                      <div key={idx} className="flex gap-2 text-xs text-secondary-700 font-medium">
                        <CheckCircle2 className="h-4.5 w-4.5 text-primary-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {currentService.image && (
                <div className="w-full lg:w-72 h-48 sm:h-64 rounded-2xl overflow-hidden shrink-0 shadow-md">
                  <img src={currentService.image} alt={currentService.title} className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Inquiry Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-secondary-900 rounded-3xl text-white p-8 sm:p-12 relative overflow-hidden shadow-xl border border-white/5">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="font-display font-bold text-2xl sm:text-3xl">Need Professional Help?</h3>
            <p className="text-slate-300 text-xs sm:text-sm">Submit your request below, and our respective departmental heads will contact you within 2 hours.</p>

            {inquirySubmitted ? (
              <div className="bg-primary-500/10 border border-primary-500/30 rounded-2xl p-6 text-center text-primary-400 font-semibold text-sm">
                Request Sent Successfully! We will call you shortly.
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-800">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name *"
                  className="w-full text-sm bg-white rounded-xl px-4 py-3 focus:outline-none border border-transparent focus:border-primary-500"
                  required
                />
                
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}"
                  placeholder="10-Digit Mobile Number *"
                  className="w-full text-sm bg-white rounded-xl px-4 py-3 focus:outline-none border border-transparent focus:border-primary-500"
                  required
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full text-sm bg-white rounded-xl px-4 py-3 focus:outline-none border border-transparent focus:border-primary-500 cursor-pointer col-span-1 sm:col-span-2"
                >
                  <option value="construction">Building & Contracting</option>
                  <option value="loans">Home Loan Support</option>
                  <option value="interiors">NexaInteriors & Layouts</option>
                  <option value="consulting">Real Estate / Legal Consulting</option>
                </select>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Additional request description..."
                  className="w-full text-sm bg-white rounded-xl px-4 py-3 focus:outline-none border border-transparent focus:border-primary-500 resize-none col-span-1 sm:col-span-2"
                ></textarea>

                <button
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-600 text-white font-semibold text-xs py-3 px-6 rounded-xl hover-glow transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md shadow-primary-500/10 col-span-1 sm:col-span-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Request</span>
                </button>
              </form>
            )}

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
              For immediate support, contact our toll-free line:{" "}
              <a href="tel:+917610666999" className="text-primary-400 font-bold hover:underline">
                +91-7610-666-999
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
