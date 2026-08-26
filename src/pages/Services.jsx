import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate('/contato');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex-1 flex flex-col items-center px-4 sm:px-6 lg:px-8 text-neutral-300 relative overflow-hidden"
    >
      {/* Background glow styling */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-yellow-500/5 blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-yellow-500/5 blur-[160px] pointer-events-none"></div>

      <div className="max-w-[1450px] w-full mx-auto z-10 space-y-6">
        
        {/* Header section */}
        <div className="text-center pt-6 pb-2 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            NOSSOS <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.4)]">SERVIÇOS</span>
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 text-base sm:text-lg">
            Oferecemos suporte jurídico robusto e especializado para registrar suas criações e proteger o valor do seu negócio.
          </p>
        </div>

        {/* 1. CONTAINER 1: REGISTRO DE MARCA (Dobra Inicial - Espaçamento otimizado) */}
        <section className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center pt-2 pb-12 lg:min-h-[70vh]">
          
          {/* Coluna da Esquerda - Vídeo padronizado */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full aspect-video relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group transition-all duration-300 hover:border-neutral-700"
          >
            <iframe
              className="absolute inset-0 w-full h-full object-cover"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1"
              title="Vídeo Explicativo Lara"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* Coluna da Direita - Texto Explicativo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6 flex flex-col justify-center h-full"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              REGISTRO DE MARCA
            </h2>
            <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum sodales magna, ut pretium elit dignissim sed. Curabitur sed convallis erat. Quisque eget lorem non ex eleifend efficitur.
            </p>
            <p className="text-base text-neutral-400 leading-relaxed">
              Proin sed feugiat velit, ac convallis purus. Morbi vitae est vitae leo semper lacinia. Ut hendrerit lorem vel nisl elementum eleifend.
            </p>
          </motion.div>
        </section>

        {/* Linha de divisão intermediária */}
        <hr className="border-t border-neutral-800/80 w-full" />

        {/* 2. CONTAINER 2: REGISTRO DE PATENTE / PROJETOS (Segunda Dobra Fullscreen) */}
        <section className="min-h-[85vh] grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center py-8">
          
          {/* Coluna da Esquerda - Vídeo padronizado */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full aspect-video relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group transition-all duration-300 hover:border-neutral-700"
          >
            <iframe
              className="absolute inset-0 w-full h-full object-cover"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1"
              title="Vídeo Explicativo Pedro"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* Coluna da Direita - Texto Explicativo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6 flex flex-col justify-center h-full"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              REGISTRO DE PATENTE / PROJETOS
            </h2>
            <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum sodales magna, ut pretium elit dignissim sed. Curabitur sed convallis erat. Quisque eget lorem non ex eleifend efficitur.
            </p>
            <p className="text-base text-neutral-400 leading-relaxed">
              Donec eget lorem vitae ante hendrerit imperdiet. In facilisis congue sodales. Morbi vitae est vitae leo semper lacinia.
            </p>
          </motion.div>
        </section>

        {/* Linha de divisão antes do CTA Final */}
        <hr className="border-t border-neutral-800/80 w-full" />

        {/* 3. BOTÃO ÚNICO "FALE CONOSCO" NO FINAL */}
        <section className="flex flex-col items-center justify-center text-center py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={handleNavigateToContact}
              className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-base sm:text-lg rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_35px_rgba(250,204,21,0.6)] cursor-pointer"
            >
              FALE CONOSCO
              <ArrowRight className="w-5 h-5 text-black" />
            </button>
          </motion.div>
        </section>

      </div>
    </motion.div>
  );
}
