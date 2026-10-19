import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep text-lampe-cream/70 py-14 px-4 sm:px-6 lg:px-8 w-full mt-auto rounded-t-[3rem] border-t border-lampe-yellow/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center md:text-left">

        {/* Branding */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img
            src={`${import.meta.env.BASE_URL}lampe-logo-amarelo.png`}
            alt="LAMPE"
            className="h-12 w-auto object-contain"
          />
          <p className="font-outfit text-sm text-lampe-cream/60 max-w-xs leading-relaxed">
            A luz que protege sua ideia. Transformando inovação em segurança, exclusividade e valor de mercado.
          </p>
          <p className="text-xs text-lampe-cream/40 mt-2">
            &copy; {currentYear} LAMPE. Todos os direitos reservados.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center gap-3">
          <h4 className="text-sm font-semibold text-lampe-yellow uppercase tracking-widest mb-2 font-outfit">Links Rápidos</h4>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 text-sm font-outfit">
            <NavLink to="/" className="hover:text-lampe-yellow transition-colors">Início</NavLink>
            <NavLink to="/servicos" className="hover:text-lampe-yellow transition-colors">Serviços</NavLink>
            <NavLink to="/quem-somos" className="hover:text-lampe-yellow transition-colors">Quem Somos</NavLink>
            <NavLink to="/contato" className="hover:text-lampe-yellow transition-colors">Contato</NavLink>
          </div>
        </div>

        {/* Social / Connect */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <h4 className="text-sm font-semibold text-lampe-yellow uppercase tracking-widest mb-2 font-outfit">Conecte-se Conosco</h4>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/lampebr/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-2xl bg-lampe-cream/10 hover:bg-lampe-yellow flex items-center justify-center text-lampe-cream hover:text-lampe-navy transition-all duration-300 cursor-pointer"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5583987048202"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-2xl bg-lampe-cream/10 hover:bg-lampe-yellow flex items-center justify-center text-lampe-cream hover:text-lampe-navy transition-all duration-300 cursor-pointer"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contato@lampebr.com"
              className="w-11 h-11 rounded-2xl bg-lampe-cream/10 hover:bg-lampe-yellow flex items-center justify-center text-lampe-cream hover:text-lampe-navy transition-all duration-300 cursor-pointer"
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
