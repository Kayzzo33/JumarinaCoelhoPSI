import React from 'react';
import { Reveal } from './Reveal';
import { GraduationCap, Heart, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="relative py-32 bg-cream text-primary rounded-t-[3rem] lg:rounded-t-[5rem] -mt-16 z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
             <Reveal>
               <h2 className="font-serif text-5xl md:text-6xl text-primary font-bold">
                 Sobre <span className="text-secondary italic">mim</span>
               </h2>
             </Reveal>
             
             <Reveal delay={0.1}>
               <p className="text-xl text-primary/80 leading-relaxed font-medium">
                 Sou <strong>Jumarina Coelho</strong> (CRP 03/31560), psicóloga apaixonada pelo potencial humano de transformação. 
                 Minha atuação é pautada na ética, no acolhimento e na ciência.
               </p>
             </Reveal>

             <Reveal delay={0.2}>
               <p className="text-lg text-primary/70 leading-relaxed">
                 Como pós-graduanda em <strong>Terapia Cognitivo Comportamental</strong> e <strong>Psicologia Hospitalar</strong>, 
                 busco compreender o ser humano de forma integral, unindo o cuidado clínico à compreensão dos processos de saúde e doença.
               </p>
             </Reveal>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
               <Reveal delay={0.3}>
                 <div className="p-8 bg-white rounded-2xl shadow-lg border border-stone-100 hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                   <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                      <GraduationCap className="text-secondary" size={24} />
                   </div>
                   <h3 className="font-serif text-2xl font-bold mb-3">Formação Sólida</h3>
                   <p className="text-base text-primary/60 leading-relaxed">Constante atualização em TCC e práticas baseadas em evidências científicas.</p>
                 </div>
               </Reveal>
               <Reveal delay={0.4}>
                 <div className="p-8 bg-white rounded-2xl shadow-lg border border-stone-100 hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                   <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                      <Heart className="text-secondary" size={24} />
                   </div>
                   <h3 className="font-serif text-2xl font-bold mb-3">Escuta Ativa</h3>
                   <p className="text-base text-primary/60 leading-relaxed">Um espaço seguro, confidencial e livre de julgamentos para você ser quem é.</p>
                 </div>
               </Reveal>
             </div>
          </div>

          {/* Image Composition */}
          <div className="relative pt-12 lg:pt-0">
            <Reveal direction="right" delay={0.2}>
               <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://drive.google.com/uc?export=view&id=16k8boZOesQQJ-urQr_2jptkkWgobcQPc" 
                    alt="Jumarina Coelho" 
                    className="rounded-3xl w-full h-80 object-cover transform translate-y-12 shadow-2xl border-4 border-white"
                  />
                  <img 
                    src="https://drive.google.com/uc?export=view&id=1nMDYoIXNVXRPuds39sHG4gQ393yO6PBf" 
                    alt="Detalhes" 
                    className="rounded-3xl w-full h-80 object-cover shadow-2xl border-4 border-white"
                  />
               </div>
               {/* Decorative Quote */}
               <div className="absolute -bottom-12 -left-8 bg-surface p-8 rounded-tr-[40px] rounded-bl-[40px] max-w-sm shadow-2xl hidden md:block border-l-4 border-secondary">
                 <BookOpen className="text-secondary mb-4" size={28} />
                 <p className="text-cream text-lg italic font-serif leading-relaxed">
                   "A mudança começa quando aceitamos quem somos, para então descobrir quem podemos ser."
                 </p>
               </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};