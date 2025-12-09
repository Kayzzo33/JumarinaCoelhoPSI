import React from 'react';
import { Reveal } from './Reveal';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    text: "A Jumarina é uma profissional excelente. Me senti acolhida desde a primeira sessão. As técnicas da TCC me ajudaram muito a lidar com minha ansiedade.",
    author: "Ana P.",
    role: "Paciente - 28 anos"
  },
  {
    text: "Profissional extremamente competente e humana. Consegui ressignificar muitas questões do meu passado e hoje vivo com muito mais leveza.",
    author: "Carlos M.",
    role: "Paciente - 35 anos"
  },
  {
    text: "O atendimento online funciona perfeitamente. A Jumarina tem uma escuta atenta e suas intervenções são sempre muito pontuais e transformadoras.",
    author: "Beatriz S.",
    role: "Paciente - 42 anos"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-40 bg-surface text-cream rounded-t-[3rem] lg:rounded-t-[5rem] -mt-20 z-40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal width="100%">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-20">
            Histórias de <span className="text-secondary italic">transformação</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="bg-primary/50 p-8 pt-12 rounded-[2rem] border border-white/5 relative h-full hover:bg-primary/70 transition-colors hover:-translate-y-2 duration-300 shadow-xl">
                {/* Fixed Icon Position */}
                <div className="absolute -top-6 left-8 bg-secondary text-primary rounded-full p-4 shadow-lg border-4 border-surface">
                  <Quote size={24} fill="currentColor" />
                </div>
                
                <div className="flex flex-col h-full">
                  <p className="text-cream/90 italic mb-8 leading-relaxed text-lg flex-grow">
                    "{testimonial.text}"
                  </p>
                  <div className="pt-6 border-t border-white/5">
                    <p className="font-serif font-bold text-xl text-cream text-secondary">{testimonial.author}</p>
                    <p className="text-sm text-cream/60 uppercase tracking-wider font-medium mt-1">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};