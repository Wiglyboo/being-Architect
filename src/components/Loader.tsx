
import React, { useState, useEffect } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setExit(true), 500);
          setTimeout(() => onComplete(), 1500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-brand-black flex flex-col items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${exit ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="container px-6 flex flex-col items-center">
        {/* Brand Reveal */}
        <div className="reveal-clip overflow-hidden mb-4">
          <h2 className={`text-3xl md:text-5xl font-display font-black tracking-tighter transition-all duration-700 ${count > 10 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <span className="bg-brand-yellow text-brand-black px-4 py-1">BEING</span>
            <span className="text-white ml-3">ARCHITECT</span>
          </h2>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full max-w-xs h-px bg-white/10 mt-8 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-brand-yellow transition-all duration-300 ease-out"
            style={{ width: `${count}%` }}
          />
        </div>

        {/* Percentage */}
        <div className="mt-4 font-display font-bold text-white/40 tracking-widest text-xs">
          {count < 100 ? `${count}%` : 'READY'}
        </div>
      </div>

      {/* Decorative lines reveal */}
      <div className={`absolute bottom-0 left-0 w-full h-0 bg-brand-yellow/5 transition-all duration-1000 delay-300 ${exit ? 'h-full' : 'h-0'}`}></div>
    </div>
  );
};

export default Loader;
