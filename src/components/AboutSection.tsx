'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaChartLine, FaUsers, FaHandshake } from 'react-icons/fa';

const values = [
  {
    icon: FaUsers,
    title: 'Foco no Cliente',
    description: 'Priorizamos o relacionamento próximo e personalizado com cada cliente.',
  },
  {
    icon: FaChartLine,
    title: 'Resultados',
    description: 'Buscamos sempre os melhores resultados financeiros para seu negócio.',
  },
  {
    icon: FaHandshake,
    title: 'Transparência',
    description: 'Mantemos uma comunicação clara e honesta em todas as interações.',
  },
  {
    icon: FaShieldAlt,
    title: 'Inovação',
    description: 'Utilizamos tecnologia de ponta para otimizar processos e resultados.',
  },
];

const team = [
  {
    name: 'Ana Silva',
    role: 'CEO & Fundadora',
    image: '/team/ana.png',
    description: 'Mais de 15 anos de experiência em contabilidade e gestão financeira.',
  },
  {
    name: 'Carlos Oliveira',
    role: 'Diretor Financeiro',
    image: '/team/carlos.png',
    description: 'Especialista em planejamento tributário e gestão de custos.',
  },
  {
    name: 'Mariana Santos',
    role: 'Gerente de Projetos',
    image: '/team/mariana.png',
    description: 'Experiência em implementação de sistemas e processos contábeis.',
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-light mb-4">
            Nossos Valores
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Acreditamos em princípios que guiam nosso trabalho e relacionamento com os clientes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-4">
                <value.icon className="text-accent dark:text-accent-light text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-light mb-4">
            Nossa Equipe
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Profissionais experientes e dedicados ao sucesso do seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-80 w-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-accent dark:text-accent-light mt-1">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 mt-4">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 