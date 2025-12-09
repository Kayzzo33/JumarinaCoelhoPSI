import React from 'react';
import { Reveal } from './Reveal';
import { GraduationCap, Heart, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="relative py-24 lg:py-32 bg-cream text-primary rounded-t-[2.5rem] lg:rounded-t-[5rem] -mt-8 md:-mt-16 z-20 scroll-mt-24">
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
                 Sou <strong>Jumarina Coelho</strong> (CRP 03/31560), Bacharel em Psicologia formada em 2024, apaixonada pelo potencial humano de transformação. 
                 Minha atuação é pautada na ética, no acolhimento e na ciência.
               </p>
             </Reveal>

             <Reveal delay={0.2}>
               <p className="text-lg text-primary/70 leading-relaxed">
                 Como pós-graduanda em <strong>Terapia Cognitivo Comportamental (TCC)</strong> e <strong>Psicologia Hospitalar</strong>, 
                 busco compreender o ser humano de forma integral, unindo o cuidado clínico à compreensão dos processos de saúde e doença.
               </p>
             </Reveal>

             <div className="grid grid-cols-1 gap-6 pt-4">
               <Reveal delay={0.3}>
                 <div className="p-6 bg-white rounded-2xl shadow-lg border border-stone-100 flex gap-4 items-start">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                      <GraduationCap className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold mb-1">Formação Acadêmica</h3>
                      <p className="text-sm text-primary/60">Bacharel em Psicologia (2024) • Pós-graduanda em TCC • Pós-graduanda em Psicologia Hospitalar</p>
                    </div>
                 </div>
               </Reveal>
               <Reveal delay={0.4}>
                 <div className="p-6 bg-white rounded-2xl shadow-lg border border-stone-100 flex gap-4 items-start">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                      <Heart className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold mb-1">Abordagem Acolhedora</h3>
                      <p className="text-sm text-primary/60">Um espaço seguro e confidencial, onde sua história é ouvida sem julgamentos.</p>
                    </div>
                 </div>
               </Reveal>
             </div>
          </div>

          {/* Image Composition */}
          <div className="relative pt-12 lg:pt-0">
            <Reveal direction="right" delay={0.2}>
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img 
                      src="https://lh3.googleusercontent.com/d/16k8boZOesQQJ-urQr_2jptkkWgobcQPc" 
                      alt="Jumarina Coelho" 
                      className="rounded-3xl w-full h-64 lg:h-80 object-cover shadow-xl border-4 border-white"
                    />
                    {/* Quote Card */}
                    <div className="bg-surface p-6 rounded-3xl shadow-xl border-l-4 border-secondary">
                       <BookOpen className="text-secondary mb-3" size={24} />
                       <p className="text-cream text-sm md:text-base italic font-serif leading-relaxed">
                         "A mudança começa quando aceitamos quem somos, para então descobrir quem podemos ser."
                       </p>
                     </div>
                  </div>
                  <div className="pt-12">
                    <img 
                      src="https://lh3.googleusercontent.com/d/1nMDYoIXNVXRPuds39sHG4gQ393yO6PBf" 
                      alt="Detalhes do consultório" 
                      className="rounded-3xl w-full h-64 lg:h-80 object-cover shadow-xl border-4 border-white"
                    />
                  </div>
               </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};