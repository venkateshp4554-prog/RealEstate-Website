import React, { useState, useEffect } from 'react';
import { projects } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import { Search, MapPin, Grid, RefreshCw, Layers } from 'lucide-react';
import heroBanner from '../assets/hero_banner.png';

export default function Projects({ onViewDetails, projectFilter, setProjectFilter }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');

  // Handle preset filters from home page search
  useEffect(() => {
    if (projectFilter) {
      if (projectFilter.city) {
        setSelectedCity(projectFilter.city);
      }
      if (projectFilter.type) {
        // Find by type tag
        // If type is plot/apartment/villa
        // We'll set search or handle it customly. Let's adapt
      }
    }
  }, [projectFilter]);

  const handleReset = () => {
    setSearchTerm('');
    setSelectedStatus('All');
    setSelectedCity('All');
    if (setProjectFilter) {
      setProjectFilter({ city: '', type: '' });
    }
  };

  // Dynamic filter logic
  const filteredProjects = projects.filter((project) => {
    // 1. Search term match (Title or Location)
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase());

    // 2. Status match (Ongoing, Completed, Upcoming)
    const matchesStatus = 
      selectedStatus === 'All' || 
      project.status.toLowerCase() === selectedStatus.toLowerCase();

    // 3. City match (Hyderabad, Visakhapatnam, Bengaluru)
    const matchesCity = 
      selectedCity === 'All' || 
      project.location.toLowerCase().includes(selectedCity.toLowerCase());

    // 4. Hero type filter match
    const matchesHeroType = 
      !projectFilter || 
      !projectFilter.type || 
      project.type.toLowerCase() === projectFilter.type.toLowerCase();

    return matchesSearch && matchesStatus && matchesCity && matchesHeroType;
  });

  const statuses = ['All', 'Ongoing', 'Completed', 'Upcoming'];
  const cities = ['All', 'Hyderabad', 'Visakhapatnam', 'Bengaluru'];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* 1. Page Header */}
      <section className="bg-slate-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBanner} 
            alt="Projects Catalog" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-primary-400 font-display font-bold text-xs uppercase tracking-widest">Our Catalog</span>
          <h1 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-white mt-3">
            NexaHaven Projects
          </h1>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mt-3">
            Explore our range of RERA compliant apartments, luxury independent villas, and premium layouts.
          </p>
        </div>
      </section>

      {/* 2. Advanced Filters Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 space-y-6">
          
          {/* Top Line: Search and Reset */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Search Box */}
            <div className="relative w-full md:max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                <Search className="h-4 w-4" />
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search projects (e.g. Heights, Gachibowli)..."
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-primary-500 focus:bg-white transition-all"
              />
            </div>

            {/* Presets and resets */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              {projectFilter && (projectFilter.city || projectFilter.type) && (
                <span className="text-xs font-semibold px-3 py-1.5 bg-primary-50 text-primary-500 rounded-xl border border-primary-100">
                  Active Filter: {projectFilter.type || projectFilter.city}
                </span>
              )}
              <button 
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-primary-500 font-semibold px-4 py-3 bg-slate-50 hover:bg-primary-50 rounded-2xl border border-slate-100 transition-all cursor-pointer"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>

          </div>

          {/* Bottom Tabs: Status Tabs & City Tags */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            
            {/* Status Tabs */}
            <div className="space-y-2 text-left">
              <span className="text-slate-400 font-semibold text-[10px] uppercase tracking-wider block flex items-center gap-1">
                <Layers className="h-3.5 w-3.5 text-slate-400" />
                <span>Filter by Status</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {statuses.map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`text-xs font-semibold px-4 py-2.5 rounded-xl border transition-all cursor-pointer ${
                      selectedStatus === status
                        ? 'bg-primary-500 text-white border-primary-500 shadow-md shadow-primary-500/10'
                        : 'bg-white text-secondary-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {status} {status === 'All' ? `(${projects.length})` : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* City Tags */}
            <div className="space-y-2 text-left">
              <span className="text-slate-400 font-semibold text-[10px] uppercase tracking-wider block flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-slate-400" />
                <span>Filter by Location</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`text-xs font-semibold px-4 py-2.5 rounded-xl border transition-all cursor-pointer ${
                      selectedCity === city
                        ? 'bg-secondary-900 text-white border-secondary-900 shadow-md shadow-secondary-900/10'
                        : 'bg-white text-secondary-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Projects Catalog Display Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm max-w-lg mx-auto p-8 space-y-4">
            <Grid className="h-12 w-12 text-slate-300 mx-auto" />
            <h3 className="font-display font-bold text-lg text-secondary-900">No Projects Found</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              We couldn't find any projects matching your search term or filter configuration. Try resetting filters or adjusting search queries.
            </p>
            <button 
              onClick={handleReset}
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold text-xs px-6 py-2.5 rounded-xl transition-all shadow-md"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="space-y-6 text-left">
            <span className="text-xs font-semibold text-slate-400 block px-2">
              Showing {filteredProjects.length} matching {filteredProjects.length === 1 ? 'project' : 'projects'}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onViewDetails={onViewDetails} 
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
