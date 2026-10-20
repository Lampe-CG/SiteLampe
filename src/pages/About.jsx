import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
  const [selectedPerson, setSelectedPerson] = useState('lara');
  const [isLit, setIsLit] = useState(false);

  const team = {
    lara: {
      name: 'Lara Andrade',
      role: 'Fundadora / Especialista em Propriedade Intelectual & Registro de Marcas',
      desc: 'Advogada com atuação estratégica em Propriedade Intelectual, voltada à proteção e valorização de marcas, negócios e ativos intangíveis. Especialista em registro de marcas, direitos autorais, contratos e proteção jurídica da inovação. Mestre em Desenvolvimento Regional pela UEPB, alia conhecimento jurídico e visão de negócios para transformar inovação em segurança, exclusividade e valor. ',
    },
    pedro: {
      name: 'Pedro Crisologo',
      role: 'Fundador / Especialista em Propriedade Intelectual & Patentes',
      desc: 'Consultor de projetos de Engenharia Mecânica voltados para a área de inovação. Atua como representante dos Projetos de Mobilidade da UFCG, e consultor de projetos desenvolvidos por laboratórios parceiros na UEPB. Pesquisador do Programa Institucional de Bolsas de Iniciação em Desenvolvimento Tecnológico e Inovação, responsável pelo projeto intitulado Transformação Digital Aplicada ao Desenvolvimento de Sistema Preditivo e Telemetria Embarcada em Veículo Fórmula SAE.',
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex-1 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 text-muted relative overflow-hidden min-h-[calc(100vh-80px)] justify-between bg-gradient-to-b from-page to-page-2 transition-colors duration-300"
    >
      {/* Formas orgânicas de fundo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-lampe-yellow/15 dark:bg-lampe-yellow/10 blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-lampe-navy/10 dark:bg-lampe-navy/30 blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl w-full mx-auto z-10 flex-grow flex flex-col justify-between gap-10">

        {/* Cabeçalho Padronizado */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-outfit font-semibold text-ink tracking-tight">
            Quem <span className="bg-lampe-yellow/50 dark:bg-transparent dark:text-lampe-yellow px-3 rounded-xl">Somos</span>
          </h1>
          <p className="mt-5 text-muted/80 font-light text-base sm:text-lg max-w-xl mx-auto px-4">
            Conheça as mentes brilhantes por trás da proteção das maiores ideias e marcas nacionais.
          </p>
        </div>

        {/* 3-Column Layout (Pedro - Lightbulb - Lara) */}
        <div className="grid grid-cols-3 items-center gap-4 sm:gap-8 max-w-3xl mx-auto w-full my-auto">

          {/* Column 1: Pedro */}
          <div
            className="flex flex-col items-center justify-end cursor-pointer"
            onMouseEnter={() => setSelectedPerson('pedro')}
            onClick={() => setSelectedPerson('pedro')}
          >
            <div className="h-72 sm:h-80 md:h-[350px] flex items-end justify-center">
              <img
                src={`${import.meta.env.BASE_URL}Pedro.png`}
                alt="Pedro"
                className={`w-auto max-h-full object-contain ${selectedPerson === 'pedro'
                  ? 'opacity-100 grayscale-0 drop-shadow-[0_15px_35px_rgba(20,51,77,0.35)] dark:drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] scale-105 transition-all duration-300'
                  : 'opacity-60 grayscale brightness-90 transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_10px_25px_rgba(20,51,77,0.25)]'
                  }`}
              />
            </div>
            <span
              className={`mt-4 text-xs sm:text-sm font-semibold font-outfit transition-colors duration-300 px-4 py-1.5 rounded-full ${selectedPerson === 'pedro' ? 'text-lampe-graphite bg-lampe-yellow' : 'text-muted/60'
                }`}
            >
              Pedro
            </span>
          </div>

          {/* Column 2: Interactive Lightbulb — sem fundo quando desligada */}
          <div className="flex flex-col items-center justify-center">
            <button
              type="button"
              onClick={() => setIsLit(!isLit)}
              aria-pressed={isLit}
              aria-label="Acender a Lampe"
              className="p-4 cursor-pointer focus:outline-none"
            >
              <img
                src={`${import.meta.env.BASE_URL}lampe-icon.png`}
                alt="LAMPE"
                draggable={false}
                className={`h-16 sm:h-20 w-auto object-contain select-none transition-all duration-300 ${isLit
                  ? 'opacity-100 grayscale-0 scale-110 drop-shadow-[0_0_22px_rgba(244,196,22,0.9)]'
                  : 'opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 hover:drop-shadow-[0_0_14px_rgba(244,196,22,0.6)]'
                  }`}
              />
            </button>
          </div>

          {/* Column 3: Lara */}
          <div
            className="flex flex-col items-center justify-end cursor-pointer"
            onMouseEnter={() => setSelectedPerson('lara')}
            onClick={() => setSelectedPerson('lara')}
          >
            <div className="h-72 sm:h-80 md:h-[350px] flex items-end justify-center">
              <img
                src={`${import.meta.env.BASE_URL}Lara.png`}
                alt="Lara"
                className={`w-auto max-h-full object-contain ${selectedPerson === 'lara'
                  ? 'opacity-100 grayscale-0 drop-shadow-[0_15px_35px_rgba(20,51,77,0.35)] dark:drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] scale-105 transition-all duration-300'
                  : 'opacity-60 grayscale brightness-90 transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_10px_25px_rgba(20,51,77,0.25)]'
                  }`}
              />
            </div>
            <span
              className={`mt-4 text-xs sm:text-sm font-semibold font-outfit transition-colors duration-300 px-4 py-1.5 rounded-full ${selectedPerson === 'lara' ? 'text-lampe-graphite bg-lampe-yellow' : 'text-muted/60'
                }`}
            >
              Lara
            </span>
          </div>

        </div>

        {/* Dynamic Detail Area */}
        <div className="bg-surface rounded-3xl p-8 relative overflow-hidden min-h-[255px] shadow-[0_10px_40px_-10px_rgba(20,51,77,0.15)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
          <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-lampe-yellow/15 blur-3xl pointer-events-none"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPerson}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 space-y-4 text-center md:text-left"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-outfit font-semibold text-ink">
                  {team[selectedPerson].name}
                </h3>
                <span className="text-xs sm:text-sm text-muted font-medium tracking-wide">
                  {team[selectedPerson].role}
                </span>
              </div>
              <p className="text-muted/80 font-light text-sm sm:text-base leading-relaxed text-justify">
                {team[selectedPerson].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </motion.div>
  );
}
