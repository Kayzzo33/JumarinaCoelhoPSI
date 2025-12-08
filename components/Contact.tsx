import React from 'react';
import { Reveal } from './Reveal';
import { Instagram, Mail, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-32 bg-primary text-cream rounded-t-[3rem] lg:rounded-t-[5rem] -mt-20 z-50 relative">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal width="100%">
          <div className="bg-gradient-to-br from-surface to-slate-900 rounded-[3rem] p-8 md:p-20 text-center border border-white/5 relative overflow-hidden shadow-2xl">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none animate-pulse"></div>
            
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 relative z-10 leading-tight">
              Pronto para priorizar <br/><span className="text-secondary italic">sua saúde mental?</span>
            </h2>
            
            <p className="text-xl text-cream/70 mb-12 max-w-xl mx-auto relative z-10 leading-relaxed">
              O primeiro passo pode parecer difícil, mas você não precisa caminhar sozinho. Entre em contato e agende sua consulta.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
              <a 
                href="https://wa.me/5573900000000" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-secondary text-cream rounded-full font-bold text-lg hover:bg-secondary/90 transform hover:-translate-y-1 transition-all shadow-xl shadow-secondary/20 hover:shadow-secondary/40"
              >
                <Phone size={24} />
                Agendar pelo WhatsApp
              </a>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12 relative z-10">
               <a href="https://www.instagram.com/juhsilva7225/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cream/60 hover:text-secondary transition-colors text-lg">
                  <Instagram size={24} />
                  <span className="">@juhsilva7225</span>
               </a>
               <a href="mailto:contato@jumarinacoelho.com" className="flex items-center gap-2 text-cream/60 hover:text-secondary transition-colors text-lg">
                  <Mail size={24} />
                  <span className="">contato@jumarinacoelho.com</span>
               </a>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};