import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Check,
  Compass,
  Network,
  Search,
  Copy,
  Instagram,
  Menu,
  MessageCircle,
  Palette,
  Play,
  Sparkles,
  FileText,
  UserRound,
  AtSign,
  Image as ImageIcon,
  Target,
  Video,
  X,
  Zap,
  Megaphone,
} from "lucide-react";

import backgroundArtwork from "@/assets/uploads/5278.jpg";
import logoCelloOg from "@/assets/uploads/5308.png";
import methodArtwork from "@/assets/uploads/5294.png";

import anatomyArtwork from "@/assets/uploads/5302.png";
import personagemHeroArtwork from "@/assets/uploads/5321.png";
import personagemMobileArtwork from "@/assets/uploads/5340.png";
import personagemMobileAttachedArtwork from "@/assets/uploads/5341.png";
import benefitsHeroArtwork from "@/assets/uploads/faixa-beneficios.png";
import etiquetaIaArtwork from "@/assets/uploads/5333.png";

import titleHeroArtwork from "@/assets/uploads/5314.png";
import anatomyTitleArtwork from "@/assets/uploads/5327.png";

import plansButtonArtwork from "@/assets/uploads/5320.png";
import methodTitleArtwork from "@/assets/uploads/5335.png";
import creditsTitleArtwork from "@/assets/uploads/5328.png";
import responsiveHeroCharacterArtwork from "@/assets/uploads/5342.png";
import responsiveHeroTitleArtwork from "@/assets/uploads/5343.png";
import responsiveHeroStartArtwork from "@/assets/uploads/5344.png";
import responsiveHeroPlansArtwork from "@/assets/uploads/5345.png";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { paymentLinks } from "@/config/paymentLinks";
import "@/components/SiteNavigation.css";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const instagramUrl = "https://instagram.com/celloogdesign";
const whatsappUrl = "https://wa.link/3haobf";

const heroSubtitle = {
  lineOne: "pesquisa, criação, publicação e conversão.",
  lineTwo: "rodando todos os dias, sem ninguém gravar nada.",
};

const faqItems = [
  [
    "O que é um personagem de IA?",
    "É uma representação digital criada para comunicar sua marca em vídeos, com identidade visual, voz e roteiro personalizados.",
  ],
  [
    "Preciso aparecer ou gravar vídeos?",
    "Não. A proposta é criar conteúdos sem câmera e sem programação, usando o personagem e o sistema de produção da Cello OG Design.",
  ],
  [
    "Como funcionam os créditos?",
    "Cada 150 créditos correspondem aproximadamente a um minuto de vídeo. Os créditos podem ser divididos entre vídeos de diferentes durações.",
  ],
  [
    "A automação está incluída nos planos?",
    "Não. A automação de postagem é um adicional opcional, com valores diferentes para cada nível.",
  ],
  [
    "Onde o conteúdo pode ser publicado?",
    "As publicações podem ser programadas para Instagram e TikTok, conforme o adicional contratado.",
  ],
];

/* troque os vídeos aqui */
/* troque os vídeos aqui */
export const showcaseItems = [
  {
    src: "https://res.cloudinary.com/yqtu3inx/video/upload/q_auto,w_540/v1791032357/lv_0_20260929223023.mp4",
    modalSrc:
      "https://res.cloudinary.com/yqtu3inx/video/upload/v1791032357/lv_0_20260929223023.mp4",
    poster:
      "https://res.cloudinary.com/yqtu3inx/video/upload/so_0,w_540/v1791032357/lv_0_20260929223023.jpg",
    title: "Edição de vídeo com identidade",
  },
  {
    src: "https://res.cloudinary.com/yqtu3inx/video/upload/q_auto,w_540/v1791032354/lv_0_20260929023703.mp4",
    modalSrc:
      "https://res.cloudinary.com/yqtu3inx/video/upload/v1791032354/lv_0_20260929023703.mp4",
    poster:
      "https://res.cloudinary.com/yqtu3inx/video/upload/so_0,w_540/v1791032354/lv_0_20260929023703.jpg",
    title: "Direção sonora para campanhas",
  },
  {
    src: "https://res.cloudinary.com/yqtu3inx/video/upload/q_auto,w_540/v1791032364/lv_0_20260918185151.mp4",
    modalSrc:
      "https://res.cloudinary.com/yqtu3inx/video/upload/v1791032364/lv_0_20260918185151.mp4",
    poster:
      "https://res.cloudinary.com/yqtu3inx/video/upload/so_0,w_540/v1791032364/lv_0_20260918185151.jpg",
    title: "Direção visual para campanhas",
  },
  {
    src: "https://res.cloudinary.com/yqtu3inx/video/upload/q_auto,w_540/v1791032364/lv_0_20261002211318.mp4",
    modalSrc:
      "https://res.cloudinary.com/yqtu3inx/video/upload/v1791032364/lv_0_20261002211318.mp4",
    poster:
      "https://res.cloudinary.com/yqtu3inx/video/upload/so_0,w_540/v1791032364/lv_0_20261002211318.jpg",
    title: "Conteúdo produzido em estúdio",
  },
  {
    src: "https://res.cloudinary.com/yqtu3inx/video/upload/q_auto,w_540/v1791032366/lv_0_20261002200258.mp4",
    modalSrc:
      "https://res.cloudinary.com/yqtu3inx/video/upload/v1791032366/lv_0_20261002200258.mp4",
    poster:
      "https://res.cloudinary.com/yqtu3inx/video/upload/so_0,w_540/v1791032366/lv_0_20261002200258.jpg",
    title: "Identidade visual em movimento",
  },
  {
    src: "https://res.cloudinary.com/yqtu3inx/video/upload/q_auto,w_540/v1791032367/lv_0_20260929073610.mp4",
    modalSrc:
      "https://res.cloudinary.com/yqtu3inx/video/upload/v1791032367/lv_0_20260929073610.mp4",
    poster:
      "https://res.cloudinary.com/yqtu3inx/video/upload/so_0,w_540/v1791032367/lv_0_20260929073610.jpg",
    title: "Conceito visual para campanhas",
  },
  {
    src: "https://res.cloudinary.com/yqtu3inx/video/upload/q_auto,w_540/v1791033440/lv_0_20260711141307.mp4",
    modalSrc:
      "https://res.cloudinary.com/yqtu3inx/video/upload/v1791033440/lv_0_20260711141307.mp4",
    poster:
      "https://res.cloudinary.com/yqtu3inx/video/upload/so_0,w_540/v1791033440/lv_0_20260711141307.jpg",
    title: "Conteúdo para redes sociais",
  },
  {
    src: "https://res.cloudinary.com/yqtu3inx/video/upload/q_auto,w_540/v1791032367/lv_0_20260923123002.mp4",
    modalSrc:
      "https://res.cloudinary.com/yqtu3inx/video/upload/v1791032367/lv_0_20260923123002.mp4",
    poster:
      "https://res.cloudinary.com/yqtu3inx/video/upload/so_0,w_540/v1791032367/lv_0_20260923123002.jpg",
    title: "Produção com direção criativa",
  },
  {
    src: "https://res.cloudinary.com/yqtu3inx/video/upload/q_auto,w_540/v1791032369/lv_0_20260930154352.mp4",
    modalSrc:
      "https://res.cloudinary.com/yqtu3inx/video/upload/v1791032369/lv_0_20260930154352.mp4",
    poster:
      "https://res.cloudinary.com/yqtu3inx/video/upload/so_0,w_540/v1791032369/lv_0_20260930154352.jpg",
    title: "Conteúdo que comunica",
  },
];

const videoMosaic = showcaseItems;

const logoMarqueeText = {
  lineOne: "SEU PERSONAGEM",
  lineTwo: "POSTANDO SOZINHO",
  lineThree: "EM QUALQUER NICHO",
};

const logoMarqueeRowOne = Array.from(
  { length: 12 },
  (_, index) => showcaseItems[index % showcaseItems.length],
);

const logoMarqueeRowTwo = Array.from(
  { length: 12 },
  (_, index) =>
    showcaseItems[
      (showcaseItems.length - 1 - index + showcaseItems.length) %
        showcaseItems.length
    ],
);

const calculatorPlans = [
  { name: "Starter", credits: 150 },
  { name: "Pro", credits: 300 },
  { name: "Scale", credits: 500 },
  { name: "Studio", credits: 1000 },
  { name: "Agency", credits: 2000 },
];

const checkoutAddOns = [
  {
    id: "consulting",
    title: "Consultoria estratégica",
    description: "Plano de conteúdo e próximos passos para sua marca",
    price: 49.9,
    icon: Compass,
    details: [
      "Conversa de alinhamento: objetivo, público e nicho",
      "Plano de conteúdo para 30 dias (pilares, formatos e frequência)",
      "Linha editorial e tom de voz da marca",
      "Próximos passos priorizados, por escrito",
    ],
  },
  {
    id: "diagnosis",
    title: "Diagnóstico completo da operação",
    description: "Análise do que funciona e do que travou no seu conteúdo",
    price: 79.9,
    icon: Search,
    details: [
      "Análise do perfil atual (bio, feed e identidade visual)",
      "O que funciona e o que está travando o seu alcance",
      "Comparação com concorrentes do seu nicho",
      "Relatório com melhorias priorizadas",
    ],
  },
  {
    id: "ecosystem",
    title: "Ecossistema digital sob medida",
    description: "Site, sistema, app ou SaaS e automações feitos sob medida para a sua marca.",
    price: 0,
    icon: Network,
    details: [
      "Site ou landing page simples — a partir de R$ 697",
      "Landing page + checkout — a partir de R$ 1.200",
      "Automações e integrações — a partir de R$ 800",
      "App, sistema ou SaaS — a partir de R$ 2.500",
      "Projetos maiores — orçamento personalizado",
    ],
  },
];

const automationOptions = [
  {
    id: "none",
    label: "Sem automação",
    description: "Você recebe o conteúdo pronto para publicar.",
  },
  {
    id: "starter",
    label: "Starter",
    description: "Publicações essenciais para manter o perfil ativo.",
  },
  {
    id: "pro",
    label: "Pro",
    description: "Mais frequência e consistência para sua marca.",
  },
  {
    id: "scale",
    label: "Scale",
    description: "Calendário completo para crescer com regularidade.",
  },
  {
    id: "studio",
    label: "Studio",
    description: "Operação avançada para uma presença constante.",
  },
  {
    id: "agency",
    label: "Agency",
    description: "Estrutura completa para marcas em expansão.",
  },
] as const;

// Valores dos adicionais do checkout: altere este objeto para atualizar os preços.
/* edite os preços aqui */
const checkoutPricing = {
  automation: {
    none: 0,
    starter: 100,
    pro: 89.9,
    scale: 69.9,
    studio: 59.9,
    agency: 49.9,
  },
  services: Object.fromEntries(
    checkoutAddOns.map((addOn) => [addOn.id, addOn.price]),
  ) as Record<string, number>,
};

const videoOptions = [
  { label: "Vídeo de 20s", seconds: 20, credits: 50 },
  { label: "Vídeo de 30s", seconds: 30, credits: 75 },
  { label: "Vídeo de 60s", seconds: 60, credits: 150 },
];

const methodPillars = [
  { id: "pesquisa", number: "01", title: "pesquisa", text: "Entendemos o mercado, o público e o que realmente performa.", clipPath: "polygon(50% 0%, 100% 0%, 82% 50%, 18% 50%, 0% 0%)" },
  { id: "ideacao", number: "02", title: "ideação", text: "Transformamos dados e objetivos em ideias, roteiros e conceitos.", clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 50% 50%)" },
  { id: "producao", number: "03", title: "produção e publicação", text: "Criamos o conteúdo e deixamos tudo pronto para publicar.", clipPath: "polygon(0% 100%, 100% 100%, 82% 50%, 18% 50%)" },
  { id: "conversao", number: "04", title: "conversão e análise", text: "Acompanhamos os resultados e identificamos o que pode melhorar.", clipPath: "polygon(0% 0%, 18% 50%, 0% 100%, 50% 50%)" },
];

const automationByPlan = {
  Starter: { id: "starter", price: 100 },
  Pro: { id: "pro", price: 89.9 },
  Scale: { id: "scale", price: 69.9 },
  Studio: { id: "studio", price: 59.9 },
  Agency: { id: "agency", price: 49.9 },
} as const;

const plans = [
  {
    name: "Starter",
    credits: "150",
    price: "R$ 79,90",
    pricePerCredit: "R$ 0,53 por crédito",
    duration: "Até 1 min de vídeo",
    divisions: ["1 vídeo de 60s", "2 vídeos de 30s", "3 vídeos de 20s"],
  },
  {
    name: "Pro",
    credits: "300",
    price: "R$ 129,90",
    pricePerCredit: "R$ 0,43 por crédito",
    duration: "Até 2 min de vídeo",
    divisions: ["2 vídeos de 60s", "4 vídeos de 30s", "6 vídeos de 20s"],
  },
  {
    name: "Scale",
    credits: "500",
    price: "R$ 189,90",
    pricePerCredit: "R$ 0,38 por crédito",
    duration: "Até 3 min e 20 s",
    divisions: ["3 vídeos de 60s + 1 de 20s", "6 vídeos de 30s + 1 de 20s", "10 vídeos de 20s"],
    popular: true,
  },
  {
    name: "Studio",
    credits: "1.000",
    price: "R$ 349,90",
    pricePerCredit: "R$ 0,35 por crédito",
    duration: "Até 6 min e 40 s",
    divisions: ["6 vídeos de 60s + 1 de 40s", "13 vídeos de 30s + 1 de 10s", "20 vídeos de 20s"],
  },
  {
    name: "Agency",
    credits: "2.000",
    price: "R$ 649,90",
    pricePerCredit: "R$ 0,32 por crédito",
    duration: "Até 13 min e 20 s",
    divisions: ["13 vídeos de 60s + 1 de 20s", "26 vídeos de 30s + 1 de 20s", "40 vídeos de 20s"],
  },
];

type EmbersProps = {
  count: number;
  area?: string;
  colors: string[];
  riseMin: number;
  riseMax: number;
  sizeMin: number;
  sizeMax: number;
  variant?: "hero" | "method" | "plan";
};

function DesktopFireplaceSparks() {
  const sparks = Array.from({ length: 60 }, (_, index) => ({
    x: 15 + ((index * 31) % 71),
    dx: `${((index * 37) % 121) - 60}px`,
    size: 2 + ((index * 13) % 5),
    duration: `${1.2 + ((index * 19) % 19) / 10}s`,
    delay: `${((index * 23) % 21) / 10}s`,
    color: ["#ffd166", "#ff8a00", "#ff5a00"][index % 3],
  }));

  return (
    <div className="method-fireplace-sparks" aria-hidden="true">
      {sparks.map((spark, index) => (
        <span
          key={index}
          className="method-fireplace-spark"
          style={
            {
              "--spark-x": `${spark.x}%`,
              "--spark-dx": spark.dx,
              "--spark-size": `${spark.size}px`,
              "--spark-duration": spark.duration,
              "--spark-delay": spark.delay,
              "--spark-color": spark.color,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

function Embers({
  count,
  area = "",
  colors,
  riseMin,
  riseMax,
  sizeMin,
  sizeMax,
  variant = "hero",
}: EmbersProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [paused, setPaused] = useState(false);

  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => {
        const seed = (index * 47 + 13) % 101;
        const size = sizeMin + ((index * 17) % 100) / 100 * (sizeMax - sizeMin);
        const rise = riseMin + ((index * 29) % 100) / 100 * (riseMax - riseMin);

        return {
          x: `${seed}%`,
          dx:
            variant === "method"
              ? `${((index * 73) % 121) - 60}px`
              : `${((index * 31) % 45) - 22}px`,
          size: `${size}px`,
          duration:
            variant === "plan"
              ? `${4 + ((index * 11) % 51) / 10}s`
              : variant === "method"
                ? `${3 + ((index * 11) % 41) / 10}s`
                : `${3 + ((index * 11) % 41) / 10}s`,
          delay: `-${2 + ((index * 19) % 50) / 10}s`,
      rise:
        variant === "plan"
          ? `${260 + ((index * 29) % 161)}px`
          : variant === "method"
            ? "380px"
            : `${rise}px`,
          color: colors[index % colors.length],
          blur: variant === "hero" && index % 4 === 0 ? "1px" : "0px",
        };
      }),
    [colors, count, riseMax, riseMin, sizeMax, sizeMin, variant],
  );

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(motionQuery.matches);
    const section = document.querySelector(`[data-embers-area="${area || variant}"]`);

    updateMotion();
    motionQuery.addEventListener("change", updateMotion);

    if (!section) {
      return () => motionQuery.removeEventListener("change", updateMotion);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setPaused(!entry.isIntersecting),
      { threshold: 0.05 },
    );

    observer.observe(section);

    return () => {
      motionQuery.removeEventListener("change", updateMotion);
      observer.disconnect();
    };
  }, [area, variant]);

  if (reducedMotion) return null;

  return (
    <div
      data-embers-area={area || variant}
      aria-hidden="true"
      className={`embers-reusable ${variant === "plan" ? "plan-embers" : ""} ${area} ${paused ? "embers-paused" : ""}`}
    >
      {particles.map((particle, index) => (
        <span
          key={index}
          className="ember-reusable"
          style={
            {
              "--x": particle.x,
              "--dx": particle.dx,
              "--size": particle.size,
              "--dur": particle.duration,
              "--delay": particle.delay,
              "--rise": particle.rise,
              "--ember-color": particle.color,
              "--ember-blur": particle.blur,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

function WhatsAppButton({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary";
  className?: string;
}) {
  return (
    <Button asChild variant={variant} className={`btn ${className ?? ""}`}>
      <a href={whatsappUrl} target="_blank" rel="noreferrer">
        {children}
      </a>
    </Button>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
      {children}
    </p>
  );
}

function TechnologyIcon({ type }: { type: "scan" | "cube" | "play" }) {
  if (type === "scan") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 5H5a2 2 0 0 0-2 2v2M17 5h2a2 2 0 0 1 2 2v2M7 19H5a2 2 0 0 1-2-2v-2M17 19h2a2 2 0 0 0 2-2v-2" />
        <path d="M8 9.5h8M8 14.5h8M12 8v8" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    );
  }

  if (type === "cube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m9 7 8 5-8 5V7Z" />
      <rect x="3" y="3" width="18" height="18" rx="4" />
    </svg>
  );
}

export default function SalesLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [dotSections, setDotSections] = useState<
    { id: string; label: string }[]
  >([]);
  const [activeDotSection, setActiveDotSection] = useState<string | null>(null);
  const [navScrolled, setNavScrolled] = useState(false);
  const menuPanelRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [activeGallery, setActiveGallery] =
    useState<(typeof videoMosaic)[number] | null>(null);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const mobileGalleryVideoRef = useRef<HTMLVideoElement>(null);
  const galleryPreviousOverflowRef = useRef<string | null>(null);
  const [calculatorPlan, setCalculatorPlan] = useState("STARTER");
  const [calculatorDuration, setCalculatorDuration] = useState(60);
  const [checkoutPlan, setCheckoutPlan] = useState<(typeof plans)[number] | null>(null);
  const checkoutPreviousOverflowRef = useRef<string | null>(null);
  const [automationInfoPlan, setAutomationInfoPlan] =
    useState<(typeof plans)[number] | null>(null);
  const automationInfoReturnRef = useRef<HTMLElement | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [ecosystemQuoteRequested, setEcosystemQuoteRequested] = useState(false);
  const [addOnsExpanded, setAddOnsExpanded] = useState(false);
  const [expandedAddOns, setExpandedAddOns] = useState<Record<string, boolean>>({
    ecosystem: true,
  });
  const [selectedAutomation, setSelectedAutomation] =
    useState<(typeof automationOptions)[number]["id"]>("none");
  const [activeAnatomyLabel, setActiveAnatomyLabel] = useState<string | null>(null);
  const [activeMethodPillar, setActiveMethodPillar] = useState<string | null>(null);
  const [anatomyVisible, setAnatomyVisible] = useState(false);
  const [methodVisible, setMethodVisible] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const [characterEntered, setCharacterEntered] = useState(false);
  const checkoutBodyRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const logoMarqueeRef = useRef<HTMLElement>(null);
  const showcaseVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const showcaseSectionRef = useRef<HTMLElement>(null);
  const showcasePauseRef = useRef<() => void>(() => {});
  const showcaseResumeRef = useRef<() => void>(() => {});
  const logoMarqueeVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const methodMobileCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 640px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (!mobileQuery.matches) return;

    const cards = methodMobileCardsRef.current.filter(
      (card): card is HTMLDivElement => Boolean(card),
    );

    if (!cards.length) return;

    if (reducedMotionQuery.matches) {
      cards.forEach((card) => card.classList.add("visivel"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("visivel");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const updateViewport = () => setIsMobileViewport(mobileQuery.matches);

    updateViewport();
    mobileQuery.addEventListener("change", updateViewport);

    return () => mobileQuery.removeEventListener("change", updateViewport);
  }, []);

  useEffect(() => {
    if (!activeGallery || !isMobileViewport) return;

    galleryPreviousOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = galleryPreviousOverflowRef.current ?? "";
      galleryPreviousOverflowRef.current = null;
    };
  }, [activeGallery, isMobileViewport]);

  useEffect(() => {
    if (!activeGallery || !isMobileViewport) return;

    const video = mobileGalleryVideoRef.current;
    if (!video) return;

    video.muted = false;
    void video.play().catch(() => {});
  }, [activeGallery, isMobileViewport]);

  const closeGallery = () => {
    mobileGalleryVideoRef.current?.pause();
    setActiveGallery(null);
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    galleryPreviousOverflowRef.current = null;
  };

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-dot-section]"),
    ).map((section) => ({
      id: section.id,
      label: section.dataset.dotLabel ?? section.id,
    }));

    setDotSections(sections);

    let frame = 0;

    const updateActiveDot = () => {
      frame = 0;

      const sectionElements = sections
        .map(({ id }) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section));

      if (!sectionElements.length) return;

      const viewportHeight = window.innerHeight;
      const threshold = viewportHeight * 0.4;
      const atTop = window.scrollY <= 0;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1;

      let active = sectionElements[0];

      if (atBottom) {
        active = sectionElements[sectionElements.length - 1];
      } else if (!atTop) {
        sectionElements.forEach((section) => {
          if (section.getBoundingClientRect().top <= threshold) {
            active = section;
          }
        });
      }

      setActiveDotSection(active.id);
    };

    const handleScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateActiveDot);
      }
    };

    updateActiveDot();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);



  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !menuPanelRef.current) return;

      const focusable = Array.from(
        menuPanelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const videos = logoMarqueeVideoRefs.current.filter(
      (video): video is HTMLVideoElement => Boolean(video),
    );

    if (!videos.length) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileDevice = window.matchMedia("(max-width: 640px)");
    const activeVideos = new Set<HTMLVideoElement>();
    const maxVideos = 6;

    const pauseVideo = (video: HTMLVideoElement) => {
      video.pause();
      activeVideos.delete(video);
    };

    const playVideo = (video: HTMLVideoElement) => {
      if (reducedMotion.matches || mobileDevice.matches) return;

      if (activeVideos.size >= maxVideos) {
        const firstActive = activeVideos.values().next().value as
          | HTMLVideoElement
          | undefined;

        if (firstActive) pauseVideo(firstActive);
      }

      video.muted = true;
      activeVideos.add(video);
      void video.play().catch(() => {
        activeVideos.delete(video);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;

          if (entry.isIntersecting) {
            playVideo(video);
          } else {
            pauseVideo(video);
          }
        });
      },
      { threshold: 0.2 },
    );

    videos.forEach((video) => {
      video.muted = true;
      observer.observe(video);
    });

    const marqueeSection = logoMarqueeRef.current;
    const sectionObserver = marqueeSection
      ? new IntersectionObserver(
          ([entry]) => {
            if (!entry.isIntersecting) {
              videos.forEach(pauseVideo);
            }
          },
          { threshold: 0.05 },
        )
      : null;

    if (marqueeSection && sectionObserver) {
      sectionObserver.observe(marqueeSection);
    }

    return () => {
      observer.disconnect();
      sectionObserver?.disconnect();
      videos.forEach(pauseVideo);
    };
  }, []);

  useEffect(() => {
    const videos = showcaseVideoRefs.current.filter(
      (video): video is HTMLVideoElement => Boolean(video),
    );

    if (!videos.length) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const section = showcaseSectionRef.current;
    let sectionVisible = true;
    let syncTimeout: number | undefined;
    let waitingForCanPlay = false;

    const pauseVideos = () => {
      videos.forEach((video) => video.pause());
    };

    const playVideosTogether = () => {
      if (reducedMotion.matches || !sectionVisible || activeGallery) return;

      videos.forEach((video) => {
        video.muted = true;
        video.currentTime = 0;
      });

      videos.forEach((video) => {
        void video.play().catch(() => {});
      });
    };

    const resumeVideos = () => {
      if (reducedMotion.matches || !sectionVisible || activeGallery) return;

      if (videos.every((video) => video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA)) {
        playVideosTogether();
        return;
      }

      if (waitingForCanPlay) return;
      waitingForCanPlay = true;

      const handleCanPlay = () => {
        if (videos.every((video) => video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA)) {
          cleanupWaiting();
          playVideosTogether();
        }
      };

      const cleanupWaiting = () => {
        waitingForCanPlay = false;
        videos.forEach((video) => video.removeEventListener("canplay", handleCanPlay));
        if (syncTimeout) window.clearTimeout(syncTimeout);
      };

      videos.forEach((video) => {
        video.muted = true;
        video.addEventListener("canplay", handleCanPlay);
      });

      syncTimeout = window.setTimeout(() => {
        cleanupWaiting();
        playVideosTogether();
      }, 2000);
    };

    const observer = section
      ? new IntersectionObserver(
          ([entry]) => {
            sectionVisible = entry.isIntersecting;

            if (sectionVisible) {
              resumeVideos();
            } else {
              pauseVideos();
            }
          },
          { threshold: 0.05 },
        )
      : null;

    showcasePauseRef.current = pauseVideos;
    showcaseResumeRef.current = resumeVideos;

    if (section) {
      observer?.observe(section);
    }

    videos.forEach((video) => {
      video.muted = true;
      video.load();
    });

    resumeVideos();

    return () => {
      observer?.disconnect();
      pauseVideos();
      if (syncTimeout) window.clearTimeout(syncTimeout);
      showcasePauseRef.current = () => {};
      showcaseResumeRef.current = () => {};
    };
  }, [activeGallery]);

  useEffect(() => {
    if (!checkoutPlan) return;

    checkoutPreviousOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setExpandedAddOns({ ecosystem: true });
    setEcosystemQuoteRequested(false);
    checkoutBodyRef.current?.scrollTo({ top: 0 });

    const planAutomationId = automationByPlan[checkoutPlan.name].id;

    if (
      selectedAutomation !== "none" &&
      selectedAutomation !== planAutomationId
    ) {
      setSelectedAutomation("none");
    }

    return () => {
      document.body.style.overflow = checkoutPreviousOverflowRef.current ?? "";
      checkoutPreviousOverflowRef.current = null;
    };
  }, [checkoutPlan]);

  const closeCheckout = () => {
    setCheckoutPlan(null);
    setSelectedAutomation("none");
    setSelectedAddOns([]);
    setEcosystemQuoteRequested(false);

    // Libera imediatamente o scroll ao fechar pelo X ou pelo overlay.
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    checkoutPreviousOverflowRef.current = null;
  };

  useEffect(() => {
    setHeroReady(true);

    const anatomySection = document.getElementById("anatomia");
    const heroSection = heroRef.current;
    const methodSection = document.getElementById("metodo");

    const anatomyObserver = anatomySection
      ? new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setAnatomyVisible(true);
          },
          { threshold: 0.2 },
        )
      : null;

    if (anatomySection && anatomyObserver) anatomyObserver.observe(anatomySection);

    const methodObserver = methodSection
      ? new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setMethodVisible(true);
          },
          { threshold: 0.05 },
        )
      : null;

    const heroObserver = heroSection
      ? new IntersectionObserver(
          ([entry]) => setHeroVisible(entry.isIntersecting),
          { threshold: 0.05 },
        )
      : null;

    if (methodSection && methodObserver) methodObserver.observe(methodSection);
    if (heroSection && heroObserver) heroObserver.observe(heroSection);

    return () => {
      anatomyObserver?.disconnect();
      methodObserver?.disconnect();
      heroObserver?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (activeGallery) {
      showcasePauseRef.current();
    } else {
      showcaseResumeRef.current();
    }
  }, [activeGallery]);

  const selectedCalculatorPlan =
    calculatorPlans.find((plan) => plan.name === calculatorPlan) ?? calculatorPlans[0];
  const selectedVideoOption =
    videoOptions.find((option) => option.seconds === calculatorDuration) ?? videoOptions[2];
  const possibleVideos = Math.floor(
    selectedCalculatorPlan.credits / selectedVideoOption.credits,
  );
  const usedCredits = possibleVideos * selectedVideoOption.credits;
  const remainingCredits = selectedCalculatorPlan.credits - usedCredits;
  const totalSeconds = possibleVideos * selectedVideoOption.seconds;


  const handleHeroPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    event.currentTarget.style.setProperty("--hero-character-x", `${x * -24}px`);
    event.currentTarget.style.setProperty("--hero-character-y", `${y * -16}px`);
    event.currentTarget.style.setProperty("--hero-embers-x", `${x * 12}px`);
    event.currentTarget.style.setProperty("--hero-embers-y", `${y * 8}px`);
  };

  const resetHeroPointer = (event: React.PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--hero-character-x", "0px");
    event.currentTarget.style.setProperty("--hero-character-y", "0px");
    event.currentTarget.style.setProperty("--hero-embers-x", "0px");
    event.currentTarget.style.setProperty("--hero-embers-y", "0px");
  };

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const toggleEcosystemQuote = () => {
    setEcosystemQuoteRequested((requested) => !requested);
  };

  const selectedAutomationOption =
    automationOptions.find((option) => option.id === selectedAutomation) ?? automationOptions[0];

  const availableAutomationOptions = checkoutPlan
    ? [
        automationOptions[0],
        automationOptions.find(
          (option) => option.id === automationByPlan[checkoutPlan.name].id,
        ),
      ].filter(
        (option): option is (typeof automationOptions)[number] => Boolean(option),
      )
    : [automationOptions[0]];
  const parsePrice = (price: string) =>
    Number(
      price
        .replace("R$", "")
        .replace(".", "")
        .replace(",", ".")
        .trim(),
    );

  const planPrice = checkoutPlan ? parsePrice(checkoutPlan.price) : null;
  const automationInfoTotal = automationInfoPlan
    ? parsePrice(automationInfoPlan.price) +
      automationByPlan[automationInfoPlan.name].price
    : null;
  const automationEnabled = selectedAutomation !== "none";
  const automationPrice = checkoutPricing.automation[selectedAutomation];
  const selectedServicesTotal = selectedAddOns.reduce(
    (total, id) => total + (checkoutPricing.services[id] ?? 0),
    0,
  );
  const checkoutMonthlyTotal =
    planPrice === null ? null : planPrice + automationPrice;
  const checkoutUniqueTotal = selectedServicesTotal;
  const formatCurrency = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const selectedServicesSummary = selectedAddOns.length
    ? selectedAddOns
        .map((id) => {
          const service = checkoutAddOns.find((item) => item.id === id);
          const price = checkoutPricing.services[id];

          return `${service?.title ?? id} — ${
            price === null ? "sob consulta" : formatCurrency(price ?? 0)
          }`;
        })
        .join("; ")
    : "nenhum";

  const ecosystemWhatsAppUrl = checkoutPlan
    ? `${whatsappUrl}&text=${encodeURIComponent(
        `Olá! Vim pelo site e quero um orçamento de ecossistema digital sob medida.\n${
          checkoutPlan
            ? `Plano escolhido: ${checkoutPlan.name}${
                automationEnabled
                  ? ` + ${selectedAutomationOption.label}`
                  : ""
              }`
            : ""
        }`,
      )}`
    : `${whatsappUrl}&text=${encodeURIComponent(
        "Olá! Vim pelo site e quero um orçamento de ecossistema digital sob medida.",
      )}`;

  const checkoutWhatsAppUrl = checkoutPlan
    ? `${whatsappUrl}&text=${encodeURIComponent(
        `Olá! Quero o plano ${checkoutPlan.name} (${checkoutPlan.credits} créditos) ${
        !automationEnabled
          ? ""
          : `+ automação ${selectedAutomationOption.label} ${formatCurrency(automationPrice)} `
      }${
        selectedAddOns.length
          ? `+ ${selectedAddOns
              .map((id) => {
                const service = checkoutAddOns.find((item) => item.id === id);
                return `${service?.title} ${formatCurrency(service?.price ?? 0)}`;
              })
              .join(", ")} `
          : ""
      }Mensal: ${checkoutMonthlyTotal === null ? "a combinar" : formatCurrency(checkoutMonthlyTotal)} por mês.${
        selectedAddOns.length
          ? ` Pagamento único: ${selectedAddOns
              .map((id) => {
                const service = checkoutAddOns.find((item) => item.id === id);
                return `${service?.title} ${formatCurrency(service?.price ?? 0)}`;
              })
              .join(", ")}. Total único: ${formatCurrency(checkoutUniqueTotal)}.`
          : ""
      }`,
    )}`
    : whatsappUrl;

  const monthlyPaymentKey = checkoutPlan
    ? `${checkoutPlan.name.toLowerCase()}${automationEnabled ? "-automacao" : ""}` as keyof typeof paymentLinks.monthly
    : null;

  const configuredMonthlyPaymentUrl =
    monthlyPaymentKey ? paymentLinks.monthly[monthlyPaymentKey] : undefined;
  const monthlyPaymentAvailable = Boolean(configuredMonthlyPaymentUrl);
  const unavailablePaymentWhatsAppUrl = whatsappUrl;
  const monthlyPaymentUrl =
    configuredMonthlyPaymentUrl ??
    (monthlyPaymentAvailable ? checkoutWhatsAppUrl : unavailablePaymentWhatsAppUrl);

  const paidServiceIds = selectedAddOns.filter(
    (id) => id === "consulting" || id === "diagnosis",
  );
  const oneTimePaymentKey =
    paidServiceIds.length === 2
      ? "consultoria-diagnostico"
      : paidServiceIds[0] === "consulting"
        ? "consultoria"
        : paidServiceIds[0] === "diagnosis"
          ? "diagnostico"
          : null;

  const oneTimePaymentUrl =
    (oneTimePaymentKey && paymentLinks.oneTime[oneTimePaymentKey]) ||
    checkoutWhatsAppUrl;

  const scrollToPlans = (event?: React.MouseEvent<HTMLElement>) => {
    event?.preventDefault();
    document.getElementById("planos")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header
        className={`site-nav ${navScrolled ? "site-nav-scrolled" : ""}`}
      >
        <div className="site-nav-bar fixed top-0 left-0 right-0 z-50 flex h-14 w-full items-center justify-between border-b border-zinc-800/80 bg-black/90 px-4 backdrop-blur-md md:static md:h-[72px] md:w-auto md:border-none md:bg-transparent md:px-0 md:py-0">
          <a
            href="#"
            aria-label="Cello OG Design"
            className="logo-cello-link"
            onClick={() => setActiveSection(null)}
          >
            <span className="logo-cello-frame">
              <img
                src={logoCelloOg}
                alt="Cello OG Design"
                className="logo-cello-image h-7 w-auto object-contain md:h-9"
              />
            </span>
          </a>

          <nav aria-label="principal" className="site-nav-links">
            {[
              ["como-funciona", "como funciona"],
              ["metodo", "método"],
              ["exemplos", "exemplos"],
              ["planos", "planos"],
              ["duvidas", "dúvidas"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setActiveSection(id)}
                className={activeSection === id ? "is-active" : ""}
              >
                {label}
              </a>
            ))}
          </nav>

          <Button
            type="button"
            className="site-nav-cta flex h-8 items-center gap-1.5 rounded-full px-3.5 text-xs font-semibold md:h-11 md:gap-2 md:px-6 md:text-base"
            onClick={scrollToPlans}
          >
            <Play className="h-3 w-3 shrink-0 md:h-[18px] md:w-[18px]" aria-hidden="true" />
            começar agora
          </Button>

          <Button
            ref={menuButtonRef}
            variant="ghost"
            size="icon"
            className="site-nav-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>


        {menuOpen && (
          <nav
            ref={menuPanelRef}
            id="mobile-navigation"
            aria-label="principal"
            className="site-nav-mobile-panel"
          >
            {[
              ["como funciona", "#como-funciona"],
              ["método", "#metodo"],
              ["exemplos", "#exemplos"],
              ["planos", "#planos"],
              ["dúvidas", "#duvidas"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => {
                  setActiveSection(href.slice(1));
                  setMenuOpen(false);
                }}
                className={`block border-b border-border py-4 text-sm ${
                  activeSection === href.slice(1) ? "is-active" : ""
                }`}
              >
                {label}
              </a>
            ))}
            <Button
              type="button"
              className="mt-4 w-full rounded-full"
              onClick={(event) => {
                scrollToPlans(event);
                setMenuOpen(false);
              }}
            >
              começar agora
            </Button>
          </nav>
        )}
      </header>

      <section className="responsive-hero" aria-labelledby="responsive-hero-title">
        <Embers
          count={24}
          area="responsive-hero-embers"
          colors={["#ffb347", "#ff8a00", "#ff5a00"]}
          riseMin={220}
          riseMax={420}
          sizeMin={2}
          sizeMax={5}
          variant="hero"
        />

        <img
          id="responsive-hero-title"
          src={responsiveHeroTitleArtwork}
          alt="crie seu personagem de IA e deixe ele postar por você"
          className="responsive-hero-title"
        />

        <div className="responsive-hero-character-wrap">
          <img
            src={responsiveHeroCharacterArtwork}
            alt="Personagem criado por inteligência artificial"
            className="responsive-hero-character"
          />
          <img
            src={responsiveHeroCharacterArtwork}
            alt=""
            aria-hidden="true"
            className="responsive-hero-character-firelight"
          />
        </div>

        <a
          href="#planos"
          aria-label="começar agora"
          onClick={scrollToPlans}
          className="responsive-hero-button"
        >
          <span className="responsive-hero-button-frame">
            <img src={responsiveHeroStartArtwork} alt="começar agora" />
          </span>
        </a>

        <a
          href="#planos"
          aria-label="ver planos"
          onClick={scrollToPlans}
          className="responsive-hero-button"
        >
          <span className="responsive-hero-button-frame">
            <img src={responsiveHeroPlansArtwork} alt="ver planos" />
          </span>
        </a>

        <p className="responsive-hero-support hero-subtitle">
          <span className="hero-subtitle-line hero-subtitle-line-one">
            {heroSubtitle.lineOne}
          </span>
          <br className="hero-subtitle-break" />
          <span className="hero-subtitle-line hero-subtitle-line-two">
            rodando <span className="hero-subtitle-accent">todos os dias</span>, sem ninguém gravar nada.
          </span>
        </p>
      </section>

      <nav className="dot-navigation" aria-label="seções">
        {dotSections.map(({ id, label }) => (
          <div className="dot-navigation-item" key={id}>
            <span className="dot-navigation-label">{label}</span>
            <button
              type="button"
              className={`dot-navigation-dot ${
                activeDotSection === id ? "is-active" : ""
              }`}
              aria-label={label}
              aria-current={activeDotSection === id ? "true" : undefined}
              onClick={() =>
                document.getElementById(id)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            />
          </div>
        ))}
      </nav>

      <section
        id="inicio"
        ref={heroRef}
        data-dot-section
        data-dot-label="início"
        className={`hero-section ${heroReady ? "hero-ready" : ""} ${heroVisible ? "hero-visible" : "hero-paused"} relative isolate w-full h-[100dvh] overflow-hidden border-b border-border bg-black px-4 pt-16 pb-4 flex flex-col justify-between items-center md:min-h-[100dvh] md:overflow-visible md:bg-[#0A0705] md:px-0 md:pt-28 md:pb-12`}
        onPointerMove={handleHeroPointerMove}
        onPointerLeave={resetHeroPointer}
      >
        <div aria-hidden="true" className="hero-edge-glow absolute inset-0 -z-10" />
        <div aria-hidden="true" className="hero-character-glow absolute -z-10" />


        <div className="hero-content-grid mx-auto grid w-full max-w-[1180px] items-start gap-8 px-5 max-md:-mt-4 max-md:flex max-md:flex-1 max-md:flex-col max-md:justify-between max-md:items-center max-md:px-0 md:px-5 lg:grid-cols-2 lg:px-8">
          <div className="hero-copy relative z-10 order-last w-full max-w-2xl pb-2 text-center md:order-none md:w-auto md:pb-6 md:text-left lg:self-center">
            <h1 className="sr-only max-md:hidden text-2xl sm:text-3xl max-md:font-black max-md:leading-tight max-md:text-center max-md:px-4 max-md:pb-4 md:sr-only">
              crie seu personagem de IA e deixe ele postar por você.
            </h1>

            <img
              src={titleHeroArtwork}
              alt=""
              aria-hidden="true"
              className="hero-title-artwork mx-auto mb-5 w-full max-w-[420px] text-center sm:mb-5 sm:max-w-[500px] md:max-w-[520px] lg:max-w-[560px]"
            />

            <p className="hero-subtitle mt-0">
              <span className="hero-subtitle-line hero-subtitle-line-one">
                {heroSubtitle.lineOne}
              </span>
              <br className="hero-subtitle-break" />
              <span className="hero-subtitle-line hero-subtitle-line-two">
                rodando <span className="hero-subtitle-accent">todos os dias</span>, sem ninguém gravar nada.
              </span>
            </p>

            <div className="hero-cta-row mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#planos"
                aria-label="começar agora"
                className="btn-cta-hero"
                onClick={scrollToPlans}
              >
                <span className="btn-cta-hero__icon" aria-hidden="true">
                  <svg viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="16" fill="#050302" />
                    <path d="M13 10.75L23 16L13 21.25V10.75Z" fill="#FF6A00" />
                  </svg>
                </span>
                <span className="btn-cta-hero__label">começar agora</span>
              </a>
              <a
                href="#planos"
                aria-label="ver planos"
                className="btn-ver-planos"
              >
                <img src={plansButtonArtwork} alt="ver planos" />
              </a>
            </div>

          </div>

          <div className="hero-visual relative z-0 flex min-h-0 max-h-[50vh] w-full flex-1 -mt-4 items-center justify-center sm:max-h-[55vh] md:h-[75vh] md:min-h-[390px] md:max-h-none md:w-auto md:flex-none md:mt-0 md:items-center md:justify-end lg:min-h-0">
            <Embers
              count={36}
              area="hero-embers-container"
              colors={["#ffb347", "#ff8a00", "#ff5a00"]}
              riseMin={380}
              riseMax={620}
              sizeMin={2}
              sizeMax={7}
              variant="hero"
            />

            <div className="contents max-[640px]:flex max-[640px]:w-full max-[640px]:flex-col max-[640px]:items-center">
              <div className="hero-ai-badge-anchor">
                <img
                  src={etiquetaIaArtwork}
                  alt="100% gerado por IA"
                  className="hero-ai-badge absolute left-[18%] top-[5%] z-20 w-36 -translate-x-1/2 object-contain pointer-events-none drop-shadow-[0_0_15px_rgba(255,106,0,0.3)] sm:w-44 md:w-52 max-[640px]:!static max-[640px]:!left-auto max-[640px]:!right-auto max-[640px]:!translate-x-0 max-[640px]:!transform-none max-[640px]:!mx-auto"
                />
                <span
                  aria-hidden="true"
                  className="hero-ai-badge-line"
                />
              </div>

              <div className="hero-mobile-character-container hidden max-[640px]:relative max-[640px]:flex max-[640px]:w-full max-[640px]:items-center max-[640px]:justify-center">
                <img
                  src={personagemMobileAttachedArtwork}
                  alt=""
                  aria-hidden="true"
                  className="h-auto w-[85%] max-w-full object-contain"
                />
                <span
                  aria-hidden="true"
                  className="hero-mobile-character-fade"
                />
              </div>

              <div className="avatar-card hero-avatar-card max-[640px]:hidden">
                <div
                  className={`avatar-wrap hero-avatar-wrap ${characterEntered ? "hero-character-floating" : ""} max-[640px]:static max-[640px]:flex max-[640px]:w-full max-[640px]:justify-center`}
                  onAnimationEnd={() => setCharacterEntered(true)}
                >
                  <picture className="max-[640px]:hidden">
                    <source
                      media="(max-width: 640px)"
                      srcSet={personagemMobileArtwork}
                    />
                    <img
                      src={personagemHeroArtwork}
                      alt=""
                      aria-hidden="true"
                      className="avatar-character hero-character-image mx-auto w-auto object-contain drop-shadow-[0_0_30px_rgba(255,106,0,0.25)] md:!h-[75vh] md:!max-h-none md:!max-w-none md:!w-auto max-[640px]:!static max-[640px]:!relative max-[640px]:!left-auto max-[640px]:!right-auto max-[640px]:!translate-x-0 max-[640px]:!translate-y-0 max-[640px]:!w-[85%] max-[640px]:!max-w-full max-[640px]:!h-auto max-[640px]:!m-0 max-[640px]:!object-contain max-[640px]:!object-center"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-benefits mx-auto mt-6 w-full max-w-[1280px] px-5 max-md:mt-2 max-md:px-4 lg:px-8">
          <img
            src={benefitsHeroArtwork}
            alt=""
            className="hero-benefits-image"
          />
          <p className="sr-only">
            personagem com a sua identidade, roteiro com conteúdo que performa,
            publicação automática no Instagram e TikTok
          </p>
        </div>
      </section>

      <section
        ref={logoMarqueeRef}
        className="logo-marquee-section mt-14"
        aria-labelledby="logo-marquee-title"
      >
        <div className="logo-marquee-rows" aria-hidden="true">
          {[
            { items: logoMarqueeRowOne, className: "logo-marquee-row-1" },
            { items: logoMarqueeRowTwo, className: "logo-marquee-row-2" },
          ].map(({ items, className }) => (
            <div key={className} className={`logo-marquee-row ${className}`}>
              {[...items, ...items].map((item, index) => (
                <div className="logo-marquee-card" key={`${item.title}-${index}`}>
                  {item.src ? (
                    <video
                      ref={(video) => {
                        logoMarqueeVideoRefs.current[
                          className === "logo-marquee-row-1"
                            ? index
                            : logoMarqueeRowOne.length * 2 + index
                        ] = video;
                      }}
                      src={item.src}
                      poster={item.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img src={item.poster} alt="" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="logo-marquee-overlay">
          <h2 id="logo-marquee-title">
            <span>{logoMarqueeText.lineOne}</span>
            <strong>{logoMarqueeText.lineTwo}</strong>
            <span>{logoMarqueeText.lineThree}</span>
          </h2>
        </div>
      </section>

      <div className="border-y border-border bg-card/85 px-5 py-5">
        <p className="mx-auto max-w-[1180px] text-center font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          artes <span className="px-2 text-primary">•</span> vídeos{" "}
          <span className="px-2 text-primary">•</span> automação{" "}
          <span className="px-2 text-primary">•</span> conteúdo para redes sociais
        </p>
      </div>

      <section
        id="exemplos"
        data-dot-section
        data-dot-label="portfólio"
        ref={showcaseSectionRef}
        className="examples-mosaic-section relative isolate overflow-hidden px-5 pb-16 pt-[calc(var(--nav-h)+56px)] lg:px-8"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-40 blur-[1px] saturate-[1.3] contrast-[1.12] brightness-[1.08]"
          style={{ backgroundImage: `url(${backgroundArtwork})` }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-background/68"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-background via-background/80 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-background via-background/80 to-transparent"
        />

        <div className="examples-mosaic-layout relative mx-auto max-w-[1180px]">
          <div className="examples-mosaic-copy">
            <SectionEyebrow>01 / portfólio</SectionEyebrow>
            <h2 className="mt-5 max-w-[520px] text-[clamp(44px,5vw,52px)] font-black uppercase leading-[0.98] tracking-[-0.05em]">
              veja o que podemos
              <br />
              criar para sua
              <br />
              <span className="text-primary">marca.</span>
            </h2>
            <p className="mt-5 max-w-[480px] text-lg leading-relaxed text-foreground/80 sm:text-xl">
              Conteúdos prontos para feed, Stories, anúncios e campanhas.
            </p>
            <p className="mt-4 max-w-[480px] text-base leading-relaxed text-foreground/70 sm:text-lg">
              Tudo feito por IA, do roteiro à publicação, sem você gravar nada.
            </p>
            <Button
              asChild
              className="mt-8 h-14 rounded-full px-7 text-base font-extrabold"
            >
              <a href="#planos" onClick={scrollToPlans}>
                <Play className="mr-2 size-4 fill-current" />
                começar agora
              </a>
            </Button>
          </div>

          <div className="examples-mosaic-wrap">
            <div className="examples-mosaic-grid">
              {videoMosaic.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Abrir ${item.title}`}
                  onClick={() => setActiveGallery(item)}
                  className="examples-mosaic-cell"
                >
                  {item.src ? (
                    <video
                      ref={(video) => {
                        showcaseVideoRefs.current[index] = video;
                      }}
                      src={item.src}
                      poster={item.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      aria-label={item.title}
                    />
                  ) : (
                    <img
                      src={item.poster}
                      alt={item.title}
                      loading="lazy"
                      className="examples-mosaic-image"
                      style={
                        {
                          "--mosaic-delay": `${index * -1.15}s`,
                        } as React.CSSProperties
                      }
                    />
                  )}

                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*
        Bloco removido — manifesto:
        02 / anatomia 3D_
        você pensa na ideia.
        a Cello OG Design coloca no feed.
        Criamos peças visuais, vídeos e conteúdos prontos para sua marca aparecer com consistência.
      */}

      <section
        id="como-funciona"
        data-dot-section
        data-dot-label="como funciona"
        className="anatomy-redesign relative isolate overflow-hidden border-y border-border bg-background px-5 pb-24 pt-20 md:pt-12 lg:px-8 lg:pb-32 lg:pt-32"
      >
        <div aria-hidden="true" className="anatomy-corner" />
        <div className="relative mx-auto max-w-[1180px]">
          <div className="anatomy-redesign-grid">
            <div className="anatomy-redesign-copy">
              <span className="anatomy-new-label">_novidade_</span>

              <h1 className="sr-only">
                anatomia 3d do seu personagem.
              </h1>

              <img
                src={anatomyTitleArtwork}
                alt="anatomia 3d do seu personagem"
                width={1792}
                height={896}
                loading="eager"
                fetchPriority="high"
                className="anatomy-title-artwork"
              />

              <p className="anatomy-redesign-description">
                a gente escaneia seu rosto e transforma em um modelo 3D confiável,
                pronto para virar vídeo.
              </p>

              <div className="anatomy-highlight">
                <strong className="text-primary">seu personagem.</strong>
                <strong>do seu jeito.</strong>
              </div>

              <div className="anatomy-technology-card">
                <span className="anatomy-technology-title">COM A TECNOLOGIA</span>
                <div className="anatomy-technology-list">
                  {[
                    ["scan", "escaneia o seu rosto"],
                    ["cube", "gera o modelo 3D"],
                    ["play", "pronto para virar vídeo"],
                  ].map(([icon, text]) => (
                    <div className="anatomy-technology-item" key={text}>
                      <span className="anatomy-technology-icon">
                        <TechnologyIcon type={icon as "scan" | "cube" | "play"} />
                      </span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="anatomy-redesign-visual py-8 sm:py-16">
              <div aria-hidden="true" className="anatomy-character-glow-redesign" />
              <div aria-hidden="true" className="anatomy-dot-grid" />

              <div className="anatomy-redesign-character">
                <img
                  src={anatomyArtwork}
                  alt="Personagem 3D com etiquetas de anatomia"
                  className="anatomy-redesign-image mx-auto h-auto w-full max-w-[320px] object-contain sm:max-w-md"
                />

                <div className="anatomy-callout anatomy-callout-hair">
                  <span className="max-w-[88px] text-center text-[10px] leading-tight sm:max-w-none sm:text-xs">
                    cabelo<br />preservado
                  </span>
                  <i />
                </div>
                <div className="anatomy-callout anatomy-callout-face">
                  <span className="max-w-[88px] text-center text-[10px] leading-tight sm:max-w-none sm:text-xs">
                    rosto<br />realista
                  </span>
                  <i />
                </div>
                <div className="anatomy-callout anatomy-callout-details">
                  <span className="max-w-[88px] text-center text-[10px] leading-tight sm:max-w-none sm:text-xs">
                    detalhes<br />fiéis
                  </span>
                  <i />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-6xl mx-auto my-8 px-4 md:px-6">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-6 md:p-8 backdrop-blur-md">
              <div>
                <span className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-orange-500">
                  ANTES DE CRIAR,
                </span>
                <h3 className="mt-0.5 text-xl font-black tracking-tight text-white sm:text-2xl md:text-3xl">
                  alguns detalhes:
                </h3>
              </div>

              <div className="mt-6 flex flex-col gap-4 md:grid md:grid-cols-4 md:gap-6 md:divide-x md:divide-zinc-800/80">
                <div className="flex items-start gap-3 md:px-6 md:pl-0">
                  <UserRound className="mt-0.5 h-5 w-5 shrink-0 text-orange-500 md:h-6 md:w-6" />
                  <div>
                    <h4 className="text-sm font-bold leading-tight text-white md:text-base">
                      como deve ser?
                    </h4>
                    <p className="mt-0.5 text-xs text-zinc-400 md:text-sm">
                      estilo, aparência e personalidade
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:px-6">
                  <Target className="mt-0.5 h-5 w-5 shrink-0 text-orange-500 md:h-6 md:w-6" />
                  <div>
                    <h4 className="text-sm font-bold leading-tight text-white md:text-base">
                      qual o foco?
                    </h4>
                    <p className="mt-0.5 text-xs text-zinc-400 md:text-sm">
                      conteúdo e objetivo do personagem
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:px-6">
                  <AtSign className="mt-0.5 h-5 w-5 shrink-0 text-orange-500 md:h-6 md:w-6" />
                  <div>
                    <h4 className="text-sm font-bold leading-tight text-white md:text-base">
                      nome e @?
                    </h4>
                    <p className="mt-0.5 text-xs text-zinc-400 md:text-sm">
                      identidade da sua marca
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:px-6 md:pr-0">
                  <ImageIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange-500 md:h-6 md:w-6" />
                  <div>
                    <h4 className="text-sm font-bold leading-tight text-white md:text-base">
                      referência?
                    </h4>
                    <p className="mt-0.5 text-xs text-zinc-400 md:text-sm">
                      rosto, cabelo e características reais
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-6">
                <a
                  href="#planos"
                  onClick={scrollToPlans}
                  aria-label="ir para o checkout"
                  className="flex h-12 w-full flex-1 items-center justify-center gap-3 rounded-2xl bg-[#FF6A00] px-6 text-sm font-bold text-black shadow-lg transition-transform active:scale-95 md:h-14 md:text-base"
                >
                  <Play className="h-4 w-4 shrink-0 text-black" fill="currentColor" />
                  <span className="whitespace-nowrap">
                    geramos seu personagem 3D
                  </span>
                </a>

                <ChevronDown
                  className="h-6 w-6 shrink-0 rotate-90 text-orange-500 md:rotate-0"
                  aria-hidden="true"
                />

                <div className="flex h-12 w-full flex-1 items-center justify-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950 px-6 text-sm font-semibold text-zinc-200 md:h-14 md:text-base">
                  <Play
                    className="h-3.5 w-3.5 shrink-0 text-orange-500"
                    fill="currentColor"
                    aria-hidden="true"
                  />
                  <span className="whitespace-nowrap">
                    pronto para ganhar vida no vídeo.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<section
  id="metodo"
  className={`method-animation-section w-full bg-black py-20 md:py-28 px-4 md:px-8 relative overflow-hidden ${
    methodVisible ? "method-animation-visible" : ""
  }`}
>
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

    {/* Coluna da Esquerda: Textos e CTA */}
    <div className="w-full lg:w-5/12 flex flex-col items-start z-10">
      <span className="method-animate-item method-animate-1 text-orange-500 font-bold text-xs uppercase tracking-widest">03 / MÉTODO</span>
      <img
        src={methodTitleArtwork}
        alt="método dos 4 pilares"
        className="method-mobile-title method-animate-item method-animate-2 mt-2 h-auto w-[90%] max-w-[460px] object-contain md:max-w-[380px] lg:mx-0 lg:max-w-[460px]"
      />
      <h3 className="method-animate-item method-animate-3 mt-1 text-xl font-extrabold text-white md:text-2xl">
        a máquina trabalha <span className="text-orange-500">24/7.</span>
      </h3>
      <p className="method-animate-item method-animate-4 text-zinc-400 text-sm md:text-base mt-4 leading-relaxed max-w-md">
        Da pesquisa à publicação, criamos um sistema completo para transformar sua marca em conteúdo que chama atenção, gera conexão e cria oportunidades.
      </p>
      <a
        href="#planos"
        onClick={scrollToPlans}
        className="method-animate-item method-animate-5 mt-8 px-8 py-3.5 bg-[#FF6A00] hover:bg-orange-500 text-black font-bold text-sm md:text-base rounded-full flex items-center gap-2 transition-transform active:scale-95 shadow-[0_0_20px_rgba(255,106,0,0.3)]"
      >
        <Play className="w-4 h-4 fill-black"/> começar agora
      </a>
    </div>

    {/* Coluna da Direita: Diagrama dos 4 Pilares */}
    <div className="w-full lg:w-7/12 flex items-center justify-center">

      {/* VERSÃO MOBILE: mesmo diagrama do desktop, adaptado à tela estreita */}
      <div className="method-mobile-diagram md:hidden">
        <div
          ref={(card) => {
            methodMobileCardsRef.current[0] = card;
          }}
          className="method-mobile-top-card method-mobile-card method-mobile-reveal-card"
        >
          <Target className="method-mobile-card-icon" />
          <h4>pesquisa</h4>
          <p>varre o que performa, todo dia</p>
        </div>

        <div className="method-mobile-core-wrap">
          <div aria-hidden="true" className="method-fireplace method-mobile-fireplace">
            <span className="method-fireplace-layer method-fireplace-layer-one" />
            <span className="method-fireplace-layer method-fireplace-layer-two" />
            <span className="method-fireplace-layer method-fireplace-layer-three" />
          </div>

          <Embers
            count={10}
            area="method-mobile-fireplace-embers"
            colors={["#ffb347", "#ff8a00", "#ff5a00"]}
            riseMin={60}
            riseMax={80}
            sizeMin={2}
            sizeMax={4}
            variant="method"
          />

          <div aria-hidden="true" className="method-mobile-ring method-mobile-ring-outer" />
          <div aria-hidden="true" className="method-mobile-ring method-mobile-ring-inner" />

          <div className="method-central-core method-mobile-central-core">
            <span className="text-[8px] font-bold text-zinc-400 tracking-wider uppercase">
              MÉTODO DOS
            </span>
            <span className="text-[17px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-orange-400 leading-none my-1">
              4 PILARES
            </span>
            <span className="text-[9px] text-zinc-300 font-mono">
              a máquina roda 24/7<span className="method-cursor" aria-hidden="true">_</span>
            </span>
          </div>
        </div>

        <div className="method-mobile-side-cards">
          <div
            ref={(card) => {
              methodMobileCardsRef.current[1] = card;
            }}
            className="method-mobile-card method-mobile-reveal-card"
          >
            <BarChart3 className="method-mobile-card-icon" />
            <h4>conversão e análise</h4>
            <p>resultado alimenta o conteúdo</p>
          </div>
          <div
            ref={(card) => {
              methodMobileCardsRef.current[2] = card;
            }}
            className="method-mobile-card method-mobile-reveal-card"
          >
            <Sparkles className="method-mobile-card-icon" />
            <h4>ideação</h4>
            <p>dados viram roteiros</p>
          </div>
        </div>

        <div
          ref={(card) => {
            methodMobileCardsRef.current[3] = card;
          }}
          className="method-mobile-card method-mobile-bottom-card method-mobile-reveal-card"
        >
          <Play className="method-mobile-card-icon fill-orange-500" />
          <h4>produção e publicação</h4>
          <p>conteúdo pronto, sem gravação</p>
        </div>
      </div>

      {/* VERSÃO DESKTOP: Órbita ampla em cruz sem colisão */}
      <div className="hidden md:flex relative aspect-square w-[min(620px,100%)] items-center justify-center">
        <div aria-hidden="true" className="method-fireplace">
          <DesktopFireplaceSparks />
          <span className="method-fireplace-layer method-fireplace-layer-one" />
          <span className="method-fireplace-layer method-fireplace-layer-two" />
          <span className="method-fireplace-layer method-fireplace-layer-three" />
        </div>

        <Embers
          count={18}
          area="method-fireplace-embers"
          colors={["#ffb347", "#ff8a00", "#ff5a00"]}
          riseMin={60}
          riseMax={80}
          sizeMin={2}
          sizeMax={4}
          variant="method"
        />

        {/* Glow e anéis */}
        <div className="absolute inset-0 bg-orange-600/10 blur-3xl rounded-full pointer-events-none" />
        <div className="method-animated-ring method-animated-ring-outer absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500/20 pointer-events-none" />
        <div className="method-animated-ring method-animated-ring-inner absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500/30 pointer-events-none" />

        {/* Núcleo Central */}
        <div className="method-central-core w-44 h-44 rounded-full bg-zinc-950 border border-orange-500/40 flex flex-col items-center justify-center text-center p-3 shadow-[0_0_30px_rgba(255,106,0,0.2)] z-10">
          <span className="text-[10px] font-bold text-zinc-400 tracking-wider uppercase">MÉTODO DOS</span>
          <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-orange-400 leading-none my-1">
            4 PILARES
          </span>
          <span className="text-[11px] text-zinc-300 font-mono">a máquina roda 24/7<span className="method-cursor" aria-hidden="true">_</span></span>
        </div>

        {/* Card Topo (pesquisa) */}
        <div className="method-pillar-card method-pillar-card-1 method-card-animate-1 absolute top-0 left-1/2 -translate-x-1/2 w-44 bg-zinc-950/95 border border-orange-500/40 rounded-2xl p-3 text-center shadow-xl z-20 transition-all">
          <Target className="w-4 h-4 text-orange-500 mx-auto mb-1"/>
          <h4 className="text-xs font-bold text-white">pesquisa</h4>
          <p className="text-[11px] text-zinc-400 mt-0.5">varre o que performa, todo dia</p>
        </div>

        {/* Card Direita (ideação) */}
        <div className="method-pillar-card method-pillar-card-2 method-card-animate-2 absolute left-[calc(50%+112px)] top-1/2 -translate-y-1/2 w-44 bg-zinc-950/95 border border-orange-500/40 rounded-2xl p-3 text-center shadow-xl z-20 transition-all">
          <Sparkles className="w-4 h-4 text-orange-500 mx-auto mb-1"/>
          <h4 className="text-xs font-bold text-white">ideação</h4>
          <p className="text-[11px] text-zinc-400 mt-0.5">dados viram roteiros</p>
        </div>

        {/* Card Base (produção e publicação) */}
        <div className="method-pillar-card method-pillar-card-3 method-card-animate-3 absolute bottom-0 left-1/2 -translate-x-1/2 w-44 bg-zinc-950/95 border border-orange-500/40 rounded-2xl p-3 text-center shadow-xl z-20 transition-all">
          <Play className="w-4 h-4 text-orange-500 fill-orange-500 mx-auto mb-1"/>
          <h4 className="text-xs font-bold text-white">produção e publicação</h4>
          <p className="text-[11px] text-zinc-400 mt-0.5">conteúdo pronto, sem gravação</p>
        </div>

        {/* Card Esquerda (conversão e análise) */}
        <div className="method-pillar-card method-pillar-card-4 method-card-animate-4 absolute right-[calc(50%+112px)] top-1/2 -translate-y-1/2 w-44 bg-zinc-950/95 border border-orange-500/40 rounded-2xl p-3 text-center shadow-xl z-20 transition-all">
          <BarChart3 className="w-4 h-4 text-orange-500 mx-auto mb-1"/>
          <h4 className="text-xs font-bold text-white">conversão e análise</h4>
          <p className="text-[11px] text-zinc-400 mt-0.5">resultado alimenta o conteúdo</p>
        </div>
      </div>

    </div>
  </div>
</section>

      <section id="processo" data-dot-section data-dot-label="processo" className="relative isolate overflow-hidden px-5 py-24 lg:px-8 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-28 blur-[1px] saturate-[1.3] contrast-[1.12] brightness-[1.08]"
          style={{ backgroundImage: `url(${backgroundArtwork})` }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-background/72"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-32 bg-[linear-gradient(to_bottom,var(--background),transparent)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-[linear-gradient(to_top,var(--background),transparent)]"
        />
        <div className="mx-auto max-w-[1180px] lg:pr-9">
          <SectionEyebrow>04 / processo</SectionEyebrow>
          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-black uppercase leading-none tracking-[-0.05em] sm:text-6xl">
              do briefing ao seu <span className="text-primary">feed.</span>
            </h2>
            <p className="max-w-sm text-muted-foreground">Um fluxo simples para transformar sua ideia em conteúdo.</p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["01", "você envia a ideia", "Pode ser um produto, uma referência, um roteiro ou apenas uma necessidade.", Palette],
              ["02", "a gente produz", "Criamos a arte, o vídeo ou o conteúdo com a identidade da sua marca.", Video],
              ["03", "você recebe pronto", "Tudo preparado para publicar, anunciar ou programar.", Sparkles],
            ].map(([number, title, text, Icon]) => (
              <div key={number as string} className="rounded-[1.75rem] border border-border bg-card p-7 transition-colors hover:border-primary/60">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-primary">{number as string}</span>
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="mt-16 text-2xl font-bold uppercase">{title as string}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planos" data-dot-section data-dot-label="planos" className="scroll-mt-[calc(var(--nav-h)+24px)] relative isolate overflow-hidden border-y border-border bg-card/95 px-5 py-24 lg:px-8 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-35 blur-[1px] saturate-[1.3] contrast-[1.12] brightness-[1.08]"
          style={{ backgroundImage: `url(${backgroundArtwork})` }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-card/68"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-background via-card/90 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background via-card/90 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--card)/78%,transparent_18%,transparent_82%,var(--card)/90%)]"
        />
        <div className="mx-auto max-w-[1180px]">
          <SectionEyebrow>05 / créditos de vídeo</SectionEyebrow>
          <h2 className="sr-only">créditos de vídeo</h2>
          <img
            src={creditsTitleArtwork}
            alt="créditos de vídeo"
            width={2176}
            height={768}
            loading="eager"
            fetchPriority="high"
            className="section-title-artwork section-title-artwork-credits"
          />
          <p className="mt-5 text-lg text-muted-foreground">
            Mais liberdade para criar. Use seus créditos como quiser.
          </p>

          <div className="mt-12 flex snap-x gap-4 overflow-x-auto pb-6 [scrollbar-width:none] lg:grid lg:grid-cols-5 lg:overflow-visible">
            {plans.map((plan) => {
              const automation = automationByPlan[plan.name];

              return (
              <div
                key={plan.name}
                className={`plano relative flex min-w-[82vw] snap-start flex-col rounded-[1.75rem] border p-[22px] sm:min-w-[310px] lg:min-w-0 ${
                  plan.popular
                    ? "plan-popular border-primary bg-primary text-primary-foreground"
                    : plan.name === "Starter"
                      ? "plan-starter"
                      : plan.name === "Agency"
                        ? "plan-agency"
                        : plan.name === "Studio"
                          ? "plan-studio"
                          : "plan-dark"
                }`}
              >
                {plan.name === "Starter" && (
                  <span className="plan-badge plan-badge-starter">
                    mais econômico
                  </span>
                )}
                {plan.popular && (
                  <span className="plan-badge plan-badge-popular">
                    mais popular
                  </span>
                )}
                {plan.name === "Agency" && (
                  <span className="plan-badge plan-badge-agency">
                    mais resultado
                  </span>
                )}

                <Embers
                  count={plan.popular ? 28 : 20}
                  area={`plan-embers-${plan.name.toLowerCase()}`}
                  colors={
                    plan.popular
                      ? ["#fff2d6", "#ffd9a0", "#7a2e00"]
                      : ["#ff8a00", "#ff5a00", "#ffb347"]
                  }
                  riseMin={140}
                  riseMax={240}
                  sizeMin={2}
                  sizeMax={4}
                  variant="plan"
                />

                <div className="relative z-[1] flex h-full flex-col">
                  <p className="plan-name font-mono text-xs uppercase tracking-[0.12em]">
                    {plan.name}
                  </p>

                  <div className="plan-credits-block mt-5 min-w-0">
                    <p className="plan-credits text-[56px] font-extrabold leading-none tracking-tight">
                      {plan.credits}
                    </p>
                    <p className="plan-credits-label mt-1 text-sm">créditos</p>
                  </div>

                  <div className="plan-divider my-5 h-px w-full" />

                  <p className="plan-price min-w-0 text-4xl font-extrabold tracking-tight">
                    {plan.price}
                    <span className="ml-2 align-baseline text-base font-medium opacity-70">
                      /mês
                    </span>
                  </p>
                  <p className="plan-price-per-credit mt-2 text-sm">
                    {plan.pricePerCredit}
                  </p>

                  <ul className="plan-details mt-5 mb-6 min-w-0 space-y-[10px] text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="plan-check mt-0.5 size-4 shrink-0" aria-hidden="true" />
                      <span>{plan.duration}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="plan-check mt-0.5 size-4 shrink-0" aria-hidden="true" />
                      <span>Recorrência mensal</span>
                    </li>
                  </ul>

                  <div className="plan-actions mt-auto flex flex-col gap-3 pb-6">
                    <Button
                      className={`plan-button h-[52px] w-full rounded-full ${
                        plan.popular
                          ? "bg-foreground text-background hover:bg-foreground/90"
                          : plan.name === "Starter"
                            ? "bg-[#ff6a00] text-white hover:bg-[#ff6a00]/90"
                            : plan.name === "Agency"
                              ? "bg-white text-[#4c1d95] hover:bg-white/90"
                              : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }`}
                      onClick={() => {
                        window.location.href = `/checkout?plan=${plan.name.toLowerCase()}`;
                      }}
                    >
                      escolher plano
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      aria-label="escolher plano com automação"
                      className={`plan-automation-button ${
                        plan.popular
                          ? "plan-automation-scale"
                          : plan.name === "Starter"
                            ? "plan-automation-starter"
                            : plan.name === "Agency"
                              ? "plan-automation-agency"
                              : "plan-automation-dark"
                      }`}
                      onClick={() => {
                        window.location.href = `/checkout?plan=${plan.name.toLowerCase()}`;
                      }}
                    >
                      com automação
                    </Button>

                    <p className="plan-automation-price !mt-3 leading-[1.4]">
                      + {formatCurrency(automation.price)} /mês
                    </p>

                    <p className="plan-automation-description !mt-2 leading-[1.4]">
                      12 imagens + posts automáticos no seu perfil
                    </p>

                    <p className="plan-automation-monthly-note !mt-2 leading-[1.4]">
                      cobrança mensal, cancele quando quiser
                    </p>

                    <button
                      type="button"
                      className="plan-automation-info !mt-[10px] leading-[1.4]"
                      onClick={(event) => {
                        automationInfoReturnRef.current = event.currentTarget;
                        setAutomationInfoPlan(plan);
                      }}
                    >
                      o que é automação?
                    </button>
                  </div>
                </div>
              </div>
              );
            })}
          </div>

          <div className="mt-2 flex justify-center gap-2 lg:hidden">
            {plans.map((plan, index) => (
              <span key={plan.name} className={`size-2 rounded-full ${index === 0 ? "bg-primary" : "bg-border"}`} />
            ))}
          </div>

          <div id="dividir" data-dot-section data-dot-label="como dividir" className="mt-10 rounded-[1.75rem] border border-primary/50 bg-background p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <SectionEyebrow>05 / como dividir</SectionEyebrow>
                <h3 className="mt-4 text-3xl font-black uppercase leading-none tracking-[-0.04em] sm:text-5xl">
                  veja quanto você consegue produzir
                </h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  150 créditos = 1 minuto de vídeo
                </p>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Escolha um plano e a duração dos vídeos para visualizar sua produção.
              </p>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-7">
                <div>
                  <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
                    escolha o plano
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {calculatorPlans.map((plan) => (
                      <Button
                        key={plan.name}
                        size="sm"
                        variant={calculatorPlan === plan.name ? "default" : "outline"}
                        className="rounded-full"
                        onClick={() => setCalculatorPlan(plan.name)}
                      >
                        {plan.name}
                      </Button>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Todos os cinco planos podem ser simulados nesta calculadora.
                  </p>
                </div>

                <div>
                  <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
                    duração dos vídeos
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {videoOptions.map((option) => (
                      <Button
                        key={option.seconds}
                        size="sm"
                        variant={calculatorDuration === option.seconds ? "default" : "outline"}
                        className="rounded-full"
                        onClick={() => setCalculatorDuration(option.seconds)}
                      >
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-card p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">
                    resultado_
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {selectedCalculatorPlan.name} · {selectedCalculatorPlan.credits} créditos
                  </p>
                </div>

                <p className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                  {possibleVideos} {possibleVideos === 1 ? "vídeo" : "vídeos"} de{" "}
                  {selectedVideoOption.seconds}s
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-border bg-background p-4">
                    <p className="text-xs text-muted-foreground">créditos usados</p>
                    <p className="mt-2 text-2xl font-bold">{usedCredits}</p>
                  </div>
                  <div className="rounded-xl border border-border bg-background p-4">
                    <p className="text-xs text-muted-foreground">restantes</p>
                    <p className="mt-2 text-2xl font-bold">{remainingCredits}</p>
                  </div>
                  <div className="col-span-2 rounded-xl border border-border bg-background p-4 sm:col-span-1">
                    <p className="text-xs text-muted-foreground">tempo total</p>
                    <p className="mt-2 text-2xl font-bold">
                      {Math.floor(totalSeconds / 60)}m {totalSeconds % 60}s
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Seção removida: automação de postagem.
          Texto preservado: "mantenha suas redes em movimento", "Adicione a automação de postagens ao seu plano e mantenha suas redes em movimento, com publicações programadas.",
          planos: STARTER + R$ 100,00; PRO + R$ 89,90; SCALE + R$ 69,90. */}

      <section
        id="ecossistema-digital"
        className="relative isolate overflow-hidden border-y border-border bg-card px-5 py-20 lg:px-8 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="absolute -right-32 top-1/2 -z-10 size-96 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
        />
        <div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-8 rounded-[2rem] border border-primary/30 bg-background/80 p-7 backdrop-blur-sm sm:p-10 lg:flex-row lg:items-center lg:p-12">
          <div className="max-w-2xl">
            <SectionEyebrow>ecossistema digital</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[-0.055em] sm:text-5xl">
              sua marca merece uma operação{" "}
              <span className="text-primary">completa.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Site, sistema, app, SaaS e automações sob medida para conectar
              sua presença digital, conteúdo e vendas em uma única estrutura.
            </p>
          </div>

          <Button
            asChild
            className="h-14 shrink-0 rounded-full px-7 text-base font-extrabold"
          >
            <a href="/ecossistema">
              conhecer o ecossistema
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
      </section>

      <section id="duvidas" data-dot-section data-dot-label="dúvidas" className="border-y border-border bg-background px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[900px]">
          <SectionEyebrow>06 / dúvidas_</SectionEyebrow>
          <h2 className="mt-5 max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.055em] sm:text-6xl">
            perguntas <span className="text-primary">frequentes.</span>
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {faqItems.map(([question, answer], index) => (
              <AccordionItem key={question} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-base sm:text-lg">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl leading-relaxed text-muted-foreground">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-primary px-5 py-20 text-primary-foreground lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="max-w-2xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.06em] sm:text-7xl">
              sua marca não precisa ficar parada.
            </h2>
            <p className="mt-5 max-w-lg text-lg text-primary-foreground/75">
              Vamos criar conteúdos que façam as pessoas perceberem o valor do seu negócio.
            </p>
          </div>
          <Button
            variant="secondary"
            className="h-14 shrink-0 rounded-full px-7 font-bold uppercase"
            onClick={scrollToPlans}
          >
            começar agora
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </section>

      <Dialog
        open={Boolean(automationInfoPlan)}
        onOpenChange={(open) => {
          if (!open) {
            setAutomationInfoPlan(null);
            requestAnimationFrame(() => automationInfoReturnRef.current?.focus());
          }
        }}
      >
        <DialogContent
          role="dialog"
          aria-modal="true"
          className="automation-info-dialog"
        >
          <DialogHeader className="automation-info-header text-left">
            <span className="automation-info-badge">AUTOMAÇÃO</span>
            <DialogTitle className="automation-info-title">
              Automação: seu perfil <span>postando sozinho</span>
            </DialogTitle>
            <DialogDescription className="automation-info-description">
              A gente cuida do conteúdo e da publicação pra você.
            </DialogDescription>
          </DialogHeader>

          <div className="automation-info-benefits">
            {[
              {
                icon: ImageIcon,
                content: (
                  <>
                    <strong><span>12</span> imagens criadas para o seu perfil</strong>
                  </>
                ),
              },
              {
                icon: Play,
                content: <strong>Vídeos publicados automaticamente no seu perfil</strong>,
              },
              {
                icon: Zap,
                content: (
                  <strong>
                    Acelera o seu resultado: perfil sempre ativo, sem você precisar postar
                  </strong>
                ),
              },
              {
                icon: Megaphone,
                content: <strong>Legenda viral escrita por quem entende do assunto</strong>,
              },
            ].map(({ icon: Icon, content }) => (
              <div className="automation-info-benefit" key={typeof content === "object" ? String(Icon) : String(content)}>
                <span className="automation-info-benefit-icon">
                  <Icon aria-hidden="true" />
                </span>
                <div>{content}</div>
              </div>
            ))}
          </div>

          {automationInfoPlan && (
            <div className="automation-info-summary">
              <div className="flex items-center justify-between gap-4">
                <span>
                  Plano {automationInfoPlan.name} + automação
                </span>
                <strong>
                  {formatCurrency(automationInfoTotal ?? 0)}
                  <small>/mês</small>
                </strong>
              </div>
              <p>cobrança mensal, cancele quando quiser</p>
            </div>
          )}

          <div className="automation-info-actions">
            <Button
              className="automation-info-primary-button"
              onClick={() => {
                if (!automationInfoPlan) return;

                const plan = automationInfoPlan;
                const automationId = automationByPlan[plan.name].id;

                // Fecha primeiro o modal de automação; o checkout só é montado
                // depois que o overlay anterior foi removido.
                setAutomationInfoPlan(null);
                requestAnimationFrame(() => {
                  setSelectedAutomation(automationId);
                  setCheckoutPlan(plan);
                });
              }}
            >
              quero com automação
              <ArrowRight className="automation-info-arrow" />
            </Button>

            <button
              type="button"
              className="automation-info-back"
              onClick={() => {
                setAutomationInfoPlan(null);
                requestAnimationFrame(() => automationInfoReturnRef.current?.focus());
              }}
            >
              voltar
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={Boolean(checkoutPlan)}
        onOpenChange={(open) => {
          if (!open) closeCheckout();
        }}
      >
        <DialogContent className="checkout-dialog flex max-h-[92vh] flex-col overflow-hidden rounded-[20px] border-primary bg-[#0a0605] p-0">
          <DialogHeader className="shrink-0 border-b border-primary/40 px-4 py-4 sm:px-6">
            <DialogTitle className="text-2xl font-bold">Seu pedido</DialogTitle>
            <DialogDescription className="mt-2 text-sm font-medium text-muted-foreground">
              Revise seu plano, escolha a automação e continue para o pagamento.
            </DialogDescription>

            <div
              className="mt-5 flex flex-wrap items-center gap-2"
              aria-label="Etapas do checkout"
            >
              <div className="flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-primary shadow-[0_0_16px_color-mix(in_srgb,var(--primary)_18%,transparent)]">
                <span className="flex size-6 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                  1
                </span>
                <span>Escolha o plano</span>
              </div>

              <ChevronRight
                className="size-4 shrink-0 text-primary/70"
                aria-hidden="true"
              />

              <div className="flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <span className="flex size-6 items-center justify-center rounded-full border border-border bg-muted font-bold text-muted-foreground">
                  2
                </span>
                <span>Automação <span className="normal-case tracking-normal">(opcional)</span></span>
              </div>

              <ChevronRight
                className="size-4 shrink-0 text-muted-foreground/70"
                aria-hidden="true"
              />

              <div className="flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <span className="flex size-6 items-center justify-center rounded-full border border-border bg-muted font-bold text-muted-foreground">
                  3
                </span>
                <span>Finalizar</span>
              </div>
            </div>
          </DialogHeader>

          {checkoutPlan && (
            <div className="checkout-layout grid flex-1 overflow-y-auto p-4 pr-2 pb-10 sm:p-6">
              <div
                ref={checkoutBodyRef}
                className="checkout-body min-h-0 px-0 pb-8"
              >
                <div className="space-y-6 pb-6 sm:space-y-8">
                  <section className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-bold text-primary-foreground">
                        1
                      </span>
                      <h3 className="text-lg font-bold">Seu plano</h3>
                    </div>

                    <div className="rounded-2xl border border-primary/60 bg-primary/5 p-5">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <p className="font-mono text-sm uppercase tracking-widest text-primary">
                            {checkoutPlan.name}
                          </p>
                          <p className="mt-2 text-lg font-bold">
                            {checkoutPlan.credits} créditos
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {checkoutPlan.duration}
                          </p>
                          <p className="mt-3 text-xl font-bold">{checkoutPlan.price}</p>
                        </div>
                        <button
                          type="button"
                          className="shrink-0 text-sm text-primary underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                          onClick={() => setCheckoutPlan(null)}
                        >
                          trocar plano
                        </button>
                      </div>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-bold text-primary-foreground">
                        2
                      </span>
                      <div>
                        <h3 className="text-lg font-bold">
                          Quer automatizar suas postagens?{" "}
                          <span className="font-normal text-muted-foreground">(opcional)</span>
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Publicamos por você no Instagram e no TikTok, nos horários programados.
                        </p>
                      </div>
                    </div>

                    <RadioGroup
                      value={selectedAutomation}
                      onValueChange={(value) =>
                        setSelectedAutomation(value as (typeof automationOptions)[number]["id"])
                      }
                      className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
                    >
                      {availableAutomationOptions.map((option) => {
                        const selected = selectedAutomation === option.id;

                        return (
                          <label
                            key={option.id}
                            className={`relative flex cursor-pointer flex-col justify-between rounded-xl border-2 p-4 transition-colors focus-within:ring-2 focus-within:ring-primary ${
                              selected
                                ? "border-primary bg-primary/10"
                                : "border-border hover:border-primary"
                            }`}
                          >
                            <RadioGroupItem
                              value={option.id}
                              className="absolute left-4 top-4"
                            />
                            {selected && (
                              <Check className="absolute right-3 top-3 size-5 text-primary" />
                            )}
                            <span className="pl-7 text-base font-bold">{option.label}</span>
                            <span className="mt-3 text-sm leading-relaxed text-muted-foreground">
                              {option.description}
                            </span>
                            <span className="mt-4 text-sm font-semibold text-primary">
                              {option.id === "none"
                                ? "R$ 0,00"
                                : `+ ${formatCurrency(checkoutPricing.automation[option.id])}`}
                            </span>
                          </label>
                        );
                      })}
                    </RadioGroup>
                  </section>

                  <section className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-bold text-primary-foreground">
                        3
                      </span>
                      <button
                        type="button"
                        onClick={() => setAddOnsExpanded((expanded) => !expanded)}
                        className="flex flex-1 items-center justify-between gap-4 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                      >
                        <span className="text-lg font-bold">
                          Precisa de mais?{" "}
                          <span className="font-normal text-muted-foreground">(opcional)</span>
                          <span className="mt-1 block text-sm font-normal text-muted-foreground">
                            Serviços sob medida para acelerar o seu resultado
                          </span>
                        </span>
                        <span className="text-xl text-primary">
                          {addOnsExpanded ? "−" : "+"}
                        </span>
                      </button>
                    </div>

                    {addOnsExpanded && (
                      <div className="space-y-3 pl-11">
                        {checkoutAddOns
                          .filter((addOn) => addOn.id === "ecosystem")
                          .map((addOn) => {
                          const Icon = addOn.icon;
                          const servicePrice = checkoutPricing.services[addOn.id];
                          const isExpanded = expandedAddOns[addOn.id] ?? false;
                          const isEcosystem = addOn.id === "ecosystem";

                          return (
                            <div
                              key={addOn.id}
                              className={`checkout-service-card rounded-xl border transition-colors ${
                                isEcosystem
                                  ? "checkout-service-card-featured"
                                  : ""
                              } ${
                                selectedAddOns.includes(addOn.id) || (isEcosystem && ecosystemQuoteRequested)
                                  ? "border-primary bg-primary/10"
                                  : "border-border"
                              }`}
                            >
                              {isEcosystem && (
                                <span className="checkout-service-badge">
                                  SOB ORÇAMENTO
                                </span>
                              )}

                              {isEcosystem ? (
                                <div className="checkout-ecosystem-content">
                                  <div className="flex items-start gap-3">
                                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                                      <Icon className="size-5" />
                                    </span>
                                    <span className="min-w-0 flex-1">
                                      <strong className="block text-lg font-bold leading-tight">
                                        {addOn.title}
                                      </strong>
                                      <small className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                                        Site, sistema, app ou SaaS e automações feitos sob medida para a sua marca.
                                      </small>
                                    </span>
                                  </div>

                                  <div className="checkout-ecosystem-price">
                                    <span>projetos a partir de R$ 697</span>
                                    <small>sob orçamento</small>
                                  </div>
                                </div>
                              ) : (
                                <label className="flex cursor-pointer items-start gap-3 p-3.5 sm:p-4">
                                  <Checkbox
                                    checked={selectedAddOns.includes(addOn.id)}
                                    onCheckedChange={() => toggleAddOn(addOn.id)}
                                  />
                                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                                    <Icon className="size-5" />
                                  </span>
                                  <span className="min-w-0 flex-1">
                                    <strong className="block text-sm font-bold leading-tight">
                                      {addOn.title}
                                    </strong>
                                    <small className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                                      {addOn.description}
                                    </small>
                                    <span className="mt-2 block text-sm font-semibold text-primary">
                                      + {formatCurrency(servicePrice)}{" "}
                                      <small className="font-normal text-muted-foreground">
                                        pagamento único
                                      </small>
                                    </span>
                                  </span>
                                </label>
                              )}

                              {isEcosystem && (
                                <Button
                                  asChild
                                  type="button"
                                  className="checkout-ecosystem-button"
                                  aria-label="ver ecossistema digital"
                                >
                                  <a
                                    href="/ecossistema"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Ver ecossistema digital
                                    <ArrowRight className="ml-2 size-4" />
                                  </a>
                                </Button>
                              )}

                              {!isEcosystem && (
                                <>
                                  <button
                                    type="button"
                                    className="checkout-service-details-trigger"
                                    aria-expanded={isExpanded}
                                    aria-controls={`checkout-service-details-${addOn.id}`}
                                    onClick={() =>
                                      setExpandedAddOns((current) => ({
                                        ...current,
                                        [addOn.id]: !isExpanded,
                                      }))
                                    }
                                  >
                                    <span>ver o que está incluso</span>
                                    <span aria-hidden="true">{isExpanded ? "−" : "+"}</span>
                                  </button>

                                  <div
                                    id={`checkout-service-details-${addOn.id}`}
                                    className={`checkout-service-details ${
                                      isExpanded ? "is-open" : ""
                                    }`}
                                    aria-hidden={!isExpanded}
                                  >
                                    <ul>
                                      {addOn.details.map((detail) => (
                                        <li key={detail}>
                                          <Check aria-hidden="true" />
                                          <span>{detail}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </section>
                </div>
              </div>

              <aside className="checkout-summary shrink-0 border-t border-primary/40 bg-[#120a07] px-0 pb-10 pt-4 sm:pb-10 sm:pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pr-0">
                <div className="flex h-full flex-col">
                  <p className="font-mono text-sm uppercase tracking-[0.18em] text-primary">
                    Resumo do pedido
                  </p>

                  <div className="mt-7 space-y-7 text-sm">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-primary">
                        Mensal
                      </p>
                      <div className="mt-4 space-y-4">
                        <div className="flex justify-between gap-4">
                          <span className="min-w-0 break-words">
                            Créditos {checkoutPlan.name} ({checkoutPlan.credits})
                          </span>
                          <strong className="shrink-0 text-right">
                            {formatCurrency(planPrice ?? 0)} /mês
                          </strong>
                        </div>

                        {automationEnabled && (
                          <div className="flex justify-between gap-4">
                            <span className="min-w-0 break-words">
                              Automação {selectedAutomationOption.label}
                            </span>
                            <strong className="shrink-0 text-right">
                              {formatCurrency(automationPrice)} /mês
                            </strong>
                          </div>
                        )}
                      </div>

                      <div className="mt-5 border-t border-primary/30 pt-4">
                        <div className="flex items-end justify-between gap-4">
                          <span className="font-bold">Total por mês</span>
                          <strong className="text-2xl font-black text-primary">
                            {checkoutMonthlyTotal === null
                              ? "a combinar"
                              : formatCurrency(checkoutMonthlyTotal)}
                          </strong>
                        </div>
                      </div>
                    </div>

                    {false && selectedAddOns.length > 0 && (
                      <div className="border-t border-primary/30 pt-6">
                        <p className="font-mono text-xs uppercase tracking-widest text-primary">
                          Pagamento único
                        </p>
                        <div className="mt-4 space-y-4">
                          {selectedAddOns.map((id) => {
                            const service = checkoutAddOns.find((item) => item.id === id);
                            const servicePrice = checkoutPricing.services[id];

                            return (
                              <div key={id} className="flex justify-between gap-4">
                                <span className="min-w-0 break-words">
                                  {service?.title}
                                </span>
                                <strong className="shrink-0 text-right">
                                  {formatCurrency(servicePrice)}
                                </strong>
                              </div>
                            );
                          })}
                        </div>

                        <div className="mt-5 border-t border-primary/30 pt-4">
                          <div className="flex items-end justify-between gap-4">
                            <span className="font-bold">Total único</span>
                            <strong className="text-2xl font-black text-primary">
                              {formatCurrency(checkoutUniqueTotal)}
                            </strong>
                          </div>
                        </div>

                        <Button
                          asChild
                          className="mt-6 h-[52px] w-full rounded-xl text-base font-black"
                        >
                          <a
                            href={oneTimePaymentUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Pagar serviços
                            <ArrowRight className="ml-2 size-5" />
                          </a>
                        </Button>
                      </div>
                    )}

                    <div className="mt-7 flex items-start gap-2 rounded-xl border border-primary/25 bg-primary/5 px-3 py-2.5 text-[13px] leading-relaxed text-muted-foreground">
                      <FileText className="mt-0.5 size-[13px] shrink-0 text-primary" aria-hidden="true" />
                      <span>
                        Depois do pagamento você preenche um briefing rápido e recebe o primeiro vídeo em até 6 horas de atendimento depois do briefing completo (atendimento das 8h às 17h).
                      </span>
                    </div>

                    {!monthlyPaymentAvailable && (
                      <p className="mt-4 rounded-xl border border-primary/40 bg-primary/5 px-3 py-2 text-center text-sm leading-relaxed text-primary">
                        Essa combinação ainda não está disponível online
                      </p>
                    )}

                    <Button asChild className="mt-4 mb-2 h-[52px] w-full rounded-xl text-lg font-black shadow-[0_0_24px_color-mix(in_srgb,var(--primary)_28%,transparent)] transition-shadow hover:shadow-[0_0_34px_color-mix(in_srgb,var(--primary)_52%,transparent)]">
                      <a href={monthlyPaymentUrl} target="_blank" rel="noopener noreferrer">
                        {monthlyPaymentAvailable ? "Assinar agora" : "Falar no WhatsApp"}
                        <ArrowRight className="ml-2 size-5" />
                      </a>
                    </Button>
                    <p className="mt-4 text-center text-sm text-muted-foreground">
                      Pagamento seguro pelo Asaas · Pix, boleto ou cartão
                    </p>
                    <p className="mt-2 text-center text-xs text-muted-foreground">
                      Ao assinar, você concorda com{" "}
                      <a
                        href="/termos"
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4 transition-colors hover:text-primary"
                      >
                        os Termos
                      </a>
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <footer className="border-t border-border bg-card/90 px-5 py-14 lg:px-8">
        <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-10 md:flex-row">
          <div>
            <p className="font-mono text-xl font-bold">
              Cello<span className="text-primary">_</span> OG Design
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              criação de artes e vídeos · automação de conteúdo.
            </p>
          </div>
          <div className="flex flex-wrap items-start gap-6 text-sm text-muted-foreground">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-primary">
              suporte pelo WhatsApp
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="hover:text-primary">
              Instagram
            </a>
            <a href="#planos" className="hover:text-primary">
              planos
            </a>
            <a href="/termos" className="hover:text-primary">
              Termos
            </a>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-[1180px] border-t border-border pt-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Cello OG Design. Todos os direitos reservados. Imagens: Pexels — Ty Nguyễn, Raouf Meftah, Steve A Johnson, Visual Tag Mx, Tara Winstead, Raul Ling, Markus Winkler, cottonbro studio e Free Nature Stock.
        </p>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Cello OG Design pelo WhatsApp"
        className="chat-floating-button fixed bottom-5 right-5 z-30 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_8px_30px_color-mix(in_srgb,var(--primary)_35%,transparent)] transition-transform hover:scale-105"
      >
        <MessageCircle className="size-6" />
      </a>

      {!isMobileViewport && (
        <Dialog
          open={Boolean(activeGallery)}
          onOpenChange={(open) => !open && closeGallery()}
        >
          <DialogContent className="examples-mosaic-modal-content max-w-xl overflow-hidden rounded-[1.5rem] p-3">
            <DialogHeader className="sr-only">
              <DialogTitle>{activeGallery?.title}</DialogTitle>
            </DialogHeader>
            {activeGallery && (
              <>
                <div className="examples-mosaic-modal-media">
                  {activeGallery.src ? (
                    <video
                      src={activeGallery.modalSrc ?? activeGallery.src ?? undefined}
                      poster={activeGallery.poster}
                      controls
                      autoPlay
                      playsInline
                      className="size-full object-cover"
                    />
                  ) : (
                    <img
                      src={activeGallery.poster}
                      alt={activeGallery.title}
                      className="size-full object-cover"
                    />
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background p-6 pt-20">
                    <h3 className="text-2xl font-bold">{activeGallery.title}</h3>
                  </div>
                </div>

                <Button
                  type="button"
                  className="examples-mosaic-mobile-cta"
                  onClick={() => {
                    closeGallery();
                    requestAnimationFrame(() => scrollToPlans());
                  }}
                >
                  Produzir para minha empresa
                </Button>
              </>
            )}
          </DialogContent>
        </Dialog>
      )}

      {isMobileViewport &&
        activeGallery &&
        createPortal(
          <div
            className="mobile-gallery-portal"
            role="dialog"
            aria-modal="true"
            aria-label={activeGallery.title}
          >
            <button
              type="button"
              className="mobile-gallery-close"
              aria-label="Fechar vídeo"
              onClick={closeGallery}
            >
              <X className="size-6" />
            </button>

            <video
              ref={mobileGalleryVideoRef}
              src={activeGallery.modalSrc ?? activeGallery.src ?? undefined}
              poster={activeGallery.poster}
              autoPlay
              playsInline
              controls
              className="mobile-gallery-video"
            />

            <Button
              type="button"
              className="mobile-gallery-cta"
              onClick={() => {
                closeGallery();
                requestAnimationFrame(() => scrollToPlans());
              }}
            >
              Produzir para minha empresa
            </Button>
          </div>,
          document.body,
        )}
    </main>
  );
}