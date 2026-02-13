import React from 'react';
import { ArrowUp, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Left: Copyright */}
          <div className="text-[10px] font-bold tracking-widest uppercase text-white/40 order-2 md:order-1">
            <p>© {new Date().getFullYear()} BEING ARCHITECT. <span className="hidden sm:inline">ALL RIGHTS RESERVED.</span></p>
          </div>

          {/* Center: Socials */}
          <div className="flex items-center gap-8 order-1 md:order-2">
            <a href="#" className="group text-white/40 hover:text-brand-yellow transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="group text-white/40 hover:text-brand-yellow transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="group text-white/40 hover:text-brand-yellow transition-colors">
              <Facebook size={18} />
            </a>
          </div>

          {/* Right: Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-white/40 hover:text-brand-yellow transition-colors order-3"
          >
            Back to Top
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
