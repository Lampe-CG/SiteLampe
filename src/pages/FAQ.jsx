import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Plus, Tag, Lightbulb, Settings, Code, MessageCircle, ArrowRight, LayoutGrid } from 'lucide-react';

/*
 * Conteúdo do FAQ.
 * Cada resposta é um array de blocos: string = parágrafo, { list: [...] } = lista com marcadores.
 */
const FAQ_DATA = [
  {
    id: 'marcas',
    title: 'Registro de Marcas',
    icon: Tag,
    items: [
      {
        q: 'O que é o registro de marca?',
        a: [
          'O registro de marca é o procedimento realizado perante o Instituto Nacional da Propriedade Industrial (INPI) para obter o direito de uso exclusivo de uma marca no Brasil, dentro do segmento de atuação correspondente.',
          'Ele contribui para proteger a identidade do negócio, fortalecer seu posicionamento no mercado e prevenir conflitos relacionados ao uso de sinais semelhantes.',
        ],
      },
      {
        q: 'Por que devo registrar minha marca?',
        a: [
          'O registro é um importante instrumento de proteção jurídica e valorização empresarial. Ele permite que o titular tenha direitos sobre a marca registrada, contribuindo para evitar usos indevidos por terceiros e consolidar a identidade do negócio.',
        ],
      },
      {
        q: 'Ter CNPJ ou domínio na internet garante a proteção da minha marca?',
        a: [
          'Não. O registro empresarial, a aquisição de domínio e a criação de perfis em redes sociais não substituem o registro de marca perante o INPI.',
          'Cada procedimento possui finalidade própria, e o registro de marca é o instrumento específico para obtenção dos direitos de propriedade industrial sobre o sinal registrado.',
        ],
      },
      {
        q: 'Como funciona o processo de registro de marca?',
        a: [
          'O processo envolve etapas de:',
          {
            list: [
              'Análise da marca e do segmento de atuação;',
              'Busca de anterioridade e avaliação de viabilidade;',
              'Definição da classificação adequada;',
              'Protocolo do pedido perante o INPI;',
              'Acompanhamento das publicações e movimentações;',
              'Atendimento de eventuais exigências;',
              'Acompanhamento até a decisão final e, quando concedido, a obtenção do certificado.',
            ],
          },
          'A LAMPE acompanha essas etapas, oferecendo orientação estratégica e suporte técnico-jurídico.',
        ],
      },
      {
        q: 'Quanto tempo demora para registrar uma marca?',
        a: [
          'O prazo depende da análise do INPI e das particularidades de cada processo. Exigências, oposições e outras ocorrências podem influenciar sua duração.',
          'Por isso, é importante acompanhar regularmente as movimentações e observar os prazos administrativos.',
        ],
      },
      {
        q: 'Posso registrar minha marca sozinho?',
        a: [
          'Sim, mas não é recomendado. O próprio interessado pode realizar o pedido de registro perante o INPI.',
          'Entretanto, o processo exige atenção à legislação, à classificação dos produtos e serviços, à análise de anterioridade e aos prazos administrativos. O acompanhamento especializado contribui para uma condução mais segura e estratégica.',
        ],
      },
      {
        q: 'O registro de marca vale em todo o Brasil?',
        a: [
          'Em regra, o registro concedido pelo INPI assegura proteção em todo o território nacional, observados os limites legais, a especialidade e eventuais exceções previstas na legislação.',
        ],
      },
    ],
  },
  {
    id: 'patentes',
    title: 'Patentes e Inovação',
    icon: Lightbulb,
    items: [
      {
        q: 'O que é uma patente?',
        a: [
          'A patente é um título de propriedade industrial concedido pelo INPI que confere ao titular direitos exclusivos de exploração da invenção ou modelo de utilidade, por prazo determinado e nos limites legais.',
          'É um instrumento importante para proteger soluções tecnológicas e estimular a valorização da inovação.',
        ],
      },
      {
        q: 'Qual é a diferença entre patente de invenção e modelo de utilidade?',
        a: [
          'A patente de invenção protege uma nova solução técnica que atende aos requisitos legais de patenteabilidade.',
          'O modelo de utilidade protege um objeto de uso prático, ou parte dele, que apresente nova forma ou disposição e envolva ato inventivo, resultando em melhoria funcional no uso ou fabricação.',
        ],
      },
      {
        q: 'Toda ideia pode ser patenteada?',
        a: [
          'Não. Ideias abstratas, conceitos e soluções que não atendam aos requisitos legais não podem ser patenteados.',
          'É necessário que a criação apresente uma solução técnica e cumpra os critérios de patenteabilidade previstos na legislação.',
        ],
      },
      {
        q: 'Posso divulgar minha invenção antes de solicitar a patente?',
        a: [
          'É recomendável evitar a divulgação pública antes da avaliação e do depósito do pedido.',
          'A divulgação pode comprometer o requisito de novidade. Embora a legislação brasileira preveja período de graça em determinadas situações, confiar nessa exceção pode gerar riscos, especialmente em estratégias internacionais de proteção.',
        ],
      },
      {
        q: 'Como a LAMPE pode ajudar no processo de patente?',
        a: [
          'A LAMPE oferece suporte técnico e consultivo na avaliação da solução, na estratégia de proteção e na preparação e acompanhamento do processo, incluindo a elaboração de documentos técnicos em conjunto com os inventores e profissionais envolvidos.',
        ],
      },
    ],
  },
  {
    id: 'projetos',
    title: 'Desenvolvimento de Projetos',
    icon: Settings,
    items: [
      {
        q: 'A LAMPE desenvolve projetos de engenharia?',
        a: [
          'Sim. Atuamos no desenvolvimento e suporte técnico de projetos de engenharia, com foco em inovação, viabilidade e desenvolvimento de soluções.',
          'Nossa atuação pode envolver engenharia de produto, desenvolvimento de soluções técnicas, prototipagem e suporte à validação de projetos.',
        ],
      },
      {
        q: 'Tenho uma ideia, mas ainda não sei como desenvolvê-la. A LAMPE pode ajudar?',
        a: [
          'Sim. Podemos auxiliar na estruturação inicial da ideia, na avaliação de possibilidades técnicas e na definição de caminhos para seu desenvolvimento.',
          'Cada projeto é analisado de acordo com suas características, necessidades e objetivos.',
        ],
      },
      {
        q: 'A LAMPE desenvolve protótipos?',
        a: [
          'O desenvolvimento de protótipos pode fazer parte dos projetos, conforme o escopo técnico, os recursos necessários e as condições acordadas para cada trabalho.',
        ],
      },
      {
        q: 'É possível proteger um produto desenvolvido pela engenharia?',
        a: [
          'Sim, dependendo das características da criação.',
          'Um produto pode envolver diferentes estratégias de proteção, como patente, desenho industrial, marca e direitos autorais, conforme os elementos que o compõem e os requisitos legais aplicáveis.',
          'A escolha depende de uma análise individualizada.',
        ],
      },
    ],
  },
  {
    id: 'software',
    title: 'Desenvolvimento de Software',
    icon: Code,
    items: [
      {
        q: 'A LAMPE desenvolve softwares personalizados?',
        a: [
          'Sim. Desenvolvemos soluções de software alinhadas às necessidades e aos objetivos de cada negócio, considerando funcionalidades, processos e requisitos específicos.',
        ],
      },
      {
        q: 'Que tipos de software podem ser desenvolvidos?',
        a: [
          'A depender do escopo do projeto, podemos atuar no desenvolvimento de sistemas web, aplicativos, plataformas de gestão e outras soluções digitais personalizadas.',
        ],
      },
      {
        q: 'Como funciona o desenvolvimento de um software?',
        a: [
          'O processo pode envolver:',
          {
            list: [
              'Levantamento das necessidades;',
              'Definição dos requisitos e funcionalidades;',
              'Planejamento da solução;',
              'Desenvolvimento;',
              'Testes e validação;',
              'Entrega e orientações para utilização.',
            ],
          },
          'As etapas são definidas conforme a complexidade e as características de cada projeto.',
        ],
      },
      {
        q: 'Como proteger legalmente um software?',
        a: [
          'Os programas de computador são protegidos pelo regime de direitos autorais, independentemente de registro.',
          'O registro perante o INPI é facultativo e pode servir como importante elemento de comprovação da autoria e da titularidade, contribuindo para a segurança jurídica do titular.',
        ],
      },
      {
        q: 'O software desenvolvido pertence automaticamente ao cliente?',
        a: [
          'A titularidade e os direitos de utilização dependem das condições contratadas e da legislação aplicável.',
          'Por isso, é fundamental estabelecer em contrato as regras sobre titularidade, licenciamento, utilização, manutenção e demais direitos relacionados ao software.',
        ],
      },
    ],
  },
  {
    id: 'contratacao',
    title: 'Contratação e Atendimento',
    icon: MessageCircle,
    items: [
      {
        q: 'Como posso contratar os serviços da LAMPE?',
        a: [
          'Você pode entrar em contato pelos nossos canais oficiais e apresentar sua necessidade.',
          'A partir das informações iniciais, avaliamos o escopo do trabalho e as possibilidades de atendimento.',
        ],
      },
      {
        q: 'A LAMPE atende empresas e pessoas físicas?',
        a: [
          'Sim. O atendimento pode ser direcionado a empreendedores, empresas, inventores, pesquisadores, startups e demais interessados em propriedade intelectual, engenharia e tecnologia, conforme as características de cada serviço.',
        ],
      },
      {
        q: 'Como funciona o orçamento?',
        a: [
          'O orçamento é elaborado de acordo com o serviço solicitado, sua complexidade, o escopo de atuação e os recursos necessários.',
          'Após compreender sua demanda, apresentamos uma proposta com as condições aplicáveis.',
        ],
      },
      {
        q: 'Ainda tenho dúvidas. Como posso entrar em contato?',
        a: [
          'Nossa equipe está disponível para entender sua necessidade e orientar você sobre os serviços da LAMPE.',
          'Entre em contato pelos nossos canais oficiais e vamos conversar sobre sua ideia ou projeto.',
        ],
      },
    ],
  },
];

function AccordionItem({ item, isOpen, onToggle, id }) {
  return (
    <div
      className={`bg-surface rounded-2xl border transition-all duration-300 ${isOpen
        ? 'border-lampe-yellow/70 shadow-[0_10px_40px_-10px_rgba(20,51,77,0.2)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]'
        : 'border-line hover:border-lampe-yellow/40 shadow-[0_4px_20px_-10px_rgba(20,51,77,0.12)]'
        }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        id={`${id}-button`}
        className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-lampe-yellow rounded-2xl"
      >
        <span className={`font-outfit text-base sm:text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-ink' : 'text-ink/90'}`}>
          {item.q}
        </span>
        <span
          className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
            ? 'bg-lampe-yellow text-lampe-graphite rotate-45'
            : 'bg-page text-ink'
            }`}
        >
          <Plus className="w-5 h-5" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-button`}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-6 space-y-3 text-muted/90 font-light text-sm sm:text-base leading-relaxed">
              {item.a.map((block, i) =>
                typeof block === 'string' ? (
                  <p key={i}>{block}</p>
                ) : (
                  <ul key={i} className="space-y-2 pl-1">
                    {block.list.map((li, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-lampe-yellow flex-shrink-0" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('todas');
  const [openItem, setOpenItem] = useState('marcas-0');

  const visibleCategories = activeCategory === 'todas'
    ? FAQ_DATA
    : FAQ_DATA.filter((c) => c.id === activeCategory);

  const handleNavigateToContact = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate('/contato');
  };

  const pillBase = 'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium font-outfit transition-all duration-300 cursor-pointer whitespace-nowrap';
  const pillActive = 'bg-lampe-yellow text-lampe-graphite font-semibold shadow-[0_6px_20px_-6px_rgba(244,196,22,0.6)]';
  const pillInactive = 'bg-surface text-muted border border-line hover:text-ink hover:border-lampe-yellow/50';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex-1 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 text-muted relative overflow-hidden min-h-[calc(100vh-80px)] bg-gradient-to-b from-page to-page-2 transition-colors duration-300"
    >
      {/* Formas orgânicas de fundo */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-lampe-yellow/15 dark:bg-lampe-yellow/10 blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] rounded-full bg-lampe-navy/10 dark:bg-lampe-navy/30 blur-[110px] pointer-events-none"></div>

      <div className="max-w-4xl w-full mx-auto z-10 flex flex-col gap-10">

        {/* Cabeçalho Padronizado */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-outfit font-semibold text-ink tracking-tight">
            Perguntas <span className="bg-lampe-yellow/50 dark:bg-transparent dark:text-lampe-yellow px-3 rounded-xl">Frequentes</span>
          </h1>
          <p className="mt-5 text-muted/80 font-light text-base sm:text-lg max-w-2xl mx-auto px-4 leading-relaxed">
            Na LAMPE, acreditamos que inovação, tecnologia e propriedade intelectual devem caminhar juntas. Reunimos as principais dúvidas sobre nossos serviços para ajudar você a compreender como podemos contribuir para a proteção e o desenvolvimento das suas ideias.
          </p>
        </div>

        {/* Filtro por categoria */}
        <div className="flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory('todas')}
            className={`${pillBase} ${activeCategory === 'todas' ? pillActive : pillInactive}`}
          >
            <LayoutGrid className="w-4 h-4" />
            Todas
          </button>
          {FAQ_DATA.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`${pillBase} ${activeCategory === cat.id ? pillActive : pillInactive}`}
              >
                <Icon className="w-4 h-4" />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Categorias + Accordion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-12"
          >
            {visibleCategories.map((cat) => {
              const Icon = cat.icon;
              const number = FAQ_DATA.findIndex((c) => c.id === cat.id) + 1;
              return (
                <section key={cat.id} aria-labelledby={`cat-${cat.id}`} className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-2xl bg-lampe-yellow/20 dark:bg-lampe-yellow/15 text-ink dark:text-lampe-yellow flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-muted/60 uppercase tracking-widest font-outfit">
                        {String(number).padStart(2, '0')}
                      </span>
                      <h2 id={`cat-${cat.id}`} className="text-xl sm:text-2xl font-outfit font-semibold text-ink leading-tight">
                        {cat.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {cat.items.map((item, idx) => {
                      const key = `${cat.id}-${idx}`;
                      return (
                        <AccordionItem
                          key={key}
                          id={`faq-${key}`}
                          item={item}
                          isOpen={openItem === key}
                          onToggle={() => setOpenItem(openItem === key ? null : key)}
                        />
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* CTA final */}
        <div className="rounded-3xl p-8 sm:p-10 text-center mt-4">
          <div className="flex flex-col items-center gap-4">
            <img
              src={`${import.meta.env.BASE_URL}lampe-icon.png`}
              alt=""
              aria-hidden="true"
              className="h-12 w-auto object-contain"
            />
            <h3 className="text-2xl sm:text-3xl font-outfit font-semibold text-ink">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted/80 font-light text-sm sm:text-base max-w-xl">
              Nossa equipe está disponível para entender sua necessidade e orientar você sobre os serviços da LAMPE.
            </p>
            <button
              type="button"
              onClick={() => window.open("https://wa.me/+5583987048202?text=Olá !%20vim%20pelo%20site%20da%20LAMPE%20e%20estou%20com%20duvidas.", "_blank", "noopener,noreferrer")}
              className="mt-2 inline-flex items-center gap-2 bg-lampe-yellow text-lampe-graphite font-semibold font-outfit px-6 py-3 rounded-full hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(244,196,22,0.5)] transition-all duration-300 cursor-pointer"
            >
              Fale Conosco
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

