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
    <section className="py-32 bg-primary text-cream rounded-t-[3rem] lg:rounded-t-[5rem] -mt-20 z-40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal width="100%">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">
            Histórias de <span className="text-secondary italic">transformação</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="bg-white/5 p-10 rounded-[2rem] border border-white/5 relative h-full hover:bg-white/10 transition-colors hover:-translate-y-2 duration-300">
                <div className="absolute -top-6 left-8 bg-secondary rounded-full p-3 shadow-lg">
                  <Quote className="text-primary" size={24} fill="currentColor" />
                </div>
                <p className="text-cream/80 italic mb-8 leading-relaxed text-lg pt-4">
                  "{testimonial.text}"
                </p>
                <div className="mt-auto pt-6 border-t border-white/5">
                  <p className="font-serif font-bold text-xl text-cream">{testimonial.author}</p>
                  <p className="text-sm text-secondary uppercase tracking-wider font-medium">{testimonial.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};