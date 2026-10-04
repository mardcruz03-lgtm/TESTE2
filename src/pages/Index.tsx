import { useRef, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Copy,
  Menu,
  Play,
  X,
} from "lucide-react";
import referenceArt from "@/assets/uploads/5268.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const images = {
  editing: "https://images.pexels.com/photos/11063289/pexels-photo-11063289.jpeg?auto=compress&cs=tinysrgb&w=1600",
  studio: "https://images.pexels.com/photos/7180492/pexels-photo-7180492.jpeg?auto=compress&cs=tinysrgb&w=1600",
  social: "https://images.pexels.com/photos/7315757/pexels-photo-7315757.jpeg?auto=compress&cs=tinysrgb&w=1600",
  camera: "https://images.pexels.com/photos/30229850/pexels-photo-30229850.jpeg?auto=compress&cs=tinysrgb&w=1600",
  workspace: "https://images.pexels.com/photos/8367791/pexels-photo-8367791.jpeg?auto=compress&cs=tinysrgb&w=1600",
  branding: "https://images.pexels.com/photos/7661492/pexels-photo-7661492.jpeg?auto=compress&cs=tinysrgb&w=1600",
  creative: "https://images.pexels.com/photos/30889258/pexels-photo-30889258.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

const plans = [
  { name: "STARTER_", credits: 150, price: "R$ 79,90", time: "1 minuto", automation: "R$ 100" },
  { name: "ESSENCIAL_", credits: 300, price: "R$ 129,90", time: "2 minutos", automation: "R$ 89,90" },
  { name: "PRO_", credits: 500, price: "R$ 189,90", time: "3 minutos e 20 segundos", automation: "R$ 69,90", popular: true },
];

const videoPlans = [
  ...plans,
  { name: "1.000_", credits: 1000, price: "R$ 349,90", time: "6 minutos e 40 segundos", automation: "R$ 69,90" },
  { name: "2.000_", credits: 2000, price: "R$ 649,90", time: "13 minutos e 20 segundos", automation: "R$ 69,90" },
];

const examples = [
  { category: "vídeos", title: "Edição com identidade", description: "Conteúdo vertical pronto para publicar.", duration: "00:30", image: images.editing },
  { category: "artes", title: "Ideia simples. Visual forte.", description: "Conceito visual para feed e Stories.", duration: "arte", image: images.social },
  { category: "serviços", title: "Conteúdo que comunica", description: "Materiais pensados para sua presença digital.", duration: "01:00", image: images.camera },
  { category: "branding", title: "Uma marca reconhecível", description: "Direção visual para manter consistência.", duration: "arte", image: images.branding },
  { category: "criação", title: "Processo por trás da ideia", description: "Referências e produção em movimento.", duration: "00:20", image: images.creative },
];

const faqs = [
  ["Como funcionam os créditos?", "Cada crédito representa aproximadamente um segundo de produção. Você pode combinar os créditos em vídeos de diferentes durações."],
  ["Quanto tempo dura cada vídeo?", "Você escolhe vídeos de 20, 30 ou 60 segundos. Também é possível combinar formatos no mesmo pacote."],
  ["Posso dividir os créditos em vários vídeos?", "Sim. Os créditos são seus para usar como fizer mais sentido para o seu negócio."],
  ["Os créditos expiram?", "Os créditos são renovados mensalmente conforme o plano contratado."],
  ["A automação está incluída?", "A automação é um adicional opcional, contratado por 30 dias."],
  ["A automação publica no feed e nos Stories?", "Sim. As artes são adaptadas para feed e Stories, dentro do calendário combinado."],
  ["Vocês fazem a gestão completa do Instagram?", "Não. A Cellk cria os conteúdos e pode programar as entregas contratadas, sem substituir a gestão completa do perfil."],
  ["Como envio meu logo e minhas referências?", "Depois de escolher o pacote, você envia tudo pelo WhatsApp: logo, cores, referências, roteiro ou apenas uma ideia."],
  ["Qual é o prazo de entrega?", "O prazo é combinado conforme o briefing e o volume do pacote."],
  ["Como funciona o pagamento?", "O pagamento e os próximos passos são combinados diretamente pelo WhatsApp."],
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-xs uppercase tracking-widest text-primary underline decoration-primary/40 underline-offset-4">{children}</p>;
}

function PlansButton({
  children = "ver planos",
  variant = "default",
}: {
  children?: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
}) {
  return (
    <Button
      variant={variant}
      onClick={() =>
        document.getElementById("planos")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    >
      {children} <ArrowRight className="ml-2 size-4" />
    </Button>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<(typeof videoPlans)[number] | null>(null);
  const [duration, setDuration] = useState("30");
  const [automation, setAutomation] = useState(false);
  const [activeExample, setActiveExample] = useState<(typeof examples)[number] | null>(null);
  const [credits, setCredits] = useState(300);
  const [videoDuration, setVideoDuration] = useState(30);
  const carouselRef = useRef<HTMLDivElement>(null);

  const possibleVideos = Math.floor(credits / videoDuration);
  const remaining = credits - possibleVideos * videoDuration;

  function copySummary() {
    if (!selectedPlan) return;
    const summary = `Olá! Quero o pacote ${selectedPlan.name} com ${selectedPlan.credits} créditos, vídeos de ${duration}s${automation ? " e automação" : ""}.`;
    navigator.clipboard?.writeText(summary);
    window.open(`https://wa.me/?text=${encodeURIComponent(summary)}`, "_blank");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="font-mono text-xl font-bold tracking-tight">Cello<span className="text-primary">_</span> <span className="font-sans text-sm font-medium text-muted-foreground">OG Design</span></a>
          <nav className="hidden items-center gap-7 text-sm lg:flex">
            {["como funciona", "exemplos", "planos", "automação", "dúvidas"].map((item) => (
              <a key={item} href={`#${item.split(" ")[0]}`} className="transition-colors hover:text-primary">{item}</a>
            ))}
            <PlansButton>começar agora</PlansButton>
          </nav>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border px-5 py-4 lg:hidden">
            {["como funciona", "exemplos", "planos", "automação", "dúvidas"].map((item) => (
              <a key={item} href={`#${item.split(" ")[0]}`} onClick={() => setMenuOpen(false)} className="block border-b border-border py-3 text-sm">{item}</a>
            ))}
            <div className="pt-4"><PlansButton>começar agora</PlansButton></div>
          </nav>
        )}
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-16 sm:pb-28 sm:pt-20 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:px-8 lg:pt-24">
        <div className="max-w-xl">
          <Badge className="rounded-full border border-border bg-card px-4 py-2 font-mono text-xs font-normal text-primary">
            conteúdo para colocar sua marca em movimento_
          </Badge>
          <h1 className="mt-7 text-balance text-5xl font-black leading-[.94] tracking-[-.06em] sm:text-7xl">
            conteúdo que faz sua marca <span className="text-primary">aparecer.</span>
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
            Artes, vídeos e automação para manter suas redes em movimento.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild><a href="#planos">ver planos</a></Button>
            <PlansButton variant="outline">ver planos</PlansButton>
          </div>
          <p className="mt-7 font-mono text-xs tracking-wide text-muted-foreground">
            vídeos personalizados · artes para feed e Stories · produção assistida por IA
          </p>
        </div>

        <div className="grid grid-cols-[1.18fr_.82fr] gap-3 rounded-[2rem] border border-border bg-card p-3">
          <button onClick={() => setActiveExample(examples[0])} className="group relative min-h-[390px] overflow-hidden rounded-[1.5rem] text-left sm:min-h-[500px]">
            <img src={images.editing} alt="Estação profissional de edição de vídeo" className="size-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
            <span className="absolute bottom-5 left-5 font-mono text-xs text-foreground">vídeo personalizado_</span>
            <span className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground"><Play className="size-4 fill-current" /></span>
          </button>
          <div className="grid gap-3">
            {[
              [images.social, "arte_", "Direção visual"],
              [images.camera, "vídeo_", "Edição sob medida"],
              [images.branding, "anúncio_", "Identidade de marca"],
            ].map(([image, label, alt], index) => (
              <button key={label} onClick={() => setActiveExample(examples[index + 1])} className="group relative min-h-[125px] overflow-hidden rounded-2xl text-left">
                <img src={image} alt={alt} className="size-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <span className="absolute bottom-3 left-3 font-mono text-[11px] text-foreground">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="como" className="border-y border-border bg-card/30 px-5 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>01 / serviços_</SectionLabel>
          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-xl text-4xl font-bold tracking-tight sm:text-6xl">conteúdo que trabalha pela sua <span className="text-primary">marca.</span></h2>
            <p className="max-w-xs text-muted-foreground">clareza na ideia. cuidado na execução.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["01", "artes_", "artes que comunicam", "Flyers, carrosséis e peças visuais com identidade."],
              ["02", "vídeos_", "vídeos que movimentam", "Vídeos curtos, anúncios e apresentações para sua marca."],
              ["03", "automação_", "automação que simplifica", "Conteúdo organizado e publicações programadas."],
            ].map(([number, label, title, text]) => (
              <Card key={number} className="rounded-3xl border-border bg-card shadow-none transition-colors hover:border-primary/50">
                <CardHeader><div className="flex items-center justify-between"><span className="font-mono text-sm text-primary">{number}</span><span className="font-mono text-xs text-muted-foreground">{label}</span></div><CardTitle className="pt-10 text-2xl">{title}</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">{text}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="exemplos" className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
        <SectionLabel>02 / exemplos_</SectionLabel>
        <div className="mt-4 flex items-end justify-between gap-4">
          <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">conteúdos que podem estar no seu <span className="text-primary">feed.</span></h2>
          <div className="hidden gap-2 sm:flex">
            <Button variant="outline" size="icon" onClick={() => carouselRef.current?.scrollBy({ left: -360, behavior: "smooth" })}><ChevronLeft /></Button>
            <Button variant="outline" size="icon" onClick={() => carouselRef.current?.scrollBy({ left: 360, behavior: "smooth" })}><ChevronRight /></Button>
          </div>
        </div>
        <div ref={carouselRef} className="mt-10 flex snap-x gap-5 overflow-x-auto pb-5 [scrollbar-width:none]">
          {examples.map((example) => (
            <Card key={example.title} className="min-w-[82vw] snap-start overflow-hidden rounded-3xl border-border bg-card p-2 shadow-none transition-colors hover:border-primary/60 sm:min-w-[340px]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img src={example.image} alt={example.title} className="size-full object-cover transition-transform duration-500 hover:scale-105" />
                <button onClick={() => setActiveExample(example)} className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-full bg-background/90 text-foreground" aria-label={`Abrir ${example.title}`}><Play className="size-4 fill-current" /></button>
              </div>
              <CardContent className="px-3 pb-3 pt-5">
                <div className="flex justify-between font-mono text-[10px] uppercase text-primary"><span>{example.category}</span><span>{example.duration}</span></div>
                <h3 className="mt-3 text-xl font-semibold">{example.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{example.description}</p>
                <Button variant="link" className="mt-3 px-0" onClick={() => setActiveExample(example)}>ver exemplo <ArrowRight className="ml-2 size-4" /></Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="planos" className="relative isolate overflow-hidden border-y border-border bg-background px-5 py-28 text-foreground lg:px-8">

        <div className="mx-auto max-w-7xl">
          <SectionLabel>03 / planos_</SectionLabel>
          <h2 className="mt-5 max-w-4xl text-5xl font-black tracking-[-.05em] sm:text-7xl">
            créditos de vídeo para sua <span className="text-primary">marca.</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Use seus créditos como quiser. Eles são válidos por até 6 meses.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-border px-5 py-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            créditos válidos por até <span className="ml-1 text-primary">6 meses</span>
          </div>

          <div className="mt-12 grid snap-x auto-cols-[84vw] grid-flow-col gap-5 overflow-x-auto pb-6 [scrollbar-width:none] sm:auto-cols-[300px] lg:grid-flow-row lg:grid-cols-6 lg:overflow-visible">
            {videoPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`group relative min-w-0 snap-start rounded-[2rem] border border-border bg-card text-foreground transition duration-300 hover:-translate-y-1 hover:border-primary/60 lg:col-span-2 ${
                  plan.popular
                    ? "border-primary bg-primary text-primary-foreground"
                    : ""
                } ${plan.name === "1.000_" ? "lg:col-start-2" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background px-4 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground">
                    mais escolhido
                  </Badge>
                )}
                <CardHeader className="gap-4 px-7 pt-8">
                  <span className={`font-mono text-xs uppercase tracking-widest ${plan.popular ? "text-primary-foreground" : "text-primary"}`}>
                    {plan.name}
                  </span>
                  <CardTitle className="text-5xl font-black tracking-tight">
                    {plan.credits.toLocaleString("pt-BR")}
                    <small className={`ml-2 text-sm font-normal ${plan.popular ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                      créditos
                    </small>
                  </CardTitle>
                  <div className={`h-px ${plan.popular ? "bg-primary-foreground/60" : "bg-primary"}`} />
                  <p className="text-4xl font-black tracking-tight">{plan.price}</p>
                </CardHeader>
                <CardContent className={`space-y-3 px-7 pb-7 text-sm ${plan.popular ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
                  <p>até {plan.time} de vídeo</p>
                  <p>créditos válidos por até 6 meses</p>
                  <Button
                    className={`mt-5 w-full rounded-full font-bold ${plan.popular ? "bg-foreground text-background hover:bg-foreground/90" : ""}`}
                    onClick={() => setSelectedPlan(plan)}
                  >
                    <Play className="mr-2 size-4 fill-current" />
                    escolher pacote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-primary text-primary shadow-[0_0_16px_color-mix(in_srgb,var(--primary)_60%,transparent)]">
                <Play className="ml-1 size-6 fill-current" />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary">exemplo prático_</p>
                <p className="mt-2 text-xl font-bold sm:text-2xl">150 créditos de vídeo = 1 minuto de produção.</p>
                <p className="mt-3 text-sm text-background/65">
                  Você pode dividir como quiser: 1 vídeo de 60s · 2 vídeos de 30s · 3 vídeos de 20s
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="automação" className="border-y border-border bg-card px-5 py-28 text-foreground lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>04 / automação_</SectionLabel>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">conteúdo pronto. <span className="text-primary">postagem programada.</span></h2>
          <p className="mt-5 max-w-xl text-muted-foreground">Adicione a automação por 30 dias e mantenha seu perfil ativo com artes e vídeos programados.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {plans.map((plan) => <div key={plan.name} className="rounded-3xl border border-border bg-background p-6"><p className="font-mono text-sm text-primary">{plan.name}</p><p className="mt-5 text-3xl font-bold">+ {plan.automation}</p><p className="mt-2 text-sm text-muted-foreground">12 artes a cada 30 dias, adaptadas para feed e Stories.</p></div>)}
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-5">{["SEG — arte da marca", "TER — bastidores", "QUA — dica", "QUI — vídeo produzido", "SEX — promocional"].map((day) => <div key={day} className="rounded-xl border border-border bg-background p-4 font-mono text-xs text-muted-foreground">{day}</div>)}</div>
          <p className="mt-8 max-w-2xl border-l-2 border-primary pl-4 text-sm text-muted-foreground">As artes complementam sua presença. Continue mostrando vídeos, atendimentos, imóveis, bastidores e o dia a dia real do negócio.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-28 lg:px-8">
        <SectionLabel>05 / simulador_</SectionLabel>
        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">um minuto. <span className="text-primary">várias possibilidades.</span></h2>
        <div className="mt-10 grid gap-8 rounded-3xl border border-border p-6 sm:p-10 md:grid-cols-2">
          <div className="space-y-7">
            <div><p className="mb-3 font-mono text-xs uppercase text-muted-foreground">seus créditos</p><div className="flex flex-wrap gap-2">{[150, 300, 500, 1000, 2000].map((value) => <Button key={value} size="sm" variant={credits === value ? "default" : "outline"} onClick={() => setCredits(value)}>{value}</Button>)}</div></div>
            <div><p className="mb-3 font-mono text-xs uppercase text-muted-foreground">duração dos vídeos</p><div className="flex flex-wrap gap-2">{[20, 30, 60].map((value) => <Button key={value} size="sm" variant={videoDuration === value ? "default" : "outline"} onClick={() => setVideoDuration(value)}>{value}s</Button>)}</div></div>
          </div>
          <div className="rounded-2xl bg-muted/40 p-6"><p className="font-mono text-xs text-primary">resultado_</p><p className="mt-5 text-2xl font-semibold">Com {credits} créditos você pode fazer {possibleVideos} {possibleVideos === 1 ? "vídeo" : "vídeos"} de {videoDuration} segundos.</p><div className="mt-6 grid grid-cols-2 gap-3 text-sm text-muted-foreground"><span>créditos usados <strong className="block text-foreground">{possibleVideos * videoDuration}</strong></span><span>restantes <strong className="block text-foreground">{remaining}</strong></span></div><p className="mt-5 font-mono text-xs text-muted-foreground">tempo total: {Math.floor((possibleVideos * videoDuration) / 60)}m {(possibleVideos * videoDuration) % 60}s</p></div>
        </div>
      </section>

      <section className="border-y border-border bg-card/30 px-5 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl"><SectionLabel>06 / diferencial_</SectionLabel><h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">não é só gerar <span className="text-primary">vídeo.</span></h2><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[["identidade", "Conteúdo adaptado à estética da sua marca."], ["criatividade", "Ideias, roteiros e conceitos para diferentes nichos."], ["produção", "Vídeos e artes prontos para publicar."], ["consistência", "Mais conteúdo para manter seu perfil ativo."]].map(([title, text], index) => <div key={title} className="rounded-3xl border border-border bg-background p-6"><span className="font-mono text-primary">0{index + 1}</span><h3 className="mt-12 text-xl font-semibold">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{text}</p></div>)}</div></div>
      </section>

      <section id="dúvidas" className="mx-auto max-w-4xl px-5 py-20 lg:px-8"><SectionLabel>07 / dúvidas_</SectionLabel><h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">perguntas <span className="text-primary">frequentes.</span></h2><Accordion type="single" collapsible className="mt-8">{faqs.map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`}><AccordionTrigger className="text-left">{question}</AccordionTrigger><AccordionContent className="text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></section>

      <section className="bg-primary px-5 py-20 text-primary-foreground lg:px-8"><div className="mx-auto max-w-7xl"><h2 className="max-w-3xl text-5xl font-black tracking-tight sm:text-7xl">vamos colocar sua marca em <span className="text-background">movimento?</span></h2><p className="mt-5 text-lg text-primary-foreground/75">Escolha seu pacote, envie sua ideia e comece a criar.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button variant="secondary" onClick={() => setSelectedPlan(plans[1])}>montar meu pacote</Button><WhatsAppButton variant="outline">falar no WhatsApp</WhatsAppButton></div></div></section>

      <footer className="border-t border-border bg-card px-5 py-16 text-foreground lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row"><div><p className="font-mono text-xl font-bold">Cello<span className="text-primary">_</span> OG Design</p><p className="mt-3 text-sm text-muted-foreground">criação de artes e vídeos · automação de conteúdo.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground"><a href="#planos">planos</a><a href="#exemplos">exemplos</a><a href="#automação">automação</a><a href="#dúvidas">dúvidas</a><a href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp</a></div></div><p className="mx-auto mt-10 max-w-7xl border-t border-border pt-5 font-mono text-[10px] text-muted-foreground">Imagens: Pexels · Vitaly Gariev, Amar Preciado, jaka setiawan, Eva Bronzini, Jakub Zerdzicki, Kevin Williams, Thirdman e Startup Stock Photos.</p></footer>

      <Dialog open={Boolean(selectedPlan)} onOpenChange={(open) => !open && setSelectedPlan(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>montar meu pacote_</DialogTitle><DialogDescription>Personalize seu pedido antes de falar com a Cellk.</DialogDescription></DialogHeader>
          {selectedPlan && <div className="space-y-5 py-3"><div className="rounded-2xl bg-muted/50 p-4"><p className="font-mono text-xs text-primary">{selectedPlan.name}</p><p className="mt-2 text-2xl font-bold">{selectedPlan.credits} créditos · {selectedPlan.price}</p><p className="text-sm text-muted-foreground">aproximadamente {selectedPlan.time} de produção</p></div><div><label className="mb-2 block text-sm font-medium">duração dos vídeos</label><Select value={duration} onValueChange={setDuration}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="20">vídeos de 20 segundos</SelectItem><SelectItem value="30">vídeos de 30 segundos</SelectItem><SelectItem value="60">vídeos de 60 segundos</SelectItem></SelectContent></Select></div><button onClick={() => setAutomation(!automation)} className={`flex w-full items-center justify-between rounded-xl border p-4 text-left ${automation ? "border-primary bg-primary/10" : "border-border"}`}><span><strong className="block text-sm">adicionar automação</strong><small className="text-muted-foreground">12 artes por 30 dias · + {selectedPlan.automation}</small></span><span className="text-primary">{automation ? "incluída" : "adicionar"}</span></button><div className="border-t border-border pt-4 text-sm text-muted-foreground">Resumo: {selectedPlan.name} · {selectedPlan.credits} créditos · vídeos de {duration}s{automation ? " · automação por 30 dias" : ""}</div></div>}
          <DialogFooter><Button onClick={copySummary}><Copy className="mr-2 size-4" /> copiar resumo para o WhatsApp</Button></DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={Boolean(activeExample)} onOpenChange={(open) => !open && setActiveExample(null)}>
        <DialogContent className="max-w-2xl p-3"><DialogHeader className="sr-only"><DialogTitle>{activeExample?.title}</DialogTitle></DialogHeader>{activeExample && <div className="relative overflow-hidden rounded-2xl"><img src={activeExample.image} alt={activeExample.title} className="max-h-[75vh] w-full object-cover" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/90 p-6 pt-20 text-background"><p className="font-mono text-xs uppercase text-primary">{activeExample.category} · {activeExample.duration}</p><h3 className="mt-2 text-2xl font-bold">{activeExample.title}</h3></div></div>}</DialogContent>
      </Dialog>
    </main>
  );
}
