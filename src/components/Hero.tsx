import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-business.jpg";

const Hero = () => {
  return (
    <section className="hero-section min-h-[600px] pt-16 relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              A Gestão que <span className="highlight-text">Humaniza</span>
              <br />
              e <span className="highlight-text">Protege</span> seu Negócio
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl">
              Assistência funeral B2B focada em suporte operacional ativo e cuidado psicológico. 
              Zero burocracia para o RH, amparo total para a equipe.
            </p>
            <Button 
              size="lg" 
              className="btn-teal rounded-full px-8 py-6 text-base font-semibold group"
            >
              Talk to a Specialist
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="relative">
              <img
                src={heroImage}
                alt="Profissional de negócios"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-lg -z-10" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-secondary/10 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent -z-10" />
    </section>
  );
};

export default Hero;
