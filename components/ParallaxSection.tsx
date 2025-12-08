import React from 'react';
import { Reveal } from './Reveal';

export const ParallaxSection: React.FC = () => {
  return (
    <section className="relative py-40 flex items-center justify-center overflow-hidden z-40">
      {/* Background Image with Fixed Attachment for Parallax */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <div className="mb-8">
            <span className="text-6xl md:text-8xl text-secondary opacity-50 font-serif">"</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-medium leading-tight mb-8">
            Não somos afetados pelas coisas em si, mas pela <span className="text-secondary italic">interpretação</span> que fazemos delas.
          </h2>
          <p className="text-white/80 text-xl md:text-2xl font-light tracking-wide">
            — Epicteto
          </p>
        </Reveal>
      </div>
    </section>
  );
};