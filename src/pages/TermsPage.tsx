import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Camera,
  Check,
  Clock,
  FileCheck,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const terms = [
  {
    icon: FileCheck,
    title: "Objeto do Serviço",
    text: "A Cello OG Design presta serviços personalizados de criação de personagens, imagens e vídeos produzidos com ferramentas de inteligência artificial, sob encomenda e de acordo com as informações fornecidas pelo cliente.",
    points: [
      "O resultado é desenvolvido a partir do briefing, referências e materiais enviados.",
      "Cada produção é exclusiva para o projeto contratado e respeita o escopo do plano escolhido.",
    ],
  },
  {
    icon: Camera,
    title: "Direitos de Imagem e Material Enviado",
    text: "Ao enviar fotografias, rostos, logotipos, marcas ou outros arquivos, o cliente declara que possui autorização para utilizá-los e que a sua utilização na produção não viola direitos de terceiros.",
    points: [
      "O cliente é responsável pela autorização das pessoas identificáveis nas imagens.",
      "Os materiais são utilizados para alimentar e orientar os modelos de IA na criação do conteúdo contratado.",
    ],
  },
  {
    icon: Clock,
    title: "Início da Produção e Prazos",
    text: "A produção começa somente depois do pagamento e da entrega integral do briefing através do formulário Tally. O prazo de entrega passa a contar em dias úteis a partir da confirmação de que todas as informações e referências necessárias foram recebidas.",
    points: [
      "Briefings incompletos ou com materiais pendentes podem suspender o início da produção.",
      "Pedidos enviados fora do horário de atendimento serão considerados no próximo período útil.",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Política de Reembolso e Cancelamento",
    text: "Este é um serviço digital personalizado, produzido sob demanda. Por isso, não há estorno após o início da renderização, da geração do modelo ou da produção do conteúdo contratado.",
    points: [
      "Pedidos de cancelamento anteriores ao início da produção serão analisados conforme o estágio do serviço.",
      "Depois de iniciada a geração personalizada, os custos técnicos e criativos já incorridos não são reversíveis.",
    ],
  },
  {
    icon: Sparkles,
    title: "Aprovações e Revisões",
    text: "O cliente participa do alinhamento criativo através do briefing e das aprovações previstas no plano contratado. Pequenos ajustes de roteiro, texto, enquadramento ou acabamento podem ser solicitados dentro das rodadas incluídas.",
    points: [
      "Alterações que mudem substancialmente o briefing ou o conceito original podem consumir créditos adicionais.",
      "Novas rodadas de revisão ou mudanças de direção serão avaliadas antes da execução.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-6 py-10 text-foreground sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--border) / 0.18) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.18) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl">
        <Button
          asChild
          variant="ghost"
          className="group -ml-3 gap-2 text-muted-foreground hover:bg-primary/10 hover:text-primary"
        >
          <Link to="/">
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            <span>Voltar para o site principal</span>
          </Link>
        </Button>

        <header className="mt-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="size-1.5 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
            Termos e Condições Legais
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
            Termos de Serviço{" "}
            <span className="text-primary [text-shadow:0_0_28px_hsl(var(--primary)/0.3)]">
              e Política de Entrega
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Leia as condições que orientam a contratação, a produção e a
            entrega dos conteúdos personalizados da Cello OG Design.
          </p>

          <div className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Atualizado em fevereiro de 2025
          </div>
        </header>

        <div className="mt-14 grid gap-5">
          {terms.map((term, index) => {
            const Icon = term.icon;

            return (
              <div
                key={term.title}
                className="rounded-2xl bg-gradient-to-br from-primary/30 via-border to-border p-px"
              >
                <Card className="rounded-2xl border-0 bg-card/95 shadow-xl shadow-black/20 backdrop-blur-sm">
                  <CardHeader className="flex-row items-start gap-4 space-y-0">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>

                    <div className="space-y-2">
                      <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        0{index + 1}
                      </p>
                      <CardTitle className="text-xl sm:text-2xl">
                        {term.title}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-5">
                    <p className="text-base leading-8 text-muted-foreground sm:text-lg">
                      {term.text}
                    </p>

                    <ul className="grid gap-3 border-t border-border pt-5 sm:grid-cols-2">
                      {term.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                        >
                          <Check className="mt-1 size-4 shrink-0 text-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <footer className="mt-14 border-t border-border pt-6 text-sm leading-7 text-muted-foreground">
          <p>
            Em caso de dúvidas sobre estes termos ou sobre o seu pedido, entre
            em contacto com a Cello OG Design antes de iniciar a contratação.
          </p>
        </footer>
      </div>
    </main>
  );
}