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
      className="flex-1 flex flex-col items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-page to-page-2 transition-colors duration-300"
    >
      {/* Formas orgânicas decorativas */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-lampe-navy/10 dark:bg-lampe-yellow/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] rounded-full bg-lampe-yellow/20 dark:bg-lampe-navy/30 blur-[90px] pointer-events-none" />

      <div className="max-w-[1450px] w-full mx-auto z-10">

        {/* HERO EM TELA INTEIRA: Texto + Vídeo */}
        <section className="min-h-[calc(100vh-80px)] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-10">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col justify-center space-y-6 text-muted"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-lampe-navy dark:bg-lampe-yellow text-lampe-cream dark:text-lampe-graphite rounded-full font-outfit text-sm font-medium w-fit shadow-lg"
            >
              ✦ Inovação desde 2021
            </motion.span>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-outfit font-semibold text-ink leading-[1.1] tracking-tight">
              Transforme sua ideia em{' '}
              <span className="bg-lampe-yellow/50 px-2 rounded-lg text-ink dark:bg-transparent dark:text-lampe-yellow">
                propriedade intelectual
              </span>{' '}
              sólida
            </h1>

            <p className="font-outfit text-base lg:text-xl text-muted leading-relaxed font-light">
              A LAMPE® une rigor jurídico e visão de negócios para proteger e valorizar marcas, negócios e ativos
              intangíveis, transformando inovação em segurança, exclusividade e valor de mercado.
            </p>

            <p className="font-outfit text-base text-muted/70 leading-relaxed font-light">
              Fundada por uma Mestre em Desenvolvimento Regional pela UEPB e pesquisador com atuação de destaque na
              UFCG, possui dezenas de marcas registradas e 4 patentes publicadas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/servicos"
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-lampe-navy dark:bg-lampe-yellow hover:bg-lampe-graphite dark:hover:bg-lampe-cream text-lampe-cream dark:text-lampe-graphite font-outfit font-medium text-lg rounded-2xl transition-all duration-300 hover:shadow-2xl shadow-lg"
              >
                CONHEÇA NOSSOS SERVIÇOS
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/quem-somos"
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent hover:bg-lampe-navy/5 dark:hover:bg-lampe-cream/5 border-2 border-ink/20 hover:border-ink text-ink font-outfit font-medium text-lg rounded-2xl transition-all duration-300"
              >
                QUEM SOMOS
              </Link>
            </div>
          </motion.div>

          {/* Vídeo com borda arredondada dupla */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-full aspect-video relative rounded-[2rem] overflow-hidden border-4 border-surface bg-lampe-graphite shadow-[0_25px_60px_-15px_rgba(20,51,77,0.3)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] group hover:shadow-[0_30px_70px_-15px_rgba(20,51,77,0.4)] transition-all duration-300"
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/9eRLqJdVdL0?si=9h4T7zhiWVx-9nW1" // INSERIR VIDEO
              title="LAMPE Apresentação"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </section>

        {/* Cards de diferenciais — abaixo da dobra */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="pb-24 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              number: '50+',
              title: 'Marcas Registradas',
              description: 'Dezenas de marcas protegidas com sucesso para nossos clientes em diversas áreas do conhecimento.',
            },
            {
              number: '4',
              title: 'Patentes Publicadas',
              description: 'Patentes nas áreas de tecnologias embarcadas e desenvolvimento de software.',
            },
            {
              number: '2021',
              title: 'Desde',
              description: 'Atuação contínua com foco estratégico na proteção e valorização de ativos intangíveis.',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-surface p-8 rounded-3xl shadow-[0_10px_40px_-10px_rgba(20,51,77,0.15)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_-10px_rgba(20,51,77,0.25)] hover:-translate-y-2 transition-all duration-300"
            >
              <p className="font-outfit text-5xl font-bold text-lampe-yellow mb-4">{card.number}</p>
              <h3 className="font-outfit text-xl font-semibold text-ink mb-3">{card.title}</h3>
              <p className="font-outfit text-base text-muted/80 leading-relaxed font-light">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Chamada principal */}
        <section className="flex flex-col items-center justify-center text-center py-28 relative -mt-16">

          <div className="absolute inset-x-0 top-16 bottom-16 bg-deep rounded-[3rem] -z-10 shadow-2xl" />

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-outfit text-5xl sm:text-6xl md:text-7xl font-semibold text-lampe-cream tracking-tight leading-none"
          >
            Teve uma ideia?
          </motion.h3>

          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-outfit text-5xl sm:text-6xl md:text-7xl font-semibold text-lampe-yellow tracking-tight leading-none mt-3"
          >
            Tem que ter.
          </motion.h4>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
            className="relative py-10"
          >
            <img
              src={`${import.meta.env.BASE_URL}lampe-logo-amarelo.png`}
              alt="LAMPE"
              className="h-24 sm:h-32 md:h-40 w-auto mx-auto block hover:scale-105 transition-all duration-300 cursor-pointer select-none"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/servicos"
              onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
              className="inline-flex items-center gap-3 px-10 py-5 bg-lampe-yellow hover:bg-lampe-cream text-lampe-navy font-outfit font-semibold text-lg rounded-2xl transition-all duration-300 hover:shadow-2xl shadow-lg cursor-pointer"
            >
              CONHEÇA NOSSOS SERVIÇOS
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </section>

      </div>
    </motion.div>
  );
}
