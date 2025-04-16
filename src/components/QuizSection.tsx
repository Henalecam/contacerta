'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaCalculator, FaArrowRight, FaMoneyBillWave, FaFileInvoice, FaUsers, FaBuilding, FaClock } from 'react-icons/fa';

interface QuizOption {
  value: string;
  label: string;
  baseValue?: number;
  multiplier?: number;
}

interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Qual o faturamento mensal aproximado da sua empresa?',
    options: [
      { value: 'low', label: 'Até R$ 50.000', baseValue: 50000 },
      { value: 'medium', label: 'R$ 50.000 - R$ 200.000', baseValue: 125000 },
      { value: 'high', label: 'Acima de R$ 200.000', baseValue: 300000 }
    ]
  },
  {
    id: 2,
    question: 'Quantos funcionários sua empresa possui?',
    options: [
      { value: 'small', label: '1-5 funcionários', multiplier: 0.8 },
      { value: 'medium', label: '6-20 funcionários', multiplier: 1.2 },
      { value: 'large', label: 'Mais de 20 funcionários', multiplier: 1.5 }
    ]
  },
  {
    id: 3,
    question: 'Quantos documentos fiscais você emite por mês?',
    options: [
      { value: 'low', label: 'Até 100 documentos', multiplier: 0.5 },
      { value: 'medium', label: '100-500 documentos', multiplier: 1.0 },
      { value: 'high', label: 'Mais de 500 documentos', multiplier: 1.5 }
    ]
  },
  {
    id: 4,
    question: 'Qual o regime tributário da sua empresa?',
    options: [
      { value: 'simples', label: 'Simples Nacional', multiplier: 0.7 },
      { value: 'lucro', label: 'Lucro Presumido', multiplier: 1.0 },
      { value: 'real', label: 'Lucro Real', multiplier: 1.3 }
    ]
  },
  {
    id: 5,
    question: 'Você precisa de consultoria fiscal frequente?',
    options: [
      { value: 'never', label: 'Raramente', multiplier: 0.5 },
      { value: 'sometimes', label: 'Ocasionalmente', multiplier: 1.0 },
      { value: 'always', label: 'Frequentemente', multiplier: 1.5 }
    ]
  }
];

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: value }));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateSavings = () => {
    const baseQuestion = questions[0];
    const baseAnswer = answers[0];
    const baseOption = baseQuestion.options.find(opt => opt.value === baseAnswer);
    
    if (!baseOption || !baseOption.baseValue) return 0;

    let totalMultiplier = 1;
    for (let i = 1; i < questions.length; i++) {
      const answer = answers[i];
      const question = questions[i];
      const option = question.options.find(opt => opt.value === answer);
      if (option && option.multiplier) {
        totalMultiplier *= option.multiplier;
      }
    }

    // Cálculo baseado no faturamento e multiplicadores
    const baseSavings = baseOption.baseValue * 0.15; // 15% do faturamento como base
    return Math.round(baseSavings * totalMultiplier);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  if (showResult) {
    const savings = calculateSavings();
    const monthlySavings = Math.round(savings / 12);
    const annualSavings = savings;

    return (
      <section id="quiz" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
          >
            <div className="text-center mb-8">
              <FaChartLine className="text-5xl text-accent dark:text-accent-light mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Economia Potencial
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Baseado nas suas respostas, estimamos que você pode economizar:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <FaMoneyBillWave className="text-2xl text-accent dark:text-accent-light mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Economia Mensal</h3>
                </div>
                <p className="text-4xl font-bold text-primary dark:text-primary-light">
                  R$ {monthlySavings.toLocaleString('pt-BR')}
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <FaChartLine className="text-2xl text-accent dark:text-accent-light mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Economia Anual</h3>
                </div>
                <p className="text-4xl font-bold text-primary dark:text-primary-light">
                  R$ {annualSavings.toLocaleString('pt-BR')}
                </p>
              </div>
            </div>

            <div className="bg-accent/5 dark:bg-accent-light/5 p-6 rounded-xl mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Benefícios Incluídos:</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaFileInvoice className="text-accent dark:text-accent-light mr-3" />
                  <span className="text-gray-600 dark:text-gray-300">Gestão fiscal otimizada</span>
                </li>
                <li className="flex items-center">
                  <FaUsers className="text-accent dark:text-accent-light mr-3" />
                  <span className="text-gray-600 dark:text-gray-300">Suporte contábil dedicado</span>
                </li>
                <li className="flex items-center">
                  <FaBuilding className="text-accent dark:text-accent-light mr-3" />
                  <span className="text-gray-600 dark:text-gray-300">Redução de riscos fiscais</span>
                </li>
                <li className="flex items-center">
                  <FaClock className="text-accent dark:text-accent-light mr-3" />
                  <span className="text-gray-600 dark:text-gray-300">Mais tempo para focar no seu negócio</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <button
                onClick={resetQuiz}
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white dark:bg-accent-light dark:text-gray-900 rounded-lg hover:bg-accent-dark dark:hover:bg-accent transition-colors duration-200 shadow-lg hover:shadow-accent/20 dark:hover:shadow-accent-light/20"
              >
                Refazer Quiz
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
        >
          <div className="text-center mb-8">
            <FaCalculator className="text-5xl text-accent dark:text-accent-light mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Descubra Quanto Você Pode Economizar
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Responda algumas perguntas rápidas para receber uma estimativa personalizada
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between mb-4">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Pergunta {currentQuestion + 1} de {questions.length}
              </span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {Math.round((currentQuestion / questions.length) * 100)}% completo
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-accent dark:bg-accent-light h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              {questions[currentQuestion].question}
            </h3>
            <div className="grid gap-4">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full p-4 text-left bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 border border-gray-200 dark:border-gray-600"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 