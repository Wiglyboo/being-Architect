import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#portfolio' },
    { name: 'PROCESS', href: '#process' },
    { name: 'TRUST', href: '#testimonials' },
    { name: 'THE STUDIO', href: '#about' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-brand-black/95 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-brand-yellow px-4 py-1.5 text-brand-black font-black text-xl font-display tracking-tighter transition-transform group-hover:-translate-y-1">
              BEING
            </div>
            <div className="text-white font-bold text-sm tracking-[0.2em] hidden sm:block transition-all group-hover:tracking-[0.3em] group-hover:text-brand-yellow uppercase">
              Architect
            </div>
          </div>

          <div className="hidden md:flex gap-12 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold tracking-[0.25em] text-white/60 hover:text-brand-yellow transition-all hover:translate-y-[-1px]"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="relative group overflow-hidden bg-brand-yellow text-brand-black px-8 py-2.5 text-[10px] font-black tracking-widest transition-all">
              <span className="relative z-10">BOOK CONSULTATION</span>
              <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
          </div>

          <button onClick={() => setIsOpen(true)} className="md:hidden text-white hover:text-brand-yellow transition-colors">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[60] bg-brand-yellow transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] flex flex-col ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="p-8 flex justify-end">
          <button onClick={() => setIsOpen(false)} className="text-brand-black hover:rotate-90 transition-transform duration-300">
            <X size={40} />
          </button>
        </div>
        <div className="flex-grow flex flex-col items-center justify-center gap-10">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-5xl font-display font-black text-brand-black hover:text-white transition-all transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className={`mt-6 text-3xl font-display font-black text-brand-black border-2 border-brand-black px-8 py-3 hover:bg-brand-black hover:text-brand-yellow transition-all transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `500ms` }}
          >
            START PROJECT
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;