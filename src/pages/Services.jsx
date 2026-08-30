import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SERVICES_DATA = {
  marca: {
    title: 'REGISTRO DE MARCA',
    videoTitle: 'Vídeo Explicativo - Registro de Marca',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1',
    paragraphs: [
      'O registro de marca é o único meio legal de garantir a exclusividade do uso do seu nome, logo ou símbolo comercial em todo o território nacional. Proteja a identidade do seu negócio contra cópias e concorrência desleal.',
      'Acompanhamos todo o trâmite perante o INPI, desde a análise de viabilidade e busca de anterioridade até a concessão definitiva do certificado de registro da sua marca.'
    ]
  },
  patentes: {
    title: 'REGISTRO DE PATENTES',
    videoTitle: 'Vídeo Explicativo - Registro de Patentes',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1',
    paragraphs: [
      'Garanta a propriedade industrial e o monopólio temporário sobre invenções e modelos de utilidade. O registro de patente confere segurança jurídica e valor de mercado para sua solução tecnológica.',
      'Prestamos consultoria especializada na redação de relatórios descritivos, reivindicações técnicas e acompanhamento do processo patentário junto ao órgão regulador.'
    ]
  },
  projetos: {
    title: 'DESENVOLVIMENTO DE PROJETOS',
    videoTitle: 'Vídeo Explicativo - Desenvolvimento de Projetos',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1',
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
      className="flex-1 flex flex-col items-center px-4 sm:px-6 lg:px-8 text-neutral-300 relative overflow-hidden min-h-[calc(100vh-80px)] justify-between py-12"
    >
      {/* Glow de fundo */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-yellow-500/5 blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-yellow-500/5 blur-[160px] pointer-events-none"></div>

      <div className="max-w-[1450px] w-full mx-auto z-10 flex-grow flex flex-col justify-center gap-12">
        {/* Cabeçalho da Página */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            NOSSOS <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.4)]">SERVIÇOS</span>
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 text-base sm:text-lg">
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
            className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center w-full"
          >
            {/* Coluna da Esquerda - Player de Vídeo */}
            <div className="w-full aspect-video relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group transition-all duration-300 hover:border-neutral-700">
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
            <div className="space-y-6 flex flex-col justify-center h-full">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                {data.title}
              </h2>
              {data.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={index === 0 ? "text-lg lg:text-xl text-neutral-300 leading-relaxed" : "text-base text-neutral-400 leading-relaxed"}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Botão de Chamada para Ação */}
        <div className="flex flex-col items-center justify-center text-center pt-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
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
        </div>
      </div>
    </motion.div>
  );
}
