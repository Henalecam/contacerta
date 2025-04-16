'use client';

import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const footerLinks = {
  company: [
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contato' }
  ],
  services: [
    { name: 'Contabilidade Digital', href: '#servicos/contabilidade' },
    { name: 'Fiscal e Tributário', href: '#servicos/fiscal' },
    { name: 'DPO e LGPD', href: '#servicos/dpo' },
    { name: 'Consultoria Estratégica', href: '#servicos/consultoria' }
  ],
  legal: [
    { name: 'Termos de Uso', href: '/termos-de-uso' },
    { name: 'Política de Privacidade', href: '/politica-de-privacidade' },
    { name: 'LGPD', href: '/lgpd' },
    { name: 'Cookies', href: '/cookies' }
  ],
  support: [
    { name: 'Central de Ajuda', href: '/ajuda' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Suporte Técnico', href: '/suporte' },
    { name: 'Treinamentos', href: '/treinamentos' }
  ]
};

const socialLinks = [
  { name: 'Facebook', icon: FaFacebook, href: 'https://facebook.com/contacerta' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com/company/contacerta' },
  { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com/contacerta' },
  { name: 'YouTube', icon: FaYoutube, href: 'https://youtube.com/contacerta' }
];

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              Contacerta
            </a>
            <p className="mt-4 text-gray-400">
              Soluções inovadoras para escritórios contábeis. Modernize sua gestão e aumente sua produtividade com nossas ferramentas digitais.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
              Empresa
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
              Serviços
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal and Support Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mt-8">
              Suporte
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Contacerta. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="/termos-de-uso" className="text-gray-400 hover:text-white text-sm">
                Termos de Uso
              </a>
              <a href="/politica-de-privacidade" className="text-gray-400 hover:text-white text-sm">
                Política de Privacidade
              </a>
              <a href="/lgpd" className="text-gray-400 hover:text-white text-sm">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 