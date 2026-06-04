import React, { useState } from 'react';
import { Phone, Mail, Award, Menu, X, ChevronDown, Building, Key, Search, Paintbrush, MapPin, Users, Eye, ShieldCheck, Star } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, setProjectFilter, setActiveServiceTab, setActiveBranchId }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const handleNavClick = (pageId, extra = {}) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
    setOpenDesktopDropdown(null);
    setOpenMobileDropdown(null);
    
    if (pageId === 'projects' && setProjectFilter) {
      setProjectFilter({ city: '', type: extra.filterType || '' });
    }
    if (pageId === 'services' && setActiveServiceTab && extra.serviceTab) {
      setActiveServiceTab(extra.serviceTab);
    }
    if (pageId === 'contact' && setActiveBranchId && extra.branchId !== undefined) {
      setActiveBranchId(extra.branchId);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileDropdown = (key) => {
    setOpenMobileDropdown(prev => prev === key ? null : key);
  };

  // Dropdown menu definitions
  const dropdowns = {
    about: {
      label: 'About Us',
      pageId: 'about',
      items: [
        { label: 'Company Profile', icon: Building, onClick: () => handleNavClick('about') },
        { label: 'Our Vision & Mission', icon: Eye, onClick: () => handleNavClick('about') },
        { label: 'Why Choose Us', icon: ShieldCheck, onClick: () => handleNavClick('about') },
        { label: 'Happy Customers', icon: Star, onClick: () => handleNavClick('about') },
      ]
    },
    projects: {
      label: 'Projects',
      pageId: 'projects',
      items: [
        { label: 'Ongoing Projects', onClick: () => handleNavClick('projects', { filterType: 'Ongoing' }) },
        { label: 'Future Projects', onClick: () => handleNavClick('projects', { filterType: 'Upcoming' }) },
        { label: 'Completed Projects', onClick: () => handleNavClick('projects', { filterType: 'Completed' }) },
      ]
    },
    services: {
      label: 'Services',
      pageId: 'services',
      items: [
        { label: 'Building & Construction', icon: Building, onClick: () => handleNavClick('services', { serviceTab: 'construction' }) },
        { label: 'Home Loan Assistance', icon: Key, onClick: () => handleNavClick('services', { serviceTab: 'loans' }) },
        { label: 'NexaInteriors', icon: Paintbrush, onClick: () => handleNavClick('services', { serviceTab: 'interiors' }) },
        { label: 'Real Estate Advisory', icon: Search, onClick: () => handleNavClick('services', { serviceTab: 'consulting' }) },
      ]
    },
    contact: {
      label: 'Contact Us',
      pageId: 'contact',
      items: [
        { label: 'Corporate Office (Vizag)', icon: MapPin, onClick: () => handleNavClick('contact', { branchId: 1 }) },
        { label: 'Hyderabad Branch', icon: MapPin, onClick: () => handleNavClick('contact', { branchId: 2 }) },
        { label: 'Bengaluru Branch', icon: MapPin, onClick: () => handleNavClick('contact', { branchId: 3 }) },
      ]
    }
  };

  // Reusable desktop dropdown renderer
  const DesktopDropdown = ({ dropdownKey }) => {
    const dd = dropdowns[dropdownKey];
    const isActive = currentPage === dd.pageId;
    const isOpen = openDesktopDropdown === dropdownKey;

    return (
      <div
        className="relative h-full"
        onMouseEnter={() => setOpenDesktopDropdown(dropdownKey)}
        onMouseLeave={() => setOpenDesktopDropdown(null)}
      >
        <button
          onClick={() => handleNavClick(dd.pageId)}
          className={`px-5 h-full font-semibold text-sm flex items-center gap-1.5 transition-all ${
            isActive
              ? 'bg-white text-red-600'
              : 'hover:bg-red-700 text-white'
          }`}
        >
          <span>{dd.label}</span>
          <ChevronDown className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown panel */}
        <div className={`absolute top-14 left-0 w-56 bg-white border border-slate-100 shadow-2xl rounded-b-xl py-2 z-50 text-slate-800 text-left transition-all duration-200 origin-top ${
          isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
        }`}>
          {/* Red accent line at top */}
          <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-red-500 to-yellow-500 rounded-full"></div>
          
          {dd.items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={item.onClick}
                className="w-full px-4 py-2.5 text-xs font-semibold hover:bg-red-50 hover:text-red-600 transition-colors text-left flex items-center gap-3 group"
              >
                {Icon && (
                  <span className="bg-slate-100 group-hover:bg-red-100 text-slate-400 group-hover:text-red-500 p-1.5 rounded-lg transition-colors">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                )}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  // Reusable mobile dropdown/accordion renderer
  const MobileDropdown = ({ dropdownKey }) => {
    const dd = dropdowns[dropdownKey];
    const isActive = currentPage === dd.pageId;
    const isOpen = openMobileDropdown === dropdownKey;

    return (
      <div className={`rounded-xl overflow-hidden transition-all ${isOpen ? 'bg-red-800/40 border border-red-800' : ''}`}>
        <button
          onClick={() => toggleMobileDropdown(dropdownKey)}
          className={`w-full py-3 px-4 rounded-xl font-semibold text-sm text-left flex justify-between items-center transition-all ${
            isActive ? 'bg-white text-red-700' : 'hover:bg-red-800'
          }`}
        >
          <span>{dd.label}</span>
          <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {/* Collapsible sub-menu */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pl-4 pr-2 pb-2 pt-1 flex flex-col gap-0.5">
            {dd.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={item.onClick}
                  className="w-full text-left py-2.5 px-3 text-xs font-medium hover:text-yellow-300 hover:bg-red-800/50 rounded-lg transition-colors flex items-center gap-2.5"
                >
                  {Icon ? (
                    <span className="bg-red-800/60 p-1 rounded-md">
                      <Icon className="h-3 w-3 text-red-200" />
                    </span>
                  ) : (
                    <span className="text-red-300 text-[10px]">•</span>
                  )}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
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
              
              {/* Home (no dropdown) */}
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

              {/* About Us with dropdown */}
              <DesktopDropdown dropdownKey="about" />

              {/* Projects with dropdown */}
              <DesktopDropdown dropdownKey="projects" />

              {/* Services with dropdown */}
              <DesktopDropdown dropdownKey="services" />

              {/* Contact Us with dropdown */}
              <DesktopDropdown dropdownKey="contact" />

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
        <div className="lg:hidden bg-red-700 text-white text-left py-4 px-6 border-t border-red-800 shadow-inner flex flex-col gap-2 max-h-[calc(100vh-112px)] overflow-y-auto">
          {/* Home */}
          <button 
            onClick={() => handleNavClick('home')}
            className={`w-full py-3 px-4 rounded-xl font-semibold text-sm ${currentPage === 'home' ? 'bg-white text-red-700' : 'hover:bg-red-800'}`}
          >
            Home
          </button>

          {/* About Us accordion */}
          <MobileDropdown dropdownKey="about" />

          {/* Projects accordion */}
          <MobileDropdown dropdownKey="projects" />

          {/* Services accordion */}
          <MobileDropdown dropdownKey="services" />

          {/* Contact Us accordion */}
          <MobileDropdown dropdownKey="contact" />

          <div className="mt-4 pt-4 border-t border-red-800 text-center flex flex-col gap-2">
            <span className="text-[10px] text-red-200">ISO 9001:2015 CERTIFIED BUILDER</span>
            <span className="text-[10px] text-red-200">TS / AP / KT RERA COMPLIANT</span>
          </div>
        </div>
      )}
    </header>
  );
}
