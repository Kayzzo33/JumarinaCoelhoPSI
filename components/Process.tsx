import React from 'react';
import { Reveal } from './Reveal';
import { ProcessStep } from '../types';
import { MessageCircle, CalendarCheck, Map, Footprints } from 'lucide-react';

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Primeiro Contato',
    description: 'Entre em contato pelo WhatsApp para tirar dúvidas iniciais e verificar disponibilidade de horários.'
  },
  {
    number: '02',
    title: 'Sessão de Avaliação',
    description: 'Um encontro para nos conhecermos, entendermos suas demandas e alinharmos expectativas.'
  },
  {
    number: '03',
    title: 'Planejamento Terapêutico',
    description: 'Definiremos juntos os objetivos da terapia e o plano de ação personalizado para você.'
  },
  {
    number: '04',
    title: 'Caminhada Conjunta',
    description: 'Sessões semanais para trabalhar suas questões, com acolhimento e técnicas eficazes.'
  }
];

const icons = [MessageCircle, CalendarCheck, Map, Footprints];

export const Process: React.FC = () => {
  return (
    <section id="processo" className="py-24 lg:py-32 bg-cream text-primary rounded-t-[2.5rem] lg:rounded-t-[5rem] -mt-8 md:-mt-20 z-40 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="sticky top-32 self-start">
            <Reveal>
              <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8">
                Como funciona a <br/><span className="text-secondary">terapia?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-primary/70 mb-10 max-w-md leading-relaxed">
                O processo terapêutico é uma jornada colaborativa. Entenda os passos que daremos juntos em direção ao seu bem-estar.
              </p>
              <a href="#contato" className="inline-flex items-center justify-center px-10 py-4 bg-primary text-cream rounded-full font-medium text-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Começar agora
              </a>
            </Reveal>
          </div>

          <div className="relative pt-8 lg:pt-0">
            {/* Vertical Line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-secondary/20 hidden md:block"></div>

            <div className="space-y-12 md:space-y-16">
              {steps.map((step, index) => {
                const Icon = icons[index];
                return (
                  <Reveal key={step.number} delay={index * 0.15} direction="left">
                    <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start group">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 border-secondary/20 flex items-center justify-center text-secondary relative z-10 shadow-sm group-hover:border-secondary transition-colors group-hover:scale-110 duration-300">
                        <Icon size={24} />
                      </div>
                      <div className="flex-1 pt-2">
                        {/* Number Positioning optimized for mobile */}
                        <span className="text-6xl md:text-7xl font-serif text-secondary/10 block mb-2 md:absolute md:-top-10 md:right-0 pointer-events-none select-none">
                          {step.number}
                        </span>
                        <h3 className="font-serif text-3xl font-bold mb-4 relative z-10">{step.title}</h3>
                        <p className="text-primary/70 text-lg leading-relaxed relative z-10">{step.description}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};