import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6">
            <span className="text-3xl font-bold">ARCE</span>
            <p className="text-sm text-primary-foreground/60 mt-1">EMPRESAS</p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6">
            <a
              href="tel:0000000000"
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4" />
              00 0000 0000
            </a>
            <a
              href="mailto:arceempresarial@.br"
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              <Mail className="w-4 h-4" />
              arceempresarial@.br
            </a>
          </div>

          {/* Links */}
          <div className="flex items-center justify-center gap-6 mb-8 text-sm">
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-secondary transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-secondary transition-colors"
            >
              Termos de Uso e Compliance
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-primary-foreground/40">
            © 2024 Arce Empresas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
