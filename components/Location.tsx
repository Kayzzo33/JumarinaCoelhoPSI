import React from 'react';
import { Reveal } from './Reveal';
import { MapPin, Clock, Phone } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section className="py-24 bg-cream text-primary relative z-40">
       <div className="max-w-7xl mx-auto px-6">
         <Reveal width="100%">
           <div className="bg-white rounded-[2.5rem] p-4 md:p-8 shadow-xl border border-secondary/10 overflow-hidden">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               
               {/* Map Area */}
               <div className="w-full h-80 lg:h-auto rounded-[2rem] overflow-hidden relative min-h-[300px]">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.996162608447!2d-40.4332454!3d-13.4385153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7405e3a00000001%3A0x0!2sMarac%C3%A1s%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   className="absolute inset-0"
                 ></iframe>
               </div>

               {/* Info Area */}
               <div className="flex flex-col justify-center p-4 lg:p-8 space-y-8">
                  <div>
                    <h3 className="font-serif text-3xl font-bold mb-2">Localização</h3>
                    <p className="text-primary/60 text-lg">Atendimento presencial e online</p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-surface text-cream rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Endereço</h4>
                        <p className="text-primary/70 text-lg">Centro<br/>Maracás - BA, 45360-000</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-surface text-cream rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Horários</h4>
                        <p className="text-primary/70 text-lg">Segunda a Sexta: 08h às 18h<br/>Sábados: 08h às 12h</p>
                      </div>
                    </div>
                  </div>

                  <a 
                    href="#contato"
                    className="inline-block w-full text-center bg-secondary text-cream py-4 rounded-xl font-bold text-lg hover:bg-secondary/90 transition-all hover:scale-[1.02]"
                  >
                    Agendar Visita
                  </a>
               </div>
             </div>
           </div>
         </Reveal>
       </div>
    </section>
  );
};