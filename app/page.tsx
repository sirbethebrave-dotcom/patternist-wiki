'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Link from 'next/link'
import { 
  SwatchIcon, 
  CubeIcon, 
  DocumentTextIcon,
  CommandLineIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const features = [
    {
      title: 'Цветовая система',
      description: 'Единая палитра цветов с семантическим значением и поддержкой темной темы',
      icon: SwatchIcon,
      href: '/colors',
      color: 'bg-blue-500'
    },
    {
      title: 'Типографика',
      description: 'Система шрифтов, размеров и иерархии для консистентного текста',
      icon: DocumentTextIcon,
      href: '/typography',
      color: 'bg-green-500'
    },
    {
      title: 'Компоненты',
      description: 'Библиотека переиспользуемых UI компонентов с документацией',
      icon: CubeIcon,
      href: '/components',
      color: 'bg-purple-500'
    },
    {
      title: 'Паттерны',
      description: 'UX паттерны и принципы для создания интуитивных интерфейсов',
      icon: CommandLineIcon,
      href: '/patterns',
      color: 'bg-orange-500'
    }
  ]

  return (
    <div className="flex h-screen bg-secondary-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-secondary-900 mb-4">
                Snack Uikit Design System
              </h1>
              <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
                Библиотека компонентов компании Cloud.ru и сообщества TeamSnack для создания современных веб-приложений
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="/principles" className="btn-primary">
                  Начать изучение
                </Link>
                <Link href="/components" className="btn-secondary">
                  Компоненты
                </Link>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {features.map((feature) => (
                <Link key={feature.href} href={feature.href}>
                  <div className="card hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${feature.color} text-white`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-secondary-600 mb-3">
                          {feature.description}
                        </p>
                        <div className="flex items-center text-primary-600 font-medium">
                          <span>Подробнее</span>
                          <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Quick Start */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Быстрый старт</h2>
              <div className="prose prose-secondary max-w-none">
                <p className="text-secondary-600 mb-4">
                  Snack Uikit предоставляет все необходимые инструменты для создания современных веб-приложений:
                </p>
                <ul className="space-y-2 text-secondary-600">
                  <li>• <strong>Модульная архитектура</strong> - каждый компонент это отдельный npm-пакет</li>
                  <li>• <strong>Поддержка тем</strong> - Light и Dark режимы</li>
                  <li>• <strong>TypeScript</strong> - полная типизация компонентов</li>
                  <li>• <strong>Автоматизированное тестирование</strong> - Chrome и Firefox</li>
                  <li>• <strong>Figma интеграция</strong> - готовые токены дизайна</li>
                </ul>
              </div>
            </div>

            {/* Latest Updates */}
            <div className="card">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Последние обновления</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-secondary-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <h4 className="font-medium text-secondary-900">Модульная архитектура</h4>
                    <p className="text-sm text-secondary-600">Каждый компонент - отдельный npm-пакет с версионностью</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-secondary-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <h4 className="font-medium text-secondary-900">Поддержка тем</h4>
                    <p className="text-sm text-secondary-600">Light и Dark режимы с автоматическим переключением</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
