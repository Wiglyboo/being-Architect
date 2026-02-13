
import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="section-padding bg-brand-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-5 sticky top-32">
            <h2 className="text-xs font-bold tracking-[0.4em] text-brand-yellow mb-4 uppercase">The Blueprint</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black leading-tight mb-8">
              A JOURNEY OF <br />
              <span className="text-brand-yellow">CREATION</span>
            </h3>
            <p className="text-white/50 max-w-md text-sm leading-relaxed mb-10">
              Our process is rigorous yet adaptive, ensuring that every design is backed by structural integrity and artistic purpose.
            </p>

            <div className="hidden lg:block relative aspect-square bg-white/5 rounded-sm overflow-hidden border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1000"
                alt="Process sketch"
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-brand-yellow font-bold text-[10px] tracking-widest uppercase mb-2">Technical Rigor</p>
                <p className="text-lg font-display font-bold">PRECISION IN EVERY LINE</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-16">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="group relative pl-20 lg:pl-28">
                <div className="absolute left-0 top-0 text-brand-yellow font-display text-5xl md:text-7xl font-black opacity-10 group-hover:opacity-40 transition-all duration-500">
                  {step.number}
                </div>
                <div className="border-b border-white/10 pb-10 group-hover:border-brand-yellow/50 transition-colors">
                  <h4 className="text-2xl md:text-3xl font-display font-bold mb-4 tracking-tighter group-hover:text-brand-yellow transition-colors">{step.title}</h4>
                  <p className="text-white/60 text-base leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-brand-yellow opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                    <span className="w-8 h-px bg-brand-yellow"></span>
                    <span className="text-[10px] font-bold tracking-widest uppercase">Deep Dive</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
