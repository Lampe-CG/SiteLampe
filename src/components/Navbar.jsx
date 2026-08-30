import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos?tipo=marca' },
    { name: 'Quem Somos', path: '/quem-somos' },
    { name: 'Contato', path: '/contato' },
  ];

  const activeLinkClass = "text-[#F8DE62] text-glow font-bold border-b-2 border-[#F8DE62] pb-1";
  const inactiveLinkClass = "text-neutral-400 hover:text-[#F8DE62] hover:text-glow transition-all duration-300 pb-1 hover:border-b-2 hover:border-[#F8DE62]/50";

  const isLinkActive = (path) => {
    if (path.startsWith('/servicos')) {
      return location.pathname.startsWith('/servicos');
    }
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-neutral-950 backdrop-blur-md border-b border-neutral-900 w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">

        {/* Logo / Marca */}
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
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 h-full">
          {navLinks.map((link) => (
            link.path.startsWith('/servicos') ? (
              <div
                key={link.path}
                className="relative flex items-center h-full cursor-pointer group"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <NavLink
                  to={link.path}
                  onClick={() => setShowDropdown(false)}
                  className={isLinkActive(link.path) ? activeLinkClass : inactiveLinkClass}
                >
                  Serviços
                </NavLink>

                {/* Submenu Dropdown com Hover Bridge */}
                <div
                  className={`absolute top-[70px] left-1/2 -translate-x-1/2 w-60 bg-[#121214] border border-neutral-800 rounded-xl shadow-2xl py-2 z-50 transition-all duration-300 transform ${showDropdown
                    ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                    : 'opacity-0 invisible translate-y-2 pointer-events-none'
                    }`}
                >
                  {/* Hover Bridge: área invisível conectando o link ao dropdown */}
                  <div className="absolute -top-4 left-0 w-full h-4 bg-transparent" />

                  <NavLink
                    to="/servicos?tipo=marca"
                    onClick={() => setShowDropdown(false)}
                    className={`block px-4 py-3 text-sm rounded-lg mx-2 transition-colors font-medium ${location.search === '?tipo=marca' || location.search === ''
                      ? 'text-[#F8DE62] bg-neutral-800/50 font-semibold'
                      : 'text-neutral-400 hover:text-[#F8DE62] hover:bg-neutral-800/40'
                      }`}
                  >
                    Registro de Marca
                  </NavLink>
                  <NavLink
                    to="/servicos?tipo=patentes"
                    onClick={() => setShowDropdown(false)}
                    className={`block px-4 py-3 text-sm rounded-lg mx-2 transition-colors font-medium ${location.search === '?tipo=patentes'
                      ? 'text-[#F8DE62] bg-neutral-800/50 font-semibold'
                      : 'text-neutral-400 hover:text-[#F8DE62] hover:bg-neutral-800/40'
                      }`}
                  >
                    Registro de Patentes
                  </NavLink>
                  <NavLink
                    to="/servicos?tipo=projetos"
                    onClick={() => setShowDropdown(false)}
                    className={`block px-4 py-3 text-sm rounded-lg mx-2 transition-colors font-medium ${location.search === '?tipo=projetos'
                      ? 'text-[#F8DE62] bg-neutral-800/50 font-semibold'
                      : 'text-neutral-400 hover:text-[#F8DE62] hover:bg-neutral-800/40'
                      }`}
                  >
                    Projetos
                  </NavLink>
                </div>
              </div>
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                className={isLinkActive(link.path) ? activeLinkClass : inactiveLinkClass}
              >
                {link.name}
              </NavLink>
            )
          ))}
        </div>

        {/* Menu Hambúrguer (Mobile) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-400 hover:text-[#F8DE62] hover:text-glow focus:outline-none transition-all duration-300 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-neutral-900 absolute left-0 w-full px-6 py-6 space-y-4 flex flex-col transition-all duration-300 z-50">
          {navLinks.map((link) => (
            <React.Fragment key={link.path}>
              {link.path.startsWith('/servicos') ? (
                <div className="flex flex-col space-y-2">
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg py-2 ${isLinkActive(link.path) ? 'text-[#F8DE62] font-bold border-l-4 border-[#F8DE62] pl-3' : 'text-neutral-400 pl-3 hover:text-[#F8DE62] transition-all'}`}
                  >
                    Serviços
                  </NavLink>
                  <div className="pl-6 flex flex-col space-y-2 border-l border-neutral-800 ml-3">
                    <NavLink
                      to="/servicos?tipo=marca"
                      onClick={() => setIsOpen(false)}
                      className={`py-1 transition-all text-sm ${location.search === '?tipo=marca' || location.search === '' ? 'text-[#F8DE62] font-bold' : 'text-neutral-400 hover:text-[#F8DE62]'}`}
                    >
                      Registro de Marca
                    </NavLink>
                    <NavLink
                      to="/servicos?tipo=patentes"
                      onClick={() => setIsOpen(false)}
                      className={`py-1 transition-all text-sm ${location.search === '?tipo=patentes' ? 'text-[#F8DE62] font-bold' : 'text-neutral-400 hover:text-[#F8DE62]'}`}
                    >
                      Registro de Patentes
                    </NavLink>
                    <NavLink
                      to="/servicos?tipo=projetos"
                      onClick={() => setIsOpen(false)}
                      className={`py-1 transition-all text-sm ${location.search === '?tipo=projetos' ? 'text-[#F8DE62] font-bold' : 'text-neutral-400 hover:text-[#F8DE62]'}`}
                    >
                      Projetos
                    </NavLink>
                  </div>
                </div>
              ) : (
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg py-2 ${isLinkActive(link.path) ? 'text-[#F8DE62] font-bold border-l-4 border-[#F8DE62] pl-3' : 'text-neutral-400 pl-3 hover:text-[#F8DE62] hover:border-l-4 hover:border-[#F8DE62]/50 transition-all'}`}
                >
                  {link.name}
                </NavLink>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </nav>
  );
}
