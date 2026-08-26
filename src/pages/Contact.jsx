import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, MessageCircle, Mail, Lightbulb } from 'lucide-react';

// 1. ESTRUTURA DE DADOS E PLACEHOLDERS
const CONTACT_INFO = {
  instagram: {
    label: 'Instagram',
    link: 'https://www.instagram.com/lampebr/',
  },
  whatsapp: {
    label: 'WhatsApp',
    link: 'https://api.whatsapp.com/send?phone=5583987048202',
  },
  emails: [
    { label: 'pedro@lampebr.com', link: 'mailto:pedro@lampebr.com' },
    { label: 'lara@lampebr.com', link: 'mailto:lara@lampebr.com' },
    { label: 'contato@lampebr.com', link: 'mailto:contato@lampebr.com' },
  ],
};

const CLIENT_LOGOS = [
  { id: 1, name: 'Empresa A', img: '/lampe-logo.png' },
  { id: 2, name: 'Empresa B', img: '/lampe-logo.png' },
  { id: 3, name: 'Empresa C', img: '/lampe-logo.png' },
  { id: 4, name: 'Empresa D', img: '/lampe-logo.png' },
  { id: 5, name: 'Empresa E', img: '/lampe-logo.png' },
  { id: 6, name: 'Empresa F', img: '/lampe-logo.png' },
];

export default function Contact() {
  // 2. ESTADO DA LÂMPADA INTERATIVA
  const [isLit, setIsLit] = useState(false);

  // 3. ESTADO DOS CLIENTES ACESOS (Array de IDs)
  const [litClients, setLitClients] = useState([]);

  const toggleClient = (id) => {
    if (litClients.includes(id)) {
      setLitClients(litClients.filter((clientId) => clientId !== id));
    } else {
      setLitClients([...litClients, id]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex-1 flex flex-col py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-neutral-300"
    >
      {/* Visual lighting background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-yellow-500/5 blur-[160px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto z-10 w-full space-y-24">

        {/* SEÇÃO SUPERIOR: "ACENDA SEU NEGÓCIO" */}
        <div className="space-y-12">
          {/* Cabeçalho */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase">
              ACENDA SEU <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.4)]">NEGÓCIO</span>
            </h1>
            <p className="max-w-xl mx-auto text-neutral-400 text-sm sm:text-base">
              Entre em contato conosco através dos nossos canais de atendimento ou acenda nossa lâmpada da criatividade.
            </p>
          </div>

          {/* Grid de 2 Colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">

            {/* Coluna Esquerda: Lista de Contatos */}
            <div className="space-y-6 bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-8 backdrop-blur-sm flex flex-col justify-center h-full min-h-[300px]">
              <h2 className="text-xl font-bold text-white mb-2 uppercase tracking-wide border-b border-neutral-800 pb-3">
                Canais de Contato
              </h2>
              <div className="space-y-5">
                {/* Instagram */}
                <a
                  href={CONTACT_INFO.instagram.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer w-fit"
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-yellow-400 group-hover:border-yellow-400 group-hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] transition-all duration-300">
                    <Instagram className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </div>
                  <span className="font-semibold text-neutral-400 group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] transition-all duration-300">
                    {CONTACT_INFO.instagram.label}
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href={CONTACT_INFO.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer w-fit"
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-yellow-400 group-hover:border-yellow-400 group-hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] transition-all duration-300">
                    <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </div>
                  <span className="font-semibold text-neutral-400 group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] transition-all duration-300">
                    {CONTACT_INFO.whatsapp.label}
                  </span>
                </a>

                {/* E-mails */}
                {CONTACT_INFO.emails.map((email, idx) => (
                  <a
                    key={idx}
                    href={email.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group cursor-pointer w-fit"
                  >
                    <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-yellow-400 group-hover:border-yellow-400 group-hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] transition-all duration-300">
                      <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="font-semibold text-neutral-400 group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] transition-all duration-300 text-sm sm:text-base">
                      {email.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Coluna Direita: Lâmpada Interativa */}
            {/* Coluna Direita: Lâmpada Interativa */}
            <div className="flex flex-col items-center justify-center text-center h-full min-h-[300px]">
              <div
                onClick={() => setIsLit(!isLit)}
                className="cursor-pointer p-6 rounded-full hover:bg-neutral-950/40 transition-colors duration-300 relative group"
              >
                <Lightbulb
                  className={`w-28 h-28 transition-all duration-500 ${isLit
                    ? 'text-yellow-400 drop-shadow-[0_0_40px_rgba(250,204,21,1)] scale-110'
                    : 'text-neutral-600 hover:text-yellow-200 hover:drop-shadow-[0_0_15px_rgba(250,204,21,0.4)]'
                    }`}
                />
              </div>

              {/* Mensagem de Confirmação */}
              <div className="h-8 mt-4">
                <AnimatePresence>
                  {isLit && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-yellow-400 font-bold text-lg drop-shadow-[0_0_8px_rgba(250,204,21,0.6)] uppercase tracking-widest"
                    >
                      Negócio Aceso!
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>

        {/* SEÇÃO INFERIOR: "EMPRESAS QUE ACENDERAM SEUS NEGÓCIOS" */}
        <div className="space-y-10 border-t border-neutral-900 pt-16">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide uppercase">
              EMPRESAS QUE <span className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]">ACENDERAM</span> SEUS NEGÓCIOS
            </h2>
          </div>

          {/* Grid Flexível de Logos Circulares */}
          <div className="flex flex-wrap items-center justify-center gap-6 max-w-4xl mx-auto">
            {CLIENT_LOGOS.map((client) => {
              const isClientLit = litClients.includes(client.id);
              return (
                <div
                  key={client.id}
                  onClick={() => toggleClient(client.id)}
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center bg-neutral-950 cursor-pointer overflow-hidden transition-all duration-300 ${isClientLit
                    ? 'border-2 border-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.9)] opacity-100 grayscale-0'
                    : 'opacity-50 grayscale border border-neutral-800 hover:opacity-100 hover:grayscale-0 hover:border-yellow-400 hover:drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]'
                    }`}
                  title={client.name}
                >
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                    onError={(e) => {
                      // Fallback em caso de erro da imagem
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `<span class="text-xs font-bold text-yellow-400">${client.name[0]}</span>`;
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
