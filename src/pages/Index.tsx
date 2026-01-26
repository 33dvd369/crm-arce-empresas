import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Differentials from "@/components/Differentials";
import Partnership from "@/components/Partnership";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Pillars />
      <Differentials />
      <Partnership />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
