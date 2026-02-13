
import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Search } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="section-padding bg-brand-white text-brand-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold tracking-[0.4em] text-brand-yellow mb-6 uppercase">Selected Works</h2>
            <h3 className="text-5xl md:text-8xl font-display font-black leading-[1.1] tracking-tighter">
              ARCHITECTURE <br /> THAT <span className="text-gray-300">TRANSFORMS</span>
            </h3>
          </div>
          <div className="hidden lg:block">
            <p className="text-gray-500 font-medium text-lg max-w-xs leading-relaxed">
              Every project is a unique dialogue between site context and client vision.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 shadow-2xl group">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Visual Delight Layer */}
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/40 transition-colors duration-500"></div>
                
                {/* Hover UI */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                   <div className="flex justify-between items-start mb-auto">
                     <div className="bg-brand-yellow p-4 rounded-full transform -translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        <Search size={24} className="text-brand-black" />
                     </div>
                     <div className="bg-white/10 backdrop-blur-md px-4 py-1 text-[10px] font-bold text-white tracking-widest uppercase rounded-full">
                        {project.year}
                     </div>
                   </div>
                   
                   <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                      <span className="text-xs tracking-[0.3em] font-bold text-brand-yellow uppercase">{project.category}</span>
                      <h4 className="text-4xl text-white font-display font-black mt-3 leading-none flex items-center gap-4">
                        {project.title}
                        <ArrowUpRight size={32} className="text-brand-yellow" />
                      </h4>
                   </div>
                </div>
              </div>
              
              <div className="mt-10 flex justify-between items-start border-b border-black/5 pb-10 group-hover:border-brand-yellow transition-colors duration-500">
                 <div>
                    <h5 className="font-display font-bold text-2xl uppercase tracking-tighter group-hover:text-brand-yellow transition-colors">{project.title}</h5>
                    <p className="text-gray-400 text-sm mt-2 font-medium">{project.category} • Modern Contemporary</p>
                 </div>
                 <div className="text-right">
                    <p className="text-gray-400 text-xs tracking-widest uppercase font-bold">{project.location}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-32 text-center">
          <button className="group relative overflow-hidden bg-brand-black text-white px-16 py-6 font-bold tracking-[0.2em] transition-all hover:pr-20">
            <span className="relative z-10">EXPLORE ALL PROJECTS</span>
            <div className="absolute inset-0 bg-brand-yellow translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
            <ArrowUpRight className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all text-brand-black" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
