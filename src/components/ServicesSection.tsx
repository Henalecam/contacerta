'use client';

import { motion } from 'framer-motion';
import { FaCalculator, FaFileInvoice, FaUserTie, FaChartLine, FaShieldAlt, FaRobot, FaSync, FaWhatsapp, FaPhone } from 'react-icons/fa';

const services = [
  {
    title: 'Contabilidade Digital',
    description: 'Automação completa dos processos contábeis com integração aos principais sistemas do mercado.',
    icon: FaCalculator,
    features: [
      'SPED Contábil automatizado',
      'Conciliação bancária inteligente',
      'Gestão de documentos digital',
      'Relatórios personalizados'
    ]
  },
  {
    title: 'Fiscal e Tributário',
    description: 'Soluções completas para gestão fiscal e planejamento tributário otimizado.',
    icon: FaFileInvoice,
    features: [
      'SPED Fiscal automatizado',
      'Cálculo de impostos em tempo real',
      'Monitoramento de obrigações',
      'Planejamento tributário'
    ]
  },
  {
    title: 'DPO e LGPD',
    description: 'Conformidade completa com a LGPD e proteção de dados dos seus clientes.',
    icon: FaUserTie,
    features: [
      'Avaliação de riscos',
      'Políticas de privacidade',
      'Gestão de consentimento',
      'Treinamento de equipe'
    ]
  },
  {
    title: 'Consultoria Estratégica',
    description: 'Apoio especializado para crescimento e otimização do seu escritório.',
    icon: FaChartLine,
    features: [
      'Análise de processos',
      'Planejamento estratégico',
      'Gestão de equipe',
      'Indicadores de performance'
    ]
  }
];

const benefits = [
  {
    title: 'Segurança de Dados',
    description: 'Proteção avançada com criptografia e backups automáticos',
    icon: FaShieldAlt
  },
  {
    title: 'Automação Inteligente',
    description: 'Redução de erros e aumento da produtividade',
    icon: FaRobot
  },
  {
    title: 'Atualização Constante',
    description: 'Sistema sempre atualizado com as últimas legislações',
    icon: FaSync
  }
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary dark:text-primary-light mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Soluções completas para modernizar e otimizar seu escritório contábil
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">
            Por que escolher a Contacerta?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                <p className="text-white/80">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Pronto para transformar seu escritório?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Agende uma demonstração gratuita e descubra como podemos ajudar seu escritório a crescer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511999999999"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors duration-200"
            >
              <FaWhatsapp className="w-5 h-5 mr-2" />
              Agende uma Demonstração
            </a>
            <a
              href="tel:+5511999999999"
              className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-surface-dark text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <FaPhone className="w-5 h-5 mr-2" />
              Fale com um Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 