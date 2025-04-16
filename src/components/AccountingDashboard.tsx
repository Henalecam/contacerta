'use client';

import { motion } from 'framer-motion';
import { FaChartLine, FaMoneyBillWave, FaFileInvoice, FaUsers, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const metrics = [
  {
    title: 'Faturamento Mensal',
    value: 'R$ 245.678,90',
    change: '+12.5%',
    trend: 'up',
    icon: FaMoneyBillWave,
    color: 'text-green-500'
  },
  {
    title: 'Clientes Ativos',
    value: '1.234',
    change: '+8.2%',
    trend: 'up',
    icon: FaUsers,
    color: 'text-blue-500'
  },
  {
    title: 'Documentos Processados',
    value: '45.678',
    change: '+15.3%',
    trend: 'up',
    icon: FaFileInvoice,
    color: 'text-purple-500'
  },
  {
    title: 'Crescimento Anual',
    value: '28.4%',
    change: '+4.2%',
    trend: 'up',
    icon: FaChartLine,
    color: 'text-orange-500'
  }
];

const recentTransactions = [
  { id: 1, client: 'Empresa A', amount: 'R$ 12.345,67', date: '15/03/2024', status: 'Pago' },
  { id: 2, client: 'Empresa B', amount: 'R$ 8.901,23', date: '14/03/2024', status: 'Pendente' },
  { id: 3, client: 'Empresa C', amount: 'R$ 15.678,90', date: '13/03/2024', status: 'Pago' },
  { id: 4, client: 'Empresa D', amount: 'R$ 5.432,10', date: '12/03/2024', status: 'Pago' }
];

export default function AccountingDashboard() {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Financeiro</h2>
        <p className="text-gray-600 dark:text-gray-300">Visão geral das finanças do mês</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-opacity-10 ${metric.color} bg-current`}>
                <metric.icon className="w-6 h-6" />
              </div>
              <span className={`text-sm font-medium ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {metric.change}
                {metric.trend === 'up' ? <FaArrowUp className="inline ml-1" /> : <FaArrowDown className="inline ml-1" />}
              </span>
            </div>
            <h3 className="text-gray-600 dark:text-gray-300 text-sm mb-1">{metric.title}</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Faturamento Mensal</h3>
          <div className="h-64 bg-gradient-to-b from-blue-500/10 to-transparent rounded-lg p-4">
            <div className="h-full flex items-end space-x-2">
              {[30, 45, 60, 75, 90, 65, 50].map((height, index) => (
                <div
                  key={index}
                  className="w-8 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recent Transactions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Transações Recentes</h3>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{transaction.client}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900 dark:text-white">{transaction.amount}</p>
                  <span className={`text-sm ${
                    transaction.status === 'Pago' ? 'text-green-500' : 'text-yellow-500'
                  }`}>
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Novo Lançamento
        </button>
        <button className="p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
          Gerar Relatório
        </button>
        <button className="p-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
          Exportar Dados
        </button>
        <button className="p-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
          Configurações
        </button>
      </div>
    </div>
  );
} 