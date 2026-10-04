import { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { paymentLinks } from "@/config/paymentLinks";
import logoCelloOg from "@/assets/uploads/5308.png";

const whatsappUrl = "https://wa.link/3haobf";
const briefingWhatsappUrl = "https://wa.link/3haobf";

const serviceOffers = [
  {
    title: "Consultoria estratégica",
    price: "R$ 49,90",
    description:
      "Conversa de alinhamento, plano de conteúdo para 30 dias, linha editorial e próximos passos por escrito.",
    button: "Adicionar consultoria",
    key: "consultoria" as const,
    message: "consultoria estratégica",
  },
  {
    title: "Diagnóstico completo",
    price: "R$ 79,90",
    description:
      "Análise do seu perfil, o que funciona e o que trava o seu alcance, comparação com concorrentes e relatório com melhorias.",
    button: "Adicionar diagnóstico",
    key: "diagnostico" as const,
    message: "diagnóstico completo",
  },
  {
    title: "Consultoria + Diagnóstico",
    price: "R$ 129,80",
    description:
      "Alinhamento estratégico e diagnóstico completo para acelerar o resultado da sua marca.",
    button: "Adicionar os dois",
    key: "consultoria-diagnostico" as const,
    message: "consultoria + diagnóstico",
    badge: "COMPLETO",
  },
];

export default function ThankYouPage() {
  useEffect(() => {
    document.title = "Pagamento recebido! | Cello OG Design";

    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-20 text-foreground">
      <section className="w-full max-w-7xl rounded-[2rem] border border-primary/50 bg-card p-5 text-center shadow-[0_0_50px_color-mix(in_srgb,var(--primary)_15%,transparent)] sm:p-8 lg:grid lg:grid-cols-2 lg:gap-10 lg:p-10">
        <div className="min-w-0">
          <a href="/" aria-label="Cello OG Design" className="mx-auto block w-fit">
          <img
            src={logoCelloOg}
            alt="Cello OG Design"
            className="h-11 w-auto object-contain"
          />
        </a>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.22em] text-primary sm:mt-6">
          Cello OG Design
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:mt-5 sm:text-6xl">
          Pagamento recebido!
        </h1>

        <div className="relative mt-6 space-y-2 text-left sm:mt-8 sm:space-y-3">
          <div
            aria-hidden="true"
            className="absolute bottom-5 left-[14px] top-5 w-px bg-border"
          />

          {[
            "Preencha o briefing (leva uns 5 minutos)",
            "Produção: criamos o seu personagem e o roteiro do vídeo",
            "Renderização: o vídeo é gerado",
            "Otimização: ajustamos o vídeo para a entrega e deixamos pronto para postagem",
            "Entrega: você recebe o primeiro vídeo em até 6 horas de atendimento depois do briefing completo (atendimento das 8h às 17h)",
          ].map((step, index) => {
            const isCurrentStep = index === 0;

            return (
              <div
                key={step}
                className={`relative z-[1] flex items-start gap-3 rounded-2xl border p-3 ${
                  isCurrentStep
                    ? "border-primary/60 bg-primary/10"
                    : "border-border bg-background"
                }`}
              >
                <span
                  className={`flex size-7 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold ${
                    isCurrentStep
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {index + 1}
                </span>
                <p
                  className={`pt-0.5 text-sm font-semibold leading-relaxed sm:pt-1 sm:text-base ${
                    isCurrentStep ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {step}
                </p>
              </div>
            );
          })}
        </div>

        <Button
          id="briefing-start"
          asChild
          className="mt-8 h-[52px] w-full rounded-full px-7 text-base font-bold"
        >
          <a
            href={paymentLinks.briefing || briefingWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Preencher meu briefing
          </a>
        </Button>

        <div className="mt-4 space-y-1 text-sm font-medium text-primary">
          <p>A produção só começa depois que o briefing completo chegar.</p>
          <p>Alterações depois do envio consomem seus créditos.</p>
        </div>

        <Button
          id="whatsapp-start"
          asChild
          variant="outline"
          className="mt-5 h-[52px] w-full rounded-full px-7 text-base font-bold"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 size-5" />
            Falar no WhatsApp
          </a>
        </Button>

        </div>

        <section className="mt-10 border-t border-primary/30 pt-8 text-left lg:mt-0 lg:border-l lg:border-t-0 lg:border-primary/30 lg:pl-10 lg:pt-0">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
            Quer acelerar o seu resultado?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Serviços opcionais, pagamento único.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {serviceOffers.map((service) => {
              const paymentUrl = paymentLinks.oneTime[service.key];
              const fallbackUrl = whatsappUrl;

              return (
                <article
                  key={service.key}
                  className="relative rounded-2xl border border-primary/50 bg-background p-5"
                >
                  {service.badge && (
                    <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-primary-foreground">
                      {service.badge}
                    </span>
                  )}

                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                    pagamento único
                  </p>
                  <h3 className="mt-3 pr-20 text-xl font-bold">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-2xl font-black text-primary">
                    {service.price}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <Button
                    asChild
                    className="mt-5 h-12 w-full rounded-full font-bold"
                  >
                    <a
                      href={paymentUrl || fallbackUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {service.button}
                    </a>
                  </Button>
                </article>
              );
            })}
          </div>

          <a
            href="#whatsapp-start"
            className="mt-7 block text-center text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-primary"
          >
            Agora não, só quero começar
          </a>
        </section>
      </section>
    </main>
  );
}