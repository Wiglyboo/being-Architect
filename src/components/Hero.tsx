
import React from 'react';
import { useLoading } from '../context/LoadingContext';

const Hero: React.FC = () => {
  const { isLoading } = useLoading();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-black overflow-hidden">
      {/* Background Image Showcase */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2400"
          alt="Featured Architectural Project"
          className="w-full h-full object-cover grayscale-[0.2] opacity-60 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-transparent to-brand-black"></div>
      </div>

      {/* Background Grid Layer */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:5rem_5rem]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        <div className="reveal-clip overflow-hidden mb-8">
          <span className={`block text-brand-yellow text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.4em] md:tracking-[0.6em] font-bold uppercase ${isLoading ? 'opacity-0 translate-y-10' : 'animate-reveal-up-slow [animation-delay:2000ms]'}`}>
            Architecture & Interior Design Studio
          </span>
        </div>

        <div className="reveal-clip overflow-hidden max-w-3xl">
          <h1 className={`${isLoading ? 'opacity-0 translate-y-10' : 'animate-reveal-up-slow [animation-delay:2.3s]'} text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black text-white leading-[1.1] tracking-tight`}>
            CRAFTING <span className="text-brand-yellow">TIMELESS</span> <br />
            SPATIAL EXPERIENCES
          </h1>
        </div>

        <div className={`mt-8 flex flex-col sm:flex-row justify-center gap-6 ${isLoading ? 'opacity-0' : 'animate-fade-in [animation-delay:3.0s]'}`}>
          <a
            href="#portfolio"
            className="group relative overflow-hidden bg-brand-yellow px-8 py-4 text-brand-black font-black text-xs tracking-widest transition-all"
          >
            <span className="relative z-10">EXPLORE WORK</span>
            <div className="absolute inset-0 bg-white translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
          </a>
          <a
            href="#contact"
            className="group border border-white/20 px-8 py-4 text-white font-bold text-xs tracking-widest hover:border-brand-yellow hover:text-brand-yellow transition-all"
          >
            START A PROJECT
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40 z-20">
        <div className="w-px h-16 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-yellow animate-scroll-line"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scroll-line {
          animation: scroll-line 2s cubic-bezier(0.7, 0, 0.3, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
