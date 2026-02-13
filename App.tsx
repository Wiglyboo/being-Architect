import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, [isLoading]);

  return (
    <div className="font-sans selection:bg-brand-yellow selection:text-brand-black antialiased">
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <div className="animate-fade-in">
          <Navbar />
          <main>
            {/* 1. VISION (Hero) */}
            <Hero />
            
            {/* TRUST FIRST: Client Bar */}
            <div className="bg-brand-black border-y border-white/5 py-12 overflow-hidden">
               <div className="container mx-auto px-6">
                 <p className="text-[10px] tracking-[0.4em] font-bold text-white/30 text-center uppercase mb-8">Trusted by visionaries across India</p>
                 <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    <span className="text-xl md:text-2xl font-display font-black text-white">L&T REALTY</span>
                    <span className="text-xl md:text-2xl font-display font-black text-white">GODREJ</span>
                    <span className="text-xl md:text-2xl font-display font-black text-white">DLF</span>
                    <span className="text-xl md:text-2xl font-display font-black text-white">SATTVA</span>
                    <span className="text-xl md:text-2xl font-display font-black text-white">BRIGADE</span>
                 </div>
               </div>
            </div>

            {/* 2. PORTFOLIO (Transformation) */}
            <div className="reveal-on-scroll">
              <Portfolio />
            </div>

            {/* TRANSFORMATION DIVIDER */}
            <div className="bg-brand-yellow h-20 sm:h-24 flex items-center overflow-hidden whitespace-nowrap border-y-2 border-brand-black relative z-20">
              <div className="animate-marquee inline-block">
                {[...Array(10)].map((_, i) => (
                  <span key={i} className="text-brand-black font-display font-black text-2xl sm:text-3xl mx-8 sm:mx-16 flex items-center gap-6 sm:gap-12 inline-flex">
                    <span>REDEFINING SPACES</span>
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-brand-black rounded-full"></span>
                    <span>DESIGN FOR LIFE</span>
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-brand-black rounded-full"></span>
                    <span>ARCHITECTURAL EXCELLENCE</span>
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-brand-black rounded-full"></span>
                  </span>
                ))}
              </div>
            </div>
            
            {/* 3. PROCESS (Services/The How) */}
            <div className="reveal-on-scroll">
              <Process />
            </div>

            {/* 4. PROOF (Trust) */}
            <div className="reveal-on-scroll">
              <Testimonials />
            </div>

            {/* 5. AUTHORITY (Trust) */}
            <div className="reveal-on-scroll">
              <About />
            </div>
            
            {/* 6. CTA (Inquiry) */}
            <div className="reveal-on-scroll">
              <Contact />
            </div>
          </main>
          <Footer />
        </div>
      )}

      <style>{`
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
          will-change: transform, opacity;
        }
        
        .reveal-on-scroll.reveal-active {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal-on-scroll {
            transition: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default App;