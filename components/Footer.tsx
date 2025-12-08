import React, { useState } from 'react';
import { X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<'privacy' | 'terms' | null>(null);

  const closeModal = () => setModalContent(null);

  return (
    <>
      <footer className="bg-primary pt-12 pb-8 text-cream/40 text-sm border-t border-white/5 relative z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <a 
                href="https://www.instagram.com/juhsilva7225/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-serif text-cream text-xl font-bold mb-1 block hover:text-accent transition-colors duration-300"
              >
                Jumarina Coelho
              </a>
              <p>Psicóloga Clínica | CRP 03/31560</p>
            </div>
            
            <div className="flex gap-6">
               <button onClick={() => setModalContent('privacy')} className="hover:text-secondary transition-colors">Política de Privacidade</button>
               <button onClick={() => setModalContent('terms')} className="hover:text-secondary transition-colors">Termos de Uso</button>
            </div>

            <div className="text-center md:text-right">
              <p className="mb-2">
                &copy; {new Date().getFullYear()} Todos os direitos reservados.
              </p>
              <a 
                href="https://www.instagram.com/onzy.company/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs hover:text-accent transition-colors duration-300 flex items-center justify-center md:justify-end gap-1"
              >
                Desenvolvido por <strong>onzy</strong>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Overlay */}
      {modalContent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm">
          <div className="bg-white text-primary p-8 rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative shadow-2xl animate-blob">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-stone-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="prose prose-stone max-w-none">
              {modalContent === 'privacy' ? (
                <>
                  <h2 className="text-2xl font-serif font-bold mb-4">Política de Privacidade</h2>
                  <p className="mb-4">Sua privacidade é importante para nós. É política do consultório de Jumarina Coelho respeitar a sua privacidade em relação a qualquer informação que possamos coletar no site.</p>
                  <h3 className="text-lg font-bold mb-2">1. Coleta de Dados</h3>
                  <p className="mb-4">Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço (como agendamento). Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.</p>
                  <h3 className="text-lg font-bold mb-2">2. Uso de Dados</h3>
                  <p className="mb-4">Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-serif font-bold mb-4">Termos de Uso</h2>
                  <p className="mb-4">Ao acessar o site de Jumarina Coelho, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis.</p>
                  <h3 className="text-lg font-bold mb-2">1. Uso de Licença</h3>
                  <p className="mb-4">É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site, apenas para visualização transitória pessoal e não comercial.</p>
                  <h3 className="text-lg font-bold mb-2">2. Isenção de responsabilidade</h3>
                  <p className="mb-4">Os materiais no site são fornecidos 'como estão'. Jumarina Coelho não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};