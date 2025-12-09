import React from 'react';
import { Reveal } from './Reveal';
import { Testimonial } from '../types';
import { Quote, Star } from 'lucide-react';

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
    <section className="py-32 bg-surface text-cream rounded-t-[3rem] lg:rounded-t-[5rem] -mt-20 z-40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal width="100%">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">
            Histórias de <span className="text-secondary italic">transformação</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="group bg-primary border border-white/5 rounded-3xl p-8 relative h-full flex flex-col hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1 shadow-xl">
                
                {/* Internal Header with Icon */}
                <div className="flex justify-between items-start mb-6">
                   <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-cream transition-colors duration-300">
                      <Quote size={20} fill="currentColor" />
                   </div>
                   <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={14} className="fill-secondary text-secondary" />
                      ))}
                   </div>
                </div>

                <p className="text-cream/80 italic leading-relaxed text-lg mb-8 flex-grow">
                  "{testimonial.text}"
                </p>

                <div className="mt-auto border-t border-white/10 pt-4 flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white font-serif font-bold">
                      {testimonial.author.charAt(0)}
                   </div>
                   <div>
                      <p className="font-serif font-bold text-lg text-cream">{testimonial.author}</p>
                      <p className="text-xs text-cream/50 uppercase tracking-wider font-medium">{testimonial.role}</p>
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