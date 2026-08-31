import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex-1 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 text-neutral-300 relative overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-yellow-500/5 blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-[#FE904F]/5 blur-[120px] pointer-events-none"></div>

      {/* AUMENTADO: max-w-6xl -> max-w-[1600px] */}
      <div className="max-w-[1450px] w-full mx-auto z-10">

        {/* ALTERADO: vídeo agora ocupa uma coluna maior */}
        <section className="min-h-[85vh] grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center py-8">

          {/* Coluna da Esquerda - Vídeo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full aspect-video relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group transition-all duration-300 hover:border-neutral-700"
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="" // INSERIR VIDEO
              title="LAMPE Apresentação"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* Coluna da Direita */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6 flex flex-col justify-center h-full"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-lampe-orange leading-tight">
              Inovação, Proteção e Propriedade Intelectual
            </h2>

            <p className="text-base lg:text-lg text-neutral-300 leading-relaxed">
              A LAMPE® nasceu com o propósito de transformar ideias em realidade, ajudando empresas a converterem suas marcas e produtos em propriedade intelectual sólida. Atuando desde 2021 com foco estratégico na proteção e valorização de marcas, negócios e ativos intangíveis, a empresa une rigor jurídico e visão de negócios para transformar inovação em segurança, exclusividade e valor de mercado.
            </p>

            <p className="text-base lg:text-lg text-neutral-300 leading-relaxed">
              Fundada por uma Mestre em Desenvolvimento Regional pela UEPB e pesquisador com atuação de destaque no Programa Institucional de Bolsas de Iniciação em Desenvolvimento Tecnológico e Inovação na UFCG, a LAMPE® possui dezenas de marcas registradas com sucesso e 3 patentes publicadas nas áreas de tecnologias embarcadas e desenvolvimento de software.
            </p>

            <p className="text-base text-neutral-400 leading-relaxed">
              Essa bagagem multidisciplinar garante uma entrega única, que compreende a fundo tanto a engenharia por trás do produto quanto a estratégia legal para protegê-lo.
            </p>
          </motion.div>
        </section>

        {/* Linha de divisão */}
        <div className="pt-20 pb-20">
          <hr className="border-t border-neutral-800/80 w-full" />
        </div>

        {/* Seção principal */}
        <section className="flex flex-col items-center justify-center text-center py-12 relative">

          {/* Ray / Sunburst Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
              className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] text-yellow-500/10 animate-spin"
              style={{ animationDuration: '60s' }}
              viewBox="0 0 100 100"
            >
              <defs>
                <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(250,204,21,0.2)" />
                  <stop offset="100%" stopColor="rgba(250,204,21,0)" />
                </radialGradient>
              </defs>

              <circle cx="50%" cy="50%" r="45" fill="url(#sunGlow)" />

              {[...Array(12)].map((_, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={50 + 40 * Math.cos((i * 2 * Math.PI) / 12)}
                  y2={50 + 40 * Math.sin((i * 2 * Math.PI) / 12)}
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="2 3"
                />
              ))}
            </svg>
          </div>

          <div className="z-10 flex flex-col items-center space-y-4 max-w-4xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#FE904F] tracking-tight uppercase"
            >
              TEVE UMA IDEIA ?
            </motion.h3>

            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase"
            >
              TEM QUE TER
            </motion.h4>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
              className="relative py-4"
            >
              <img
                src={`${import.meta.env.BASE_URL}lampe-logo-amarelo.png`}
                alt="LAMPE"
                className="h-24 sm:h-32 md:h-40 w-auto mx-auto block drop-shadow-[0_0_20px_rgba(248,222,98,0.6)] hover:drop-shadow-[0_0_35px_rgba(248,222,98,0.95)] hover:scale-105 transition-all duration-300 cursor-pointer select-none"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-6"
            >
              <Link
                to="/servicos"
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#F8DE62] hover:bg-yellow-300 text-black font-extrabold text-base sm:text-lg rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(248,222,98,0.4)] hover:shadow-[0_0_35px_rgba(248,222,98,0.7)] hover:drop-shadow-[0_0_12px_rgba(248,222,98,0.6)] cursor-pointer"
              >
                CONHEÇA NOSSOS SERVIÇOS!
                <ArrowRight className="w-5 h-5 text-black" />
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </motion.div>
  );
}