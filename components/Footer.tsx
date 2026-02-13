
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-brand-yellow px-3 py-1 text-brand-black font-black text-xl font-display tracking-tighter">
              BEING
            </div>
            <div className="text-white font-bold text-sm tracking-widest">
              ARCHITECT
            </div>
          </div>
          
          <div className="flex gap-10 text-xs font-bold tracking-widest text-white/40">
            <a href="#" className="hover:text-brand-yellow transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-brand-yellow transition-colors">TERMS OF SERVICE</a>
            <p>© 2024 BEING ARCHITECT. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-[10vw] font-display font-black opacity-5 select-none pointer-events-none tracking-tighter">
          ARCHITECTURE & INTERIOR
        </div>
      </div>
    </footer>
  );
};

export default Footer;
