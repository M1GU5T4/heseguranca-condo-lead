
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/94dd0676-1f27-4561-8c21-ed681f8707ca.png" 
                alt="HEsegurança - Soluções Tecnológicas para Condomínios" 
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Soluções tecnológicas avançadas para a segurança e automação de condomínios. 
              Transformando proteção em tranquilidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-primary-blue rounded-full hover:bg-primary-blue-dark transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-primary-blue rounded-full hover:bg-primary-blue-dark transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-primary-blue rounded-full hover:bg-primary-blue-dark transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Soluções</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-primary-blue transition-colors">Controle de Acesso</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors">CFTV Inteligente</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors">Automação</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors">Portaria Virtual</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors">Monitoramento 24h</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-primary-blue transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors">Cases de Sucesso</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors">Suporte Técnico</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-4 text-white/80">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-blue flex-shrink-0" />
                <div>
                  <p>(11) 9 9999-9999</p>
                  <p>(11) 3333-3333</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-blue flex-shrink-0" />
                <p>contato@heseguranca.com.br</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                <p>
                  Rua da Tecnologia, 123<br />
                  São Paulo - SP, 01234-567
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/80">
          <p>&copy; 2024 HEsegurança. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
