import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="inicio">
          <HeroSection />
        </section>
        <section id="solucoes">
          <SolutionsSection />
        </section>
        <section id="beneficios">
          <BenefitsSection />
        </section>
        <section id="contato">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
