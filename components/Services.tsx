import React from 'react';
import { Reveal } from './Reveal';
import { ServiceItem } from '../types';
import { Brain, HeartHandshake, Sparkles, Anchor, Smile, Activity, ArrowUpRight } from 'lucide-react';

const services: ServiceItem[] = [
  {
    title: 'TCC',
    description: 'Terapia Cognitivo Comportamental: reestruturação de pensamentos para aliviar o sofrimento.',
    icon: <Brain size={32} />
  },
  {
    title: 'Psicologia Hospitalar',
    description: 'Apoio emocional frente ao adoecimento, cirurgias, hospitalização e processos de luto.',
    icon: <Activity size={32} />
  },
  {
    title: 'Ansiedade e Depressão',
    description: 'Técnicas e estratégias práticas para regulação emocional e retomada da qualidade de vida.',
    icon: <Anchor size={32} />
  },
  {
    title: 'Autoestima',
    description: 'Fortalecimento do autoamor, autoimagem e desenvolvimento profundo do autoconhecimento.',
    icon: <Sparkles size={32} />
  },
  {
    title: 'Relacionamentos',
    description: 'Desenvolvimento de habilidades sociais, melhoria na comunicação e resolução de conflitos.',
    icon: <HeartHandshake size={32} />
  },
  {
    title: 'Gestão Emocional',
    description: 'Aprendizado sobre como identificar e lidar com sentimentos intensos de forma saudável.',
    icon: <Smile size={32} />
  },
];

export const Services: React.FC = () => {
  return (
    <section id="especialidades" className="py-40 bg-surface text-cream rounded-t-[3rem] lg:rounded-t-[5rem] -mt-20 z-30 relative overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <Reveal width="100%">
            <span className="text-secondary uppercase tracking-widest text-sm font-bold block mb-4">Áreas de Atuação</span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
              Como posso <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-cream">te ajudar?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="max-w-md">
            <p className="text-cream/70 text-xl leading-relaxed">
              Ofereço um tratamento personalizado, focado nas suas necessidades específicas e objetivos terapêuticos.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.1}>
              <div className="group relative h-full">
                {/* Unique Card Design: "Stacked Paper" Effect */}
                <div className="absolute inset-0 bg-secondary/20 rounded-[2rem] transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                
                <div className="relative h-full bg-[#46525d] p-8 rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-300 group-hover:-translate-y-1">
                  
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center text-secondary border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <ArrowUpRight className="text-white/20 group-hover:text-secondary transition-colors" size={28} />
                    </div>

                    <h3 className="font-serif text-3xl font-bold mb-4 text-cream group-hover:text-secondary transition-colors">{service.title}</h3>
                    
                    <p className="text-cream/70 text-lg leading-relaxed mb-4">
                      {service.description}
                    </p>
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