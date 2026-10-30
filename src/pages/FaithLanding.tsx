import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  Headphones,
  Heart,
  Leaf,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Sun,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CHECKOUT_URL = "#oferta";

const contents = [
  {
    icon: BookOpen,
    title: "21 reflexões guiadas",
    description:
      "Uma leitura para cada dia, com palavras para acompanhar seu momento e ajudar você a seguir um passo de cada vez.",
  },
  {
    icon: Headphones,
    title: "21 orações em áudio",
    description:
      "Orações para ouvir no seu tempo, criando um espaço de pausa, presença e conexão.",
  },
  {
    icon: BookOpen,
    title: "Caderno digital",
    description:
      "Páginas para registrar pensamentos, intenções e pequenas descobertas ao longo do percurso.",
  },
  {
    icon: CalendarDays,
    title: "Calendário dos 21 dias",
    description:
      "Uma visão simples do caminho para você acompanhar cada etapa sem pressa.",
  },
  {
    icon: Sparkles,
    title: "Exercícios de reflexão",
    description:
      "Práticas breves para transformar a leitura em um momento de atenção e cuidado consigo.",
  },
];

const phases = [
  {
    day: "Dias 1–7",
    title: "Acolher o momento",
    description:
      "Comece reconhecendo o que você está vivendo, sem exigir de si todas as respostas agora.",
  },
  {
    day: "Dias 8–14",
    title: "Encontrar espaço",
    description:
      "Abra espaço para a fé, a esperança e novas formas de olhar para o seu caminho.",
  },
  {
    day: "Dias 15–21",
    title: "Dar o próximo passo",
    description:
      "Reúna o que aprendeu e escolha, com calma, um passo possível para seguir em frente.",
  },
];

const faqs = [
  [
    "Como funciona a jornada?",
    "São 21 dias de conteúdo digital, com uma reflexão, uma oração em áudio e uma proposta de exercício para acompanhar cada etapa.",
  ],
  [
    "Preciso fazer tudo no mesmo horário?",
    "Não. Você pode acessar o material no horário que fizer sentido para sua rotina e seguir no seu próprio ritmo.",
  ],
  [
    "Como recebo o material?",
    "Após a confirmação da compra, você receberá as instruções de acesso no canal informado durante o pagamento.",
  ],
  [
    "Por quanto tempo terei acesso?",
    "O acesso é digital. As informações de disponibilidade e uso serão apresentadas no momento da compra.",
  ],
  [
    "O conteúdo substitui terapia ou acompanhamento profissional?",
    "Não. É um material de apoio espiritual e reflexão, e não substitui atendimento médico, psicológico ou outro acompanhamento profissional.",
  ],
  [
    "E se eu mudar de ideia?",
    "Você conta com 7 dias para solicitar o reembolso, conforme as orientações apresentadas na compra.",
  ],
] as const;

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="faith-section-heading">
      <span className="faith-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function PurchaseLink({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={CHECKOUT_URL} className={`faith-cta ${className}`}>
      {children}
      <ArrowRight aria-hidden="true" />
    </a>
  );
}

export default function FaithLanding() {
  return (
    <main className="faith-page min-h-screen bg-background text-foreground">
      <header className="faith-header">
        <a className="faith-brand" href="#inicio" aria-label="21 Dias de Fé para Recomeçar — início">
          <span className="faith-brand-mark"><Sun aria-hidden="true" /></span>
          <span>21 dias <i>de fé</i></span>
        </a>
        <nav className="faith-nav" aria-label="Navegação principal">
          <a href="#jornada">A jornada</a>
          <a href="#conteudo">O que inclui</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <a className="faith-header-link" href={CHECKOUT_URL}>
          Começar jornada <ArrowRight aria-hidden="true" />
        </a>
      </header>

      <section id="inicio" className="faith-hero">
        <div className="faith-hero-glow" aria-hidden="true" />
        <div className="faith-container faith-hero-grid">
          <div className="faith-hero-copy">
            <span className="faith-eyebrow"><Sparkles aria-hidden="true" /> um caminho de fé, um dia de cada vez</span>
            <h1>Você não precisa enfrentar esse momento <em>sem direção.</em></h1>
            <p>
              Uma jornada de 21 dias com reflexões, orações e práticas para
              acompanhar você em um recomeço com mais presença e esperança.
            </p>
            <PurchaseLink>Quero começar minha jornada</PurchaseLink>
            <div className="faith-hero-note">
              <LockKeyhole aria-hidden="true" />
              <span>Conteúdo digital · Acesso simples e privado</span>
            </div>
          </div>

          <div className="faith-hero-art" aria-label="Prévia do caderno digital da jornada">
            <div className="faith-sun-disc" aria-hidden="true" />
            <div className="faith-phone">
              <div className="faith-phone-camera" aria-hidden="true" />
              <div className="faith-phone-screen">
                <span className="faith-phone-kicker">21 DIAS DE FÉ</span>
                <div className="faith-phone-sun"><Sun aria-hidden="true" /></div>
                <p className="faith-phone-day">DIA 07</p>
                <h2>Há um novo começo possível.</h2>
                <span className="faith-phone-rule" />
                <p className="faith-phone-verse">
                  Respire. Você não precisa saber todo o caminho para dar o próximo passo.
                </p>
                <span className="faith-phone-progress"><i /></span>
                <span className="faith-phone-caption">reflexão de hoje</span>
              </div>
            </div>
            <div className="faith-floating-note faith-note-one">
              <Headphones aria-hidden="true" /><span>oração em áudio</span>
            </div>
            <div className="faith-floating-note faith-note-two">
              <Heart aria-hidden="true" /><span>no seu tempo</span>
            </div>
            <div className="faith-art-caption">21 dias para caminhar com mais presença</div>
          </div>
        </div>
        <a className="faith-scroll-cue" href="#confianca" aria-label="Conheça a jornada">
          <span />
        </a>
      </section>

      <section id="confianca" className="faith-trust">
        <div className="faith-container faith-trust-row">
          <span><ShieldCheck aria-hidden="true" /> Jornada digital</span>
          <i aria-hidden="true" />
          <span><Heart aria-hidden="true" /> Feita para o seu ritmo</span>
          <i aria-hidden="true" />
          <span><LockKeyhole aria-hidden="true" /> Acesso privado</span>
        </div>
      </section>

      <section className="faith-identification">
        <div className="faith-container faith-identification-grid">
          <div className="faith-identification-symbol"><Leaf aria-hidden="true" /></div>
          <div>
            <span className="faith-eyebrow">talvez seja hora de pausar</span>
            <h2>Recomeçar não significa ter tudo resolvido.</h2>
            <p>
              Às vezes, significa encontrar um pouco de espaço para respirar,
              acolher o que está acontecendo e perceber que você pode seguir
              com um passo pequeno de cada vez.
            </p>
            <p className="faith-identification-emphasis">
              Esta jornada foi criada para acompanhar esse processo com fé,
              reflexão e gentileza.
            </p>
          </div>
        </div>
      </section>

      <section id="conteudo" className="faith-content-section">
        <div className="faith-container">
          <SectionHeading
            eyebrow="um caminho acompanhado"
            title="Um espaço diário para se reconectar."
            description="Tudo foi organizado para que você encontre o conteúdo com facilidade e possa fazer dele um momento seu."
          />
          <div className="faith-content-grid">
            {contents.map(({ icon: Icon, title, description }, index) => (
              <article className={`faith-content-card ${index === 0 ? "faith-content-featured" : ""}`} key={title}>
                <span className="faith-card-icon"><Icon aria-hidden="true" /></span>
                <span className="faith-card-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faith-how">
        <div className="faith-container">
          <SectionHeading
            eyebrow="simples de acompanhar"
            title="Como funciona."
            description="Um percurso leve, para caber na vida real."
          />
          <div className="faith-steps">
            {[
              ["01", "Acesse o material", "Receba as orientações e abra a jornada no seu dispositivo."],
              ["02", "Reserve um momento", "Leia a reflexão, ouça a oração e experimente o exercício do dia."],
              ["03", "Siga no seu ritmo", "Acompanhe os 21 dias com liberdade para pausar e retomar quando precisar."],
            ].map(([number, title, description]) => (
              <article className="faith-step" key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="jornada" className="faith-phases">
        <div className="faith-container">
          <SectionHeading
            eyebrow="21 dias de caminhada"
            title="Três fases, um passo de cada vez."
            description="Uma estrutura para ajudar você a olhar para o presente e seguir com mais intenção."
          />
          <div className="faith-phase-grid">
            {phases.map((phase, index) => (
              <article className="faith-phase-card" key={phase.day}>
                <span className="faith-phase-day">{phase.day}</span>
                <span className="faith-phase-index">0{index + 1}</span>
                <h3>{phase.title}</h3>
                <p>{phase.description}</p>
                <span className="faith-phase-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faith-bonuses">
        <div className="faith-container faith-bonuses-inner">
          <div className="faith-bonus-heading">
            <span className="faith-eyebrow">para apoiar o seu caminho</span>
            <h2>E ainda tem mais para acompanhar você.</h2>
          </div>
          <article className="faith-bonus-card">
            <span className="faith-card-icon"><BookOpen aria-hidden="true" /></span>
            <div><span className="faith-bonus-label">BÔNUS 01</span><h3>Caderno digital de reflexão</h3><p>Um lugar organizado para registrar suas anotações e intenções.</p></div>
            <Check aria-hidden="true" className="faith-bonus-check" />
          </article>
          <article className="faith-bonus-card">
            <span className="faith-card-icon"><CalendarDays aria-hidden="true" /></span>
            <div><span className="faith-bonus-label">BÔNUS 02</span><h3>Calendário dos 21 dias</h3><p>Uma visão prática para acompanhar o percurso e celebrar cada etapa.</p></div>
            <Check aria-hidden="true" className="faith-bonus-check" />
          </article>
        </div>
      </section>

      <section id="oferta" className="faith-offer-section">
        <div className="faith-container faith-offer-grid">
          <div className="faith-offer-copy">
            <span className="faith-eyebrow">sua jornada começa aqui</span>
            <h2>Um convite para recomeçar com fé.</h2>
            <p>
              Tenha acesso à jornada completa de 21 dias e aos materiais para
              seguir cada etapa no seu tempo.
            </p>
            <ul>
              <li><Check aria-hidden="true" /> 21 reflexões e 21 orações em áudio</li>
              <li><Check aria-hidden="true" /> Caderno digital, calendário e exercícios</li>
              <li><Check aria-hidden="true" /> Dois materiais bônus</li>
              <li><Check aria-hidden="true" /> Garantia de 7 dias</li>
            </ul>
          </div>
          <div className="faith-price-card">
            <span className="faith-price-label">ACESSO À JORNADA COMPLETA</span>
            <p className="faith-old-price">De <s>R$ 47,00</s></p>
            <div className="faith-price"><span>R$</span> 27<small>,90</small></div>
            <p className="faith-price-caption">pagamento único</p>
            <PurchaseLink className="faith-cta-full">Quero começar agora</PurchaseLink>
            <p className="faith-secure-note"><LockKeyhole aria-hidden="true" /> Compra segura · Acesso digital</p>
            <div className="faith-guarantee-mini"><ShieldCheck aria-hidden="true" /><span><strong>7 dias de garantia</strong><br />Conheça a jornada com tranquilidade.</span></div>
          </div>
        </div>
      </section>

      <section className="faith-guarantee">
        <div className="faith-container faith-guarantee-inner">
          <span className="faith-guarantee-icon"><ShieldCheck aria-hidden="true" /></span>
          <div>
            <span className="faith-eyebrow">sua decisão, com tranquilidade</span>
            <h2>Você tem 7 dias de garantia.</h2>
            <p>
              Acesse as informações da compra e, se decidir que a jornada não
              é para você, poderá solicitar o reembolso dentro do prazo de 7 dias.
            </p>
          </div>
        </div>
      </section>

      <section id="duvidas" className="faith-faq">
        <div className="faith-container faith-faq-inner">
          <SectionHeading
            eyebrow="perguntas frequentes"
            title="Dúvidas? Estamos aqui."
            description="Encontre respostas antes de começar."
          />
          <Accordion type="single" collapsible className="faith-accordion">
            {faqs.map(([question, answer], index) => (
              <AccordionItem key={question} value={`faq-${index}`}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="faith-final-cta">
        <div className="faith-container">
          <span className="faith-eyebrow">um dia de cada vez</span>
          <h2>Seu próximo passo pode começar com um momento de pausa.</h2>
          <p>Conheça a jornada 21 Dias de Fé para Recomeçar.</p>
          <PurchaseLink>Quero conhecer a jornada</PurchaseLink>
        </div>
      </section>

      <footer className="faith-footer">
        <div className="faith-container faith-footer-top">
          <a className="faith-brand" href="#inicio">
            <span className="faith-brand-mark"><Sun aria-hidden="true" /></span>
            <span>21 dias <i>de fé</i></span>
          </a>
          <a href="#inicio">Voltar ao início <ArrowRight aria-hidden="true" /></a>
        </div>
        <div className="faith-container faith-footer-bottom">
          <p>© {new Date().getFullYear()} 21 Dias de Fé para Recomeçar.</p>
          <p className="faith-disclaimer">
            Este material é educativo e de apoio espiritual. Não substitui
            acompanhamento médico, psicológico ou de outros profissionais.
          </p>
        </div>
      </footer>
    </main>
  );
}