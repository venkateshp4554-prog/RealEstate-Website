import React from 'react';
import { MapPin, Home, Maximize, Compass, ArrowRight } from 'lucide-react';

export default function ProjectCard({ project, onViewDetails }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Ongoing':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Completed':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Upcoming':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col hover-glow group">
      {/* Property Image & Badges */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Absolute Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-primary-500 text-white font-display text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            {project.type}
          </span>
          <span className={`text-xs font-bold px-3 py-1.5 rounded-full border shadow-md ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>

        {/* Pricing tag overlay */}
        <div className="absolute bottom-4 right-4 bg-secondary-900/90 text-white font-display font-bold px-4 py-2 rounded-xl backdrop-blur-sm text-sm border border-white/10">
          {project.price}
        </div>
      </div>

      {/* Property Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display font-bold text-xl text-secondary-900 group-hover:text-primary-500 transition-colors mb-2">
          {project.title}
        </h3>
        
        <p className="flex items-center gap-1.5 text-sm text-slate-500 mb-4">
          <MapPin className="h-4 w-4 text-primary-500 shrink-0" />
          <span>{project.location}</span>
        </p>

        {/* Main specifications grid */}
        <div className="grid grid-cols-3 gap-2 py-4 my-2 border-y border-slate-100 text-xs text-secondary-700">
          <div className="flex flex-col items-center justify-center p-2 bg-slate-50 rounded-xl text-center">
            <Home className="h-4 w-4 text-primary-500 mb-1" />
            <span className="font-semibold block">{project.bhk}</span>
            <span className="text-[10px] text-slate-400 font-medium">BHK Type</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-slate-50 rounded-xl text-center">
            <Maximize className="h-4 w-4 text-primary-500 mb-1" />
            <span className="font-semibold block truncate max-w-full">{project.size}</span>
            <span className="text-[10px] text-slate-400 font-medium font-sans">Area (sq.ft)</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-slate-50 rounded-xl text-center">
            <Compass className="h-4 w-4 text-primary-500 mb-1" />
            <span className="font-semibold block">{project.facing}</span>
            <span className="text-[10px] text-slate-400 font-medium">Facing</span>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-auto pt-4 flex gap-3">
          <button 
            onClick={() => onViewDetails(project)}
            className="flex-1 bg-slate-100 hover:bg-primary-500 hover:text-white text-secondary-800 font-semibold text-xs py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5"
          >
            <span>View Details</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
