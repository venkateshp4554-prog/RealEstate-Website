import React, { useState, useEffect } from 'react';
import { projects } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import heroBanner from '../assets/hero_banner.png';
import interiorImage from '../assets/interior_design.png';
import { Search, ShieldCheck, Star, Users, MapPin, Building, Key, Award, ChevronLeft, ChevronRight, BookOpen, Quote, ArrowRight } from 'lucide-react';

const stats = [
  { id: 1, count: "12,000+", label: "Happy Families", icon: Users },
  { id: 2, count: "350+", label: "Projects Completed", icon: Building },
  { id: 3, count: "18+", label: "Branches in South India", icon: MapPin },
  { id: 4, count: "1,200+", label: "Expert Advisors & Engineers", icon: Award },
];

const testimonials = [
  {
    id: 1,
    name: "Dr. Srinivas Rao",
    role: "Aura Royal Villas Resident",
    rating: 5,
    comment: "Buying a villa with NexaHaven Group was a dream come true. The process was completely transparent, there was zero brokerage, and their advisory team guided me through home loan approvals seamlessly. Excellent construction quality!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Meera & Rajesh Krishnan",
    role: "Nexa Heights Residents",
    rating: 5,
    comment: "The floor plans are very well designed with great Vastu compliance. The amenities like the pool, gym, and kids play area are premium and well-maintained. The customer service support is always responsive.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Kiran Kumar",
    role: "Nexa Valley Plots Investor",
    rating: 5,
    comment: "I purchased two plots in Devenahalli through NexaHaven. The documentation was crystal clear, RERA details were in order, and the project layout development was completed exactly on schedule. The value has already appreciated!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  }
];

const blogs = [
  {
    id: 1,
    title: "Understanding RERA Rules in South India: A Buyer's Guide",
    excerpt: "Learn how RERA compliance protects home buyers and what details you should check before investing in a real estate project.",
    date: "June 2, 2026",
    readTime: "5 min read",
    tag: "Real Estate Guide",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "10 Luxury Living Room Interior Trends for 2026",
    excerpt: "Explore the latest interior design insights from our team at NexaInteriors, focusing on minimalist layout and ambient warm lighting.",
    date: "May 28, 2026",
    readTime: "4 min read",
    tag: "Interior Design",
    image: interiorImage
  },
  {
    id: 3,
    title: "Why Plots in North Bengaluru are the Best Investment Right Now",
    excerpt: "An in-depth study of market appreciation trends, upcoming aerospace parks, and infrastructure projects driving Devenahalli real estate.",
    date: "May 15, 2026",
    readTime: "6 min read",
    tag: "Investment Analysis",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80"
  }
];

export default function Home({ onViewDetails, setCurrentPage, setProjectFilter }) {
  const [filterCity, setFilterCity] = useState('');
  const [filterType, setFilterType] = useState('');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setProjectFilter({ city: filterCity, type: filterType });
    setCurrentPage('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceType) => {
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-slate-950">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBanner} 
            alt="Hero Banner Real Estate" 
            className="w-full h-full object-cover object-center opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-950 via-secondary-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-950 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-3 space-y-6 text-left">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-400 font-display text-xs font-bold border border-primary-500/30 uppercase tracking-widest">
                <ShieldCheck className="h-4 w-4 text-primary-400" />
                <span>100% Verified RERA Projects</span>
              </span>
              <h1 className="font-display font-bold text-4xl sm:text-6xl tracking-tight text-white leading-tight">
                Your Trust is Our <span className="text-primary-500 block sm:inline">Foundation</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                NexaHaven Group brings you premium villas, high-rise apartments, and open plots across Hyderabad, Visakhapatnam, and Bengaluru. Zero brokerage, lifetime support.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={() => { setCurrentPage('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3.5 rounded-full hover-glow transition-all"
                >
                  Explore Projects
                </button>
                <button 
                  onClick={() => { setCurrentPage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 font-semibold px-8 py-3.5 rounded-full transition-all"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Hero Right: Search Filter Panel */}
            <div className="lg:col-span-2">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 text-slate-800">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-secondary-900 mb-2">Find Your Haven</h3>
                <p className="text-slate-500 text-xs mb-6">Filter through our catalog of verified real estate properties.</p>
                
                <form onSubmit={handleSearch} className="space-y-4">
                  <div>
                    <label htmlFor="hero-city" className="block text-xs font-semibold text-slate-500 mb-1.5">Select City</label>
                    <select
                      id="hero-city"
                      value={filterCity}
                      onChange={(e) => setFilterCity(e.target.value)}
                      className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors cursor-pointer"
                    >
                      <option value="">All Cities</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Visakhapatnam">Visakhapatnam</option>
                      <option value="Bengaluru">Bengaluru</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="hero-type" className="block text-xs font-semibold text-slate-500 mb-1.5">Property Type</label>
                    <select
                      id="hero-type"
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value)}
                      className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors cursor-pointer"
                    >
                      <option value="">All Types</option>
                      <option value="Apartment">Apartment / Flats</option>
                      <option value="Villa">Independent Villa</option>
                      <option value="Plot">Premium Open Plot</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3.5 rounded-xl hover-glow transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-lg shadow-primary-500/20"
                  >
                    <Search className="h-4 w-4" />
                    <span>Search Properties</span>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Key Stats Section */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.id} className="text-center flex flex-col items-center">
                <div className="bg-primary-50 text-primary-500 p-3.5 rounded-2xl mb-4">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h4 className="font-display font-extrabold text-2xl sm:text-4xl text-secondary-900 tracking-tight mb-1">
                  {stat.count}
                </h4>
                <p className="text-slate-500 font-medium text-xs sm:text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Featured Projects Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-primary-500 font-display font-bold text-xs uppercase tracking-widest">Featured Spaces</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-secondary-900">
              Our Ongoing Masterpieces
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Explore our highest-rated communities. Constructed with extreme diligence, absolute legal clearance, and premium modern specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onViewDetails={onViewDetails} 
              />
            ))}
          </div>

          <div className="mt-12">
            <button 
              onClick={() => { setProjectFilter({ city: '', type: '' }); setCurrentPage('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
            >
              <span>View All Projects</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Services Offered Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-primary-500 font-display font-bold text-xs uppercase tracking-widest">End-to-End Solutions</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-secondary-900">
              Our Premium Services
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              From layout drawing to brick construction, financial aid to customized interiors, NexaHaven handles everything in-house.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Construction */}
            <div 
              onClick={() => handleServiceClick('construction')}
              className="bg-slate-50 border border-slate-100 hover:border-primary-500/20 p-8 rounded-3xl cursor-pointer hover-glow transition-all"
            >
              <div className="bg-primary-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/10">
                <Building className="h-6 w-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-secondary-900 mb-3">Construction</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">Quality architectural layouts, concrete grading, high-end finishing, and civil works supervised by expert structural engineers.</p>
              <span className="text-xs text-primary-500 font-semibold inline-flex items-center gap-1">Read details <ChevronRight className="h-3 w-3" /></span>
            </div>

            {/* Financial Aid */}
            <div 
              onClick={() => handleServiceClick('loans')}
              className="bg-slate-50 border border-slate-100 hover:border-primary-500/20 p-8 rounded-3xl cursor-pointer hover-glow transition-all"
            >
              <div className="bg-primary-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/10">
                <Key className="h-6 w-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-secondary-900 mb-3">Home Loan Assistance</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">Complete home loan support. Instant approvals from major nationalized banks with pre-negotiated interest rates.</p>
              <span className="text-xs text-primary-500 font-semibold inline-flex items-center gap-1">Read details <ChevronRight className="h-3 w-3" /></span>
            </div>

            {/* Interior Designs */}
            <div 
              onClick={() => handleServiceClick('interiors')}
              className="bg-slate-50 border border-slate-100 hover:border-primary-500/20 p-8 rounded-3xl cursor-pointer hover-glow transition-all"
            >
              <div className="bg-primary-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/10">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-secondary-900 mb-3">Apple Interiors</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">Creative modern living rooms, modular kitchens, custom cabinetry, smart automation, and luxury ambient lighting styles.</p>
              <span className="text-xs text-primary-500 font-semibold inline-flex items-center gap-1">Read details <ChevronRight className="h-3 w-3" /></span>
            </div>

            {/* Consulting */}
            <div 
              onClick={() => handleServiceClick('consulting')}
              className="bg-slate-50 border border-slate-100 hover:border-primary-500/20 p-8 rounded-3xl cursor-pointer hover-glow transition-all"
            >
              <div className="bg-primary-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/10">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-secondary-900 mb-3">Real Estate Advisory</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">Legal checkups, land title validation, and custom investment advisory. Find properties designed to appreciate by 15-20% YOY.</p>
              <span className="text-xs text-primary-500 font-semibold inline-flex items-center gap-1">Read details <ChevronRight className="h-3 w-3" /></span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Trust / Why Choose Us Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Trust Left Column (Content) */}
            <div className="space-y-6">
              <span className="text-primary-500 font-display font-bold text-xs uppercase tracking-widest">The NexaHaven Edge</span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-secondary-900 leading-tight">
                Setting New Standards in Real Estate Development
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                At NexaHaven Group, we believe buying a home should be an empowering experience. We stand firmly behind transparent paperwork, solid structures, and customer advocacy.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-4">
                  <div className="bg-white text-primary-500 border border-slate-100 shadow-md p-3.5 rounded-2xl shrink-0 h-fit">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-secondary-900">100% Legal Transparency</h4>
                    <p className="text-slate-500 text-xs leading-relaxed mt-1">We supply complete title reports, structural certificates, and RERA registration documents for every single listing.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-white text-primary-500 border border-slate-100 shadow-md p-3.5 rounded-2xl shrink-0 h-fit">
                    <Key className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-secondary-900">Zero Brokerage Guarantee</h4>
                    <p className="text-slate-500 text-xs leading-relaxed mt-1">You deal with the builders directly. No broker fees, no hidden convenience charges, no inflated costs.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-white text-primary-500 border border-slate-100 shadow-md p-3.5 rounded-2xl shrink-0 h-fit">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-secondary-900">Lifetime Support & After-Sales</h4>
                    <p className="text-slate-500 text-xs leading-relaxed mt-1">Our support doesn't end with property registration. We provide maintenance advice and resale support for life.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Right Column: Visual Layout Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-primary-500 to-orange-600 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-end h-56 text-left">
                    <Award className="h-8 w-8 mb-4 text-orange-100" />
                    <h4 className="font-display font-bold text-lg">ISO 9001:2015</h4>
                    <p className="text-orange-100 text-[10px] mt-1">Certified quality assurance standard management.</p>
                  </div>
                  <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm text-center h-48 flex flex-col justify-center">
                    <span className="font-display font-extrabold text-4xl text-primary-500">100%</span>
                    <h4 className="font-display font-bold text-sm text-secondary-900 mt-2">RERA Registered</h4>
                    <p className="text-slate-400 text-[10px] mt-1">Completely safe and legally registered layouts.</p>
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <div className="bg-secondary-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-end h-48 text-left">
                    <Users className="h-8 w-8 mb-4 text-primary-400" />
                    <h4 className="font-display font-bold text-lg">12K+ Families</h4>
                    <p className="text-slate-300 text-[10px] mt-1">Living happily in our gated communities.</p>
                  </div>
                  <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm text-center h-56 flex flex-col justify-center">
                    <span className="font-display font-extrabold text-4xl text-primary-500">0%</span>
                    <h4 className="font-display font-bold text-sm text-secondary-900 mt-2">Brokerage</h4>
                    <p className="text-slate-400 text-[10px] mt-1">Direct buy from the developers.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Testimonials Section (Interactive Carousel) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-primary-500 font-display font-bold text-xs uppercase tracking-widest">Customer Reviews</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-secondary-900">
              What Our Families Say
            </h2>
          </div>

          {/* Testimonial Active Display Card */}
          <div className="max-w-4xl mx-auto relative px-6 py-12 sm:py-16 bg-slate-50 border border-slate-100 rounded-3xl shadow-lg">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary-500/10 pointer-events-none" />
            
            <div className="space-y-6">
              {/* Star Rating */}
              <div className="flex justify-center gap-1 text-amber-500">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              {/* Comment text */}
              <p className="text-secondary-800 text-sm sm:text-base md:text-lg italic leading-relaxed px-4">
                "{testimonials[activeTestimonial].comment}"
              </p>

              {/* Profile details */}
              <div className="flex flex-col items-center gap-3">
                <img 
                  src={testimonials[activeTestimonial].avatar} 
                  alt={testimonials[activeTestimonial].name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary-500 shadow-md"
                />
                <div>
                  <h4 className="font-display font-bold text-base text-secondary-900">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-slate-400 text-xs font-semibold uppercase">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </div>

            {/* Testimonials controls */}
            <div className="flex justify-between items-center mt-8">
              <button 
                onClick={() => setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                className="bg-white hover:bg-primary-500 hover:text-white text-secondary-700 shadow-md border border-slate-100 p-2.5 rounded-full transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              {/* Indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeTestimonial === idx ? 'w-8 bg-primary-500' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  ></button>
                ))}
              </div>

              <button 
                onClick={() => setActiveTestimonial(prev => (prev + 1) % testimonials.length)}
                className="bg-white hover:bg-primary-500 hover:text-white text-secondary-700 shadow-md border border-slate-100 p-2.5 rounded-full transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Latest Blogs Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="space-y-4 max-w-2xl text-left">
              <span className="text-primary-500 font-display font-bold text-xs uppercase tracking-widest">Industry Insights</span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-secondary-900">
                Latest Real Estate News
              </h2>
              <p className="text-slate-500 text-sm">Read guides, market trends, and design tricks curated by industry professionals.</p>
            </div>
            
            <button 
              onClick={() => { setCurrentPage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="bg-white hover:bg-primary-500 hover:text-white border border-slate-200 text-secondary-700 hover:border-primary-500 font-semibold text-xs py-3.5 px-6 rounded-xl transition-all inline-flex items-center gap-1.5 shrink-0"
            >
              <BookOpen className="h-4 w-4" />
              <span>Read Full Blog</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-100 transition-all flex flex-col group hover-glow">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-primary-500 text-white font-display text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">
                    {blog.tag}
                  </span>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex gap-4 text-[10px] text-slate-400 font-semibold mb-3">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h3 className="font-display font-bold text-base text-secondary-900 group-hover:text-primary-500 transition-colors mb-3 leading-snug">
                    {blog.title}
                  </h3>
                  
                  <p className="text-slate-500 text-xs leading-relaxed mb-6">
                    {blog.excerpt}
                  </p>

                  <button 
                    onClick={() => { alert(`Feature under development! Opening blog post: ${blog.title}`); }}
                    className="mt-auto text-xs text-primary-500 font-bold hover:text-primary-600 inline-flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
