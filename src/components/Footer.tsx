import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-white tracking-tight">ARCE</span>
            <span className="text-sm text-gray-400 font-medium tracking-widest mt-1">EMPRESAS</span>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <a
              href="tel:08000000000"
              className="inline-flex items-center gap-3 text-xl font-bold text-white hover:text-[#84cc16] transition-colors"
            >
              <Phone className="w-5 h-5 text-[#84cc16]" />
              0800 000 0000
            </a>
          </div>

          {/* Links */}
          <div className="flex items-center justify-center gap-8 mb-8 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-[#84cc16] pb-0.5"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-[#84cc16] pb-0.5"
            >
              Termos de Uso
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-600">
            © 2024 Arce Empresas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
