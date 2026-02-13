import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll);

    const sections = ['portfolio', 'process', 'testimonials', 'about'];

    let observer: IntersectionObserver | null = null;

    // Add a small delay to ensure DOM is fully painted
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.15, rootMargin: '-100px 0px -20% 0px' }
      );

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer!.observe(element);
      });
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [location.pathname]);

  /* Context-Aware Navigation Logic */
  const isHome = location.pathname === '/';

  const homeLinks = [
    { name: 'WORK', path: '/#portfolio' },
    { name: 'PROCESS', path: '/#process' },
    { name: 'TRUST', path: '/#testimonials' },
    { name: 'THE STUDIO', path: '/#about' },
  ];

  const innerLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ALL WORK', path: '/projects' },
  ];

  const navLinks = isHome ? homeLinks : innerLinks;

  const isActive = (path: string) => {
    if (location.pathname !== '/') return false;
    if (path.startsWith('/#')) {
      return path.substring(2) === activeSection;
    }
    return false;
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled || !isHome ? 'bg-brand-black/95 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-brand-yellow px-4 py-1.5 text-brand-black font-black text-xl font-display tracking-tighter transition-transform group-hover:-translate-y-1">
              BEING
            </div>
            <div className="text-white font-bold text-sm tracking-[0.2em] hidden sm:block transition-all group-hover:tracking-[0.3em] group-hover:text-brand-yellow uppercase">
              Architect
            </div>
          </Link>

          <div className="hidden md:flex gap-12 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  if (link.path.startsWith('/#')) {
                    const targetId = link.path.replace('/#', '');
                    const element = document.getElementById(targetId);
                    if (element && location.pathname === '/') {
                      e.preventDefault();
                      element.scrollIntoView({ behavior: 'smooth' });
                      window.history.pushState(null, '', link.path);
                    }
                  }
                }}
                className={`text-[10px] font-bold tracking-[0.25em] ${isActive(link.path) ? 'text-brand-yellow' : 'text-white/60'} hover:text-brand-yellow transition-all hover:translate-y-[-1px] cursor-pointer`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={(e) => {
                const element = document.getElementById('contact');
                if (element && location.pathname === '/') {
                  e.preventDefault();
                  element.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '/#contact');
                }
              }}
              className="relative group overflow-hidden bg-brand-yellow text-brand-black px-8 py-2.5 text-[10px] font-black tracking-widest transition-all cursor-pointer"
            >
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
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-5xl font-display font-black text-brand-black hover:text-white transition-all transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`mt-6 text-3xl font-display font-black text-brand-black border-2 border-brand-black px-8 py-3 hover:bg-brand-black hover:text-brand-yellow transition-all transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `500ms` }}
          >
            START PROJECT
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;