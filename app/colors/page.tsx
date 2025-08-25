'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import CodeBlock from '@/components/CodeBlock'

export default function ColorsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const colorPalette = {
    primary: [
      { name: '50', hex: '#eff6ff', usage: 'Фон' },
      { name: '100', hex: '#dbeafe', usage: 'Светлый фон' },
      { name: '200', hex: '#bfdbfe', usage: 'Границы' },
      { name: '300', hex: '#93c5fd', usage: 'Hover состояния' },
      { name: '400', hex: '#60a5fa', usage: 'Акцент' },
      { name: '500', hex: '#3b82f6', usage: 'Основной' },
      { name: '600', hex: '#2563eb', usage: 'Активный' },
      { name: '700', hex: '#1d4ed8', usage: 'Нажатый' },
      { name: '800', hex: '#1e40af', usage: 'Текст' },
      { name: '900', hex: '#1e3a8a', usage: 'Заголовки' },
    ],
    secondary: [
      { name: '50', hex: '#f8fafc', usage: 'Фон страницы' },
      { name: '100', hex: '#f1f5f9', usage: 'Карточки' },
      { name: '200', hex: '#e2e8f0', usage: 'Границы' },
      { name: '300', hex: '#cbd5e1', usage: 'Разделители' },
      { name: '400', hex: '#94a3b8', usage: 'Плейсхолдеры' },
      { name: '500', hex: '#64748b', usage: 'Второстепенный текст' },
      { name: '600', hex: '#475569', usage: 'Основной текст' },
      { name: '700', hex: '#334155', usage: 'Заголовки' },
      { name: '800', hex: '#1e293b', usage: 'Темный текст' },
      { name: '900', hex: '#0f172a', usage: 'Основные заголовки' },
    ]
  }

  const semanticColors = [
    { name: 'Success', hex: '#10b981', usage: 'Успешные действия' },
    { name: 'Warning', hex: '#f59e0b', usage: 'Предупреждения' },
    { name: 'Error', hex: '#ef4444', usage: 'Ошибки' },
    { name: 'Info', hex: '#3b82f6', usage: 'Информация' },
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
                Цветовая система
              </h1>
              <p className="text-lg text-secondary-600">
                Единая цветовая палитра для создания консистентных интерфейсов
              </p>
            </div>

            {/* Primary Colors */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Основные цвета</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {colorPalette.primary.map((color) => (
                  <div key={color.name} className="text-center">
                    <div 
                      className="w-full h-20 rounded-lg mb-2 border border-secondary-200"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <div className="text-sm font-medium text-secondary-900">{color.name}</div>
                    <div className="text-xs text-secondary-600 font-mono">{color.hex}</div>
                    <div className="text-xs text-secondary-500 mt-1">{color.usage}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Colors */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Нейтральные цвета</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {colorPalette.secondary.map((color) => (
                  <div key={color.name} className="text-center">
                    <div 
                      className="w-full h-20 rounded-lg mb-2 border border-secondary-200"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <div className="text-sm font-medium text-secondary-900">{color.name}</div>
                    <div className="text-xs text-secondary-600 font-mono">{color.hex}</div>
                    <div className="text-xs text-secondary-500 mt-1">{color.usage}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Semantic Colors */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Семантические цвета</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {semanticColors.map((color) => (
                  <div key={color.name} className="flex items-center space-x-4 p-4 bg-secondary-50 rounded-lg">
                    <div 
                      className="w-12 h-12 rounded-lg"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <div>
                      <div className="font-medium text-secondary-900">{color.name}</div>
                      <div className="text-sm text-secondary-600 font-mono">{color.hex}</div>
                      <div className="text-sm text-secondary-500">{color.usage}</div>
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
<button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg">
  Кнопка
</button>

<div className="bg-secondary-100 border border-secondary-200 p-4 rounded-lg">
  Карточка
</div>

<div className="text-success-600">
  Успешное сообщение
</div>`}
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
