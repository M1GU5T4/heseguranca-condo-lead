import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-security.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-primary-blue-dark">
        <img
          src={heroImage}
          alt="HEsegurança - Soluções Tecnológicas para Condomínios"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/80 to-primary-blue-dark/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">HE</span>
            <span className="block text-white/90">segurança</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Transformamos a segurança do seu condomínio com tecnologia de ponta
          </p>
          
          <p className="text-lg mb-12 text-white/80 max-w-2xl mx-auto">
            Soluções inteligentes de controle de acesso, monitoramento 24h e automação 
            para garantir a máxima proteção e comodidade dos seus moradores.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary-blue hover:bg-white/90 px-8 py-6 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Solicitar Orçamento
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-blue px-8 py-6 text-lg font-semibold backdrop-blur-sm"
            >
              Conhecer Soluções
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;