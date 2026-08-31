import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';

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
  // ESTADOS DO FORMULÁRIO
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState({ message: '', isSuccess: false });

  // ESTADO DOS CLIENTES ACESOS (Array de IDs)
  const [litClients, setLitClients] = useState([]);

  const toggleClient = (id) => {
    if (litClients.includes(id)) {
      setLitClients(litClients.filter((clientId) => clientId !== id));
    } else {
      setLitClients([...litClients, id]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult({ message: '', isSuccess: false });

    const form = event.target;
    const formData = new FormData(form);
    formData.append("access_key", "efb40321-3a0e-4d93-bda6-425ac96a68d8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        form.reset();
        setResult({
          message: "Mensagem enviada com sucesso!",
          isSuccess: true,
        });
      } else {
        setResult({
          message: data.message || "Ocorreu um erro ao enviar a mensagem.",
          isSuccess: false,
        });
      }
    } catch (error) {
      setResult({
        message: "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.",
        isSuccess: false,
      });
    } finally {
      setIsSubmitting(false);
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
      <section className="min-h-[calc(100vh-80px)] flex flex-col justify-between items-center py-12 px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-5xl mx-auto w-full flex-grow flex flex-col justify-between gap-10">

          {/* Cabeçalho da Página Padronizado */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wide uppercase text-white">
              ACENDA SEU <span className="text-[#F8DE62] drop-shadow-[0_0_12px_rgba(248,222,98,0.6)]">NEGÓCIO</span>
            </h1>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base max-w-xl mx-auto px-4">
              Entre em contato conosco através dos nossos canais de atendimento ou envie uma mensagem diretamente pelo formulário.
            </p>
          </div>

          {/* Grid de 2 Colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto w-full my-auto">

            {/* Coluna Esquerda: Card de Canais de Contato */}
            <div className="w-full bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 backdrop-blur-sm flex flex-col justify-between shadow-xl">

              <h2 className="text-2xl sm:text-3xl font-black text-lampe-orange mb-6 uppercase tracking-wide border-b border-neutral-800 pb-3">
                Canais de Contato
              </h2>

              <div className="flex-1 flex flex-col justify-center space-y-6 sm:space-y-7">
                {/* Instagram */}
                <a
                  href={CONTACT_INFO.instagram.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer w-fit"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-[#F8DE62] group-hover:border-[#F8DE62] group-hover:drop-shadow-[0_0_12px_rgba(248,222,98,0.6)] transition-all duration-300 shrink-0">
                    <Instagram className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-110" />
                  </div>
                  <span className="font-semibold text-neutral-300 group-hover:text-[#F8DE62] group-hover:drop-shadow-[0_0_12px_rgba(248,222,98,0.6)] transition-all duration-300 text-base sm:text-xl lg:text-2xl">
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
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-[#F8DE62] group-hover:border-[#F8DE62] group-hover:drop-shadow-[0_0_12px_rgba(248,222,98,0.6)] transition-all duration-300 shrink-0">
                    <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-110" />
                  </div>
                  <span className="font-semibold text-neutral-300 group-hover:text-[#F8DE62] group-hover:drop-shadow-[0_0_12px_rgba(248,222,98,0.6)] transition-all duration-300 text-base sm:text-xl lg:text-2xl">
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
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-[#F8DE62] group-hover:border-[#F8DE62] group-hover:drop-shadow-[0_0_12px_rgba(248,222,98,0.6)] transition-all duration-300 shrink-0">
                      <Mail className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="font-semibold text-neutral-300 group-hover:text-[#F8DE62] group-hover:drop-shadow-[0_0_12px_rgba(248,222,98,0.6)] transition-all duration-300 text-base sm:text-lg lg:text-xl break-all">
                      {email.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Coluna Direita: Formulário de Contato Assíncrono */}
            <div className="w-full bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 backdrop-blur-sm flex flex-col justify-between shadow-xl">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#F8DE62] mb-6 uppercase tracking-wide border-b border-neutral-800 pb-3">
                  Envie uma Mensagem
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Campo: Nome */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Nome
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Seu nome"
                      className="w-full bg-neutral-950 text-white placeholder-neutral-500 border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F8DE62] focus:ring-1 focus:ring-[#F8DE62] transition-colors"
                    />
                  </div>

                  {/* Campo: E-mail */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      E-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="seu@email.com"
                      className="w-full bg-neutral-950 text-white placeholder-neutral-500 border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F8DE62] focus:ring-1 focus:ring-[#F8DE62] transition-colors"
                    />
                  </div>

                  {/* Campo: Mensagem */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      placeholder="Como podemos ajudar?"
                      className="w-full bg-neutral-950 text-white placeholder-neutral-500 border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F8DE62] focus:ring-1 focus:ring-[#F8DE62] transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Mensagem de Feedback */}
                  {result.message && (
                    <div
                      className={`flex items-center gap-2 p-3 rounded-lg text-sm font-medium ${result.isSuccess
                        ? 'bg-emerald-950/40 border border-emerald-500/30 text-emerald-400'
                        : 'bg-red-950/40 border border-red-500/30 text-red-400'
                        }`}
                    >
                      {result.isSuccess ? (
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                      ) : (
                        <AlertCircle className="w-4 h-4 shrink-0" />
                      )}
                      <span>{result.message}</span>
                    </div>
                  )}

                  {/* Botão de Envio */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 bg-[#F8DE62] text-black font-bold py-3 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(248,222,98,0.6)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SEGUNDA DOBRA: "EMPRESAS QUE ACENDERAM SEUS NEGÓCIOS"  */}
      {/* ========================================================= */}
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
                  className={`w-28 sm:w-32 h-20 flex items-center justify-center cursor-pointer transition-all duration-300 ${isClientLit
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
