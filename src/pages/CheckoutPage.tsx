import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  FileText,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { paymentLinks } from "@/config/paymentLinks";

const plans = [
  {
    id: "starter",
    name: "Starter",
    credits: "150",
    price: 79.9,
    duration: "Até 1 min de vídeo",
  },
  {
    id: "pro",
    name: "Pro",
    credits: "300",
    price: 129.9,
    duration: "Até 2 min de vídeo",
  },
  {
    id: "scale",
    name: "Scale",
    credits: "500",
    price: 189.9,
    duration: "Até 3 min e 20 s",
  },
  {
    id: "studio",
    name: "Studio",
    credits: "1.000",
    price: 349.9,
    duration: "Até 6 min e 40 s",
  },
  {
    id: "agency",
    name: "Agency",
    credits: "2.000",
    price: 649.9,
    duration: "Até 13 min e 20 s",
  },
] as const;

const automationOptions = [
  {
    id: "none",
    label: "Sem automação",
    description: "Você recebe o conteúdo pronto para publicar.",
    price: 0,
  },
  {
    id: "starter",
    label: "Starter",
    description: "Publicações essenciais para manter o perfil ativo.",
    price: 100,
  },
  {
    id: "pro",
    label: "Pro",
    description: "Mais frequência e consistência para sua marca.",
    price: 89.9,
  },
  {
    id: "scale",
    label: "Scale",
    description: "Calendário completo para crescer com regularidade.",
    price: 69.9,
  },
  {
    id: "studio",
    label: "Studio",
    description: "Operação avançada para uma presença constante.",
    price: 59.9,
  },
  {
    id: "agency",
    label: "Agency",
    description: "Estrutura completa para marcas em expansão.",
    price: 49.9,
  },
] as const;

const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

function Stepper() {
  return (
    <div
      className="flex flex-wrap items-center gap-2"
      aria-label="Etapas do checkout"
    >
      <div className="flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
        <span className="flex size-6 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
          1
        </span>
        <span>Escolha o plano</span>
      </div>

      <ChevronRight className="size-4 text-primary/70" aria-hidden="true" />

      <div className="flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        <span className="flex size-6 items-center justify-center rounded-full border border-border bg-muted font-bold">
          2
        </span>
        <span>Automação</span>
      </div>

      <ChevronRight
        className="size-4 text-muted-foreground/70"
        aria-hidden="true"
      />

      <div className="flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        <span className="flex size-6 items-center justify-center rounded-full border border-border bg-muted font-bold">
          3
        </span>
        <span>Finalizar</span>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  const queryPlan = new URLSearchParams(window.location.search).get("plan");
  const initialPlan =
    plans.find((plan) => plan.id === queryPlan?.toLowerCase()) ?? plans[0];

  const [selectedPlanId, setSelectedPlanId] = useState(initialPlan.id);
  const [selectedAutomation, setSelectedAutomation] =
    useState<(typeof automationOptions)[number]["id"]>("none");

  const selectedPlan =
    plans.find((plan) => plan.id === selectedPlanId) ?? plans[0];

  const availableAutomationOptions = automationOptions.filter(
    (option) => option.id === "none" || option.id === selectedPlan.id,
  );

  const automation =
    automationOptions.find((option) => option.id === selectedAutomation) ??
    automationOptions[0];

  const monthlyTotal = useMemo(
    () => selectedPlan.price + automation.price,
    [automation.price, selectedPlan.price],
  );

  const paymentKey = `${selectedPlan.id}${
    selectedAutomation === "none" ? "" : "-automacao"
  }` as keyof typeof paymentLinks.monthly;

  const paymentUrl =
    paymentLinks.monthly[paymentKey] ?? "https://wa.link/3haobf";

  return (
    <main className="min-h-screen bg-black px-4 py-12 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">
        <a
          href="/#planos"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Voltar aos planos
        </a>

        <header className="mt-10 border-b border-border pb-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            checkout_
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Seu pedido
          </h1>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">
            Revise seu plano, escolha a automação e continue para o pagamento.
          </p>
          <div className="mt-6">
            <Stepper />
          </div>
        </header>

        <div className="grid gap-6 pb-12 pt-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.75fr)]">
          <section className="space-y-6">
            <div className="rounded-2xl border border-primary/60 bg-card p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-sm uppercase tracking-widest text-primary">
                    {selectedPlan.name}
                  </p>
                  <p className="mt-2 text-2xl font-bold">
                    {selectedPlan.credits} créditos
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {selectedPlan.duration}
                  </p>
                  <p className="mt-4 text-2xl font-black">
                    {formatCurrency(selectedPlan.price)}
                    <span className="ml-2 text-sm font-normal text-muted-foreground">
                      /mês
                    </span>
                  </p>
                </div>

                <a
                  href="/#planos"
                  className="shrink-0 text-sm text-primary underline underline-offset-4"
                >
                  trocar plano
                </a>
              </div>
            </div>

            <section className="rounded-2xl border border-border bg-card p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-bold text-primary-foreground">
                  2
                </span>
                <div>
                  <h2 className="text-xl font-bold">
                    Quer automatizar suas postagens?
                  </h2>
                  <p className="mt-2 text-sm text-zinc-400">
                    Publicamos por você no Instagram e no TikTok, nos horários
                    programados.
                  </p>
                </div>
              </div>

              <RadioGroup
                value={selectedAutomation}
                onValueChange={(value) =>
                  setSelectedAutomation(
                    value as (typeof automationOptions)[number]["id"],
                  )
                }
                className="mt-6 grid gap-3 sm:grid-cols-2"
              >
                {availableAutomationOptions.map((option) => {
                  const selected = selectedAutomation === option.id;

                  return (
                    <label
                      key={option.id}
                      className={`relative flex cursor-pointer flex-col rounded-xl border-2 p-4 transition-colors ${
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
                      <span className="pl-7 text-base font-bold">
                        {option.label}
                      </span>
                      <span className="mt-3 text-sm leading-relaxed text-zinc-400">
                        {option.description}
                      </span>
                      <span className="mt-4 text-sm font-semibold text-primary">
                        {option.id === "none"
                          ? "R$ 0,00"
                          : `+ ${formatCurrency(option.price)} /mês`}
                      </span>
                    </label>
                  );
                })}
              </RadioGroup>
            </section>
          </section>

          <aside className="h-fit rounded-2xl border border-primary/40 bg-[#120a07] p-5 pb-12 sm:p-6 sm:pb-12 lg:sticky lg:top-8">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-primary">
              Resumo do pedido
            </p>

            <div className="mt-7 space-y-5 text-sm">
              <div className="flex items-start justify-between gap-4">
                <span>Créditos {selectedPlan.name}</span>
                <strong className="shrink-0">
                  {formatCurrency(selectedPlan.price)}
                </strong>
              </div>

              {selectedAutomation !== "none" && (
                <div className="flex items-start justify-between gap-4">
                  <span>Automação {automation.label}</span>
                  <strong className="shrink-0">
                    {formatCurrency(automation.price)}
                  </strong>
                </div>
              )}

              <div className="border-t border-primary/30 pt-5">
                <div className="flex items-end justify-between gap-4">
                  <span className="font-bold">Total por mês</span>
                  <strong className="text-2xl font-black text-primary">
                    {formatCurrency(monthlyTotal)}
                  </strong>
                </div>
              </div>

              <div className="flex items-start gap-2 rounded-xl border border-primary/25 bg-primary/5 px-3 py-3 text-xs leading-relaxed text-zinc-400">
                <FileText className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  Depois do pagamento você preenche um briefing rápido e recebe
                  o primeiro vídeo em até 6 horas de atendimento após o briefing
                  completo.
                </span>
              </div>

              <p className="rounded-xl border border-primary/25 bg-primary/5 px-3 py-3 text-xs leading-relaxed text-muted-foreground">
                Você está contratando créditos de produção. Os exemplos de quantidade não incluem
                alterações adicionais. Qualquer consumo por alteração será informado para sua
                aprovação.
              </p>

              <Button
                asChild
                className="h-14 w-full rounded-xl text-lg font-black shadow-[0_0_28px_color-mix(in_srgb,var(--primary)_35%,transparent)]"
              >
                <a href={paymentUrl} target="_blank" rel="noreferrer">
                  Assinar agora
                  <ArrowRight className="ml-2 size-5" />
                </a>
              </Button>

              <p className="text-center text-xs text-zinc-400">
                Pagamento seguro pelo Asaas · Pix, boleto ou cartão
              </p>

              <p className="text-center text-xs text-zinc-400">
                Ao assinar, você concorda com{" "}
                <a
                  href="/termos"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  os Termos
                </a>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}