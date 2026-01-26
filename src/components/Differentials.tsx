import { Check, X } from "lucide-react";

const arceFeatures = [
  {
    title: "Gestão de D+0s Zero para o RH:",
    description:
      "Com uma ligação, a Arce assume TUDO de operação. O RH não se envolve em burocracia, documentos ou cobranças.",
  },
  {
    title: "Custo Zero no Momento de Perda:",
    description:
      "Não existe desembolso. A assistência é digital e integral, protegendo o caixa da família e agilizando o atendimento de urgência.",
  },
  {
    title: "Padrão de Excelência Garantido:",
    description:
      "Mais de 20 anos de mercado, infraestrutura própria e atendimento nacional com qualidade controlada.",
  },
];

const traditionalFeatures = [
  {
    title: "Burocracia para o RH:",
    description:
      "O RH precisa acionar a família, acertar documentos e lidar com todo o processo moroso de sinistro de seguradora.",
  },
  {
    title: "Desembolso Imediato:",
    description:
      "Família ou empresa precisam ter R$ 5e 15k em mãos para pagar tudo e aguardar 30+ dias pelo reembolso.",
  },
  {
    title: "Incerteza de Qualidade:",
    description:
      "A seguradora apenas paga; não garante a qualidade do serviço, cerimônias ou onde será realizada.",
  },
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Diferencial Estratégico
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Por que sua empresa precisa de Assistência Ativa e não apenas de um Seguro?
            <br />
            Enquanto o Seguro de Vida foca na indenização financeira tardia, a Assistência Funeral Arce foca na solução imediata.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* ARCE Card */}
          <div className="comparison-card comparison-arce">
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-wider text-secondary uppercase">
                ASSISTÊNCIA ARCE
              </span>
              <h3 className="text-xl font-bold mt-1">Modelo Ativo e Operacional</h3>
            </div>

            <div className="space-y-4">
              {arceFeatures.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-sm">{feature.title}</span>
                    <span className="text-sm text-primary-foreground/80 ml-1">
                      {feature.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-secondary/30">
              <p className="text-sm font-medium text-secondary">
                Resultado: Amparo real e valorização do colaborador.
              </p>
            </div>
          </div>

          {/* Traditional Card */}
          <div className="comparison-card comparison-traditional">
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                SEGURO TRADICIONAL
              </span>
              <h3 className="text-xl font-bold mt-1 text-foreground">
                Auxílio / Reembolso Financeiro
              </h3>
            </div>

            <div className="space-y-4">
              {traditionalFeatures.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-sm text-foreground">
                      {feature.title}
                    </span>
                    <span className="text-sm text-muted-foreground ml-1">
                      {feature.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-sm font-medium text-destructive">
                Resultado: Estresse administrativo e financeiro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
