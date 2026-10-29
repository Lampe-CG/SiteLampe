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
    link: 'https://wa.me/+5583987048202?text=Oi!%20Vim%20pelo%20Instagram%20da%20LAMPE%20e%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o.%20%F0%9F%92%A1',
  },
  emails: [
    { label: 'contato@lampebr.com', link: 'https://mail.google.com/mail/?view=cm&fs=1&to=contato@lampebr.com' },
  ],
};

const CLIENT_LOGOS = [
  { id: 1, name: 'CNV', img: `${import.meta.env.BASE_URL}logotipo-clientes/cnv-logo.png` },
  { id: 2, name: 'Lunaire', img: `${import.meta.env.BASE_URL}logotipo-clientes/lunaire-logo.png` },
  { id: 3, name: 'Organizare', img: `${import.meta.env.BASE_URL}logotipo-clientes/organizare-logo.png` },
  { id: 4, name: 'Paulino Advogados', img: `${import.meta.env.BASE_URL}logotipo-clientes/paulino-advogados-logo.png` },
  { id: 5, name: 'Paulino Veículos', img: `${import.meta.env.BASE_URL}logotipo-clientes/paulino-veiculos-logo.png` },
  { id: 6, name: 'Pierre Veículos', img: `${import.meta.env.BASE_URL}logotipo-clientes/pierre-veiculos-logo.png` },
  { id: 7, name: 'Protagon', img: `${import.meta.env.BASE_URL}logotipo-clientes/protagon-logo.png` },
  { id: 8, name: 'Rava', img: `${import.meta.env.BASE_URL}logotipo-clientes/rava-logo.png` },
  { id: 9, name: 'somart', img: `${import.meta.env.BASE_URL}logotipo-clientes/somart-logo.png` },
  { id: 10, name: 'Talisma', img: `${import.meta.env.BASE_URL}logotipo-clientes/talisma-logo.png` },
  { id: 11, name: 'TI Avançado', img: `${import.meta.env.BASE_URL}logotipo-clientes/ti-avançado-logo.png` },
  { id: 12, name: 'Trio da Tomate', img: `${import.meta.env.BASE_URL}logotipo-clientes/trio-da-tomate-logo.png` },
  { id: 13, name: 'Eu tenho a Senha', img: `${import.meta.env.BASE_URL}logotipo-clientes/eu-tenho-a-senha-logo.png` },
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
      className="flex-1 flex flex-col relative overflow-hidden text-muted bg-gradient-to-b from-page to-page-2 transition-colors duration-300"
    >
      {/* Formas orgânicas de fundo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-lampe-yellow/15 dark:bg-lampe-yellow/10 blur-[110px] pointer-events-none"></div>

      {/* ========================================================= */}
      {/* 1. PRIMEIRA DOBRA: HERO / SEÇÃO PRINCIPAL DE CONTATO     */}
      {/* ========================================================= */}
      <section className="min-h-[calc(100vh-80px)] flex flex-col justify-between items-center py-16 px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-5xl mx-auto w-full flex-grow flex flex-col justify-between gap-10">

          {/* Cabeçalho da Página Padronizado */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-outfit font-semibold text-ink tracking-tight">
              Acenda seu <span className="bg-lampe-yellow/50 dark:bg-transparent dark:text-lampe-yellow px-3 rounded-xl">Negócio</span>
            </h1>
            <p className="mt-5 text-muted/80 font-light text-base sm:text-lg max-w-xl mx-auto px-4">
              Entre em contato conosco através dos nossos canais de atendimento ou envie uma mensagem diretamente pelo formulário.
            </p>
          </div>

          {/* Grid de 2 Colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto w-full my-auto">

            {/* Coluna Esquerda: Card de Canais de Contato */}
            <div className="w-full bg-surface rounded-3xl p-8 flex flex-col justify-between shadow-[0_10px_40px_-10px_rgba(20,51,77,0.15)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">

              <h2 className="text-2xl sm:text-3xl font-outfit font-semibold text-ink mb-6 border-b border-line pb-3">
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
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-page border border-line flex items-center justify-center text-muted group-hover:text-lampe-navy dark:group-hover:text-lampe-graphite group-hover:bg-lampe-yellow group-hover:border-lampe-yellow transition-all duration-300 shrink-0">
                    <Instagram className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-110" />
                  </div>
                  <span className="font-medium font-outfit text-muted group-hover:text-ink transition-all duration-300 text-base sm:text-xl lg:text-2xl">
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
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-page border border-line flex items-center justify-center text-muted group-hover:text-lampe-navy dark:group-hover:text-lampe-graphite group-hover:bg-lampe-yellow group-hover:border-lampe-yellow transition-all duration-300 shrink-0">
                    <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-110" />
                  </div>
                  <span className="font-medium font-outfit text-muted group-hover:text-ink transition-all duration-300 text-base sm:text-xl lg:text-2xl">
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
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-page border border-line flex items-center justify-center text-muted group-hover:text-lampe-navy dark:group-hover:text-lampe-graphite group-hover:bg-lampe-yellow group-hover:border-lampe-yellow transition-all duration-300 shrink-0">
                      <Mail className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="font-medium font-outfit text-muted group-hover:text-ink transition-all duration-300 text-base sm:text-lg lg:text-xl break-all">
                      {email.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Coluna Direita: Formulário de Contato Assíncrono */}
            <div className="w-full bg-surface rounded-3xl p-8 flex flex-col justify-between shadow-[0_10px_40px_-10px_rgba(20,51,77,0.15)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
              <div>
                <h2 className="text-2xl sm:text-3xl font-outfit font-semibold text-ink mb-6 border-b border-line pb-3">
                  Envie uma Mensagem
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Campo: Nome */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted/70 font-outfit">
                      Nome
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Seu nome"
                      className="w-full bg-page text-ink placeholder-muted/40 border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lampe-yellow focus:ring-2 focus:ring-lampe-yellow/40 transition-colors"
                    />
                  </div>

                  {/* Campo: E-mail */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted/70 font-outfit">
                      E-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="seu@email.com"
                      className="w-full bg-page text-ink placeholder-muted/40 border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lampe-yellow focus:ring-2 focus:ring-lampe-yellow/40 transition-colors"
                    />
                  </div>

                  {/* Campo: Mensagem */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted/70 font-outfit">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      placeholder="Como podemos ajudar?"
                      className="w-full bg-page text-ink placeholder-muted/40 border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lampe-yellow focus:ring-2 focus:ring-lampe-yellow/40 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Mensagem de Feedback */}
                  {result.message && (
                    <div
                      className={`flex items-center gap-2 p-3 rounded-xl text-sm font-medium ${result.isSuccess
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400'
                        : 'bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400'
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
                    className="w-full mt-2 bg-lampe-yellow hover:bg-lampe-navy dark:hover:bg-lampe-cream hover:text-lampe-cream dark:hover:text-lampe-graphite text-lampe-navy dark:text-lampe-graphite font-outfit font-semibold py-3.5 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
      <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center pt-10 pb-16 sm:pt-12 sm:pb-20 px-4 sm:px-6 lg:px-8 border-t border-line w-full z-10">
        <div className="max-w-5xl mx-auto w-full space-y-10 sm:space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-semibold text-ink tracking-tight">
              Empresas que <span className="bg-lampe-yellow/50 dark:bg-transparent dark:text-lampe-yellow px-3 rounded-xl">acenderam</span> seus negócios
            </h2>
            <p className="text-muted/70 font-light text-base sm:text-lg">
              Clique nas marcas para acendê-las
            </p>
          </div>

          {/* Grid Flexível de Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 max-w-5xl mx-auto">
            {CLIENT_LOGOS.map((client) => {
              const isClientLit = litClients.includes(client.id);
              return (
                <div
                  key={client.id}
                  onClick={() => toggleClient(client.id)}
                  className={`w-28 sm:w-32 h-20 flex items-center justify-center cursor-pointer transition-all duration-300 ${isClientLit
                    ? 'opacity-100 grayscale-0 scale-110 drop-shadow-[0_0_14px_rgba(20,51,77,0.85)] dark:drop-shadow-[0_0_14px_rgba(244,196,22,0.85)]'
                    : 'opacity-55 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-110 hover:drop-shadow-[0_0_14px_rgba(20,51,77,0.85)] dark:hover:drop-shadow-[0_0_14px_rgba(244,196,22,0.85)]'
                    }`}
                  title={client.name}
                >
                  <img
                    src={client.img}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain p-2"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `<span class="text-xs font-bold text-ink whitespace-nowrap font-outfit">${client.name}</span>`;
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
