import React, { useEffect, useState } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
    const [filter, setFilter] = useState('ALL');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categories = ['ALL', 'ARCHITECTURE', 'RESIDENTIAL', 'INTERIOR'];
    const filteredProjects = filter === 'ALL'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === filter);

    return (
        <div className="bg-brand-white text-brand-black min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-6">

                {/* Header & Filter */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
                    <div>
                        <h1 className="text-1xl font-bold tracking-[0.4em] text-brand-yellow mb-4 uppercase">Portfolio</h1>
                        <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter">
                            ALL WORKS
                        </h2>
                    </div>

                    {/* Sticky Filter on Mobile, Inline on Desktop */}
                    <div className="flex flex-nowrap overflow-x-auto md:overflow-visible gap-6 md:gap-8 sticky top-28 md:static z-20 bg-brand-white/95 backdrop-blur-sm md:bg-transparent py-4 md:py-0 -mx-6 px-6 md:mx-0 md:px-0 border-b border-black/5 md:border-none no-scrollbar">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`text-xs font-bold tracking-[0.2em] uppercase transition-all whitespace-nowrap flex-shrink-0 ${filter === cat
                                    ? 'text-brand-black border-b-2 border-brand-yellow pb-1'
                                    : 'text-gray-400 hover:text-brand-black'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group cursor-pointer animate-fade-in"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 shadow-lg group">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Visual Delight Layer */}
                                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-colors duration-500"></div>

                                {/* Hover UI */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <span className="text-[10px] tracking-widest font-bold text-brand-yellow uppercase bg-brand-black px-2 py-1 mb-2 inline-block">
                                                {project.category}
                                            </span>
                                            <h4 className="text-2xl text-white font-display font-bold leading-none">
                                                {project.title}
                                            </h4>
                                        </div>
                                        <div className="bg-brand-yellow p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <ArrowUpRight size={20} className="text-brand-black" />
                                        </div>
                                    </div>

                                    {/* Link Overlay */}
                                    <Link to={`/project/${project.id}`} className="absolute inset-0 z-20"></Link>
                                </div>
                            </div>

                            <div className="mt-4 flex justify-between items-start">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-900 group-hover:text-brand-yellow transition-colors">{project.title}</p>
                                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-widest mt-1">{project.location} • {project.year}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-24 text-gray-400">
                        <p className="text-xl font-display font-bold">NO PROJECTS FOUND IN THIS CATEGORY.</p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Projects;
