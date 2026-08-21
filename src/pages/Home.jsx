import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Shield, ShieldCheck, Award, ArrowRight } from 'lucide-react';

export default function Home() {
  const customerLogos = [
    { name: 'BetaTech', svgPath: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
    { name: 'AlfaCorp', svgPath: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z' },
    { name: 'OmegaSys', svgPath: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z' },
    { name: 'GlowMedia', svgPath: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex-1 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 text-neutral-300 relative overflow-hidden"
    >
      {/* Glow backgrounds */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-yellow-500/5 blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl w-full mx-auto z-10 space-y-20">
        
        {/* A. Hero Section (Topo da Página) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column (Video Embed) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full relative aspect-video rounded-2xl overflow-hidden border border-yellow-500/30 drop-shadow-[0_0_20px_rgba(250,204,21,0.15)] hover:border-yellow-400/60 hover:drop-shadow-[0_0_30px_rgba(250,204,21,0.35)] transition-all duration-500"
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1"
              title="LAMPE Apresentação"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* Right Column (Text Content) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6 flex flex-col justify-center"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/5 text-yellow-400 text-xs font-semibold uppercase tracking-wider self-start animate-pulse">
              <Lightbulb className="w-3.5 h-3.5 text-yellow-400 animate-lamp-flicker" />
              Assessoria Jurídica de Elite
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              A Solução Eficiente para <br />
              <span className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.3)]">
                Segurança da sua Ideia
              </span>
            </h2>
            <p className="text-neutral-400 leading-relaxed text-base sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-neutral-400 leading-relaxed text-base">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </motion.div>
        </section>

        {/* Highlight Block (Chamada Principal e CTA) */}
        <section className="text-center py-12 px-6 rounded-3xl border border-neutral-900 bg-gradient-to-b from-neutral-950 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-500/5 blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-3xl mx-auto space-y-8 z-10 relative">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none">
              TEVE UMA IDEIA? <br className="hidden sm:inline" />
              <span className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">
                TEM QUE TER LAMPE!
              </span>
            </h1>

            <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium erat at feugiat tempor. Mauris ultrices felis purus, sed hendrerit enim mattis ut.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <a
                href="https://wa.me/5581999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-base sm:text-lg rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:shadow-[0_0_35px_rgba(250,204,21,0.7)] cursor-pointer"
              >
                REGISTRE JÁ A SUA MARCA!
                <ArrowRight className="w-5 h-5 text-black" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* B. Seção Prova Social ("EMPRESAS QUE ACENDERAM SEUS NEGÓCIOS") */}
        <section className="space-y-10 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wider uppercase">
              EMPRESAS QUE <span className="text-yellow-400">ACENDERAM</span> SEUS NEGÓCIOS
            </h2>
            <p className="text-neutral-500 text-sm max-w-lg mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {customerLogos.map((logo, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-neutral-900 bg-neutral-950/40 flex flex-col items-center justify-center gap-4 transition-all duration-500 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 hover:border-yellow-400/40 hover:shadow-[0_0_25px_rgba(250,204,21,0.25)] hover:drop-shadow-[0_0_15px_rgba(250,204,21,0.8)] group cursor-pointer"
              >
                <svg
                  className="w-12 h-12 text-neutral-400 group-hover:text-yellow-400 transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={logo.svgPath} />
                </svg>
                <span className="text-neutral-500 group-hover:text-white font-bold text-sm tracking-wide transition-colors duration-300">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </motion.div>
  );
}
