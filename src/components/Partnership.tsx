import { Handshake, Shield, Users, Star, Check } from "lucide-react";

const benefits = [
  { icon: Handshake, label: "PARCERIA" },
  { icon: Shield, label: "PROTEÇÃO" },
  { icon: Users, label: "ASSOCIAÇÃO" },
  { icon: Star, label: "VALOR" },
];

const features = [
  "Imagem Institucional",
  "Fidelidade de Associado",
  "Categorias de Risco",
  "Alto Padrão",
];

const Partnership = () => {
  return (
    <section id="sindicatos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-xs font-semibold tracking-wider text-secondary uppercase">
              PREMIUM PARTNERSHIP
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
              Parceria com Sindicatos
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Fortalecimento de imagem institucional perante a categoria e aumento de 
              fidelidade de associados. Assistência de alto padrão sem burocracia, 
              ideal para categorias de risco (ex: Segurança Privada).
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="partnership-card">
                <benefit.icon className="w-10 h-10 text-secondary" />
                <span className="font-semibold text-sm">{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
