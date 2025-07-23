import { CheckCircle, TrendingUp, Users, Clock } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Segurança Máxima",
    description: "Proteção 24/7 com tecnologia de última geração e monitoramento contínuo"
  },
  {
    icon: TrendingUp,
    title: "Valorização do Imóvel",
    description: "Condomínios seguros e tecnológicos têm maior valorização no mercado"
  },
  {
    icon: Users,
    title: "Facilidade para Moradores",
    description: "Acesso simples e rápido através de múltiplas formas de identificação"
  },
  {
    icon: Clock,
    title: "Economia de Tempo",
    description: "Processos automatizados reduzem filas e agilizam o dia a dia"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Por que escolher a HEsegurança?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 10 anos de experiência em soluções tecnológicas para condomínios, 
            com foco na satisfação total dos nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-full mb-6 group-hover:scale-110 transition-transform duration-200">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-blue to-primary-blue-dark rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            + de 500 condomínios protegidos
          </h3>
          <p className="text-xl mb-6 text-white/90">
            Milhares de moradores já confiam na nossa tecnologia
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-white/80">Condomínios</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50k+</div>
              <div className="text-white/80">Moradores</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-white/80">Suporte</div>
            </div>
            <div>
              <div className="text-3xl font-bold">10+</div>
              <div className="text-white/80">Anos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;