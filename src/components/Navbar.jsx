import React, { useState } from 'react';
import { Phone, Mail, Award, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, setProjectFilter }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);

  const handleNavClick = (pageId, filterType = '') => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
    setIsProjectsDropdownOpen(false);
    
    if (pageId === 'projects' && setProjectFilter) {
      setProjectFilter({ city: '', type: filterType });
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md">
      {/* 1. TOP WHITE INFO BAR */}
      <div className="bg-white border-b border-slate-100 py-3 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="flex items-center gap-2">
              {/* Custom shield logo style matching the original HG badge */}
              <div className="relative w-10 h-10 bg-gradient-to-br from-red-600 to-yellow-500 rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow shadow-red-500/20">
                NH
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white"></div>
              </div>
              <div className="text-left leading-none">
                <span className="font-display font-extrabold text-xl tracking-tight text-slate-900 block">
                  NEXAHAVEN <span className="text-red-600">GROUP</span>
                </span>
                <span className="text-[9px] text-slate-400 font-bold block mt-0.5 uppercase tracking-wider">
                  An ISO 9001:2015 Certified Company
                </span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex items-center gap-8">
            {/* Phone */}
            <a href="tel:+917610666999" className="flex items-center gap-3 text-left">
              <div className="bg-red-50 text-red-600 p-2.5 rounded-full">
                <Phone className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold block">Free Line For You</span>
                <span className="text-red-600 font-bold text-sm">(+91)-7610-666-999</span>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:info@nexahaven.com" className="flex items-center gap-3 text-left">
              <div className="bg-red-50 text-red-600 p-2.5 rounded-full">
                <Mail className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold block">Email Us</span>
                <span className="text-red-600 font-semibold text-sm">info@nexahaven.com</span>
              </div>
            </a>
          </div>

          {/* RERA Details Table/Grid */}
          <div className="text-[10px] font-semibold text-slate-500 border-l border-slate-200 pl-6 flex flex-col gap-0.5 text-left">
            <div>
              <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-bold mr-1.5">TS RERA</span>
              <span>A02500000004</span>
            </div>
            <div>
              <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-bold mr-1.5">AP RERA</span>
              <span>A15051800008</span>
            </div>
            <div>
              <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-bold mr-1.5">KT RERA</span>
              <span>AG000546</span>
            </div>
          </div>

        </div>
      </div>

      {/* 2. SOLID RED NAVIGATION BAR */}
      <div className="bg-red-600 text-white select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            
            {/* Mobile Logo & Brand (shows only on mobile) */}
            <div className="flex lg:hidden items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="w-8 h-8 bg-white text-red-600 rounded-lg flex items-center justify-center font-bold text-sm">
                NH
              </div>
              <span className="font-display font-bold text-sm tracking-tight text-white uppercase">
                NexaHaven
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center h-full">
              
              {/* Home */}
              <button 
                onClick={() => handleNavClick('home')}
                className={`px-5 h-full font-semibold text-sm transition-all ${
                  currentPage === 'home' 
                    ? 'bg-white text-red-600' 
                    : 'hover:bg-red-700 text-white'
                }`}
              >
                Home
              </button>

              {/* About Us */}
              <button 
                onClick={() => handleNavClick('about')}
                className={`px-5 h-full font-semibold text-sm transition-all ${
                  currentPage === 'about' 
                    ? 'bg-white text-red-600' 
                    : 'hover:bg-red-700 text-white'
                }`}
              >
                About Us
              </button>

              {/* Projects with Dropdown */}
              <div 
                className="relative h-full"
                onMouseEnter={() => setIsProjectsDropdownOpen(true)}
                onMouseLeave={() => setIsProjectsDropdownOpen(false)}
              >
                <button 
                  onClick={() => handleNavClick('projects')}
                  className={`px-5 h-full font-semibold text-sm flex items-center gap-1 transition-all ${
                    currentPage === 'projects' 
                      ? 'bg-white text-red-600' 
                      : 'hover:bg-red-700 text-white'
                  }`}
                >
                  <span>Projects</span>
                  <ChevronDown className="h-4 w-4 shrink-0" />
                </button>

                {/* Dropdown panel */}
                {isProjectsDropdownOpen && (
                  <div className="absolute top-14 left-0 w-48 bg-white border border-slate-100 shadow-xl rounded-b-xl py-2 z-50 text-slate-800 text-left">
                    <button 
                      onClick={() => handleNavClick('projects', 'Ongoing')}
                      className="w-full px-4 py-2.5 text-xs font-semibold hover:bg-slate-50 transition-colors text-left"
                    >
                      Ongoing Projects
                    </button>
                    <button 
                      onClick={() => handleNavClick('projects', 'Upcoming')}
                      className="w-full px-4 py-2.5 text-xs font-semibold hover:bg-slate-50 transition-colors text-left"
                    >
                      Future Projects
                    </button>
                    <button 
                      onClick={() => handleNavClick('projects', 'Completed')}
                      className="w-full px-4 py-2.5 text-xs font-semibold hover:bg-slate-50 transition-colors text-left"
                    >
                      Completed Projects
                    </button>
                  </div>
                )}
              </div>

              {/* Services */}
              <button 
                onClick={() => handleNavClick('services')}
                className={`px-5 h-full font-semibold text-sm transition-all ${
                  currentPage === 'services' 
                    ? 'bg-white text-red-600' 
                    : 'hover:bg-red-700 text-white'
                }`}
              >
                Services
              </button>

              {/* Contact Us */}
              <button 
                onClick={() => handleNavClick('contact')}
                className={`px-5 h-full font-semibold text-sm transition-all ${
                  currentPage === 'contact' 
                    ? 'bg-white text-red-600' 
                    : 'hover:bg-red-700 text-white'
                }`}
              >
                Contact Us
              </button>

            </div>

            {/* Far Right: Golden ISO Certification Badge */}
            <div className="hidden lg:flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-lg px-3 py-1 text-xs">
              <Award className="h-4 w-4 text-yellow-400" />
              <span className="font-bold text-yellow-300 uppercase text-[10px] tracking-wide">
                ISO 9001:2015 CERTIFIED
              </span>
            </div>

            {/* Mobile Menu Hamburger Toggle */}
            <div className="lg:hidden flex items-center gap-3">
              <a href="tel:+917610666999" className="text-white p-2">
                <Phone className="h-5 w-5" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white focus:outline-none p-2"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 3. MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-red-700 text-white text-left py-4 px-6 border-t border-red-800 shadow-inner flex flex-col gap-2">
          <button 
            onClick={() => handleNavClick('home')}
            className={`w-full py-3 px-4 rounded-xl font-semibold text-sm ${currentPage === 'home' ? 'bg-white text-red-700' : 'hover:bg-red-800'}`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('about')}
            className={`w-full py-3 px-4 rounded-xl font-semibold text-sm ${currentPage === 'about' ? 'bg-white text-red-700' : 'hover:bg-red-800'}`}
          >
            About Us
          </button>
          
          {/* Projects expander in mobile */}
          <div className="border border-red-800 rounded-xl p-2 bg-red-800/30">
            <button 
              onClick={() => handleNavClick('projects')}
              className="w-full py-2 px-4 rounded-lg font-semibold text-sm text-left flex justify-between items-center"
            >
              <span>Projects Catalog</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="pl-4 pt-1 flex flex-col gap-1 text-xs">
              <button onClick={() => handleNavClick('projects', 'Ongoing')} className="w-full text-left py-2 hover:text-yellow-300">
                • Ongoing Projects
              </button>
              <button onClick={() => handleNavClick('projects', 'Upcoming')} className="w-full text-left py-2 hover:text-yellow-300">
                • Future Projects
              </button>
              <button onClick={() => handleNavClick('projects', 'Completed')} className="w-full text-left py-2 hover:text-yellow-300">
                • Completed Projects
              </button>
            </div>
          </div>

          <button 
            onClick={() => handleNavClick('services')}
            className={`w-full py-3 px-4 rounded-xl font-semibold text-sm ${currentPage === 'services' ? 'bg-white text-red-700' : 'hover:bg-red-800'}`}
          >
            Services
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className={`w-full py-3 px-4 rounded-xl font-semibold text-sm ${currentPage === 'contact' ? 'bg-white text-red-700' : 'hover:bg-red-800'}`}
          >
            Contact Us
          </button>

          <div className="mt-4 pt-4 border-t border-red-800 text-center flex flex-col gap-2">
            <span className="text-[10px] text-red-200">ISO 9001:2015 CERTIFIED BUILDER</span>
            <span className="text-[10px] text-red-200">TS / AP / KT RERA COMPLIANT</span>
          </div>
        </div>
      )}
    </header>
  );
}
