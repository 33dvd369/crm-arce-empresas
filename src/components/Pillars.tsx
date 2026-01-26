import { FileText, Heart, PiggyBank } from "lucide-react";

const pillars = [
  {
    icon: FileText,
    title: "BUROCRÁTICO",
    subtitle: "Gestão Completa e Assistência Ativa",
    description:
      "Eliminação do sistema de reembolso. Infraestrutura própria.",
  },
  {
    icon: Heart,
    title: "PSICOLÓGICO",
    subtitle: "Saúde Mental e Pós-Venda",
    description:
      "Parceria exclusiva Consultoria e acolhimento especializado em psicologia do luto para o colaborador e familiares. Foco em responsabilidade social. Amenizamos o impacto na equipe e na produtividade quando cuidamos da parte psicologica.",
  },
  {
    icon: PiggyBank,
    title: "FINANCEIRO",
    subtitle: "Previsibilidade e Proteção de Patrimônio",
    description:
      "Baixo custo por vida com alto valor percebido. Proteção contra gastos imprevistos e elevados. Solução de retenção de talentos para o RH.",
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
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#84cc16] group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gray-50 mb-4 text-[#84cc16] group-hover:bg-[#84cc16]/10 transition-colors">
                <pillar.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1 uppercase">
                {pillar.title}
              </h3>
              <p className="text-sm font-bold text-foreground mb-3">
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
