'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaCalendarAlt, FaChartBar, FaFileAlt, FaUserTie } from 'react-icons/fa';

const categories = [
  { name: 'Todos', icon: FaFileAlt },
  { name: 'Fiscal', icon: FaChartBar },
  { name: 'Contábil', icon: FaFileAlt },
  { name: 'DPO', icon: FaUserTie },
];

const blogPosts = [
  {
    id: 1,
    title: 'Como a LGPD impacta os escritórios contábeis em 2024',
    excerpt: 'Entenda as principais mudanças na legislação e como se adequar para evitar multas.',
    category: 'DPO',
    date: '15/03/2024',
    readTime: '5 min',
    image: 'blog.jpg',
  },
  {
    id: 2,
    title: 'Novas regras do eSocial: O que mudou em 2024',
    excerpt: 'Confira as atualizações mais recentes do eSocial e como elas afetam seu escritório.',
    category: 'Fiscal',
    date: '10/03/2024',
    readTime: '7 min',
    image: 'blog.jpg',
  },
  {
    id: 3,
    title: 'Estratégias para aumentar a produtividade do seu escritório',
    excerpt: 'Dicas práticas para otimizar processos e melhorar a eficiência operacional.',
    category: 'Contábil',
    date: '05/03/2024',
    readTime: '8 min',
    image: 'blog.jpg',
  },
];

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-20 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary dark:text-primary-light mb-4">
            Blog e Artigos
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Fique por dentro das últimas novidades do mundo contábil, fiscal e de proteção de dados.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Buscar artigos..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark focus:outline-none focus:ring-2 focus:ring-accent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-accent text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-accent/10'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <FaCalendarAlt className="mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} de leitura</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <a
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-accent hover:text-accent-dark transition-colors duration-200"
                >
                  Ler mais
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Receba novidades e atualizações
            </h3>
            <p className="mb-6">
              Inscreva-se em nossa newsletter para receber artigos exclusivos e dicas para seu escritório.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-lg transition-colors duration-200"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 