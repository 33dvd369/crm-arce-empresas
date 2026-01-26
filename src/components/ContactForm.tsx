import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section id="contato" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Transforme a Crise em Amparo
          </h2>
          <p className="text-muted-foreground mb-8">
            Entre em contato e descubra como podemos apoiar sua empresa e seus colaboradores.
          </p>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#22c55e] transition-all duration-300 mb-12 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6" />
            Fale Conosco no WhatsApp
          </a>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 text-left">
                <label htmlFor="name" className="text-sm font-semibold text-gray-700 ml-1">Nome Completo</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0B1120] focus:border-transparent outline-none transition-all duration-200"
                  required
                />
              </div>
              <div className="space-y-2 text-left">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">E-mail Corporativo</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0B1120] focus:border-transparent outline-none transition-all duration-200"
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 text-left">
                <label htmlFor="company" className="text-sm font-semibold text-gray-700 ml-1">Empresa</label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0B1120] focus:border-transparent outline-none transition-all duration-200"
                  required
                />
              </div>
              <div className="space-y-2 text-left">
                <label htmlFor="phone" className="text-sm font-semibold text-gray-700 ml-1">Telefone</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0B1120] focus:border-transparent outline-none transition-all duration-200"
                  required
                />
              </div>
            </div>
            <div className="space-y-2 text-left">
              <label htmlFor="message" className="text-sm font-semibold text-gray-700 ml-1">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0B1120] focus:border-transparent outline-none transition-all duration-200 resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#0B1120] hover:bg-[#1a2333] text-white py-6 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              ENVIAR MENSAGEM
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
