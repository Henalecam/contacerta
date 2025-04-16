'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaCalculator, FaArrowRight, FaMoneyBillWave, FaFileInvoice, FaCheck } from 'react-icons/fa';

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
    question: "Qual é o seu faturamento mensal aproximado?",
    options: [
      { value: "ate50k", label: "Até R$ 50.000", baseValue: 50000 },
      { value: "50k-200k", label: "R$ 50.000 - R$ 200.000", baseValue: 125000 },
      { value: "200k-500k", label: "R$ 200.000 - R$ 500.000", baseValue: 350000 },
      { value: "acima500k", label: "Acima de R$ 500.000", baseValue: 750000 }
    ]
  },
  {
    id: 2,
    question: "Quantos funcionários sua empresa possui?",
    options: [
      { value: "ate5", label: "Até 5 funcionários", multiplier: 1.2 },
      { value: "6-20", label: "6 a 20 funcionários", multiplier: 1.5 },
      { value: "21-50", label: "21 a 50 funcionários", multiplier: 1.8 },
      { value: "acima50", label: "Acima de 50 funcionários", multiplier: 2.2 }
    ]
  },
  {
    id: 3,
    question: "Quantos documentos fiscais você emite por mês?",
    options: [
      { value: "ate100", label: "Até 100 documentos", multiplier: 1.1 },
      { value: "101-500", label: "101 a 500 documentos", multiplier: 1.3 },
      { value: "501-1000", label: "501 a 1000 documentos", multiplier: 1.6 },
      { value: "acima1000", label: "Acima de 1000 documentos", multiplier: 2.0 }
    ]
  },
  {
    id: 4,
    question: "Qual é o seu regime tributário?",
    options: [
      { value: "simples", label: "Simples Nacional", multiplier: 1.2 },
      { value: "lucro", label: "Lucro Presumido", multiplier: 1.5 },
      { value: "real", label: "Lucro Real", multiplier: 1.8 }
    ]
  },
  {
    id: 5,
    question: "Com que frequência você precisa de consultoria fiscal?",
    options: [
      { value: "raro", label: "Raramente", multiplier: 1.1 },
      { value: "mensal", label: "Mensalmente", multiplier: 1.3 },
      { value: "semanal", label: "Semanalmente", multiplier: 1.6 },
      { value: "diario", label: "Diariamente", multiplier: 2.0 }
    ]
  }
];

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = useCallback((value: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: value }));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  }, [currentQuestion]);

  const calculateSavings = useCallback(() => {
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

    const baseSavings = baseOption.baseValue * 0.15;
    return Math.round(baseSavings * totalMultiplier);
  }, [answers]);

  const resetQuiz = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  }, []);

  const currentQuestionData = useMemo(() => questions[currentQuestion], [currentQuestion]);
  const progressPercentage = useMemo(() => (currentQuestion / questions.length) * 100, [currentQuestion]);

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl"
              >
                <div className="flex items-center justify-center mb-4">
                  <FaMoneyBillWave className="text-3xl text-accent dark:text-accent-light mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Economia Mensal
                  </h3>
                </div>
                <p className="text-4xl font-bold text-accent dark:text-accent-light text-center">
                  R$ {monthlySavings.toLocaleString('pt-BR')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl"
              >
                <div className="flex items-center justify-center mb-4">
                  <FaFileInvoice className="text-3xl text-accent dark:text-accent-light mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Economia Anual
                  </h3>
                </div>
                <p className="text-4xl font-bold text-accent dark:text-accent-light text-center">
                  R$ {annualSavings.toLocaleString('pt-BR')}
                </p>
              </motion.div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Benefícios Incluídos:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <FaCheck className="text-accent dark:text-accent-light mr-2" />
                  Gestão fiscal otimizada
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <FaCheck className="text-accent dark:text-accent-light mr-2" />
                  Suporte contábil dedicado
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <FaCheck className="text-accent dark:text-accent-light mr-2" />
                  Redução de riscos fiscais
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <FaCheck className="text-accent dark:text-accent-light mr-2" />
                  Mais tempo para focar no seu negócio
                </li>
              </ul>
            </div>

            <div className="text-center">
              <button
                onClick={resetQuiz}
                className="btn-primary inline-flex items-center"
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
                {Math.round(progressPercentage)}% completo
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-accent dark:bg-accent-light h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              {currentQuestionData.question}
            </h3>
            <div className="grid gap-4">
              {currentQuestionData.options.map((option) => (
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