import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! (Demonstração)');
  };

  return (
    <div className="flex-1 flex flex-col py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-yellow-500/5 blur-[160px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto z-10 w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl tracking-tight mb-4">
            ACENDA SEU <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.4)]">NEGÓCIO</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-neutral-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus diam vel nibh efficitur posuere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contatos</h2>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed convallis erat.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-yellow-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-semibold uppercase">E-mail</p>
                  <p className="text-sm text-neutral-300">contato@lampe.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-yellow-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-semibold uppercase">Telefone</p>
                  <p className="text-sm text-neutral-300">(81) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-yellow-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-semibold uppercase">Endereço</p>
                  <p className="text-sm text-neutral-300">Recife - PE, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 p-8 rounded-2xl border border-neutral-800 bg-neutral-900/10 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/30 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                    E-mail Comercial
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/30 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  placeholder="Ex: Registro de Marca"
                  className="w-full px-4 py-3 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/30 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows="5"
                  placeholder="Descreva brevemente sua ideia ou necessidade..."
                  className="w-full px-4 py-3 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/30 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(250,204,21,0.5)] cursor-pointer"
              >
                <Send className="w-4 h-4" /> Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
