'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Link from 'next/link'
import { 
  CubeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline'

export default function ComponentsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const componentCategories = [
    {
      title: 'Кнопки',
      description: 'Различные типы кнопок для разных сценариев использования',
      href: '/components/buttons',
      icon: CubeIcon,
      status: 'ready',
      count: 8
    },
    {
      title: 'Формы',
      description: 'Компоненты для создания интерактивных форм',
      href: '/components/forms',
      icon: CubeIcon,
      status: 'ready',
      count: 12
    },
    {
      title: 'Навигация',
      description: 'Элементы навигации и меню',
      href: '/components/navigation',
      icon: CubeIcon,
      status: 'ready',
      count: 6
    },
    {
      title: 'Карточки',
      description: 'Контейнеры для отображения контента',
      href: '/components/cards',
      icon: CubeIcon,
      status: 'ready',
      count: 4
    },
    {
      title: 'Модальные окна',
      description: 'Диалоговые окна и попапы',
      href: '/components/modals',
      icon: CubeIcon,
      status: 'in-progress',
      count: 3
    },
    {
      title: 'Уведомления',
      description: 'Система уведомлений и алертов',
      href: '/components/notifications',
      icon: CubeIcon,
      status: 'planned',
      count: 5
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
                Компоненты
              </h1>
              <p className="text-lg text-secondary-600">
                Библиотека переиспользуемых UI компонентов с полной документацией
              </p>
            </div>

            {/* Component Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {componentCategories.map((category) => (
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
                              • {category.count} компонентов
                            </span>
                          </div>
                        </div>
                      </div>
                      <ArrowRightIcon className="w-5 h-5 text-secondary-400 group-hover:text-primary-600 transition-colors" />
                    </div>
                    <p className="text-secondary-600 mb-4">
                      {category.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Usage Guidelines */}
            <div className="card">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Рекомендации по использованию
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-2">Принципы</h3>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• Используйте компоненты консистентно</li>
                    <li>• Следуйте принципам доступности</li>
                    <li>• Адаптируйте под контекст использования</li>
                    <li>• Тестируйте на разных устройствах</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-2">Разработка</h3>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• Все компоненты доступны в npm пакете</li>
                    <li>• Поддержка TypeScript</li>
                    <li>• Полная документация API</li>
                    <li>• Примеры использования</li>
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
