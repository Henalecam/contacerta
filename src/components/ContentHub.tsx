'use client';

import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const articles = [
  {
    title: 'Como Reduzir Custos Tributários em 2024',
    excerpt: 'Estratégias práticas para otimizar sua carga tributária e aumentar a lucratividade do negócio.',
    date: '15/04/2024',
    category: 'Tributário',
    slug: 'como-reduzir-custos-tributarios',
  },
  {
    title: 'Guia Completo de Regularização de Empresas',
    excerpt: 'Passo a passo para regularizar sua empresa e evitar multas e penalidades.',
    date: '10/04/2024',
    category: 'Regularização',
    slug: 'guia-regularizacao-empresas',
  },
  {
    title: 'Novidades no SPED Fiscal 2024',
    excerpt: 'Tudo o que você precisa saber sobre as mudanças no SPED Fiscal deste ano.',
    date: '05/04/2024',
    category: 'Fiscal',
    slug: 'novidades-sped-fiscal-2024',
  },
  {
    title: 'Planejamento Financeiro para Pequenas Empresas',
    excerpt: 'Dicas essenciais para uma gestão financeira eficiente em pequenos negócios.',
    date: '01/04/2024',
    category: 'Financeiro',
    slug: 'planejamento-financeiro-pequenas-empresas',
  },
];

export default function ContentHub() {
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-light mb-4">
            Central de Conteúdo
          </h2>
          <p className="text-xl text-secondary dark:text-gray-300">
            Artigos e insights para ajudar seu negócio a crescer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-accent mb-4">
                  <FaCalendarAlt className="w-4 h-4" />
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span className="bg-accent/10 dark:bg-accent/20 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-3">
                  {article.title}
                </h3>
                <p className="text-secondary dark:text-gray-300 mb-6">{article.excerpt}</p>
                <a
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
                >
                  Ler mais
                  <FaArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/blog"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Ver todos os artigos
            <FaArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
} 