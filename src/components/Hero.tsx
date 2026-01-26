import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-business.jpg";

const Hero = () => {
  return (
    <section className="hero-section min-h-[600px] pt-20 relative overflow-hidden bg-[#0B1120] flex items-center">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in relative z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-white">
              A Gestão que <span className="text-[#84cc16]">Humaniza</span>
              <br />
              e <span className="text-[#84cc16]">Protege</span> seu Negócio
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl">
              Assistência funeral B2B focada em suporte operacional ativo e cuidado psicológico.
              Zero burocracia para o RH, amparo total para a equipe.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#84cc16] text-[#0B1120] hover:bg-[#a3e635] rounded-full px-8 py-6 text-base font-bold group transition-all duration-300 shadow-[0_0_20px_rgba(132,204,22,0.3)] hover:shadow-[0_0_30px_rgba(132,204,22,0.5)]"
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
                className="w-full h-auto rounded-lg shadow-2xl border-4 border-[#84cc16]/20"
              />
            </div>
            {/* Background decorations */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#84cc16]/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#0B1120] rounded-full blur-2xl -z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
