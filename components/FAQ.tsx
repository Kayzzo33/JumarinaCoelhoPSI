import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { FAQItem } from '../types';
import { Plus, Minus } from 'lucide-react';

const faqs: FAQItem[] = [
  {
    question: "Quanto tempo dura cada sessão?",
    answer: "As sessões têm duração média de 50 minutos. Este tempo é reservado exclusivamente para você, garantindo um atendimento de qualidade e sem pressa."
  },
  {
    question: "Como funciona o atendimento online?",
    answer: "O atendimento online é realizado através de vídeo chamada (Google Meet ou WhatsApp), com a mesma ética, sigilo e qualidade do presencial. Você só precisa de um local reservado e boa conexão com internet."
  },
  {
    question: "Você atende por convênio?",
    answer: "Atendo exclusivamente na modalidade particular. No entanto, emito recibo para que você possa solicitar o reembolso junto ao seu plano de saúde, caso ele ofereça essa opção."
  },
  {
    question: "Qual a frequência das sessões?",
    answer: "Geralmente, as sessões são semanais, especialmente no início do tratamento. Conforme o progresso terapêutico, podemos espaçar os encontros para quinzenais ou mensais."
  },
  {
    question: "Como agendar uma consulta?",
    answer: "O agendamento é feito de forma simples pelo WhatsApp. Basta clicar no botão de contato aqui no site, e conversaremos para encontrar o melhor horário para você."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-40 bg-cream text-primary rounded-t-[3rem] lg:rounded-t-[5rem] -mt-20 z-50 relative">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal width="100%">
          <h2 className="font-serif text-5xl md:text-6xl text-center font-bold mb-20">
            Perguntas Frequentes
          </h2>
        </Reveal>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className={`bg-white rounded-3xl border transition-all duration-300 ${openIndex === index ? 'border-secondary shadow-lg scale-[1.01]' : 'border-secondary/10 shadow-sm hover:shadow-md'}`}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <span className={`font-serif text-2xl md:text-3xl font-medium ${openIndex === index ? 'text-secondary' : 'text-primary'}`}>
                    {faq.question}
                  </span>
                  <span className={`transition-transform duration-300 bg-surface/5 p-3 rounded-full flex-shrink-0 ml-4 ${openIndex === index ? 'rotate-180 text-secondary bg-secondary/10' : 'text-primary/40'}`}>
                    {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                  </span>
                </button>
                <div 
                  className={`px-8 transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-primary/70 text-xl leading-relaxed border-t border-stone-100 pt-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};