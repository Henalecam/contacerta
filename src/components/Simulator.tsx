'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

type Question = {
  id: string;
  text: string;
  type: 'select' | 'number' | 'text';
  options?: string[];
};

const questions: Question[] = [
  {
    id: 'companyType',
    text: 'Qual o tipo da sua empresa?',
    type: 'select',
    options: ['MEI', 'ME', 'EPP', 'LTDA', 'SA'],
  },
  {
    id: 'businessArea',
    text: 'Qual o ramo de atividade?',
    type: 'select',
    options: ['Comércio', 'Indústria', 'Serviços', 'Agronegócio', 'Tecnologia'],
  },
  {
    id: 'revenue',
    text: 'Qual o faturamento mensal aproximado?',
    type: 'select',
    options: ['Até R$ 10.000', 'R$ 10.001 - R$ 50.000', 'R$ 50.001 - R$ 200.000', 'Acima de R$ 200.000'],
  },
  {
    id: 'mainPain',
    text: 'Qual sua principal dor contábil?',
    type: 'select',
    options: [
      'Altos custos com contabilidade',
      'Falta de suporte personalizado',
      'Dificuldade com obrigações fiscais',
      'Problemas com regularização',
      'Outros',
    ],
  },
  {
    id: 'satisfaction',
    text: 'Como você avalia seu contador atual?',
    type: 'select',
    options: ['Muito insatisfeito', 'Insatisfeito', 'Neutro', 'Satisfeito', 'Muito satisfeito'],
  },
];

export default function Simulator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentStep].id]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const calculateResult = () => {
    // Simulated calculation based on answers
    const potentialSavings = Math.floor(Math.random() * 10000) + 5000;
    return {
      savings: potentialSavings,
      recommendations: [
        'Otimização de processos contábeis',
        'Redução de custos tributários',
        'Melhor gestão de obrigações fiscais',
      ],
    };
  };

  return (
    <section id="simulator" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key="questions"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-primary mb-8">
                  {questions[currentStep].text}
                </h2>

                <div className="space-y-4">
                  {questions[currentStep].options?.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className={`w-full p-4 rounded-lg border-2 transition-all ${
                        answers[questions[currentStep].id] === option
                          ? 'border-accent bg-accent/10'
                          : 'border-gray-200 hover:border-accent'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                <div className="flex justify-between pt-6">
                  {currentStep > 0 && (
                    <button
                      onClick={handlePrevious}
                      className="btn-secondary inline-flex items-center gap-2"
                    >
                      <FaArrowLeft className="w-4 h-4" />
                      Voltar
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    disabled={!answers[questions[currentStep].id]}
                    className="btn-primary ml-auto inline-flex items-center gap-2"
                  >
                    {currentStep === questions.length - 1 ? 'Ver Resultado' : 'Próximo'}
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Seu Diagnóstico Personalizado
                </h2>
                <div className="bg-accent/10 p-6 rounded-lg mb-8">
                  <p className="text-3xl font-bold text-accent mb-2">
                    Potencial de Economia
                  </p>
                  <p className="text-4xl font-bold">
                    R$ {calculateResult().savings.toLocaleString()}/ano
                  </p>
                </div>
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold">Recomendações:</h3>
                  <ul className="space-y-2">
                    {calculateResult().recommendations.map((rec, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Fale com um Especialista
                  <FaArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
} 