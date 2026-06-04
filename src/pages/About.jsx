import React, { useState } from 'react';
import { Search, MapPin, Percent, Home, FileText, ChevronDown, ChevronUp, Space as SpaceIcon } from 'lucide-react';
import heroBanner from '../assets/hero_banner.png';
import luxuryVilla from '../assets/luxury_villa.png';
import modernApartment from '../assets/modern_apartment.png';
import interiorDesign from '../assets/interior_design.png';

// 24 mock images for the project wall grid
const projectThumbnails = [
  modernApartment, luxuryVilla, heroBanner, interiorDesign,
  luxuryVilla, heroBanner, modernApartment, interiorDesign,
  heroBanner, modernApartment, luxuryVilla, interiorDesign,
  modernApartment, luxuryVilla, heroBanner, interiorDesign,
  luxuryVilla, heroBanner, modernApartment, interiorDesign,
  heroBanner, modernApartment, luxuryVilla, interiorDesign
];

// 12 happy customer mock images (using high-quality family and buyer avatars)
const customers = [
  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80"
];

export default function About() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  return (
    <div className="pt-0">
      
      {/* 1. BLUEPRINT HEADER BANNER */}
      <section className="bg-slate-800 text-white py-14 relative overflow-hidden text-center border-b border-red-500">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBanner} 
            alt="NexaHaven Blueprint Banner" 
            className="w-full h-full object-cover opacity-15 grayscale scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl tracking-wide uppercase text-white drop-shadow-md">
            ABOUT NEXAHAVEN GROUP
          </h1>
        </div>
      </section>

      {/* 2. STORY & ACCORDION (SCREENSHOT 1 DETAILS) */}
      <section id="profile" className="py-16 bg-white text-left select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: About NexaHaven Group */}
            <div className="space-y-6">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-secondary-900 border-b-4 border-red-600 pb-2.5 w-fit">
                About NexaHaven Group
              </h2>
              <div className="space-y-4 text-xs font-semibold text-slate-500 leading-relaxed text-justify">
                <p>
                  NexaHavenGroup, an <span className="text-red-600 font-bold">ISO 9001:2015 Certified Company</span>. NexaHavenGroup.com is the only real estate company in South India which has more than 350+ projects.
                </p>
                <p>
                  With only 1 office, 9 Employees, 1 Builder and 1 Project in 2016, NexaHaven Group expanded its operations to 18 branches, 1200+ employees, 350+ projects in a span of less than 10 years. With more than 12000+ satisfied customers, we have proved to be the best real estate company across Andhra Pradesh, Telangana and Karnataka.
                </p>
                <p>
                  We provide end-to-end solutions in the property buying process including financial services and free of cost services that include showcase of a variety of projects in Andhra Pradesh, Telangana and Karnataka.
                </p>
                <p>
                  NexaHaven Constructions is our Construction wing undertaking projects that include affordable housing projects as well as luxury residences.
                </p>
              </div>
            </div>

            {/* Right Column: Accordion Section */}
            <div id="why-us" className="space-y-4">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-secondary-900 border-b-4 border-red-600 pb-2.5 w-fit">
                Why you should choose us
              </h2>
              
              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                {/* Accordion Header */}
                <button
                  onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                  className="w-full bg-[#5c5c5c] text-white font-display font-bold text-xs py-3 px-5 flex justify-between items-center"
                >
                  <span>We are Real People</span>
                  {isAccordionOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>

                {/* Accordion Content */}
                {isAccordionOpen && (
                  <div className="p-5 text-xs text-slate-500 font-semibold leading-relaxed space-y-4 text-justify bg-slate-50">
                    <p>
                      NEXAHAVEN GROUP is a closely knit family of reliable employees, well-qualified Civil Engineers and experienced corporate professionals who have taken upon themselves to create state-of-the-art infrastructure for developing the prestigious projects.
                    </p>
                    <p>
                      With our expert engineers, architects, financial & loan advisors and dedicated sales team, we have created an atmosphere where customers fall in love with our designs and buy their homes hassle-free.
                    </p>
                    <p>
                      We have a team of top-class architects, engineers and project planning experts who solely focus on quality construction and timely completion of the projects undertaken.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. END TO END SERVICES & INFOGRAPHIC TIMELINE (SCREENSHOT 2 & 3 DETAILS) */}
      <section id="timeline" className="py-16 bg-slate-50 border-y border-slate-100 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          {/* Section Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            {/* Typography */}
            <div className="text-left space-y-2">
              <span className="text-slate-400 font-bold text-sm tracking-wide block uppercase">We provide</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-slate-900 leading-none">
                <span className="text-red-600 block">END to END</span> SERVICES
              </h2>
              <span className="text-lg text-slate-500 font-bold block pt-1">at free of cost.</span>
            </div>

            {/* Illustration Graphic matching logo elements */}
            <div className="flex justify-center items-center gap-6 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <div className="relative">
                {/* SVG planets and spaceships rendering */}
                <svg className="h-20 w-20 text-red-600" viewBox="0 0 100 100" fill="none">
                  <ellipse cx="50" cy="50" rx="35" ry="12" stroke="currentColor" strokeWidth="3" transform="rotate(-20 50 50)" />
                  <circle cx="50" cy="50" r="18" fill="rgba(220, 38, 38, 0.1)" stroke="currentColor" strokeWidth="3" />
                  <polygon points="70,25 75,35 65,33" fill="currentColor" />
                  <circle cx="78" cy="18" r="2" fill="currentColor" />
                  <circle cx="20" cy="30" r="3" fill="currentColor" />
                </svg>
              </div>
              <div className="text-left border-l border-slate-200 pl-6">
                <div className="font-display font-black text-xl text-slate-900 leading-none">
                  Nexa<span className="text-red-600">Haven</span>
                </div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">GROUP</div>
              </div>
            </div>
          </div>

          {/* Dynamic Arc Timeline Loop Infographic */}
          <div className="max-w-5xl mx-auto pt-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative">
              
              {/* Infographic Line connecting (hidden on mobile, shown on desktop) */}
              <div className="absolute top-1/2 left-[10%] right-[10%] h-1 bg-gradient-to-r from-red-500 via-cyan-500 to-red-500 -translate-y-1/2 hidden md:block z-0"></div>

              {/* 1. Search */}
              <div className="flex flex-col items-center gap-3 relative z-10">
                <div className="bg-white hover:bg-red-50 text-red-600 border-4 border-red-500 w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                  <Search className="h-8 w-8" />
                </div>
                <span className="font-display font-extrabold text-sm text-slate-900 tracking-wide">Search</span>
              </div>

              {/* 2. Site Visit */}
              <div className="flex flex-col items-center gap-3 relative z-10">
                <div className="bg-white hover:bg-cyan-50 text-cyan-600 border-4 border-cyan-500 w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                  <MapPin className="h-8 w-8" />
                </div>
                <span className="font-display font-extrabold text-sm text-slate-900 tracking-wide">Site Visit</span>
              </div>

              {/* 3. Loan */}
              <div className="flex flex-col items-center gap-3 relative z-10">
                <div className="bg-white hover:bg-teal-50 text-teal-600 border-4 border-teal-500 w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                  <Percent className="h-8 w-8" />
                </div>
                <span className="font-display font-extrabold text-sm text-slate-900 tracking-wide">Loan</span>
              </div>

              {/* 4. Booking */}
              <div className="flex flex-col items-center gap-3 relative z-10">
                <div className="bg-white hover:bg-yellow-50 text-yellow-600 border-4 border-yellow-500 w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                  <Home className="h-8 w-8" />
                </div>
                <span className="font-display font-extrabold text-sm text-slate-900 tracking-wide">Booking</span>
              </div>

              {/* 5. Registration */}
              <div className="flex flex-col items-center gap-3 relative z-10 col-span-2 md:col-span-1">
                <div className="bg-white hover:bg-red-50 text-red-600 border-4 border-red-500 w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 mx-auto">
                  <FileText className="h-8 w-8" />
                </div>
                <span className="font-display font-extrabold text-sm text-slate-900 tracking-wide block">Registration</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. PROJECT WALL & ADVISORY BOX (SCREENSHOT 3 DETAILS) */}
      <section className="py-0 bg-white border-b border-slate-100 flex flex-col lg:flex-row select-none">
        {/* Left Column: 24 Project Thumbnails Grid */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 grid grid-cols-4 sm:grid-cols-6 gap-2">
          {projectThumbnails.map((img, idx) => (
            <div key={idx} className="aspect-square rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:scale-105 transition-transform duration-200 cursor-pointer">
              <img src={img} alt={`Project layout ${idx}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Right Column: Advisory Sky-Blue Box */}
        <div className="w-full lg:w-1/2 bg-[#2596be] text-white p-8 sm:p-12 flex flex-col justify-center text-left space-y-6">
          <h3 className="font-display font-extrabold text-xl sm:text-2xl leading-snug tracking-wide uppercase">
            NEXAHAVEN.COM IS THE ONLY BEST REAL ESTATE DEVELOPERS COMPANY IN SOUTH INDIA WHICH HAS MORE THAN 350+ PROJECTS.
          </h3>

          <div className="space-y-2">
            <h4 className="font-display font-black text-base uppercase text-yellow-300">
              IF YOU WANT TO BUY ANY PROPERTY
            </h4>
            <p className="text-xs sm:text-sm font-semibold leading-relaxed">
              FLAT, PLOT, DUPLEX, VILLA in and around Visakhapatnam, Bangalore, Hyderabad & Gajuwaka please visit "NEXAHAVEN GROUP" for the best support and suggestions.
            </p>
          </div>

          <div className="space-y-2 pt-2 border-t border-white/20">
            <h4 className="font-display font-black text-base uppercase text-yellow-300">
              BEFORE GOING TO BUY ANY PROPERTY
            </h4>
            <p className="text-xs sm:text-sm font-semibold leading-relaxed">
              Please take our experts advice from more than 1200+ highly Experienced and Qualified Corporate professional employees. Nexahaven.com has no agents.
            </p>
          </div>
        </div>
      </section>

      {/* 5. HAPPY CUSTOMERS GRID (SCREENSHOT 4 & 5 DETAILS) */}
      <section className="py-16 bg-[#f7f7f7] select-none text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-wide uppercase text-slate-900">
            OUR HAPPY CUSTOMERS
          </h2>

          {/* Yellow Banner Grid Wrapper */}
          <div className="bg-[#ffbf00] border-8 border-yellow-400 rounded-3xl p-6 sm:p-10 shadow-lg flex flex-col lg:flex-row gap-8 items-center">
            
            {/* Banner Left Details */}
            <div className="w-full lg:w-1/3 text-left space-y-3">
              <span className="font-display font-extrabold text-sm text-red-700 block uppercase tracking-wider">Our Community</span>
              <h3 className="font-display font-black text-3xl sm:text-5xl text-slate-950 leading-none">
                We have <span className="block text-red-700 mt-2">more than</span> 12,000+
              </h3>
              <span className="text-slate-900 font-extrabold text-xl tracking-tight block">Satisfied Customers</span>
            </div>

            {/* Banner Right: 12 Photograph Grid */}
            <div className="w-full lg:w-2/3 grid grid-cols-3 sm:grid-cols-4 gap-3">
              {customers.map((img, idx) => (
                <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden border-2 border-white shadow-md hover:scale-105 transition-transform duration-200">
                  <img src={img} alt={`Satisfied customer ${idx}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
