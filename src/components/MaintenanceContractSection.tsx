 
import React from 'react';
import { Button } from './ui/button';

const MaintenanceContractSection = () => {
  const plans = [
    {
      name: "BRONZE",
      price: "R$ 169,90",
      features: [
        "01 Visita Mensal Preventiva",
        "Visita Corretiva*",
        "Atendimento em até 72 horas",
        "Vistoria Interfone",
        "Vistoria Câmeras",
        "Vistoria Fechaduras",
        "Vistoria Portão de Garagem",
      ],
      note: "* Visita corretiva faturada conforme tabela vigente",
    },
    {
      name: "PRATA",
      price: "R$ 279,90",
      features: [
        "01 Visita Mensal Preventiva",
        "01 Visita Mensal Corretiva*",
        "Atendimento em até 72 horas",
        "Vistoria Controle de Acesso",
        "Vistoria Cerca Elétrica",
        "Vistoria Interfone",
        "Vistoria Câmeras",
        "Vistoria Iluminação de Emergência",
        "Vistoria Portão de Garagem",
      ],
      note: "* Caso seja necessário",
    },
    {
      name: "OURO",
      price: "R$ 489,90",
      features: [
        "01 Visita Mensal Preventiva",
        "02 Visitas Mensal Corretiva*",
        "Atendimento em até 48 horas",
        "Vistoria Controle de Acesso",
        "Vistoria Cerca Elétrica",
        "Vistoria Interfone",
        "Vistoria Câmeras",
        "Vistoria Fechaduras",
        "Vistoria Iluminação de Emergência",
        "Vistoria Portão de Garagem",
      ],
      note: "* Caso seja necessário",
    },
    {
      name: "DIAMANTE",
      price: "R$ 989,90",
      features: [
        "01 Visita Mensal Preventiva",
        "04 Visitas Mensal Corretiva*",
        "Atendimento em até 24 horas",
        "Vistoria Controle de Acesso",
        "Vistoria Cerca Elétrica",
        "Vistoria Interfone",
        "Vistoria Câmeras",
        "Vistoria Fechaduras",
        "Vistoria Iluminação de Emergência",
        "Vistoria Portão de Garagem",
      ],
      note: "* Caso seja necessário",
    },
  ];

  return (
    <section id="contrato-manutencao" className="py-16 bg-muted">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-12">
          CONTRATO DE MANUTENÇÃO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-primary-blue text-white p-6 flex justify-between items-center group-hover:scale-[1.02] transition-transform duration-300">
                <div>
                  <p className="text-sm font-semibold opacity-80">Plano</p>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                </div>
                <p className="text-3xl font-bold">{plan.price}</p>
              </div>
              <ul className="p-6 space-y-3 flex-grow text-left text-gray-700">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.note && (
                <p className="text-sm text-gray-500 p-6 pt-0 text-left">
                  {plan.note}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a href="#contato">
            <Button size="lg" className="bg-primary-blue hover:bg-primary-blue-dark text-white px-8 py-6 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
              Entre em Contato
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceContractSection; 