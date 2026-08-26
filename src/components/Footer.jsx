import React from 'react';
import { NavLink } from 'react-router-dom';
import { Lightbulb, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-neutral-900 text-neutral-400 py-12 px-4 sm:px-6 lg:px-8 w-full mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">

        {/* Branding */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-xs text-neutral-600 mt-2">
            &copy; {currentYear} LAMPE. Todos os direitos reservados.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Links Rápidos</h4>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <NavLink to="/" className="hover:text-yellow-400 hover:text-glow transition-colors">Início</NavLink>
            <NavLink to="/servicos" className="hover:text-yellow-400 hover:text-glow transition-colors">Serviços</NavLink>
            <NavLink to="/quem-somos" className="hover:text-yellow-400 hover:text-glow transition-colors">Quem Somos</NavLink>
            <NavLink to="/contato" className="hover:text-yellow-400 hover:text-glow transition-colors">Contato</NavLink>
          </div>
        </div>

        {/* Social / Connect */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Conecte-se Conosco</h4>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-yellow-400 hover:border-yellow-400/40 hover:shadow-[0_0_10px_rgba(250,204,21,0.3)] transition-all duration-300 cursor-pointer"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://wa.me/5581999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-yellow-400 hover:border-yellow-400/40 hover:shadow-[0_0_10px_rgba(250,204,21,0.3)] transition-all duration-300 cursor-pointer"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
            <a
              href="mailto:contato@lampe.com.br"
              className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-yellow-400 hover:border-yellow-400/40 hover:shadow-[0_0_10px_rgba(250,204,21,0.3)] transition-all duration-300 cursor-pointer"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
