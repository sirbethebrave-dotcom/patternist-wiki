'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import { 
  LightBulbIcon,
  EyeIcon,
  CursorArrowRaysIcon,
  ShieldCheckIcon,
  SparklesIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

export default function PrinciplesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const principles = [
    {
      title: 'Консистентность',
      description: 'Все элементы интерфейса должны следовать единым правилам и паттернам',
      icon: SparklesIcon,
      color: 'bg-blue-500',
      examples: [
        'Использование единой цветовой палитры',
        'Консистентная типографика',
        'Единообразные отступы и размеры'
      ]
    },
    {
      title: 'Доступность',
      description: 'Интерфейс должен быть доступен для всех пользователей',
      icon: ShieldCheckIcon,
      color: 'bg-green-500',
      examples: [
        'Поддержка клавиатурной навигации',
        'Контрастные цвета',
        'Альтернативный текст для изображений'
      ]
    }
  ]

  return (
    <div className="flex h-screen bg-secondary-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-secondary-900 mb-4">
                Принципы дизайн-системы
              </h1>
              <p className="text-lg text-secondary-600">
                Основные принципы, которые лежат в основе Patternist
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {principles.map((principle, index) => (
                <div key={index} className="card">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`p-3 rounded-lg ${principle.color} text-white`}>
                      <principle.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-secondary-600">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

