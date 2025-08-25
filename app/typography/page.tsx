'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import CodeBlock from '@/components/CodeBlock'

export default function TypographyPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const fontSizes = [
    { name: 'xs', size: '0.75rem', lineHeight: '1rem', usage: 'Мелкий текст, подписи' },
    { name: 'sm', size: '0.875rem', lineHeight: '1.25rem', usage: 'Второстепенный текст' },
    { name: 'base', size: '1rem', lineHeight: '1.5rem', usage: 'Основной текст' },
    { name: 'lg', size: '1.125rem', lineHeight: '1.75rem', usage: 'Подзаголовки' },
    { name: 'xl', size: '1.25rem', lineHeight: '1.75rem', usage: 'Заголовки секций' },
    { name: '2xl', size: '1.5rem', lineHeight: '2rem', usage: 'Заголовки страниц' },
    { name: '3xl', size: '1.875rem', lineHeight: '2.25rem', usage: 'Главные заголовки' },
    { name: '4xl', size: '2.25rem', lineHeight: '2.5rem', usage: 'Hero заголовки' },
  ]

  const fontWeights = [
    { name: 'Light', weight: '300', usage: 'Тонкий текст' },
    { name: 'Regular', weight: '400', usage: 'Обычный текст' },
    { name: 'Medium', weight: '500', usage: 'Полужирный текст' },
    { name: 'Semibold', weight: '600', usage: 'Полужирные заголовки' },
    { name: 'Bold', weight: '700', usage: 'Жирные заголовки' },
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
                Типографика
              </h1>
              <p className="text-lg text-secondary-600">
                Система шрифтов, размеров и иерархии для консистентного текста
              </p>
            </div>

            {/* Fonts */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Шрифты</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">Inter</h3>
                  <p className="text-secondary-600 mb-2">Основной шрифт для интерфейса</p>
                  <div className="space-y-2">
                    <div className="text-sm font-light">Light (300) - Тонкий текст</div>
                    <div className="text-sm font-normal">Regular (400) - Обычный текст</div>
                    <div className="text-sm font-medium">Medium (500) - Полужирный текст</div>
                    <div className="text-sm font-semibold">Semibold (600) - Полужирные заголовки</div>
                    <div className="text-sm font-bold">Bold (700) - Жирные заголовки</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">JetBrains Mono</h3>
                  <p className="text-secondary-600 mb-2">Моноширинный шрифт для кода</p>
                  <div className="bg-secondary-900 text-secondary-100 p-4 rounded-lg font-mono text-sm">
                    <div>const greeting = "Hello, World!";</div>
                    <div>console.log(greeting);</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Font Sizes */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Размеры шрифтов</h2>
              <div className="space-y-4">
                {fontSizes.map((font) => (
                  <div key={font.name} className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
                    <div className="flex-1">
                      <div className={`text-${font.name} font-semibold text-secondary-900 mb-1`}>
                        {font.name.toUpperCase()} - {font.size}
                      </div>
                      <div className="text-sm text-secondary-600">
                        Line-height: {font.lineHeight} • {font.usage}
                      </div>
                    </div>
                    <div className={`text-${font.name} text-secondary-700`}>
                      Пример текста
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Font Weights */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Начертания</h2>
              <div className="space-y-4">
                {fontWeights.map((weight) => (
                  <div key={weight.name} className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
                    <div>
                      <div className={`font-${weight.weight.toLowerCase()} text-lg text-secondary-900 mb-1`}>
                        {weight.name} ({weight.weight})
                      </div>
                      <div className="text-sm text-secondary-600">{weight.usage}</div>
                    </div>
                    <div className={`font-${weight.weight.toLowerCase()} text-secondary-700`}>
                      Пример текста
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage Examples */}
            <div className="card">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Примеры использования</h2>
              
              <CodeBlock 
                code={`// Tailwind CSS классы
<h1 className="text-4xl font-bold text-secondary-900">
  Главный заголовок
</h1>

<h2 className="text-2xl font-semibold text-secondary-800">
  Заголовок секции
</h2>

<p className="text-base text-secondary-600 leading-relaxed">
  Основной текст с хорошей читаемостью
</p>

<code className="font-mono text-sm bg-secondary-100 px-2 py-1 rounded">
  Моноширинный код
</code>`}
                language="tsx"
                title="Примеры кода"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
