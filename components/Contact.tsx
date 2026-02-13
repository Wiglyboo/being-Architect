import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowRight, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-brand-white text-brand-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-5">
            <h2 className="text-sm font-bold tracking-[0.4em] text-brand-yellow mb-6 uppercase">The Final Step</h2>
            <h3 className="text-5xl md:text-7xl font-display font-black leading-[1.1] mb-12 uppercase">
              Start Your <br /> 
              <span className="text-gray-300">Transformation</span>
            </h3>

            <p className="text-lg text-gray-500 font-medium mb-12 leading-relaxed">
              We only take on a limited number of projects per year to ensure absolute quality and attention to detail. Let's see if we're a good fit.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-brand-black text-brand-yellow flex items-center justify-center transition-transform group-hover:scale-110">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest font-black text-gray-400 uppercase">Consultation Line</p>
                  <a href="tel:+919791028557" className="text-xl font-display font-bold hover:text-brand-yellow transition-colors">+91 97910 28557</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-brand-black text-brand-yellow flex items-center justify-center transition-transform group-hover:scale-110">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest font-black text-gray-400 uppercase">Project Inquiry</p>
                  <a href="mailto:office.beingarchitect@gmail.com" className="text-xl font-display font-bold hover:text-brand-yellow transition-colors break-all italic underline">Email Ar. Narasimhan</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-brand-black text-brand-yellow flex items-center justify-center transition-transform group-hover:scale-110">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest font-black text-gray-400 uppercase">WhatsApp</p>
                  <a href="https://wa.me/919791028557" className="text-xl font-display font-bold hover:text-brand-yellow transition-colors">Chat Instantly</a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-16">
               {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                 <a key={i} href="#" className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-sm hover:bg-brand-yellow transition-all duration-300 transform hover:-translate-y-1">
                   <Icon size={20} />
                 </a>
               ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-brand-black p-10 md:p-16 lg:p-20 text-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-brand-yellow/5 font-display font-black text-9xl select-none leading-none -translate-y-8 translate-x-8">
                GO
              </div>
              
              <h4 className="text-3xl font-display font-black mb-10 relative z-10">STRATEGIC CONSULTATION</h4>
              <p className="text-white/40 mb-12 text-sm leading-relaxed max-w-sm">Tell us about your plot, vision, and timeline. Our team will get back to you within 24 hours.</p>

              <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Full Name</label>
                    <input type="text" required className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-brand-yellow transition-colors placeholder:text-white/5" placeholder="Johnathan Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">WhatsApp Number</label>
                    <input type="tel" required className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-brand-yellow transition-colors placeholder:text-white/5" placeholder="+91 00000 00000" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Project Focus</label>
                  <div className="flex flex-wrap gap-3">
                    {['Luxury Residential', 'Boutique Interior', 'Sustainable Office', 'Renovation'].map(type => (
                      <label key={type} className="cursor-pointer group">
                        <input type="radio" name="project_type" className="hidden peer" />
                        <span className="px-4 py-2 border border-white/10 text-[10px] font-bold tracking-widest uppercase peer-checked:bg-brand-yellow peer-checked:text-brand-black peer-checked:border-brand-yellow transition-all block group-hover:border-brand-yellow/50">
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">The Vision (Optional)</label>
                  <textarea rows={3} placeholder="Describe the vibe of the space you want..." className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-brand-yellow transition-colors resize-none placeholder:text-white/5 text-sm"></textarea>
                </div>
                
                <button className="group w-full bg-brand-yellow text-brand-black font-black py-5 uppercase tracking-[0.4em] text-xs hover:bg-white transition-all flex items-center justify-center gap-4">
                  <span>INITIATE PROJECT</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-4 text-gray-400">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
               <p className="text-[10px] font-bold tracking-widest uppercase">Currently accepting Q3 2024 Projects</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;