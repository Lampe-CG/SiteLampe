import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

export default function About() {
  const [selectedPerson, setSelectedPerson] = useState('lara');
  const [isLit, setIsLit] = useState(false);

  const team = {
    lara: {
      name: 'Lara',
      role: 'Co-fundadora / Especialista em Registro de Marcas',
      desc: 'Advogada com atuação estratégica em Propriedade Intelectual, voltada à proteção e valorização de marcas, negócios e ativos intangíveis. Especialista em registro de marcas, direitos autorais, contratos e proteção jurídica da inovação. Mestre em Desenvolvimento Regional pela UEPB, alia conhecimento jurídico e visão de negócios para transformar inovação em segurança, exclusividade e valor. ',
    },
    pedro: {
      name: 'Pedro',
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
      className="flex-1 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 text-neutral-300 relative overflow-hidden"
    >
      {/* Visual lighting background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-yellow-500/5 blur-[160px] pointer-events-none"></div>

      <div className="max-w-4xl w-full mx-auto z-10 space-y-16">

        {/* Title */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase">
            QUEM <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.4)]">SOMOS</span>
          </h1>
          <p className="max-w-xl mx-auto text-neutral-400 text-sm sm:text-base">
            Conheça as mentes brilhantes por trás da proteção das maiores ideias e marcas nacionais.
          </p>
        </div>

        {/* 3-Column Layout (Pedro - Lightbulb - Lara) */}
        <div className="grid grid-cols-3 items-center gap-4 sm:gap-8 max-w-3xl mx-auto">

          {/* Column 1: Pedro */}
          <div
            className="flex flex-col items-center justify-end cursor-pointer"
            onMouseEnter={() => setSelectedPerson('pedro')}
            onClick={() => setSelectedPerson('pedro')}
          >
            <div className="h-72 sm:h-80 md:h-[350px] flex items-end justify-center">
              <img
                src="/Pedro.png"
                alt="Pedro"
                className={`w-auto max-h-full object-contain ${selectedPerson === 'pedro'
                  ? 'opacity-100 grayscale-0 drop-shadow-[0_0_25px_rgba(250,204,21,0.85)] scale-105 transition-all duration-300'
                  : 'opacity-60 grayscale brightness-75 transition-all duration-300 hover:opacity-100 hover:grayscale-0'
                  }`}
              />
            </div>
            <span className={`mt-4 text-xs sm:text-sm font-bold transition-colors duration-300 ${selectedPerson === 'pedro' ? 'text-yellow-400' : 'text-neutral-500'}`}>
              Pedro
            </span>
          </div>

          {/* Column 2: Interactive Lightbulb */}
          <div className="flex flex-col items-center justify-center">
            <Lightbulb
              size={72}
              onClick={() => setIsLit(!isLit)}
              className={`cursor-pointer ${isLit
                ? 'text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,1)] scale-110 transition-all duration-300'
                : 'text-neutral-600 hover:text-neutral-400 transition-colors duration-300'
                }`}
            />
          </div>

          {/* Column 3: Lara */}
          <div
            className="flex flex-col items-center justify-end cursor-pointer"
            onMouseEnter={() => setSelectedPerson('lara')}
            onClick={() => setSelectedPerson('lara')}
          >
            <div className="h-72 sm:h-80 md:h-[350px] flex items-end justify-center">
              <img
                src="/Lara.png"
                alt="Lara"
                className={`w-auto max-h-full object-contain ${selectedPerson === 'lara'
                  ? 'opacity-100 grayscale-0 drop-shadow-[0_0_25px_rgba(250,204,21,0.85)] scale-105 transition-all duration-300'
                  : 'opacity-60 grayscale brightness-75 transition-all duration-300 hover:opacity-100 hover:grayscale-0'
                  }`}
              />
            </div>
            <span className={`mt-4 text-xs sm:text-sm font-bold transition-colors duration-300 ${selectedPerson === 'lara' ? 'text-yellow-400' : 'text-neutral-500'}`}>
              Lara
            </span>
          </div>

        </div>

        {/* Dynamic Detail Area */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 relative overflow-hidden min-h-[255px]">
          <div className="absolute inset-0 bg-yellow-500/5 blur-xl pointer-events-none"></div>

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
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {team[selectedPerson].name}
                </h3>
                <span className="text-xs sm:text-sm text-yellow-400 font-medium tracking-wide">
                  {team[selectedPerson].role}
                </span>
              </div>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                {team[selectedPerson].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </motion.div>
  );
}
