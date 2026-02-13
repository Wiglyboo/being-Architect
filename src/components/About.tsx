import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ==========================================
// HOW TO ADD/EDIT ARCHITECTS:
// 1. To EDIT: Change the values in the objects below.
// 2. To ADD: Copy one {...} block and paste it after the last one.
// 3. Image URLs can be from the public folder (e.g., '/images/my-photo.jpg')
// ==========================================
const ARCHITECTS = [
  {
    id: 1,
    name: 'NARASIMHAN',
    role: 'Principal Architect',
    vision: 'shaping contemporary narratives through stone and light.',
    bio: [
      "Graduating from a prestigious institution in Chennai, Narasimhan spent over a decade perfecting the balance between aesthetic brilliance and functional necessity. His design philosophy is rooted in modern minimalism combined with climate-responsive architecture.",
      "At Being Architect, we don't just build walls. We create environments that enhance well-being and inspire productivity. Every project is an opportunity to redefine how humans interact with their surroundings."
    ],
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=800',
    stats: [
      { value: '15+', label: 'Years Experience' },
      { value: '50+', label: 'Projects Completed' },
      { value: '12', label: 'Design Awards' }
    ]
  },
  {
    id: 2,
    name: 'RAJA RAJAN',
    role: 'Principal Architect',
    vision: 'orchestrating urban harmony through structural innovation.',
    bio: [
      "With a keen eye for structural detail and urban dynamics, Raja Rajan brings a rigorous engineering perspective to the artistic process. His work focuses on the longevity and sustainability of the built environment, ensuring that every structure stands the test of time.",
      "Architecture is the bridge between engineering and art. My focus is on creating spaces that are not only visually stunning but structurally resilient and environmentally responsible."
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    stats: [
      { value: '12+', label: 'Years Experience' },
      { value: '40+', label: 'Projects Lead' },
      { value: '100%', label: 'Commitment' }
    ]
  }
];

const About: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextArchitect = () => {
    setActiveIndex((prev) => (prev + 1) % ARCHITECTS.length);
  };

  const prevArchitect = () => {
    setActiveIndex((prev) => (prev - 1 + ARCHITECTS.length) % ARCHITECTS.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextArchitect, 8000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const architect = ARCHITECTS[activeIndex];

  return (
    <section id="about" className="section-padding bg-brand-yellow text-brand-black transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Image Section */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden shadow-2xl relative z-10 bg-brand-black">
              <div key={architect.id} className="animate-fade-in w-full h-full">
                <img
                  src={architect.image}
                  alt={architect.name}
                  className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0 hover:scale-105"
                />
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-12 -left-12 w-48 h-48 border-2 border-brand-black/10 -z-10 hidden md:block"></div>

            {/* Floating Stat */}
            <div className="absolute -bottom-10 -right-10 bg-brand-black text-white p-12 hidden md:block z-20 shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
              <h4 className="text-5xl font-display font-black leading-none mb-2">{architect.stats[0].value}</h4>
              <p className="text-[10px] tracking-[0.3em] text-brand-yellow uppercase font-black">{architect.stats[0].label}</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative flex flex-col justify-center">

            {/* Carousel Interactive Controls */}
            <div className="flex items-center justify-between mb-12 border-b border-brand-black/10 pb-6">
              <div className="flex gap-4">
                {ARCHITECTS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className="relative h-1 bg-brand-black/20 rounded-full overflow-hidden transition-all duration-300 w-16"
                    aria-label={`View Architect ${idx + 1}`}
                  >
                    {activeIndex === idx && (
                      <div className="absolute inset-0 bg-brand-black animate-[progress_8s_linear_forwards]" />
                    )}
                  </button>
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={prevArchitect}
                  className="p-3 border border-brand-black/10 rounded-full hover:bg-brand-black hover:text-brand-yellow transition-all active:scale-95"
                  aria-label="Previous Architect"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextArchitect}
                  className="p-3 border border-brand-black/10 rounded-full hover:bg-brand-black hover:text-brand-yellow transition-all active:scale-95"
                  aria-label="Next Architect"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="animate-fade-in" key={architect.id}>
              <h2 className="text-xs font-bold tracking-[0.4em] mb-4 uppercase opacity-40">The Visionary</h2>
              <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display font-black leading-tight mb-8">
                AR. <br /> {architect.name}
              </h3>
              <p className="text-2xl font-display font-bold mb-10 leading-snug">
                {architect.role} at BEING ARCHITECT, <br className="hidden md:block" />
                {architect.vision}
              </p>
              <div className="space-y-8 text-brand-black/70 text-lg leading-relaxed max-w-2xl">
                {architect.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-12 border-t border-brand-black/10 pt-12">
                {architect.stats.map((stat, idx) => (
                  <div key={idx} className={idx === 2 ? "col-span-2 md:col-span-1" : ""}>
                    <p className="font-display font-black text-4xl uppercase tracking-tighter">{stat.value}</p>
                    <p className="text-[10px] tracking-widest uppercase font-bold opacity-40 mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
