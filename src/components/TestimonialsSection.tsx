'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
 
  {
    id: 1,
    name: 'Pedro Santos',
    role: 'Diretor Financeiro',
    company: 'Global Corp',
    image: 'testimonials/pedro.jpg',
    content: 'Como diretor financeiro, posso afirmar que a Contacerta é um parceiro estratégico fundamental para nosso negócio. Sua expertise em planejamento tributário nos ajudou a economizar mais de R$ 500.000 no último ano. O atendimento personalizado e a agilidade nas respostas fazem toda a diferença no dia a dia.',
    rating: 5
  },
  {
    id: 2,
    name: 'Maria Silva',
    role: 'CEO',
    company: 'Tech Solutions',
    image: 'testimonials/maria.jpg',
    content: 'A Contacerta transformou completamente nossa gestão financeira. Em apenas 6 meses, conseguimos reduzir nossos custos operacionais em 35% e aumentar nossa eficiência fiscal. A equipe é extremamente profissional e sempre disponível para nos auxiliar. Recomendo fortemente para qualquer empresa que busque excelência em contabilidade!',
    rating: 5
  },
  {
    id: 3,
    name: 'Rodrigo Oliveira',
    role: 'Gerente',
    company: 'Inovação Digital',
    image: 'testimonials/rodrigo.jpg',
    content: 'A Contacerta nos surpreendeu positivamente desde o primeiro contato. Sua abordagem moderna e tecnológica nos permitiu automatizar processos que antes consumiam horas de trabalho. A transparência e o compromisso com resultados são diferenciais que fazem toda a diferença. Parceiros essenciais para nosso crescimento!',
    rating: 5
  }
];

const metrics = [
  {
    title: 'Clientes Satisfeitos',
    value: '98%',
    description: 'Taxa de satisfação dos nossos clientes',
  },
  {
    title: 'Economia Média',
    value: '30%',
    description: 'Redução de custos operacionais',
  },
  {
    title: 'Tempo Economizado',
    value: '50%',
    description: 'Redução no tempo de processos',
  },
  {
    title: 'Precisão',
    value: '99.9%',
    description: 'Taxa de acerto nos processos',
  },
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="resultados" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-light mb-4">
            Resultados que Falam por Si
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre nossos serviços
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative mb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <FaQuoteLeft className="text-accent dark:text-accent-light text-3xl mb-4" />
                  <p className="text-gray-700 dark:text-gray-200 text-lg mb-4 font-medium">
                    {testimonials[currentTestimonial].content}
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-accent dark:text-accent-light font-medium">
                    {testimonials[currentTestimonial].role} - {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
          >
            <FaChevronLeft className="text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
          >
            <FaChevronRight className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-4xl font-bold text-primary dark:text-primary-light mb-2">
                {metric.value}
              </h3>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {metric.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-200 font-medium">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 