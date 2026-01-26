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
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#22c55e] transition-colors duration-300 mb-8"
          >
            <MessageCircle className="w-5 h-5" />
            Fale Conosco no WhatsApp
          </a>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Nome Completo"
                value={formData.name}
                onChange={handleChange}
                className="input-field bg-background"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail Corporativo"
                value={formData.email}
                onChange={handleChange}
                className="input-field bg-background"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="company"
                placeholder="Empresa"
                value={formData.company}
                onChange={handleChange}
                className="input-field bg-background"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefone"
                value={formData.phone}
                onChange={handleChange}
                className="input-field bg-background"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Mensagem"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="input-field bg-background resize-none"
            />
            <Button
              type="submit"
              className="w-full btn-teal py-6 text-base font-semibold rounded-lg"
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
