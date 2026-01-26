import { Check, X } from "lucide-react";

const arceFeatures = [
  {
    title: "Gestão de Crise Zero para o RH:",
    description:
      "Com uma ligação, a Arce assume 100% da operação. O RH não se envolve em burocracia.",
  },
  {
    title: "Custo Zero no Momento da Perda:",
    description:
      "Não existe desembolso. A assistência é direta e integral, protegendo o caixa da família e da empresa.",
  },
  {
    title: "Padrão de Excelência Garantido:",
    description:
      "Mais de 20 anos de mercado, com atendimento nacional.",
  },
];

const traditionalFeatures = [
  {
    title: "Burocracia para o RH:",
    description:
      "O RH precisa orientar a família, cobrar documentos e lidar com o processo de sinistro da seguradora.",
  },
  {
    title: "Desembolso Imediato:",
    description:
      "A família ou a empresa precisam ter o dinheiro em mãos (R$ 8 mil a R$ 15 mil) para pagar o funeral e só depois pedir o reembolso (que pode levar 30 dias ou mais).",
  },
  {
    title: "Incerteza de Qualidade:",
    description:
      "A seguradora apenas paga; ela não garante se o serviço será bem feito ou em qual local será realizado.",
  },
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Diferencial Estratégico
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Por que sua empresa precisa de Assistência Ativa e não apenas de um Seguro?
            <br />
            Enquanto o Seguro de Vida foca na indenização financeira tardia, a Assistência Funeral Arce foca na solução imediata.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* ARCE Card */}
          <div className="comparison-card bg-[#0B1120] text-white border-2 border-[#84cc16] flex flex-col relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 rounded-3xl">
            <div className="mb-8 text-center pt-4">
              <h3 className="text-[#84cc16] text-2xl font-bold uppercase tracking-wide mb-1">
                ASSISTÊNCIA ARCE
              </h3>
              <p className="text-white text-lg font-medium">
                Modelo Ativo e Operacional
              </p>
            </div>

            <div className="space-y-6 flex-grow px-2">
              {arceFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="mt-1 bg-[#84cc16] rounded-full p-0.5 shrink-0">
                    <Check className="w-4 h-4 text-[#0B1120] stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-bold text-white block mb-1 text-[15px]">{feature.title}</span>
                    <span className="text-gray-300 text-sm leading-relaxed block">
                      {feature.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4">
              <div className="bg-white rounded-2xl py-4 px-6 text-center shadow-lg mx-4 mb-4">
                <p className="text-[#0F172A] font-bold text-sm md:text-base">
                  Resultado: Amparo real e valorização do colaborador.
                </p>
              </div>
            </div>
          </div>

          {/* Traditional Card */}
          <div className="comparison-card bg-[#64748B] text-white border border-gray-400 flex flex-col relative overflow-hidden rounded-3xl">
            <div className="mb-8 text-center pt-4">
              <h3 className="text-white text-2xl font-bold uppercase tracking-wide mb-1">
                SEGURO TRADICIONAL
              </h3>
              <p className="text-gray-100 text-lg font-medium">
                Auxílio / Reembolso Financeiro
              </p>
            </div>

            <div className="space-y-6 flex-grow px-2">
              {traditionalFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                  <div>
                    <span className="font-bold text-white block mb-1 text-[15px]">{feature.title}</span>
                    <span className="text-gray-100 text-sm leading-relaxed block">
                      {feature.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4">
              <div className="bg-gray-300 rounded-2xl py-4 px-6 text-center shadow-lg mx-4 mb-4">
                <p className="text-[#0F172A] font-bold text-sm md:text-base">
                  Resultado: Estresse administrativo e financeiro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
