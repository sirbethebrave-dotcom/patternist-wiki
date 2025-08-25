'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Link from 'next/link'
import { 
  CommandLineIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline'

export default function PatternsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const patternCategories = [
    {
      title: 'Макеты',
      description: 'Типовые структуры страниц и компоновки',
      href: '/patterns/layouts',
      icon: CommandLineIcon,
      status: 'ready',
      count: 5,
      examples: ['Одноколоночный', 'Двухколоночный', 'Карточный', 'Сетка', 'Dashboard']
    },
    {
      title: 'Интеракция',
      description: 'Паттерны взаимодействия с пользователем',
      href: '/patterns/interaction',
      icon: CommandLineIcon,
      status: 'ready',
      count: 8,
      examples: ['Hover эффекты', 'Анимации', 'Переходы', 'Обратная связь']
    },
    {
      title: 'Обратная связь',
      description: 'Система уведомлений и статусов',
      href: '/patterns/feedback',
      icon: CommandLineIcon,
      status: 'in-progress',
      count: 6,
      examples: ['Успех', 'Ошибки', 'Загрузка', 'Пустые состояния']
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ready':
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />
      case 'in-progress':
        return <ExclamationTriangleIcon className="w-5 h-5 text-yellow-500" />
      case 'planned':
        return <InformationCircleIcon className="w-5 h-5 text-blue-500" />
      default:
        return null
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ready':
        return 'Готово'
      case 'in-progress':
        return 'В разработке'
      case 'planned':
        return 'Запланировано'
      default:
        return ''
    }
  }

  return (
    <div className="flex h-screen bg-secondary-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-secondary-900 mb-4">
                UX Паттерны
              </h1>
              <p className="text-lg text-secondary-600">
                Проверенные решения для создания интуитивных пользовательских интерфейсов
              </p>
            </div>

            {/* Pattern Categories */}
            <div className="grid md:grid-cols-1 gap-6 mb-8">
              {patternCategories.map((category) => (
                <Link key={category.href} href={category.href}>
                  <div className="card hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary-100 rounded-lg">
                          <category.icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                            {category.title}
                          </h3>
                          <div className="flex items-center space-x-2 mt-1">
                            {getStatusIcon(category.status)}
                            <span className="text-sm text-secondary-600">
                              {getStatusText(category.status)}
                            </span>
                            <span className="text-sm text-secondary-500">
                              • {category.count} паттернов
                            </span>
                          </div>
                        </div>
                      </div>
                      <ArrowRightIcon className="w-5 h-5 text-secondary-400 group-hover:text-primary-600 transition-transform group-hover:translate-x-1" />
                    </div>
                    <p className="text-secondary-600 mb-4">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.examples.map((example, index) => (
                        <span key={index} className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Design Principles */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Принципы UX дизайна
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">Простота</h3>
                  <p className="text-sm text-secondary-600 mb-4">
                    Интерфейс должен быть интуитивно понятным. Пользователи должны легко находить то, что ищут.
                  </p>
                  <ul className="space-y-1 text-sm text-secondary-600">
                    <li>• Минималистичный дизайн</li>
                    <li>• Четкая визуальная иерархия</li>
                    <li>• Логичная навигация</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">Консистентность</h3>
                  <p className="text-sm text-secondary-600 mb-4">
                    Похожие элементы должны вести себя одинаково. Это снижает когнитивную нагрузку.
                  </p>
                  <ul className="space-y-1 text-sm text-secondary-600">
                    <li>• Единообразные паттерны</li>
                    <li>• Консистентная терминология</li>
                    <li>• Предсказуемое поведение</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="card">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Лучшие практики
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">✅ Делайте</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Используйте знакомые паттерны</li>
                    <li>• Предоставляйте мгновенную обратную связь</li>
                    <li>• Обрабатывайте ошибки gracefully</li>
                    <li>• Оптимизируйте для мобильных устройств</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Избегайте</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Перегруженных интерфейсов</li>
                    <li>• Неожиданного поведения элементов</li>
                    <li>• Длинных форм без прогресса</li>
                    <li>• Скрытой функциональности</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
