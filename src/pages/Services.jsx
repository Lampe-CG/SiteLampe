import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SERVICES_DATA = {
  marca: {
    title: 'REGISTRO DE MARCA',
    videoTitle: 'Vídeo Explicativo - Registro de Marca',
    videoUrl: '', // INSERIR VIDEO
    paragraphs: [
      'O registro de marca é o único meio legal de garantir a exclusividade do uso do seu nome, logo ou símbolo comercial em todo o território nacional. Proteja a identidade do seu negócio contra cópias e concorrência desleal.',
      'Acompanhamos todo o trâmite perante o INPI, desde a análise de viabilidade e busca de anterioridade até a concessão definitiva do certificado de registro da sua marca.'
    ]
  },
  patentes: {
    title: 'REGISTRO DE PATENTES',
    videoTitle: 'Vídeo Explicativo - Registro de Patentes',
    videoUrl: '', // INSERIR VIDEO
    paragraphs: [
      'Garanta a propriedade industrial e o monopólio temporário sobre invenções e modelos de utilidade. O registro de patente confere segurança jurídica e valor de mercado para sua solução tecnológica.',
      'Prestamos consultoria especializada na redação de relatórios descritivos, reivindicações técnicas e acompanhamento do processo patentário junto ao órgão regulador.'
    ]
  },
  projetos: {
    title: 'DESENVOLVIMENTO DE PROJETOS',
    videoTitle: 'Vídeo Explicativo - Desenvolvimento de Projetos',
    videoUrl: '', // INSERIR VIDEO
    paragraphs: [
      'Suporte técnico e consultivo para transformar ideias inovadoras em projetos estruturados, protótipos funcionais e modelos industriais viáveis técnica e comercialmente.',
      'Oferecemos orientação para engenharia de produto, design industrial e conformidade técnica necessária para a validação e posterior proteção legal da sua criação.'
    ]
  }
};

export default function Services() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const rawTipo = searchParams.get('tipo');
  const tipo = SERVICES_DATA[rawTipo] ? rawTipo : 'marca';
  const data = SERVICES_DATA[tipo];

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
      className="flex-1 flex flex-col items-center px-4 sm:px-6 lg:px-8 text-muted relative overflow-hidden min-h-[calc(100vh-80px)] justify-center bg-gradient-to-b from-page to-page-2 transition-colors duration-300"
    >
      {/* Formas orgânicas de fundo */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-lampe-yellow/15 dark:bg-lampe-yellow/10 blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-lampe-navy/10 dark:bg-lampe-navy/30 blur-[110px] pointer-events-none"></div>

      <div className="max-w-[1450px] w-full mx-auto z-10 flex flex-col justify-center gap-8">
        {/* Cabeçalho da Página */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-outfit font-semibold text-ink tracking-tight">
            Nossos <span className="bg-lampe-yellow/50 dark:bg-transparent dark:text-lampe-yellow px-3 rounded-xl">Serviços</span>
          </h1>
          <p className="mt-4 text-muted/80 font-light text-base sm:text-lg max-w-2xl mx-auto px-4">
            Oferecemos suporte jurídico e técnico robusto e especializado para registrar suas criações e proteger o valor do seu negócio.
          </p>
        </div>

        {/* Dobra Única Dinâmica com AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tipo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-10 items-center w-full"
          >
            {/* Coluna da Esquerda - Player de Vídeo */}
            <div className="w-full aspect-video relative rounded-[2rem] overflow-hidden border-4 border-surface bg-lampe-graphite shadow-[0_25px_60px_-15px_rgba(20,51,77,0.3)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] group hover:shadow-[0_30px_70px_-15px_rgba(20,51,77,0.4)] transition-all duration-300">
              <iframe
                className="absolute inset-0 w-full h-full object-cover"
                src={data.videoUrl}
                title={data.videoTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Coluna da Direita - Conteúdo Textual Exclusivo */}
            <div className="space-y-5 flex flex-col justify-center h-full bg-surface p-7 rounded-3xl shadow-[0_10px_40px_-10px_rgba(20,51,77,0.15)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-outfit font-semibold text-ink leading-tight">
                {data.title}
              </h2>
              {data.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={index === 0 ? "text-base lg:text-lg text-muted/90 font-light leading-relaxed text-justify" : "text-justify text-sm text-muted/70 font-light leading-relaxed"}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Botão de Chamada para Ação */}
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={handleNavigateToContact}
              className="inline-flex items-center gap-3 px-10 py-5 bg-lampe-yellow hover:bg-lampe-cream text-lampe-navy font-outfit font-semibold text-lg rounded-2xl transition-all duration-300 hover:shadow-2xl shadow-lg cursor-pointer"
            >
              FALE CONOSCO
              <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
