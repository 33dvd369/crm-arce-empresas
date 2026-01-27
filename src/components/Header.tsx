import { useState } from "react";
import { Menu, X } from "lucide-react";

import logoArce from "@/assets/logo-arce.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Pilares", href: "#pilares" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Sindicatos", href: "#sindicatos" },
    { label: "Área do Cliente", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#0B1120] tracking-tight relative">
              <span className="text-[#84cc16]">A</span>RCE
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#84cc16] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
            <span className="h-8 w-[1px] bg-gray-300 mx-1"></span>
            <span className="text-sm lg:text-base text-gray-500 font-semibold tracking-[0.2em] uppercase">
              Empresas
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#pilares" className="text-sm font-bold text-[#0B1120] hover:text-[#84cc16] transition-colors">
              Pilares
            </a>
            <a href="#diferenciais" className="text-sm font-bold text-[#0B1120] hover:text-[#84cc16] transition-colors">
              Diferenciais
            </a>
            <a href="#sindicatos" className="text-sm font-bold text-[#0B1120] hover:text-[#84cc16] transition-colors">
              Sindicatos
            </a>
            <a href="#contato" className="text-sm font-bold text-[#0B1120] hover:text-[#84cc16] transition-colors">
              Área do Cliente
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-4 text-base font-bold text-[#0B1120] hover:text-[#84cc16] hover:bg-gray-50 px-4 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
