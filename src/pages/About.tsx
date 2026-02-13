import React from 'react';
import AboutSection from '../components/About';

const About: React.FC = () => {
    return (
        <>
            {/* Page Hero */}
            <section className="pt-32 pb-16 bg-brand-black text-white px-6">
                <div className="container mx-auto">
                    <h1 className="text-5xl md:text-7xl font-display font-black uppercase leading-none mb-6">
                        The <span className="text-brand-yellow">Studio</span>
                    </h1>
                    <p className="text-xl md:text-2xl max-w-2xl text-white/60 font-medium">
                        Designing spaces that breathe, inspire, and endure.
                    </p>
                </div>
            </section>

            {/* The Visionary Section (Reused) */}
            <AboutSection />

            {/* Philosophy Section */}
            <section className="section-padding bg-brand-black text-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-brand-yellow font-bold tracking-[0.4em] uppercase mb-8">Our Philosophy</h2>
                            <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                                Design is not just what it looks like and feels like. Design is how it works.
                            </h3>
                        </div>
                        <div className="space-y-8 text-white/50 text-lg">
                            <p>
                                We believe that architecture is a backdrop to life. It should be subtle yet significant, providing a canvas for memories to unfold.
                            </p>
                            <p>
                                Our planning process is rigorous, ensuring that every square foot serves a purpose. We prioritize natural light, ventilation, and sustainable materials to create homes that age gracefully.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
