import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman-beige.png";

const Hero = () => {
  return (
    <section className="hero-section min-h-[450px] pt-16 relative overflow-hidden bg-[#0A1628] flex items-center">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0D1F35] to-[#0A1628] opacity-50 z-0"></div>

      <div className="container mx-auto px-4 py-12 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="animate-fade-in relative z-10 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white tracking-tight">
              A Gestão que <span className="text-[#84cc16]">Humaniza</span> e <span className="text-[#84cc16]">Protege</span> seu Negócio
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl leading-relaxed">
              Assistência funeral B2B focada em suporte operacional ativo e cuidado psicológico.
              Zero burocracia para o RH, amparo total para a equipe.
            </p>
            <Button
              size="lg"
              className="bg-[#84cc16] text-[#0B1120] hover:bg-[#a3e635] rounded-full px-8 py-6 text-base font-bold group transition-all duration-300 shadow-[0_0_20px_rgba(132,204,22,0.3)] hover:shadow-[0_0_30px_rgba(132,204,22,0.4)]"
            >
              Falar com Especialista
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Profissional de negócios"
                className="w-full h-auto rounded-xl shadow-2xl border border-white/10"
              />
              {/* Image Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Background decorations */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#84cc16]/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#0B1120]/50 rounded-full blur-[80px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
