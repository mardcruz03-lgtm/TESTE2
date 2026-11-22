import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  Compass,
  Headphones,
  Heart,
  Leaf,
  LockKeyhole,
  Quote,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sun,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CHECKOUT_URL = "https://pay.kiwify.com.br/5xUKr2J";

const contents = [
  {
    icon: BookOpen,
    title: "21 reflexões guiadas",
    description: "Uma mensagem para cada dia, organizada para ajudar você a iniciar seu momento de oração.",
  },
  {
    icon: Headphones,
    title: "21 orações em áudio",
    description: "Orações para acompanhar seu momento com Deus, inclusive quando faltarem palavras.",
  },
  {
    icon: Sparkles,
    title: "21 exercícios práticos",
    description: "Ações simples para levar a mensagem do dia para a sua rotina.",
  },
  {
    icon: CalendarDays,
    title: "Conteúdo organizado por dia",
    description: "Uma sequência clara para acompanhar a jornada, um dia de cada vez.",
  },
  {
    icon: Smartphone,
    title: "Acesso em seus dispositivos",
    description: "A jornada é digital e pode ser acompanhada pelo celular, tablet ou computador.",
  },
  {
    icon: LockKeyhole,
    title: "Acesso após a confirmação",
    description: "As instruções de acesso são enviadas depois da confirmação do pagamento.",
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
  ["Como recebo o acesso?", "Depois da confirmação do pagamento, as instruções de acesso são enviadas para o e-mail informado na compra."],
  ["Quanto tempo preciso reservar por dia?", "Não há um tempo diário confirmado para informar. Você pode escolher um momento que faça sentido para sua rotina."],
  ["Consigo acompanhar pelo celular?", "Sim. A jornada é digital e foi pensada para acompanhar pelo celular; também pode ser acessada em tablet ou computador."],
  ["As orações são em áudio?", "Sim. A jornada inclui 21 orações em áudio."],
  ["Preciso instalar algum aplicativo?", "Não há informação confirmada sobre a necessidade de instalar um aplicativo. Consulte as instruções de acesso enviadas após a compra."],
  ["E se eu perder um dia?", "Você não precisa desistir. Retome a jornada de onde parou e siga no seu ritmo."],
  ["Por quanto tempo terei acesso?", "O prazo de acesso será informado nas orientações apresentadas durante a compra."],
  ["Como funciona a garantia?", "Você pode solicitar o reembolso dentro de 7 dias, conforme as condições da plataforma de pagamento."],
  ["O pagamento é seguro?", "O pagamento é processado pela Kiwify, no ambiente de compra da plataforma."],
  ["A jornada substitui acompanhamento profissional?", "Não. Este material é de apoio espiritual e reflexão e não substitui acompanhamento médico, psicológico ou de outros profissionais."],
] as const;

const trackingParameters = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
] as const;

function getCheckoutUrl() {
  const checkout = new URL(CHECKOUT_URL);
  const incomingParameters = new URLSearchParams(window.location.search);

  trackingParameters.forEach((parameter) => {
    if (!checkout.searchParams.has(parameter)) {
      incomingParameters.getAll(parameter).forEach((value) => {
        checkout.searchParams.append(parameter, value);
      });
    }
  });

  return checkout.toString();
}

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
    <a href={getCheckoutUrl()} className={`faith-cta ${className}`}>
      {children}
      <ArrowRight aria-hidden="true" />
    </a>
  );
}

export default function FaithLanding() {
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const faq = document.getElementById("duvidas");
    const footer = document.querySelector(".faith-footer");

    if (!hero || !faq || !footer) return;

    let heroVisible = true;
    let faqVisible = false;
    let footerVisible = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === hero) heroVisible = entry.isIntersecting;
          if (entry.target === faq) faqVisible = entry.isIntersecting;
          if (entry.target === footer) footerVisible = entry.isIntersecting;
        });

        setShowMobileCta(!heroVisible && !faqVisible && !footerVisible);
      },
      { threshold: 0.05 },
    );

    observer.observe(hero);
    observer.observe(faq);
    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="faith-page min-h-screen bg-background text-foreground">
      <header className="faith-header">
        <a className="faith-brand" href="#inicio" aria-label="21 Dias de Fé para Recomeçar — início">
          <span className="faith-brand-mark"><Sun aria-hidden="true" /></span>
          <span>21 dias <i>de fé</i></span>
        </a>
        <nav className="faith-nav" aria-label="Navegação principal">
          <a href="#para-quem">Para quem é</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#conteudo">O que você recebe</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <a className="faith-header-link" href={getCheckoutUrl()}>
          Começar meus 21 dias <ArrowRight aria-hidden="true" />
        </a>
      </header>

      <section id="inicio" className="faith-hero">
        <div className="faith-hero-glow" aria-hidden="true" />
        <div className="faith-container faith-hero-grid">
          <div className="faith-hero-copy">
            <span className="faith-eyebrow"><Sparkles aria-hidden="true" /> Você lembra de quando orar não parecia tão difícil?</span>
            <h1>A constância com Deus que você sente falta pode ser reconstruída — <em>um dia de cada vez.</em></h1>
            <p>
              O 21 Dias de Fé para Recomeçar é uma jornada guiada para quem deseja
              voltar a orar, mas está desanimado, distante de Deus ou não consegue
              manter uma rotina espiritual.
            </p>
            <ul className="faith-hero-benefits">
              {[
                "Saiba o que refletir e como começar sua oração",
                "Tenha uma direção simples para cada um dos 21 dias",
                "Crie uma rotina possível, mesmo com pouco tempo",
              ].map((item) => (
                <li key={item}><Check aria-hidden="true" />{item}</li>
              ))}
            </ul>
            <PurchaseLink>Quero começar meus 21 dias</PurchaseLink>
            <p className="faith-price-microcopy">Por R$ 27,90 · acesso imediato · garantia de 7 dias</p>
            <div className="faith-hero-note">
              <LockKeyhole aria-hidden="true" />
              <span>Pagamento processado com segurança pela Kiwify.</span>
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
                  Uma direção para refletir, orar e levar a mensagem para o seu dia.
                </p>
                <span className="faith-phone-progress"><i /></span>
                <span className="faith-phone-caption">reflexão · oração · ação</span>
              </div>
            </div>
            <div className="faith-floating-note faith-note-one">
              <Headphones aria-hidden="true" /><span>oração em áudio</span>
            </div>
            <div className="faith-floating-note faith-note-two">
              <Heart aria-hidden="true" /><span>exercício do dia</span>
            </div>
            <div className="faith-art-caption">Prévia visual da jornada: reflexão, oração e ação</div>
          </div>
        </div>
        <a className="faith-scroll-cue" href="#confianca" aria-label="Conheça a jornada">
          <span />
        </a>
      </section>

      <section id="confianca" className="faith-trust">
        <div className="faith-container faith-trust-row">
          <span><ShieldCheck aria-hidden="true" /> Jornada guiada de 21 dias</span>
          <i aria-hidden="true" />
          <span><Heart aria-hidden="true" /> No seu próprio ritmo</span>
          <i aria-hidden="true" />
          <span><LockKeyhole aria-hidden="true" /> Pagamento pela Kiwify</span>
        </div>
      </section>

      <section className="faith-identification faith-pain-section">
        <div className="faith-container faith-identification-grid">
          <div className="faith-identification-symbol"><Leaf aria-hidden="true" /></div>
          <div>
            <span className="faith-eyebrow">um recomeço possível</span>
            <h2>Você quer se aproximar de Deus, mas alguma coisa sempre interrompe seu recomeço?</h2>
            <p>
              Talvez você já tenha prometido que voltaria a orar. Começou animado,
              conseguiu por alguns dias, mas a correria, o cansaço ou as preocupações
              tomaram novamente o seu tempo.
            </p>
            <p>
              Então veio a culpa. Você sente falta da proximidade com Deus, mas não
              sabe o que dizer, por onde começar ou como continuar sem abandonar
              tudo outra vez.
            </p>
            <ul className="faith-check-list">
              <li><Check aria-hidden="true" />Você sente vontade de orar, mas não encontra as palavras</li>
              <li><Check aria-hidden="true" />Começa uma rotina e abandona depois de poucos dias</li>
              <li><Check aria-hidden="true" />Abre a Bíblia, mas não sabe o que refletir</li>
              <li><Check aria-hidden="true" />Sente que sua vida espiritual ficou em segundo plano</li>
              <li><Check aria-hidden="true" />Precisa de uma direção simples para recomeçar</li>
            </ul>
            <p className="faith-identification-emphasis">
              Você não precisa esperar se sentir completamente preparado. Precisa
              apenas de um caminho possível para dar o primeiro passo.
            </p>
          </div>
        </div>
      </section>

      <section className="faith-future-section">
        <div className="faith-container">
          <SectionHeading
            eyebrow="um passo de cada vez"
            title="Imagine chegar ao final dos próximos 21 dias…"
            description="A proposta da jornada é ajudar você a construir, com calma, um caminho para:"
          />
          <ul className="faith-future-list">
            <li><Check aria-hidden="true" />Saber como iniciar seu momento diário com Deus</li>
            <li><Check aria-hidden="true" />Ter uma direção de oração para cada dia</li>
            <li><Check aria-hidden="true" />Reservar alguns minutos da rotina para cuidar da sua fé</li>
            <li><Check aria-hidden="true" />Levar uma mensagem prática ao longo do dia</li>
            <li><Check aria-hidden="true" />Contar com um caminho definido para continuar depois da jornada</li>
          </ul>
          <p className="faith-future-note">Não se trata de buscar uma experiência perfeita. Trata-se de voltar, um dia de cada vez.</p>
          <div className="faith-inline-cta"><PurchaseLink>Quero começar meus 21 dias</PurchaseLink></div>
        </div>
      </section>

      <section id="para-quem" className="faith-for-you">
        <div className="faith-container faith-for-you-inner">
          <div>
            <span className="faith-eyebrow">uma jornada para recomeçar</span>
            <h2>Esta jornada foi criada para quem…</h2>
          </div>
          <ul className="faith-for-you-list">
            <li><Check aria-hidden="true" />Sente que se afastou de Deus e deseja retornar</li>
            <li><Check aria-hidden="true" />Quer voltar a orar, mas não consegue manter constância</li>
            <li><Check aria-hidden="true" />Precisa transformar intenção em rotina</li>
            <li><Check aria-hidden="true" />Tem pouco tempo e busca uma direção simples</li>
            <li><Check aria-hidden="true" />Deseja viver os próximos dias com mais reflexão, oração e propósito</li>
            <li className="faith-for-you-note">Você não precisa ter conhecimento bíblico avançado. A jornada foi organizada para ser simples, pessoal e possível de acompanhar.</li>
          </ul>
        </div>
      </section>

      <section id="conteudo" className="faith-content-section">
        <div className="faith-container">
          <SectionHeading
            eyebrow="o que você recebe"
            title="Tudo o que você precisa para viver os próximos 21 dias com direção."
            description="Uma jornada digital organizada por dia, para acompanhar pelo celular, tablet ou computador."
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
          <div className="faith-inline-cta"><PurchaseLink>Quero começar meus 21 dias</PurchaseLink></div>
        </div>
      </section>

      <section id="como-funciona" className="faith-how">
        <div className="faith-container">
          <SectionHeading
            eyebrow="o caminho dos três passos"
            title="Poucos minutos por dia. Uma direção clara para continuar."
            description="Cada dia segue uma sequência simples para ajudar você a não depender apenas da motivação."
          />
          <div className="faith-steps">
            {[
              ["01", "Reflita", "Leia uma mensagem curta para direcionar seu pensamento."],
              ["02", "Ore", "Acompanhe uma oração em áudio, mesmo quando faltarem palavras."],
              ["03", "Pratique", "Realize uma ação simples para aplicar a mensagem naquele dia."],
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

      <section className="faith-preview">
        <div className="faith-container faith-preview-inner">
          <SectionHeading
            eyebrow="prévia visual da jornada"
            title="Veja como será um dos seus dias"
            description="Reflexão do dia → oração em áudio → ação prática"
          />
          <div className="faith-preview-sequence" aria-label="Sequência diária: reflexão, oração em áudio e ação prática">
            <span><BookOpen aria-hidden="true" />Reflexão</span>
            <ArrowRight aria-hidden="true" />
            <span><Headphones aria-hidden="true" />Oração em áudio</span>
            <ArrowRight aria-hidden="true" />
            <span><Sparkles aria-hidden="true" />Ação prática</span>
          </div>
          <p>Dentro da jornada, cada dia segue uma sequência simples para ajudar você a não depender apenas da motivação.</p>
        </div>
      </section>

      <section className="faith-bonuses">
        <div className="faith-container faith-bonuses-inner">
          <div className="faith-bonus-heading">
            <span className="faith-eyebrow">materiais já incluídos</span>
            <h2>Materiais para acompanhar seu caminho.</h2>
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

      <section className="faith-origin">
        <div className="faith-container faith-origin-inner">
          <span className="faith-origin-icon"><Quote aria-hidden="true" /></span>
          <span className="faith-eyebrow">a origem do projeto</span>
          <h2>Esta jornada nasceu primeiro em oração</h2>
          <p>
            Antes de se tornar um produto, o 21 Dias de Fé para Recomeçar nasceu
            de um desejo: ajudar pessoas que sentem falta de Deus, mas não sabem
            como voltar.
          </p>
          <blockquote>
            “Creio que o verdadeiro autor desta jornada é o Espírito Santo. Em
            oração, recebi a direção e a inspiração para cada parte deste projeto.
            Meu papel foi organizar essa mensagem em um caminho simples, para que
            outras pessoas também possam recomeçar.”
          </blockquote>
          <p className="faith-origin-credit">— Marcelo da Cruz Costa</p>
          <p className="faith-origin-bio">Marcelo da Cruz Costa é o idealizador e organizador do projeto 21 Dias de Fé para Recomeçar.</p>
          <div className="faith-inline-cta"><PurchaseLink>Quero começar meus 21 dias</PurchaseLink></div>
        </div>
      </section>

      <section className="faith-objection">
        <div className="faith-container faith-objection-inner">
          <span className="faith-eyebrow">sem exigir uma rotina perfeita</span>
          <h2>E se eu já tentei outras vezes e não consegui continuar?</h2>
          <p>
            Esta jornada não exige que você mude toda a sua rotina de uma vez.
            Cada dia apresenta uma direção curta, uma oração guiada e uma ação
            simples. Se você perder um dia, não precisa desistir: retome de onde
            parou.
          </p>
          <p>O objetivo não é cumprir uma obrigação perfeita. É criar espaço para voltar a caminhar com Deus.</p>
        </div>
      </section>

      <section id="oferta" className="faith-offer-section">
        <div className="faith-container faith-offer-grid">
          <div className="faith-offer-copy">
            <span className="faith-eyebrow">sua jornada começa aqui</span>
            <h2>Comece hoje sua jornada de volta à oração</h2>
            <p>
              Receba os 21 dias completos e tenha uma direção para não precisar
              recomeçar sozinho toda vez.
            </p>
            <ul>
              <li><Check aria-hidden="true" /> Jornada completa de 21 dias</li>
              <li><Check aria-hidden="true" /> Reflexões guiadas e orações em áudio</li>
              <li><Check aria-hidden="true" /> Exercícios práticos</li>
              <li><Check aria-hidden="true" /> Acesso digital após a confirmação do pagamento</li>
              <li><Check aria-hidden="true" /> Garantia de 7 dias</li>
            </ul>
          </div>
          <div className="faith-price-card">
            <span className="faith-price-label">ACESSO À JORNADA COMPLETA</span>
            <p className="faith-offer-intro">Você recebe os 21 dias completos por apenas:</p>
            <div className="faith-price"><span>R$</span> 27<small>,90</small></div>
            <p className="faith-price-caption">pagamento único · cerca de R$ 1,33 por dia da jornada</p>
            <PurchaseLink className="faith-cta-full">Quero começar meus 21 dias</PurchaseLink>
            <p className="faith-secure-note"><LockKeyhole aria-hidden="true" /> Pagamento seguro pela Kiwify · acesso imediato</p>
            <div className="faith-guarantee-mini"><ShieldCheck aria-hidden="true" /><span><strong>7 dias de garantia</strong><br />Conheça a jornada com tranquilidade.</span></div>
          </div>
        </div>
      </section>

      <section className="faith-guarantee">
        <div className="faith-container faith-guarantee-inner">
          <span className="faith-guarantee-icon"><ShieldCheck aria-hidden="true" /></span>
          <div>
            <span className="faith-eyebrow">sua decisão, com tranquilidade</span>
            <h2>Você tem 7 dias para conhecer a jornada</h2>
            <p>
              Depois da compra, você poderá acessar o conteúdo e conhecer a
              proposta com tranquilidade. Se entender que a jornada não é para
              você, poderá solicitar o reembolso dentro do prazo de 7 dias,
              conforme as condições da plataforma de pagamento.
            </p>
          </div>
        </div>
      </section>

      <section id="duvidas" className="faith-faq">
        <div className="faith-container faith-faq-inner">
          <SectionHeading
            eyebrow="perguntas frequentes"
            title="Dúvidas? Estamos aqui."
            description="Respostas claras antes de começar sua jornada."
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
          <h2>Talvez você não precise esperar por outro momento. Talvez seu recomeço possa começar hoje.</h2>
          <p>Você não precisa resolver toda a sua vida espiritual agora. Comece separando um dia, uma reflexão e uma oração de cada vez.</p>
          <PurchaseLink>Quero começar meus 21 dias</PurchaseLink>
          <p className="faith-price-microcopy">R$ 27,90 · acesso imediato · garantia de 7 dias</p>
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
      {showMobileCta && (
        <aside className="faith-mobile-cta" aria-label="Começar a jornada">
          <strong>R$ 27,90</strong>
          <PurchaseLink>Começar agora</PurchaseLink>
        </aside>
      )}
    </main>
  );
}