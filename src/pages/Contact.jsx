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
    { label: 'pedro@lampebr.com', link: 'https://mail.google.com/mail/?view=cm&fs=1&to=pedro@lampebr.com' },
    { label: 'lara@lampebr.com', link: 'https://mail.google.com/mail/?view=cm&fs=1&to=lara@lampebr.com' },
    { label: 'contato@lampebr.com', link: 'https://mail.google.com/mail/?view=cm&fs=1&to=contato@lampebr.com' },
  ],
};

const CLIENT_LOGOS = [
  { id: 1, name: 'CNV', img: '/logotipo-clientes/cnv-logo.png' },
  { id: 2, name: 'Lunaire', img: '/logotipo-clientes/lunaire-logo.png' },
  { id: 3, name: 'Organizare', img: '/logotipo-clientes/organizare-logo.png' },
  { id: 4, name: 'Paulino Advogados', img: '/logotipo-clientes/paulino-advogados-logo.png' },
  { id: 5, name: 'Paulino Veículos', img: '/logotipo-clientes/paulino-veiculos-logo.png' },
  { id: 6, name: 'Pierre Veículos', img: '/logotipo-clientes/pierre-veiculos-logo.png' },
  { id: 7, name: 'Protagon', img: '/logotipo-clientes/protagon-logo.png' },
  { id: 8, name: 'Rava', img: '/logotipo-clientes/rava-logo.png' },
  { id: 9, name: 'somart', img: '/logotipo-clientes/somart-logo.png' },
  { id: 10, name: 'Talisma', img: '/logotipo-clientes/talisma-logo.png' },
  { id: 11, name: 'TI Avançado', img: '/logotipo-clientes/ti-avançado-logo.png' },
  { id: 12, name: 'Trio da Tomate', img: '/logotipo-clientes/trio-da-tomate-logo.png' },
  { id: 13, name: 'Eu tenho a Senha', img: '/logotipo-clientes/eu-tenho-a-senha-logo.png' },
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
      className="flex-1 flex flex-col relative overflow-hidden text-neutral-300"
    >
      {/* Visual lighting background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-yellow-500/5 blur-[160px] pointer-events-none"></div>

      {/* ========================================================= */}
      {/* 1. PRIMEIRA DOBRA: HERO / SEÇÃO PRINCIPAL DE CONTATO     */}
      {/* ========================================================= */}
      {/* ALINHAMENTO ESTRUTURAL PADRONIZADO COM SERVIÇOS E QUEM SOMOS */}
      <section className="min-h-[calc(100vh-80px)] flex flex-col justify-between items-center py-12 px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-5xl mx-auto w-full flex-grow flex flex-col justify-between gap-10">

          {/* Cabeçalho da Página Padronizado */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wide uppercase text-white">
              ACENDA SEU <span className="text-[#F8DE62] drop-shadow-[0_0_12px_rgba(248,222,98,0.6)]">NEGÓCIO</span>
            </h1>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base max-w-xl mx-auto px-4">
              Entre em contato conosco através dos nossos canais de atendimento ou acenda nossa lâmpada da criatividade.
            </p>
          </div>

          {/* Grid de 2 Colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto w-full my-auto">

            {/* Coluna Esquerda: Card de Canais de Contato */}
            {/* AJUSTE DE LARGURA DO CARD AQUI (max-w-xl) E ESPAÇAMENTO (p-8 sm:p-10) */}
            <div className="max-w-xl w-full mx-auto space-y-6 sm:space-y-7 bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-8 sm:p-10 backdrop-blur-sm flex flex-col justify-center shadow-xl">

              {/* CONTROLE DE FONTE DO TÍTULO DO CARD (text-2xl sm:text-3xl) */}
              <h2 className="text-2xl sm:text-3xl font-black text-lampe-orange mb-2 uppercase tracking-wide border-b border-neutral-800 pb-3">
                Canais de Contato
              </h2>

              {/* CONTROLE DE FONTE DOS CANAIS DE CONTATO E TAMANHO DOS ÍCONES */}
              <div className="space-y-5 sm:space-y-6">

                {/* Instagram */}
                <a
                  href={CONTACT_INFO.instagram.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer w-fit"
                >
                  {/* CONTROLE DE TAMANHO DO CONTAINER E ÍCONE DO INSTAGRAM */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-[#F8DE62] group-hover:border-[#F8DE62] group-hover:drop-shadow-[0_0_12px_rgba(248,222,98,0.6)] transition-all duration-300 shrink-0">
                    <Instagram className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-110" />
                  </div>
                  {/* CONTROLE DE FONTE DOS TEXTOS (text-base sm:text-lg lg:text-xl) */}
                  <span className="font-semibold text-neutral-300 group-hover:text-[#F8DE62] group-hover:drop-shadow-[0_0_12px_rgba(248,222,98,0.6)] transition-all duration-300 text-base sm:text-lg lg:text-xl">
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
                  {/* CONTROLE DE TAMANHO DO CONTAINER E ÍCONE DO WHATSAPP */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-[#F8DE62] group-hover:border-[#F8DE62] group-hover:drop-shadow-[0_0_12px_rgba(248,222,98,0.6)] transition-all duration-300 shrink-0">
                    <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-110" />
                  </div>
                  {/* CONTROLE DE FONTE DOS TEXTOS (text-base sm:text-lg lg:text-xl) */}
                  <span className="font-semibold text-neutral-300 group-hover:text-[#F8DE62] group-hover:drop-shadow-[0_0_12px_rgba(248,222,98,0.6)] transition-all duration-300 text-base sm:text-lg lg:text-xl">
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
                    {/* CONTROLE DE TAMANHO DO CONTAINER E ÍCONE DE EMAIL */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-[#F8DE62] group-hover:border-[#F8DE62] group-hover:drop-shadow-[0_0_12px_rgba(248,222,98,0.6)] transition-all duration-300 shrink-0">
                      <Mail className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-110" />
                    </div>
                    {/* CONTROLE DE FONTE DOS TEXTOS (text-base sm:text-lg lg:text-xl) */}
                    <span className="font-semibold text-neutral-300 group-hover:text-[#F8DE62] group-hover:drop-shadow-[0_0_12px_rgba(248,222,98,0.6)] transition-all duration-300 text-base sm:text-lg lg:text-xl">
                      {email.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Coluna Direita: Lâmpada Interativa */}
            <div className="flex flex-col items-center justify-center text-center h-full min-h-[320px]">
              <div
                onClick={() => setIsLit(!isLit)}
                className="cursor-pointer p-6 sm:p-8 rounded-full transition-colors duration-300 relative group"
                title="Clique para acender a lâmpada"
              >
                {/* AJUSTE DE TAMANHO DA LÂMPADA AQUI (w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44) */}
                <Lightbulb
                  className={`w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 transition-all duration-500 ${
                    isLit
                      ? 'text-[#F8DE62] drop-shadow-[0_0_40px_rgba(248,222,98,0.85)] scale-110 sm:scale-125'
                      : 'text-neutral-600 hover:text-[#F8DE62] hover:drop-shadow-[0_0_18px_rgba(248,222,98,0.6)]'
                  }`}
                />
              </div>

              {/* Mensagem de Confirmação */}
              <div className="h-8 mt-2">
                <AnimatePresence>
                  {isLit && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-[#F8DE62] font-bold text-lg sm:text-xl drop-shadow-[0_0_12px_rgba(248,222,98,0.6)] uppercase tracking-widest"
                    >
                      Negócio Aceso!
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SEGUNDA DOBRA: "EMPRESAS QUE ACENDERAM SEUS NEGÓCIOS"  */}
      {/* ========================================================= */}
      {/* AJUSTE DE ESPAÇAMENTO SUPERIOR DA SEÇÃO DE EMPRESAS AQUI */}
      <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center pt-10 pb-16 sm:pt-12 sm:pb-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 w-full z-10">
        <div className="max-w-5xl mx-auto w-full space-y-10 sm:space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-lampe-orange tracking-wide uppercase">
              EMPRESAS QUE <span className="text-[#F8DE62] drop-shadow-[0_0_12px_rgba(248,222,98,0.6)]">ACENDERAM</span> SEUS NEGÓCIOS
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              Clique nas marcas para acendê-las
            </p>
          </div>

          {/* Grid Flexível de Logos (Sem círculos, com glow no PNG) */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 max-w-5xl mx-auto">
            {CLIENT_LOGOS.map((client) => {
              const isClientLit = litClients.includes(client.id);
              return (
                <div
                  key={client.id}
                  onClick={() => toggleClient(client.id)}
                  className={`w-28 sm:w-32 h-20 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    isClientLit
                      ? 'opacity-100 grayscale-0 scale-110 drop-shadow-[0_0_15px_rgba(248,222,98,0.85)]'
                      : 'opacity-55 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(248,222,98,0.6)]'
                  }`}
                  title={client.name}
                >
                  <img
                    src={client.img}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      // Fallback em caso de erro da imagem
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `<span class="text-xs font-bold text-[#F8DE62] text-glow whitespace-nowrap">${client.name}</span>`;
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </motion.div>
  );
}
