import React from 'react';
import { Reveal } from './Reveal';
import { ServiceItem } from '../types';
import { Brain, HeartHandshake, Sparkles, Anchor, Smile, Activity, ArrowUpRight } from 'lucide-react';
import { GlowingEffect } from './ui/GlowingEffect';
import { cn } from '../lib/utils';

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none relative", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/10 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-white/5 bg-surface/80 p-6 shadow-sm shadow-secondary/5 md:p-6 backdrop-blur-sm">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-white/10 bg-primary/50 p-3 text-secondary">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-2xl font-serif font-semibold tracking-wide text-balance text-cream">
                {title}
              </h3>
              <p className="font-sans text-lg text-cream/70 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export const Services: React.FC = () => {
  return (
    <section id="especialidades" className="py-40 bg-primary text-cream rounded-t-[3rem] lg:rounded-t-[5rem] -mt-20 z-30 relative overflow-hidden">
      
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

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GridItem
            area="col-span-1"
            icon={<Brain className="h-6 w-6" />}
            title="TCC"
            description="Terapia Cognitivo Comportamental: reestruturação de pensamentos para aliviar o sofrimento."
          />
          <GridItem
            area="col-span-1"
            icon={<Activity className="h-6 w-6" />}
            title="Psicologia Hospitalar"
            description="Apoio emocional frente ao adoecimento, cirurgias, hospitalização e processos de luto."
          />
          <GridItem
            area="col-span-1"
            icon={<Anchor className="h-6 w-6" />}
            title="Ansiedade e Depressão"
            description="Técnicas e estratégias práticas para regulação emocional e retomada da qualidade de vida."
          />
          <GridItem
            area="col-span-1"
            icon={<Sparkles className="h-6 w-6" />}
            title="Autoestima"
            description="Fortalecimento do autoamor, autoimagem e desenvolvimento profundo do autoconhecimento."
          />
          <GridItem
            area="col-span-1"
            icon={<HeartHandshake className="h-6 w-6" />}
            title="Relacionamentos"
            description="Desenvolvimento de habilidades sociais, melhoria na comunicação e resolução de conflitos."
          />
          <GridItem
            area="col-span-1"
            icon={<Smile className="h-6 w-6" />}
            title="Gestão Emocional"
            description="Aprendizado sobre como identificar e lidar com sentimentos intensos de forma saudável."
          />
        </ul>

      </div>
    </section>
  );
};