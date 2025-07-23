import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Camera, Smartphone, Zap } from "lucide-react";
import accessControlImage from "@/assets/access-control.jpg";
import cctvImage from "@/assets/cctv-monitoring.jpg";
import automationImage from "@/assets/automation.jpg";

const solutions = [
  {
    icon: Shield,
    title: "Controle de Acesso",
    description: "Sistemas inteligentes de identificação por cartão, biometria e aplicativo móvel",
    image: accessControlImage,
    features: ["Biometria digital", "Cartões de proximidade", "App móvel", "Relatórios detalhados"]
  },
  {
    icon: Camera,
    title: "CFTV Inteligente",
    description: "Monitoramento 24h com câmeras de alta resolução e análise automática",
    image: cctvImage,
    features: ["Câmeras 4K", "Análise de comportamento", "Alertas automáticos", "Acesso remoto"]
  },
  {
    icon: Smartphone,
    title: "Automação Residencial",
    description: "Integração completa de sistemas para máximo conforto e economia",
    image: automationImage,
    features: ["Controle de iluminação", "Climatização", "Portaria virtual", "Economia de energia"]
  }
];

const SolutionsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nossas Soluções
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologia de ponta aplicada à segurança condominial, 
            proporcionando tranquilidade e eficiência para gestores e moradores.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/80 to-transparent"></div>
                <div className="absolute top-4 left-4 p-3 bg-white rounded-full shadow-lg">
                  <solution.icon className="w-6 h-6 text-primary-blue" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{solution.title}</CardTitle>
                <CardDescription className="text-base">{solution.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <Zap className="w-4 h-4 text-primary-blue mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;