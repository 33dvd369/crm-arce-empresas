import { Handshake, Shield, Users, Star, Check } from "lucide-react";

const benefits = [
  { icon: Handshake, label: "PARCERIA" },
  { icon: Shield, label: "PROTEÇÃO" },
  { icon: Users, label: "ASSOCIAÇÃO" },
  { icon: Star, label: "PRONTIDÃO" },
];

const features = [
  "Imagem Institucional",
  "Fidelidade de Associado",
  "Alto Padrão",
  "Sem Burocracia",
];

const Partnership = () => {
  return (
    <section id="sindicatos" className="py-24 bg-[#0B1120] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#84cc16]/5 rounded-l-full blur-3xl -z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-block bg-[#84cc16]/10 px-4 py-1.5 rounded-full border border-[#84cc16]/20 mb-6">
              <span className="text-xs font-bold tracking-widest text-[#84cc16] uppercase">
                PREMIUM PARTNERSHIP
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Parceria com Sindicatos
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Fortalecimento da imagem institucional perante a categoria. Aumento da fidelidade do associado. Assistência de alto padrão sem burocracia para categorias de risco (ex: Segurança Privada).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-[#84cc16]/10 p-1.5 rounded-full">
                    <Check className="w-4 h-4 text-[#84cc16]" />
                  </div>
                  <span className="text-sm font-medium text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Icons Grid (Visual Right) */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6 w-full max-w-md mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-[#1a2333] border border-gray-700/50 p-8 rounded-2xl flex flex-col items-center justify-center text-center gap-4 hover:border-[#84cc16]/50 transition-colors duration-300 group"
                >
                  <benefit.icon className="w-10 h-10 text-[#84cc16] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  <span className="font-semibold text-sm text-gray-300 group-hover:text-white">{benefit.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
