import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MessageSquare, Award, ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex-1 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 text-neutral-300 relative overflow-hidden"
    >
      {/* Background glow styling */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-yellow-500/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-yellow-500/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl w-full mx-auto z-10 space-y-24">
        
        {/* Header section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            NOSSOS <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.4)]">SERVIÇOS</span>
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 text-base sm:text-lg">
            Oferecemos suporte jurídico robusto e especializado para registrar suas criações e proteger o valor do seu negócio.
          </p>
        </div>

        {/* Bloco 1: REGISTRO DE MARCA */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-neutral-900 bg-neutral-950/40 p-8 sm:p-10 rounded-3xl relative overflow-hidden group hover:border-yellow-400/20 transition-all duration-500">
          <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"></div>
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-yellow-400 px-3 py-1 rounded-full border border-yellow-400/20 bg-yellow-400/5 self-start">
              Proteção de Identidade
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              REGISTRO DE MARCA
            </h2>
            <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum sodales magna, ut pretium elit dignissim sed. Curabitur sed convallis erat. Quisque eget lorem non ex eleifend efficitur.
            </p>
            <p className="text-neutral-400 leading-relaxed text-sm">
              Proin sed feugiat velit, ac convallis purus. Morbi vitae est vitae leo semper lacinia. Ut hendrerit lorem vel nisl elementum eleifend.
            </p>
            <div>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/5581999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-lg shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] transition-all duration-300 cursor-pointer"
              >
                FALE CONOSCO!
                <MessageSquare className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Right Video Block */}
          <div className="lg:col-span-5 relative aspect-video w-full rounded-2xl overflow-hidden border border-neutral-800 group-hover:border-yellow-400/30 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.15)] transition-all duration-500">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1"
              title="Vídeo Explicativo Lara"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Bloco 2: REGISTRO DE PATENTE & PROJETOS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-neutral-900 bg-neutral-950/40 p-8 sm:p-10 rounded-3xl relative overflow-hidden group hover:border-yellow-400/20 transition-all duration-500">
          <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"></div>
          
          {/* Left Video Block (Alternative Layout) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative aspect-video w-full rounded-2xl overflow-hidden border border-neutral-800 group-hover:border-yellow-400/30 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.15)] transition-all duration-500">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1"
              title="Vídeo Explicativo Pedro"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Right Text Block */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-yellow-400 px-3 py-1 rounded-full border border-yellow-400/20 bg-yellow-400/5 self-start">
              Patentes e Invenções
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              REGISTRO DE PATENTE / PROJETOS
            </h2>
            
            {/* Mandatory Phrase from PDF */}
            <div className="border-l-4 border-yellow-400 pl-4 py-1 bg-yellow-400/5 rounded-r-lg">
              <span className="text-yellow-300 font-extrabold tracking-wide uppercase text-sm block">
                "PROTEJA SUA PROPRIEDADE INTELECTUAL"
              </span>
            </div>

            <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum sodales magna, ut pretium elit dignissim sed. Curabitur sed convallis erat. Quisque eget lorem non ex eleifend efficitur.
            </p>
            <p className="text-neutral-400 leading-relaxed text-sm">
              Donec eget lorem vitae ante hendrerit imperdiet. In facilisis congue sodales. Morbi vitae est vitae leo semper lacinia.
            </p>
            <div>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/5581999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-lg shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] transition-all duration-300 cursor-pointer"
              >
                FALE CONOSCO!
                <MessageSquare className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </section>

      </div>
    </motion.div>
  );
}
