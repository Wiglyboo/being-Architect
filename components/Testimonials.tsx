import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="section-padding bg-brand-black text-white overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
          <h2 className="text-sm font-bold tracking-[0.4em] text-brand-yellow mb-6 uppercase">The Proof</h2>
          <h3 className="text-4xl md:text-6xl font-display font-black">WHAT OUR <span className="text-brand-yellow italic">CLIENTS</span> SAY</h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-brand-yellow mb-8 flex gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          
          <div className="relative w-full max-w-4xl text-center">
            <div className="min-h-[200px] flex items-center justify-center relative">
              <div className="absolute top-0 left-0 -translate-x-full -translate-y-1/2 opacity-10 hidden lg:block">
                <Quote size={120} fill="currentColor" />
              </div>
              <p className="text-2xl md:text-4xl font-display font-bold leading-tight transition-opacity duration-500 italic">
                "{TESTIMONIALS[current].content}"
              </p>
            </div>
            
            <div className="mt-12 flex flex-col items-center">
              <div className="w-12 h-1 bg-brand-yellow mb-6"></div>
              <h4 className="text-xl font-bold text-white uppercase tracking-tighter">{TESTIMONIALS[current].name}</h4>
              <p className="text-[10px] text-brand-yellow uppercase tracking-[0.3em] font-black mt-2">{TESTIMONIALS[current].role}</p>
            </div>
          </div>

          <div className="flex gap-4 mt-16">
            <button 
              onClick={prev}
              className="p-4 border border-white/10 hover:border-brand-yellow hover:text-brand-yellow transition-all rounded-full"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="p-4 border border-white/10 hover:border-brand-yellow hover:text-brand-yellow transition-all rounded-full"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;