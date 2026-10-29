import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import useTheme from '../hooks/useTheme';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos?tipo=marca' },
    { name: 'Quem Somos', path: '/quem-somos' },
    { name: 'Contato', path: '/contato' },
  ];

  const activeLinkClass = "text-lampe-graphite font-semibold bg-lampe-yellow px-4 py-2 rounded-full";
  const inactiveLinkClass = "text-muted hover:text-ink hover:bg-surface px-4 py-2 rounded-full transition-all duration-300";

  const isLinkActive = (path) => {
    if (path.startsWith('/servicos')) {
      return location.pathname.startsWith('/servicos');
    }
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-page/80 backdrop-blur-xl border-b border-line w-full px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">

        {/* Logo / Marca — troca conforme o tema */}
        <NavLink to="/" className="flex items-center gap-3 focus:outline-none">
          <img
            src={`${import.meta.env.BASE_URL}${theme === 'dark' ? 'lampe-logo-amarelo.png' : 'lampe-logo-amarelo.png'}`}
            alt="LAMPE"
            className="h-10 sm:h-12 w-auto object-contain hover:scale-[1.02] transition-transform duration-300"
          />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2 h-full">
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
                  className={`flex items-center gap-1.5 ${isLinkActive(link.path) ? activeLinkClass : inactiveLinkClass}`}
                >
                  Serviços
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                </NavLink>

                {/* Submenu Dropdown com Hover Bridge */}
                <div
                  className={`absolute top-[70px] left-1/2 -translate-x-1/2 w-64 bg-surface border border-line rounded-2xl shadow-[0_20px_50px_-12px_rgba(20,51,77,0.25)] py-2 z-50 transition-all duration-300 transform ${showDropdown
                    ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                    : 'opacity-0 invisible translate-y-2 pointer-events-none'
                    }`}
                >
                  {/* Hover Bridge: área invisível conectando o link ao dropdown */}
                  <div className="absolute -top-4 left-0 w-full h-4 bg-transparent" />

                  <NavLink
                    to="/servicos?tipo=marca"
                    onClick={() => setShowDropdown(false)}
                    className={`block px-4 py-3 text-sm rounded-xl mx-2 transition-colors font-medium ${location.search === '?tipo=marca' || location.search === ''
                      ? 'text-lampe-graphite bg-lampe-yellow font-semibold'
                      : 'text-muted hover:text-ink hover:bg-page'
                      }`}
                  >
                    Registro de Marca
                  </NavLink>
                  <NavLink
                    to="/servicos?tipo=patentes"
                    onClick={() => setShowDropdown(false)}
                    className={`block px-4 py-3 text-sm rounded-xl mx-2 transition-colors font-medium ${location.search === '?tipo=patentes'
                      ? 'text-lampe-graphite bg-lampe-yellow font-semibold'
                      : 'text-muted hover:text-ink hover:bg-page'
                      }`}
                  >
                    Registro de Patentes
                  </NavLink>
                  <NavLink
                    to="/servicos?tipo=projetos"
                    onClick={() => setShowDropdown(false)}
                    className={`block px-4 py-3 text-sm rounded-xl mx-2 transition-colors font-medium ${location.search === '?tipo=projetos'
                      ? 'text-lampe-graphite bg-lampe-yellow font-semibold'
                      : 'text-muted hover:text-ink hover:bg-page'
                      }`}
                  >
                    Desenvolvimento de Projetos
                  </NavLink>
                  <NavLink
                    to="/servicos?tipo=software"
                    onClick={() => setShowDropdown(false)}
                    className={`block px-4 py-3 text-sm rounded-xl mx-2 transition-colors font-medium ${location.search === '?tipo=software'
                      ? 'text-lampe-graphite bg-lampe-yellow font-semibold'
                      : 'text-muted hover:text-ink hover:bg-page'
                      }`}
                  >
                    Desenvolvimento de Software
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

        {/* Toggle de tema + Menu Mobile */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            className="p-2.5 rounded-full bg-surface border border-line text-ink hover:bg-lampe-yellow hover:border-lampe-yellow hover:text-lampe-graphite transition-all duration-300 cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ink hover:text-lampe-yellow focus:outline-none transition-all duration-300 cursor-pointer p-2 rounded-full hover:bg-surface"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      {isOpen && (
        <div className="md:hidden bg-page/95 backdrop-blur-xl border-b border-line absolute left-0 w-full px-6 py-6 space-y-2 flex flex-col transition-all duration-300 z-50">
          {navLinks.map((link) => (
            <React.Fragment key={link.path}>
              {link.path.startsWith('/servicos') ? (
                <div className="flex flex-col space-y-1">
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-base py-2.5 px-4 rounded-xl transition-all ${isLinkActive(link.path) ? 'text-lampe-graphite font-semibold bg-lampe-yellow' : 'text-muted hover:text-ink hover:bg-surface'}`}
                  >
                    Serviços
                  </NavLink>
                  <div className="pl-4 flex flex-col space-y-1 ml-3">
                    <NavLink
                      to="/servicos?tipo=marca"
                      onClick={() => setIsOpen(false)}
                      className={`py-2 px-4 rounded-xl transition-all text-sm ${location.search === '?tipo=marca' || location.search === '' ? 'text-lampe-graphite font-semibold bg-lampe-yellow' : 'text-muted hover:text-ink'}`}
                    >
                      Registro de Marca
                    </NavLink>
                    <NavLink
                      to="/servicos?tipo=patentes"
                      onClick={() => setIsOpen(false)}
                      className={`py-2 px-4 rounded-xl transition-all text-sm ${location.search === '?tipo=patentes' ? 'text-lampe-graphite font-semibold bg-lampe-yellow' : 'text-muted hover:text-ink'}`}
                    >
                      Registro de Patentes
                    </NavLink>
                    <NavLink
                      to="/servicos?tipo=projetos"
                      onClick={() => setIsOpen(false)}
                      className={`py-2 px-4 rounded-xl transition-all text-sm ${location.search === '?tipo=projetos' ? 'text-lampe-graphite font-semibold bg-lampe-yellow' : 'text-muted hover:text-ink'}`}
                    >
                      Desenvolvimento de Projetos
                    </NavLink>
                    <NavLink
                      to="/servicos?tipo=software"
                      onClick={() => setIsOpen(false)}
                      className={`py-2 px-4 rounded-xl transition-all text-sm ${location.search === '?tipo=software' ? 'text-lampe-graphite font-semibold bg-lampe-yellow' : 'text-muted hover:text-ink'}`}
                    >
                      Desenvolvimento de Software
                    </NavLink>
                  </div>
                </div>
              ) : (
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base py-2.5 px-4 rounded-xl transition-all ${isLinkActive(link.path) ? 'text-lampe-graphite font-semibold bg-lampe-yellow' : 'text-muted hover:text-ink hover:bg-surface'}`}
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
