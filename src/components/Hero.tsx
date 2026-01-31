import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman-beige.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#0A1628] overflow-hidden">
      {/* Background Texture/Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay"></div>

      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#84cc16]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0A1628] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-8 items-center">

        {/* Text Content - Spans 7 cols on Desktop */}
        <div className="lg:col-span-7 flex flex-col justify-center pt-24 lg:pt-0 pb-12 lg:pb-0 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:pr-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#84cc16] text-sm font-medium mb-2 lg:mb-4 mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-[#84cc16] animate-pulse"></span>
              Solução Corporativa Preferida
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.2] lg:leading-[1.1] tracking-tight text-white text-balance">
              A Gestão que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84cc16] to-[#a3e635]">Humaniza</span> o seu Negócio
            </h1>

            <p className="text-base md:text-xl text-gray-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Assistência funeral B2B que transforma o cuidado em diferencial competitivo. Zero burocracia para o RH, amparo total para a equipe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#84cc16] text-[#0B1120] hover:bg-[#a3e635] rounded-sm h-12 md:h-14 px-8 text-sm md:text-base font-bold shadow-[0_0_20px_rgba(132,204,22,0.2)] hover:shadow-[0_0_30px_rgba(132,204,22,0.4)] transition-all duration-300 w-full sm:w-auto"
              >
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white/20 text-white hover:bg-white/5 hover:text-white rounded-sm h-12 md:h-14 px-8 text-sm md:text-base font-semibold w-full sm:w-auto"
              >
                Conhecer Planos
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Image Content - Spans 5 cols but overlaps/floats */}
        <div className="lg:col-span-12 lg:absolute lg:right-0 lg:h-full lg:w-[45%] flex items-end justify-center lg:justify-end mt-12 lg:mt-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-md lg:max-w-none lg:h-[90%] lg:mr-[-5%] overflow-hidden"
          >
            {/* Image Mask/Cropping for sharp look */}
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent z-20" />
              <div className="absolute inset-0 bg-gradient-to-l from-[#0A1628]/20 via-transparent to-[#0A1628] lg:to-transparent z-20" />

              <img
                src={heroImage}
                alt="Executiva de Negócios"
                className="w-full h-full object-cover object-top lg:object-contain drop-shadow-2xl grayscale-[20%] contrast-[1.1]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
