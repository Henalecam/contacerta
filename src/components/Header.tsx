'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaWhatsapp, FaChartLine, FaCalculator, FaFileInvoice, FaUserTie } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const navigation = [
  { name: 'Início', href: '#inicio' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contato', href: '#contato' },
];

const servicesDropdown = [
  { name: 'Contabilidade', icon: FaCalculator, href: '#servicos' },
  { name: 'Fiscal', icon: FaFileInvoice, href: '#servicos' },
  { name: 'DPO', icon: FaUserTie, href: '#servicos' },
  { name: 'Consultoria', icon: FaChartLine, href: '#servicos' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setIsServicesOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#inicio" className="flex items-center space-x-2" onClick={() => handleNavigation('#inicio')}>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Contacerta
              </span>
              <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                DPO
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.name === 'Serviços' ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button 
                      className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                      onClick={() => handleNavigation('#servicos')}
                    >
                      <span>{item.name}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-900 rounded-lg shadow-lg py-2"
                        >
                          {servicesDropdown.map((service) => (
                            <a
                              key={service.name}
                              href={service.href}
                              onClick={() => handleNavigation(service.href)}
                              className="flex items-center space-x-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-accent/10 hover:text-accent transition-colors duration-200"
                            >
                              <service.icon className="w-4 h-4" />
                              <span>{service.name}</span>
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+5511999999999"
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
            >
              <FaPhone className="w-4 h-4" />
              <span>(11) 99999-9999</span>
            </a>
            <a
              href="https://wa.me/5511999999999"
              className="flex items-center space-x-2 bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors duration-200"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Agende uma Consultoria</span>
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-gray-900"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.name === 'Serviços' ? (
                      <div>
                        <button
                          onClick={() => {
                            setIsServicesOpen(!isServicesOpen);
                            handleNavigation('#servicos');
                          }}
                          className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                        >
                          <span>{item.name}</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 mt-2 space-y-2"
                            >
                              {servicesDropdown.map((service) => (
                                <a
                                  key={service.name}
                                  href={service.href}
                                  onClick={() => handleNavigation(service.href)}
                                  className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-accent transition-colors duration-200"
                                >
                                  <service.icon className="w-4 h-4" />
                                  <span>{service.name}</span>
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => handleNavigation(item.href)}
                        className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
                <div className="flex flex-col space-y-2 pt-4">
                  <a
                    href="tel:+5511999999999"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                  >
                    <FaPhone className="w-4 h-4" />
                    <span>(11) 99999-9999</span>
                  </a>
                  <a
                    href="https://wa.me/5511999999999"
                    className="flex items-center space-x-2 bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors duration-200"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>Agende uma Consultoria</span>
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 