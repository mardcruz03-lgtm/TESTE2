import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, Bot, Film, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import logoCelloOg from "@/assets/uploads/5308.png";
import "@/components/SiteNavigation.css";

const whatsappUrl = "https://wa.link/3haobf";

const ecosystemHighlights = [
  {
    icon: Bot,
    eyebrow: "01 / atendimento_",
    title: "Automação e Atendimento Inteligente",
    description:
      "Fluxos inteligentes para responder, qualificar e encaminhar oportunidades sem deixar nenhum lead esperando.",
  },
  {
    icon: Film,
    eyebrow: "02 / conteúdo_",
    title: "Linha Editorial de Vídeos IA",
    description:
      "Uma linguagem visual proprietária, com vídeos estratégicos e um personagem exclusivo para a sua marca.",
  },
  {
    icon: TrendingUp,
    eyebrow: "03 / escala_",
    title: "Tráfego e Distribuição Multicanal",
    description:
      "Conteúdo preparado para crescer em diferentes canais e transformar atenção em demanda comercial.",
  },
];

const projectTypes = [
  ["site", "Site ou landing page simples"],
  ["checkout", "Landing page + checkout"],
  ["automation", "Automações e integrações"],
  ["app", "App, sistema ou SaaS"],
  ["larger", "Projetos maiores"],
] as const;

const projects = [
  ["Site ou landing page simples", "R$ 697"],
  ["Landing page + checkout", "R$ 1.200"],
  ["Automações e integrações", "R$ 800"],
  ["App, sistema ou SaaS", "R$ 2.500"],
  ["Projetos maiores", "orçamento personalizado"],
];

const investments = [
  ["1000", "até R$ 1.000"],
  ["3000", "R$ 1.000 a R$ 3.000"],
  ["10000", "R$ 3.000 a R$ 10.000"],
  ["above", "acima de R$ 10.000"],
];

export default function EcosystemPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: "",
    investment: "",
    description: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function update(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  }

  function submit(event: FormEvent) {
    event.preventDefault();

    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Informe seu nome.";
    if (!form.phone.trim()) nextErrors.phone = "Informe seu WhatsApp.";
    if (!form.type) nextErrors.type = "Escolha o tipo de projeto.";
    if (!form.investment) nextErrors.investment = "Escolha uma faixa de investimento.";
    if (!form.description.trim()) nextErrors.description = "Conte brevemente sobre o projeto.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const type = projectTypes.find(([value]) => value === form.type)?.[1];
    const investment = investments.find(([value]) => value === form.investment)?.[1];
    const message = [
      "Olá! Quero solicitar um orçamento de ecossistema digital.",
      `Nome: ${form.name}`,
      `WhatsApp: ${form.phone}`,
      `Tipo de projeto: ${type}`,
      `Faixa de investimento: ${investment}`,
      `Descrição: ${form.description}`,
    ].join("\n");

    window.open(
      `${whatsappUrl}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="site-nav">
        <div className="site-nav-bar">
          <Link to="/" aria-label="Cello OG Design" className="logo-cello-link">
            <span className="logo-cello-frame">
              <img src={logoCelloOg} alt="Cello OG Design" className="logo-cello-image" />
            </span>
          </Link>
          <nav aria-label="principal" className="site-nav-links">
            <a href="/#como-funciona">como funciona</a>
            <a href="/#metodo">método</a>
            <a href="/#exemplos">exemplos</a>
            <a href="/#planos">planos</a>
            <a href="/#duvidas">dúvidas</a>
          </nav>
          <Button asChild variant="outline" className="site-nav-cta">
            <Link to="/#planos">
              <ArrowLeft className="mr-2 size-4" />
              Voltar para os pacotes
            </Link>
          </Button>
        </div>
      </header>

      <section className="relative mx-auto max-w-[1180px] overflow-hidden px-5 pb-20 pt-40 lg:px-8 lg:pb-28">
        <div className="pointer-events-none absolute -left-40 top-20 size-96 rounded-full bg-primary/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 top-0 size-[30rem] rounded-full bg-primary/10 blur-[130px]" />

        <div className="relative max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
            ECOSSISTEMA DIGITAL / HIGH TICKET
          </p>
          <h1 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] [text-shadow:0_0_40px_rgb(255_106_0_/_18%)] sm:text-7xl lg:text-8xl">
            Ecossistema
            <span className="block text-primary">Digital Completo.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Para marcas que precisam de identidade visual, automações avançadas
            e posicionamento total em vídeo — tudo conectado em um sistema
            pensado para crescer.
          </p>
        </div>
      </section>

      <section className="relative border-y border-border bg-card/30 px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
              O SISTEMA POR TRÁS DA MARCA
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-none sm:text-6xl">
              Tudo trabalhando na mesma direção.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {ecosystemHighlights.map(({ icon: Icon, eyebrow, title, description }) => (
              <article
                key={title}
                className="group rounded-3xl border border-border bg-background/80 p-7 shadow-[0_0_40px_rgb(255_106_0_/_5%)] transition duration-300 hover:-translate-y-2 hover:border-primary/70 hover:shadow-[0_18px_50px_rgb(255_106_0_/_14%)]"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-7" />
                </div>
                <p className="mt-8 font-mono text-[10px] tracking-[0.18em] text-primary">
                  {eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-black uppercase leading-tight">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
              DIAGNÓSTICO ESTRATÉGICO
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-none sm:text-6xl">
              A próxima fase da sua marca começa aqui.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Conte o que você está construindo. Vamos entender o momento da
              sua marca e desenhar o sistema mais inteligente para o próximo
              nível.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-[0_0_70px_rgb(255_106_0_/_8%)] backdrop-blur-md sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              briefing_privado
            </p>
            <form onSubmit={submit} noValidate className="mt-8 space-y-5">
              {[
                ["name", "Nome completo", "Como podemos chamar você?"],
                ["phone", "WhatsApp com DDD", "(00) 00000-0000"],
              ].map(([field, label, placeholder]) => (
                <div key={field}>
                  <label htmlFor={field} className="mb-2 block text-sm font-semibold">
                    {label}
                  </label>
                  <Input
                    id={field}
                    value={form[field as keyof typeof form]}
                    onChange={(event) =>
                      update(field as keyof typeof form, event.target.value)
                    }
                    placeholder={placeholder}
                    aria-invalid={Boolean(errors[field])}
                    className="h-12 rounded-2xl border-zinc-700 bg-zinc-950/70"
                  />
                  {errors[field] && (
                    <p className="mt-2 text-sm text-destructive">{errors[field]}</p>
                  )}
                </div>
              ))}

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Tipo de projeto
                </label>
                <Select value={form.type} onValueChange={(value) => update("type", value)}>
                  <SelectTrigger className="h-12 w-full rounded-2xl border-zinc-700 bg-zinc-950/70">
                    <SelectValue placeholder="Selecione uma solução" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.type && (
                  <p className="mt-2 text-sm text-destructive">{errors.type}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Faixa de investimento pretendida
                </label>
                <Select
                  value={form.investment}
                  onValueChange={(value) => update("investment", value)}
                >
                  <SelectTrigger className="h-12 w-full rounded-2xl border-zinc-700 bg-zinc-950/70">
                    <SelectValue placeholder="Selecione uma faixa" />
                  </SelectTrigger>
                  <SelectContent>
                    {investments.map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.investment && (
                  <p className="mt-2 text-sm text-destructive">{errors.investment}</p>
                )}
              </div>

              <div>
                <label htmlFor="description" className="mb-2 block text-sm font-semibold">
                  Descrição breve da marca
                </label>
                <Textarea
                  id="description"
                  value={form.description}
                  onChange={(event) => update("description", event.target.value)}
                  placeholder="Qual é o momento atual e o que você quer construir?"
                  rows={5}
                  aria-invalid={Boolean(errors.description)}
                  className="rounded-2xl border-zinc-700 bg-zinc-950/70"
                />
                {errors.description && (
                  <p className="mt-2 text-sm text-destructive">{errors.description}</p>
                )}
              </div>

              <Button
                type="submit"
                className="h-14 w-full rounded-2xl bg-primary text-base font-black text-primary-foreground shadow-[0_0_30px_rgb(255_106_0_/_28%)] transition hover:scale-[1.01] hover:bg-primary/90"
              >
                Solicitar Diagnóstico Estratégico
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8 lg:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">02 / processo_</p>
        <h2 className="mt-5 text-4xl font-black uppercase sm:text-6xl">Como funciona</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            "Você conta o projeto",
            "Recebe a proposta com escopo, prazo e valor",
            "Aprova e a gente constrói",
          ].map((step, index) => (
            <article key={step} className="rounded-3xl border border-border bg-card p-6">
              <span className="font-mono text-2xl text-primary">0{index + 1}</span>
              <h3 className="mt-12 text-xl font-bold">{step}</h3>
            </article>
          ))}
        </div>
        <p className="mt-8 border-l-2 border-primary pl-4 text-muted-foreground">
          Você só paga depois de aprovar a proposta.
        </p>
      </section>

      <section className="border-y border-border bg-card/40 px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">03 / briefing_</p>
          <h2 className="mt-5 text-4xl font-black uppercase sm:text-6xl">Conte o seu projeto</h2>

          <form onSubmit={submit} noValidate className="mt-10 space-y-5">
            {[
              ["name", "Nome", "Seu nome"],
              ["phone", "WhatsApp", "(00) 00000-0000"],
            ].map(([field, label, placeholder]) => (
              <div key={field}>
                <label htmlFor={field} className="mb-2 block text-sm font-semibold">{label}</label>
                <Input
                  id={field}
                  value={form[field as keyof typeof form]}
                  onChange={(event) => update(field as keyof typeof form, event.target.value)}
                  placeholder={placeholder}
                  aria-invalid={Boolean(errors[field])}
                  aria-describedby={errors[field] ? `${field}-error` : undefined}
                />
                {errors[field] && <p id={`${field}-error`} className="mt-2 text-sm text-destructive">{errors[field]}</p>}
              </div>
            ))}

            <div>
              <label className="mb-2 block text-sm font-semibold">Tipo de projeto</label>
              <Select value={form.type} onValueChange={(value) => update("type", value)}>
                <SelectTrigger className="w-full"><SelectValue placeholder="Selecione uma opção" /></SelectTrigger>
                <SelectContent>{projectTypes.map(([value, label]) => <SelectItem key={value} value={value}>{label}</SelectItem>)}</SelectContent>
              </Select>
              {errors.type && <p className="mt-2 text-sm text-destructive">{errors.type}</p>}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">Faixa de investimento</label>
              <Select value={form.investment} onValueChange={(value) => update("investment", value)}>
                <SelectTrigger className="w-full"><SelectValue placeholder="Selecione uma faixa" /></SelectTrigger>
                <SelectContent>{investments.map(([value, label]) => <SelectItem key={value} value={value}>{label}</SelectItem>)}</SelectContent>
              </Select>
              {errors.investment && <p className="mt-2 text-sm text-destructive">{errors.investment}</p>}
            </div>

            <div>
              <label htmlFor="description" className="mb-2 block text-sm font-semibold">Descrição</label>
              <Textarea
                id="description"
                value={form.description}
                onChange={(event) => update("description", event.target.value)}
                placeholder="O que você quer construir?"
                rows={5}
                aria-invalid={Boolean(errors.description)}
              />
              {errors.description && <p className="mt-2 text-sm text-destructive">{errors.description}</p>}
            </div>

            <Button type="submit" className="h-12 w-full rounded-full text-base font-bold">
              Solicitar orçamento <ArrowRight className="ml-2 size-4" />
            </Button>
          </form>

          <a
            href="/#planos"
            className="mt-5 flex h-10 w-full items-center justify-center rounded-full border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Voltar para os planos
          </a>
        </div>
      </section>

      <footer className="border-t border-border bg-card/90 px-5 py-14 lg:px-8">
        <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-8 md:flex-row">
          <div>
            <p className="font-mono text-xl font-bold">Cello<span className="text-primary">_</span> OG Design</p>
            <p className="mt-3 text-sm text-muted-foreground">criação de artes e vídeos · automação de conteúdo.</p>
          </div>
          <a href="/#planos" className="text-sm text-muted-foreground hover:text-primary">planos</a>
        </div>
        <p className="mx-auto mt-10 max-w-[1180px] border-t border-border pt-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Cello OG Design. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}