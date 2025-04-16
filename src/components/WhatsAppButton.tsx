'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-2"
      >
        <FaWhatsapp className="w-8 h-8" />
        <span className="font-semibold">Fale Conosco</span>
      </a>
    </motion.div>
  );
} 