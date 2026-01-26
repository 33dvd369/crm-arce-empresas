import { FileText, Heart, PiggyBank } from "lucide-react";

const pillars = [
  {
    icon: FileText,
    title: "BUROCRÁTICO",
    subtitle: "Gestão Completa e Assistência Ativa",
    description:
      "Eliminação de cicans de reembolse. Intervenções própris ps assumir 100% da operação, reduzindo a carga burocrática do RH.",
  },
  {
    icon: Heart,
    title: "PSICOLÓGICO",
    subtitle: "Saúde Mental e Pós-Venda",
    description:
      "Consultoria e acalhimento especializado em psicologia de luto para o colaborador e familiares. Foco em responsabilidade social e civi amenizar o impacto na produtividade da equipe.",
  },
  {
    icon: PiggyBank,
    title: "FINANCEIRO",
    subtitle: "Previsibilidade e Proteção de Patrimônio",
    description:
      "Baixo custo por vida com alto valor percebido. Proteção contra gastos imprevistos e elevados, tornando-se uma poderosa solução de retenção de talentos.",
  },
];

const Pillars = () => {
  return (
    <section id="pilares" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
          Nossos Pilares
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="card-pillar group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-box bg-muted mb-4">
                <pillar.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">
                {pillar.title}
              </h3>
              <p className="text-sm font-semibold text-secondary mb-3">
                {pillar.subtitle}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
