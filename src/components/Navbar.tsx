import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { useLoading } from '../context/LoadingContext';

const Navbar: React.FC = () => {
  const { isLoading } = useLoading();
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
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-out delay-500 ${isLoading ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'} ${scrolled || !isHome ? 'bg-brand-black/95 backdrop-blur-md py-3 md:py-4 shadow-2xl' : 'bg-transparent py-4 md:py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo animate />
          </Link>

          <div className="hidden lg:flex gap-12 items-center">
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

          <button onClick={() => setIsOpen(true)} className="lg:hidden text-white hover:text-brand-yellow transition-colors">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[60] bg-brand-yellow transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] flex flex-col ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="p-6 md:p-8 flex justify-between items-center">
          <Logo inverted />
          <button onClick={() => setIsOpen(false)} className="text-brand-black hover:rotate-90 transition-transform duration-300">
            <X size={32} />
          </button>
        </div>

        <div className="flex-grow flex flex-col justify-center px-6 md:px-12 pb-20">
          <div className="flex flex-col gap-6 md:gap-8 items-start">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  setIsOpen(false);
                  if (link.path.startsWith('/#')) {
                    const targetId = link.path.replace('/#', '');
                    const element = document.getElementById(targetId);

                    // If we are on home page, prevent default and scroll
                    if (location.pathname === '/' && element) {
                      e.preventDefault();
                      // Small delay to allow menu close animation
                      setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, '', link.path);
                      }, 300);
                    }
                  }
                }}
                className={`text-4xl md:text-6xl font-display font-black text-brand-black hover:text-white transition-colors transform ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-12 md:mt-16 w-full max-w-sm">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-center bg-brand-black text-brand-yellow text-lg font-bold tracking-widest uppercase py-5 hover:bg-white hover:text-brand-black transition-all transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `500ms` }}
            >
              Start Project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;