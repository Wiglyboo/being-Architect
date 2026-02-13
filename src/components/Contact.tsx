import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowRight, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'Luxury Residential',
    vision: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Project Inquiry: ${formData.projectType} - ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AProject Focus: ${formData.projectType}%0D%0AVision: ${formData.vision}`;
    window.location.href = `mailto:office.beingarchitect@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding bg-brand-white text-brand-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-brand-black text-white rounded-lg shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Contact Info Side */}
            <div className="p-10 md:p-16 flex flex-col justify-between relative overflow-hidden bg-brand-black">
              <div className="absolute top-0 right-0 p-8 text-brand-yellow/5 font-display font-black text-6xl md:text-9xl select-none leading-none -translate-y-4 md:-translate-y-8 translate-x-4 md:translate-x-8">
                GO
              </div>

              <div className="relative z-10">
                <h2 className="text-[10px] font-bold tracking-[0.4em] text-brand-yellow mb-6 uppercase">The Final Step</h2>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black leading-[1.1] mb-8 uppercase">
                  Let's Build <br />
                  <span className="text-gray-400">Something Iconic</span>
                </h3>

                <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-sm">
                  Share your vision with us. We take on select projects to ensure every detail is crafted to perfection.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-5 group">
                    <div className="w-10 h-10 bg-white/10 text-brand-yellow flex items-center justify-center rounded-sm transition-transform group-hover:scale-110">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest font-bold text-white/40 uppercase">Consultation Line</p>
                      <a href="tel:+919791028557" className="text-lg font-display font-bold hover:text-brand-yellow transition-colors">+91 97910 28557</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 group">
                    <div className="w-10 h-10 bg-white/10 text-brand-yellow flex items-center justify-center rounded-sm transition-transform group-hover:scale-110">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest font-bold text-white/40 uppercase">Project Inquiry</p>
                      <a href="mailto:office.beingarchitect@gmail.com" className="text-lg font-display font-bold hover:text-brand-yellow transition-colors break-all">office.beingarchitect@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-12 relative z-10">
                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-sm hover:bg-brand-yellow hover:text-brand-black transition-all duration-300">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Form Side */}
            <div className="p-10 md:p-16 bg-white/5 relative border-l border-white/5">
              <h4 className="text-2xl font-display font-black mb-8">INITIATE PROJECT</h4>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-brand-yellow transition-colors placeholder:text-white/5 text-sm"
                      placeholder="Johnathan Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-brand-yellow transition-colors placeholder:text-white/5 text-sm"
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Project Focus</label>
                  <div className="flex flex-wrap gap-2">
                    {['Luxury Residential', 'Boutique Interior', 'Sustainable Office', 'Renovation'].map(type => (
                      <label key={type} className="cursor-pointer group">
                        <input
                          type="radio"
                          name="project_type"
                          className="hidden peer"
                          checked={formData.projectType === type}
                          onChange={() => setFormData({ ...formData, projectType: type })}
                        />
                        <span className="px-3 py-2 border border-white/10 text-[10px] font-bold tracking-widest uppercase peer-checked:bg-brand-yellow peer-checked:text-brand-black peer-checked:border-brand-yellow transition-all block group-hover:border-brand-yellow/50">
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">The Vision</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the plot location, area, and your dream vibe..."
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-brand-yellow transition-colors resize-none placeholder:text-white/5 text-sm"
                    value={formData.vision}
                    onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="group w-full bg-brand-yellow text-brand-black font-black py-4 uppercase tracking-[0.2em] text-xs hover:bg-white transition-all flex items-center justify-center gap-4 mt-4">
                  <span>SEND INQUIRY TO ARCHITECT</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;