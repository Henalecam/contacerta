'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaChartLine, FaShieldAlt, FaRobot, FaSync } from 'react-icons/fa';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions, TooltipItem } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Registrando os componentes necessários do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const features = [
  {
    icon: FaRobot,
    title: 'Automação Inteligente',
    description: 'Processos contábeis otimizados com tecnologia de ponta'
  },
  {
    icon: FaShieldAlt,
    title: 'Segurança e Conformidade',
    description: 'Total conformidade com LGPD e legislações vigentes'
  },
  {
    icon: FaChartLine,
    title: 'Gestão Estratégica',
    description: 'Análises precisas para tomada de decisões assertivas'
  },
  {
    icon: FaSync,
    title: 'Atualização Constante',
    description: 'Sempre alinhados com as últimas mudanças fiscais'
  }
];

// Dados mockados para o gráfico de economia
const chartData = {
  labels: ['Economia em Custos', 'Redução de Tempo', 'Otimização Fiscal', 'Prevenção de Multas'],
  datasets: [
    {
      label: 'Economia Mensal (R$)',
      data: [2500, 1800, 3200, 1500],
      backgroundColor: [
        'rgba(99, 102, 241, 0.8)',  // primary
        'rgba(99, 102, 241, 0.6)',
        'rgba(99, 102, 241, 0.4)',
        'rgba(99, 102, 241, 0.2)'
      ],
      borderColor: [
        'rgba(99, 102, 241, 1)',
        'rgba(99, 102, 241, 1)',
        'rgba(99, 102, 241, 1)',
        'rgba(99, 102, 241, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

const chartOptions: ChartOptions<'bar'> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function(tooltipItem: TooltipItem<'bar'>) {
          const value = tooltipItem.raw as number;
          return `R$ ${value.toLocaleString('pt-BR')}`;
        }
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function(value) {
          return `R$ ${value.toLocaleString('pt-BR')}`;
        }
      }
    }
  }
};

export default function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 dark:from-primary/10 dark:via-transparent dark:to-accent/10" />
      
      {/* Animated Circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
      >
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 dark:bg-primary/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/20 dark:bg-accent/40 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent-light">
                <FaShieldAlt className="mr-2" />
                Escritório Contábil Certificado
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Sua{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light dark:from-primary-light dark:to-accent bg-clip-text text-transparent">
                contabilidade
              </span>
              {' '}em boas mãos
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Oferecemos soluções contábeis completas e personalizadas para sua empresa, com foco em eficiência, conformidade e resultados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/5511999999999"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white dark:bg-accent-light dark:text-gray-900 rounded-lg hover:bg-accent-dark dark:hover:bg-accent transition-colors duration-200 shadow-lg hover:shadow-accent/20 dark:hover:shadow-accent-light/20"
              >
                Fale com um Especialista
                <FaArrowRight className="ml-2" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#servicos"
                className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 shadow-lg hover:shadow-gray-200/20 dark:hover:shadow-gray-800/20"
              >
                Nossos Serviços
              </motion.a>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start space-x-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-12 h-12 bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Graph */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Economia Potencial
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Mensal</span>
                </div>
              </div>
              <div className="h-[300px]">
                <Bar data={chartData} options={chartOptions} />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Economia média mensal de <span className="font-semibold text-primary dark:text-primary-light">R$ 9.000</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 