import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Como Funciona', href: '#processo' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if at top
      setIsAtTop(currentScrollY < 50);

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else {
        // Show if scrolling up, hide if scrolling down
        if (currentScrollY < lastScrollY) {
           setIsVisible(true);
        } else {
           setIsVisible(false);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <>
      <nav 
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-0 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isAtTop ? 'top-0 py-6' : 'top-4'}`}
      >
        <div 
          className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 ${
            isAtTop 
              ? 'bg-transparent px-6' 
              : 'bg-primary/80 backdrop-blur-md shadow-2xl border border-white/10 rounded-full px-8 py-3'
          }`}
        >
          <a href="#" className="flex flex-col group">
            <span className={`font-serif text-2xl font-bold tracking-wide transition-colors ${!isAtTop ? 'text-cream' : 'text-cream'}`}>
              Jumarina Coelho
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-cream/90 hover:text-secondary text-base font-medium tracking-wide transition-all relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-secondary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              className="px-6 py-2 bg-secondary text-cream rounded-full font-medium text-sm hover:bg-secondary/90 transform hover:scale-105 transition-all shadow-lg hover:shadow-secondary/20"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cream hover:text-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-4 right-4 mt-2 bg-primary/95 backdrop-blur-xl border border-white/10 rounded-3xl transition-all duration-300 ease-in-out overflow-hidden shadow-2xl origin-top ${
            isOpen ? 'max-h-96 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
          }`}
        >
          <div className="flex flex-col p-6 space-y-4 text-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-cream text-lg font-medium hover:text-secondary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="inline-block px-6 py-3 bg-secondary text-cream rounded-xl font-medium hover:bg-secondary/90 transition-all w-full"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};