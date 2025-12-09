import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center bg-primary overflow-hidden pt-28 pb-12 lg:pt-0 lg:pb-0">
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#163a50] to-primary animate-gradient-x opacity-80" />
      
      {/* Animated Globs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-blob mix-blend-overlay" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-surface/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-overlay" />
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-6 lg:space-y-8 order-2 lg:order-1">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg">
              <Star size={14} className="text-secondary fill-secondary" />
              <span className="text-secondary text-xs font-bold tracking-widest uppercase">
                Psicologia Clínica & Hospitalar
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.1] md:leading-[0.95] text-balance">
              Pare e dê uma 
              <span className="italic font-light text-secondary lg:ml-4 block mt-2 lg:mt-0">chance a si mesmo.</span>
            </h1>
          </Reveal>

          {/* Description visible on desktop, might scroll on very small mobile */}
          <Reveal delay={0.2}>
            <p className="text-lg md:text-2xl text-cream/70 max-w-xl font-light leading-relaxed border-l-2 border-secondary/30 pl-6">
              Acolhimento profissional e estratégias da Terapia Cognitivo Comportamental para transformar sua relação com as emoções e consigo mesmo.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contato"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-cream rounded-full font-medium hover:bg-secondary/90 transition-all transform hover:scale-105 shadow-lg shadow-secondary/20"
              >
                Inicie sua jornada
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#sobre"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-cream/20 text-cream rounded-full font-medium hover:bg-cream/5 transition-all hover:border-cream/40"
              >
                Conheça meu trabalho
              </a>
            </div>
          </Reveal>
        </div>

        {/* Image/Visual Layer - Optimized for Mobile visibility */}
        <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center lg:justify-end mb-4 lg:mb-0">
          <Reveal direction="left" delay={0.4} className="relative w-56 sm:w-64 md:w-80 lg:w-full lg:max-w-md aspect-[3/4]">
             {/* Main Image Frame */}
             <div className="absolute inset-0 bg-secondary/20 rounded-t-[50px] lg:rounded-t-[100px] rounded-b-[20px] lg:rounded-b-[40px] rotate-3 transform translate-x-2 lg:translate-x-4 translate-y-2 lg:translate-y-4"></div>
             <div className="relative h-full w-full rounded-t-[50px] lg:rounded-t-[100px] rounded-b-[20px] lg:rounded-b-[40px] overflow-hidden border-2 border-white/10 shadow-2xl">
               <img 
                 src="https://lh3.googleusercontent.com/d/1AMpIJcljsydk9dUwUhaOe1gTG6Db_Zcx" 
                 alt="Jumarina Coelho Psicóloga" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
               
               {/* Floating Badge */}
               <div className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-8 p-3 lg:p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                  <div className="flex items-center justify-between">
                     <div>
                       <p className="text-cream text-xs lg:text-sm font-bold">Atendimento Online</p>
                       <p className="text-cream/60 text-[10px] lg:text-xs">Para todo o mundo</p>
                     </div>
                     <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                  </div>
               </div>
             </div>
          </Reveal>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-cream/30 z-20">
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
          <div className="w-1 h-1 bg-current rounded-full animate-scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};