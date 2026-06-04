import React, { useState } from 'react';
import { X, CheckCircle, ShieldAlert, Phone, Send, Info, Award } from 'lucide-react';

export default function PropertyModal({ project, onClose }) {
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: `Interested in project: ${project?.title}`
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!project) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inquiryForm.name || !inquiryForm.phone) {
      alert("Please fill out your Name and Phone number.");
      return;
    }
    // Simulate API call
    console.log("Inquiry Submitted:", inquiryForm);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInquiryForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-secondary-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      {/* Modal Wrapper */}
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-fade-in-up">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-100 hover:bg-red-500 hover:text-white p-2.5 rounded-full transition-all duration-200 z-10 text-secondary-700"
          aria-label="Close details modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header/Banner */}
        <div className="relative h-72 sm:h-96">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex gap-2 mb-3">
              <span className="bg-primary-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                {project.type}
              </span>
              <span className="bg-white/20 backdrop-blur-sm text-white border border-white/20 text-xs font-bold px-3 py-1.5 rounded-full">
                {project.status}
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-slate-200 text-sm flex items-center gap-1.5">
              <span>{project.location}</span>
            </p>
          </div>
        </div>

        {/* Modal Grid Content */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Details (Left/Center Column) */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-display font-bold text-xl text-secondary-900 mb-3">About the Project</h3>
              <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>

            {/* Specifications Summary */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h4 className="font-display font-bold text-sm text-secondary-900 mb-4 flex items-center gap-2">
                <Info className="h-4 w-4 text-primary-500" />
                <span>Property Specifications</span>
              </h4>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">Price Range</span>
                  <span className="font-semibold text-secondary-900 text-sm">{project.price}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Configuration</span>
                  <span className="font-semibold text-secondary-900 text-sm">{project.bhk} BHK Units</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Super Built-up Area</span>
                  <span className="font-semibold text-secondary-900 text-sm">{project.size}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Vastu / Facing</span>
                  <span className="font-semibold text-secondary-900 text-sm">{project.facing} Facing</span>
                </div>
              </div>
            </div>

            {/* Amenities Section */}
            <div>
              <h3 className="font-display font-bold text-lg text-secondary-900 mb-4">World-Class Amenities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-secondary-700 bg-slate-50 border border-slate-100 p-3 rounded-xl">
                    <CheckCircle className="h-4 w-4 text-primary-500 shrink-0" />
                    <span className="font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RERA Certification Note */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3">
              <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-xs text-amber-900">RERA Approved Project</h4>
                <p className="text-[11px] text-amber-800 leading-relaxed mt-0.5">
                  This development is registered under state real estate regulations. Project registration details, documentation, and titles have been verified.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Form (Right Sidebar Column) */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 h-fit lg:sticky lg:top-6">
            <h3 className="font-display font-bold text-lg text-secondary-900 mb-1">Get Project Details</h3>
            <p className="text-slate-500 text-xs mb-6">Drop your details below and our advisors will send you the brochure and pricing sheets within 2 hours.</p>

            {isSubmitted ? (
              <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                <CheckCircle className="h-10 w-10 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="font-display font-bold text-sm">Inquiry Received!</h4>
                <p className="text-xs text-emerald-700">Thank you for your interest. A sales executive will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="modal-name" className="block text-[11px] font-semibold text-slate-500 mb-1">Full Name *</label>
                  <input
                    id="modal-name"
                    type="text"
                    name="name"
                    value={inquiryForm.name}
                    onChange={handleChange}
                    className="w-full text-sm bg-white border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-[11px] font-semibold text-slate-500 mb-1">Phone Number *</label>
                  <div className="flex gap-2">
                    <span className="bg-slate-200 border border-slate-200 text-slate-700 rounded-xl px-3 py-2.5 text-xs font-semibold flex items-center justify-center">+91</span>
                    <input
                      id="modal-phone"
                      type="tel"
                      name="phone"
                      pattern="[0-9]{10}"
                      value={inquiryForm.phone}
                      onChange={handleChange}
                      className="w-full text-sm bg-white border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="10-digit number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-[11px] font-semibold text-slate-500 mb-1">Email Address</label>
                  <input
                    id="modal-email"
                    type="email"
                    name="email"
                    value={inquiryForm.email}
                    onChange={handleChange}
                    className="w-full text-sm bg-white border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="name@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="modal-msg" className="block text-[11px] font-semibold text-slate-500 mb-1">Message</label>
                  <textarea
                    id="modal-msg"
                    rows="3"
                    name="message"
                    value={inquiryForm.message}
                    onChange={handleChange}
                    className="w-full text-sm bg-white border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold text-xs py-3 px-4 rounded-xl hover-glow transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-primary-500/10"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}

            <div className="mt-6 pt-6 border-t border-slate-200 text-center">
              <p className="text-[10px] text-slate-400 mb-2">Or connect with us instantly</p>
              <a 
                href="tel:+917610666999" 
                className="flex items-center justify-center gap-1.5 text-xs text-primary-500 hover:text-primary-600 font-bold"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Call +91-7610-666-999</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
