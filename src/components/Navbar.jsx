import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Lightbulb, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Quem Somos', path: '/quem-somos' },
    { name: 'Contato', path: '/contato' },
  ];

  const activeLinkClass = "text-yellow-400 text-glow font-bold border-b-2 border-yellow-400 pb-1";
  const inactiveLinkClass = "text-neutral-400 hover:text-yellow-400 hover:text-glow transition-all duration-300 pb-1 hover:border-b-2 hover:border-yellow-400/50";

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-900 w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">

        {/* Brand/Logo Section */}
        <NavLink to="/" className="flex items-center gap-3 focus:outline-none">
          <img
            src="/lampe-logo.png"
            alt="LAMPE"
            className="h-10 sm:h-12 w-auto object-contain hover:scale-[1.02] transition-transform duration-300"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.classList.remove('hidden');
              e.target.nextSibling.classList.add('flex');
            }}
          />
          <div className="hidden flex-col leading-tight">
            <span className="text-2xl font-black tracking-widest text-white">
              LAMPE
            </span>
            <span className="text-[8px] sm:text-[9px] text-neutral-500 tracking-wider font-semibold uppercase">
              A Luz que protege sua marca
            </span>
          </div>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? activeLinkClass : inactiveLinkClass
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-400 hover:text-yellow-400 hover:text-glow focus:outline-none transition-all duration-300 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-neutral-900 absolute left-0 w-full px-6 py-6 space-y-4 flex flex-col transition-all duration-300">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg py-2 ${isActive ? 'text-yellow-400 font-bold border-l-4 border-yellow-400 pl-3' : 'text-neutral-400 pl-3 hover:text-yellow-400 hover:border-l-4 hover:border-yellow-400/50 transition-all'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
