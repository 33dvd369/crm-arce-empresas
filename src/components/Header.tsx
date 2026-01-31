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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" aria-label="Arce Empresas Home" className="flex items-center gap-3 group">
            <span className="text-3xl lg:text-4xl font-extrabold text-arce-navy tracking-tight relative">
              <span className="text-arce-lime">A</span>RCE
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-arce-lime scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
            <span className="h-8 w-[1px] bg-gray-300 mx-1"></span>
            <span className="text-sm lg:text-base text-gray-500 font-semibold tracking-[0.2em] uppercase">
              Empresas
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#pilares" className="text-sm font-bold text-[#0B1120] hover:text-[#84cc16] transition-colors relative group">
              Pilares
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#84cc16] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#diferenciais" className="text-sm font-bold text-[#0B1120] hover:text-[#84cc16] transition-colors relative group">
              Diferenciais
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#84cc16] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#sindicatos" className="text-sm font-bold text-[#0B1120] hover:text-[#84cc16] transition-colors relative group">
              Sindicatos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#84cc16] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contato" className="text-sm font-bold text-[#0B1120] hover:text-[#84cc16] transition-colors relative group">
              Área do Cliente
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#84cc16] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} className="text-[#84cc16]" /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <nav className="flex flex-col py-4 px-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 px-4 text-base font-bold text-[#0B1120] hover:text-[#84cc16] hover:bg-gray-50 rounded-lg transition-colors duration-200 border-l-4 border-transparent hover:border-[#84cc16]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
