
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-brand-yellow text-brand-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden shadow-2xl relative z-10">
               <img 
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=800" 
                alt="Principal Architect"
                className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0 hover:scale-105"
              />
            </div>
            {/* Background decorative elements */}
            <div className="absolute -top-12 -left-12 w-48 h-48 border-2 border-brand-black/10 -z-10 hidden md:block"></div>
            <div className="absolute -bottom-10 -right-10 bg-brand-black text-white p-12 hidden md:block z-20 shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
              <h4 className="text-5xl font-display font-black leading-none mb-2">15+</h4>
              <p className="text-[10px] tracking-[0.3em] text-brand-yellow uppercase font-black">Years Experience</p>
            </div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2">
            <h2 className="text-sm font-bold tracking-[0.4em] mb-6 uppercase opacity-40">The Visionary</h2>
            <h3 className="text-5xl md:text-7xl font-display font-black leading-tight mb-10">
              AR. <br /> NARASIMHAN
            </h3>
            <p className="text-2xl font-display font-bold mb-10 leading-snug">
              Principal Architect at BEING ARCHITECT, <br className="hidden md:block" /> 
              shaping contemporary narratives through stone and light.
            </p>
            <div className="space-y-8 text-brand-black/70 text-lg leading-relaxed max-w-2xl">
              <p>
                Graduating from a prestigious institution in Chennai, Narasimhan spent over a decade perfecting the balance between aesthetic brilliance and functional necessity. His design philosophy is rooted in modern minimalism combined with climate-responsive architecture.
              </p>
              <p>
                "At Being Architect, we don't just build walls. We create environments that enhance well-being and inspire productivity. Every project is an opportunity to redefine how humans interact with their surroundings."
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-12 border-t border-brand-black/10 pt-12">
              <div>
                <p className="font-display font-black text-4xl uppercase tracking-tighter">50+</p>
                <p className="text-[10px] tracking-widest uppercase font-bold opacity-40 mt-2">Projects Completed</p>
              </div>
              <div>
                <p className="font-display font-black text-4xl uppercase tracking-tighter">12</p>
                <p className="text-[10px] tracking-widest uppercase font-bold opacity-40 mt-2">Design Awards</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="font-display font-black text-4xl uppercase tracking-tighter">100%</p>
                <p className="text-[10px] tracking-widest uppercase font-bold opacity-40 mt-2">Client Trust</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
