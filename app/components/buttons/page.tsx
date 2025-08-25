'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import CodeBlock from '@/components/CodeBlock'

export default function ButtonsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const buttonVariants = [
    {
      name: 'Primary',
      className: 'btn-primary',
      description: 'Основные действия',
      example: '<button className="btn-primary">Сохранить</button>'
    },
    {
      name: 'Secondary',
      className: 'btn-secondary',
      description: 'Второстепенные действия',
      example: '<button className="btn-secondary">Отмена</button>'
    },
    {
      name: 'Outline',
      className: 'border border-primary-600 text-primary-600 hover:bg-primary-50 font-medium py-2 px-4 rounded-lg transition-colors',
      description: 'Альтернативные действия',
      example: '<button className="border border-primary-600 text-primary-600 hover:bg-primary-50 font-medium py-2 px-4 rounded-lg">Редактировать</button>'
    },
    {
      name: 'Ghost',
      className: 'text-secondary-600 hover:bg-secondary-100 font-medium py-2 px-4 rounded-lg transition-colors',
      description: 'Минималистичные действия',
      example: '<button className="text-secondary-600 hover:bg-secondary-100 font-medium py-2 px-4 rounded-lg">Удалить</button>'
    }
  ]

  const buttonSizes = [
    {
      name: 'Small',
      className: 'py-1 px-3 text-sm',
      description: 'Компактные кнопки'
    },
    {
      name: 'Medium',
      className: 'py-2 px-4',
      description: 'Стандартные кнопки'
    },
    {
      name: 'Large',
      className: 'py-3 px-6 text-lg',
      description: 'Крупные кнопки'
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
                Кнопки
              </h1>
              <p className="text-lg text-secondary-600">
                Различные типы кнопок для разных сценариев использования
              </p>
            </div>

            {/* Button Variants */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Варианты кнопок</h2>
              <div className="space-y-6">
                {buttonVariants.map((variant) => (
                  <div key={variant.name} className="border-b border-secondary-200 pb-6 last:border-b-0">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                          {variant.name}
                        </h3>
                        <p className="text-secondary-600">{variant.description}</p>
                      </div>
                      <button className={variant.className}>
                        {variant.name}
                      </button>
                    </div>
                    <CodeBlock 
                      code={variant.example}
                      language="tsx"
                      title="Пример кода"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Button Sizes */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Размеры кнопок</h2>
              <div className="space-y-6">
                {buttonSizes.map((size) => (
                  <div key={size.name} className="border-b border-secondary-200 pb-6 last:border-b-0">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                          {size.name}
                        </h3>
                        <p className="text-secondary-600">{size.description}</p>
                      </div>
                      <button className={`btn-primary ${size.className}`}>
                        Кнопка
                      </button>
                    </div>
                    <CodeBlock 
                      code={`<button className="btn-primary ${size.className}">
  Кнопка
</button>`}
                      language="tsx"
                      title="Пример кода"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Button States */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Состояния кнопок</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-4">Интерактивные состояния</h3>
                  <div className="space-y-3">
                    <button className="btn-primary">Обычное состояние</button>
                    <button className="btn-primary opacity-50 cursor-not-allowed" disabled>
                      Отключенная кнопка
                    </button>
                    <button className="btn-primary animate-pulse">
                      Загрузка...
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-4">С иконками</h3>
                  <div className="space-y-3">
                    <button className="btn-primary flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      <span>Добавить</span>
                    </button>
                    <button className="btn-secondary flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      <span>Загрузить</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Guidelines */}
            <div className="card">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Рекомендации по использованию</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">Когда использовать</h3>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• <strong>Primary</strong> - Основные действия (Сохранить, Отправить)</li>
                    <li>• <strong>Secondary</strong> - Второстепенные действия (Отмена, Назад)</li>
                    <li>• <strong>Outline</strong> - Альтернативные действия (Редактировать)</li>
                    <li>• <strong>Ghost</strong> - Минималистичные действия (Удалить)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">Доступность</h3>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• Минимальный размер касания 44px</li>
                    <li>• Достаточный контраст цветов</li>
                    <li>• Поддержка клавиатурной навигации</li>
                    <li>• Описательные aria-label для иконок</li>
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
