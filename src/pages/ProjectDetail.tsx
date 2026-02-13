import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin, Quote } from 'lucide-react';

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const projectIndex = PROJECTS.findIndex(p => p.id === id);
    const project = PROJECTS[projectIndex];

    const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];
    const prevProject = PROJECTS[(projectIndex - 1 + PROJECTS.length) % PROJECTS.length];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="h-screen bg-brand-black flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-4xl font-display font-black mb-4">PROJECT NOT FOUND</h2>
                    <Link to="/" className="text-brand-yellow font-bold tracking-widest uppercase text-xs border-b border-brand-yellow pb-1">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-brand-white text-brand-black min-h-screen">
            {/* 1. HERO - Immersive Image */}
            <div className="relative h-screen">
                <div className="absolute inset-0">
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-24 text-white">
                    <div className="container mx-auto">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-4 mb-6">
                                <Link to="/" className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 hover:text-brand-yellow transition-colors">
                                    <ArrowLeft size={14} /> Back to Works
                                </Link>
                                <span className="w-1 h-1 bg-brand-yellow rounded-full"></span>
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-yellow">{project.category}</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-black leading-none mb-8 lg:mb-12 tracking-tighter">
                                {project.title}
                            </h1>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-8">
                                <div>
                                    <p className="text-[10px] font-bold tracking-widest uppercase text-white/40 mb-1">Location</p>
                                    <p className="text-lg font-display font-bold flex items-center gap-2">
                                        <MapPin size={14} className="text-brand-yellow" />
                                        {project.location}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold tracking-widest uppercase text-white/40 mb-1">Year</p>
                                    <p className="text-lg font-display font-bold">{project.year}</p>
                                </div>
                                {project.details && (
                                    <>
                                        <div>
                                            <p className="text-[10px] font-bold tracking-widest uppercase text-white/40 mb-1">Area</p>
                                            <p className="text-lg font-display font-bold">{project.details.area}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold tracking-widest uppercase text-white/40 mb-1">Typology</p>
                                            <p className="text-lg font-display font-bold">{project.details.typology}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. NARRATIVE */}
            <section className="section-padding container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <p className="text-2xl md:text-4xl font-display font-bold leading-tight mb-12 indent-12 md:indent-24">
                        "{project.description}"
                    </p>
                </div>
            </section>

            {/* 3. GALLERY */}
            {project.gallery && (
                <section className="bg-brand-black py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {project.gallery.map((img, index) => (
                                <div key={index} className={`aspect-[4/3] overflow-hidden ${index === 2 ? 'md:col-span-2 aspect-[21/9]' : ''}`}>
                                    <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 4. TESTIMONIAL */}
            {project.testimonial && (
                <section className="section-padding bg-brand-yellow text-brand-black">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-4xl mx-auto relative">
                            <Quote size={80} className="absolute -top-12 -left-4 opacity-10" fill="currentColor" />
                            <p className="text-2xl md:text-5xl font-display font-bold leading-tight mb-10 relative z-10 italic">
                                "{project.testimonial.text}"
                            </p>
                            <div>
                                <p className="text-lg font-bold uppercase tracking-widest">{project.testimonial.clientName}</p>
                                <p className="text-xs uppercase tracking-widest font-bold opacity-50 mt-1">{project.testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* 5. NAVIGATION FOOTER */}
            <section className="bg-brand-black text-white py-24 border-t border-white/10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12">

                        {/* Prev/Next Nav */}
                        <div className="flex w-full md:w-auto justify-between md:justify-start gap-12">
                            <button
                                onClick={() => navigate(`/project/${prevProject.id}`)}
                                className="group text-left"
                            >
                                <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2 group-hover:text-brand-yellow transition-colors">Previous Project</p>
                                <h4 className="text-xl font-display font-bold">{prevProject.title}</h4>
                            </button>

                            <button
                                onClick={() => navigate(`/project/${nextProject.id}`)}
                                className="group text-right md:text-left"
                            >
                                <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2 group-hover:text-brand-yellow transition-colors">Next Project</p>
                                <h4 className="text-xl font-display font-bold">{nextProject.title}</h4>
                            </button>
                        </div>

                        {/* CTA */}
                        <div className="text-center md:text-right">
                            <h3 className="text-3xl font-display font-black mb-6">IMPRESSED?</h3>
                            <a
                                href={`mailto:office.beingarchitect@gmail.com?subject=Inquiry regarding ${project.title}`}
                                className="inline-flex items-center gap-3 bg-brand-yellow text-brand-black px-8 py-4 font-bold tracking-[0.2em] text-xs uppercase hover:bg-white transition-colors"
                            >
                                Enquire About This Project <ArrowUpRight size={18} />
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
