'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import CodeBlock from '@/components/CodeBlock'

export default function AboutPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const features = [
    {
      title: 'Модульная архитектура',
      description: 'Каждый компонент - отдельный npm-пакет с собственной версионностью',
      icon: '📦',
      details: [
        'Независимая версионность компонентов',
        'Минимальные зависимости',
        'Гибкая установка только нужных компонентов'
      ]
    },
    {
      title: 'Поддержка тем',
      description: 'Light и Dark режимы с автоматическим переключением',
      icon: '🌓',
      details: [
        'Автоматическое переключение тем',
        'Figma токены для дизайна',
        'Консистентная цветовая схема'
      ]
    },
    {
      title: 'TypeScript',
      description: 'Полная типизация всех компонентов и утилит',
      icon: '🔷',
      details: [
        'Строгая типизация пропсов',
        'IntelliSense поддержка',
        'Автодополнение в IDE'
      ]
    },
    {
      title: 'Автоматизированное тестирование',
      description: 'Тестирование в Chrome и Firefox',
      icon: '🧪',
      details: [
        'Cross-browser тестирование',
        'Автоматические проверки',
        'Стабильная работа во всех браузерах'
      ]
    }
  ]

  const team = [
    { name: 'Трифонов Михаил', role: 'Development Team' },
    { name: 'Ахременко Григорий', role: 'Development Team' },
    { name: 'Белов Алексей', role: 'Development Team' },
    { name: 'Ершов Никита', role: 'Development Team' },
    { name: 'Козлова Анна', role: 'Development Team' },
    { name: 'Хлупин Сергей', role: 'Development Team' },
    { name: 'Белявский Илья', role: 'Development Team' },
    { name: 'Малокостов Игорь', role: 'Design Team' },
    { name: 'Алексеев Алексей', role: 'Design Team' }
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
                О Snack Uikit
              </h1>
              <p className="text-lg text-secondary-600">
                Библиотека компонентов компании Cloud.ru и сообщества TeamSnack
              </p>
            </div>

            {/* Описание */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Описание</h2>
              <p className="text-secondary-600 mb-4">
                Snack Uikit - это современная библиотека компонентов, разработанная компанией Cloud.ru 
                и сообществом TeamSnack. Каждый компонент представляет собой отдельный npm-пакет 
                со своей версионностью и зависимостями, что обеспечивает максимальную гибкость 
                и минимальный размер бандла.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-2">Основные преимущества:</h3>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• Модульная архитектура</li>
                    <li>• Поддержка Light/Dark тем</li>
                    <li>• TypeScript из коробки</li>
                    <li>• Автоматизированное тестирование</li>
                    <li>• Figma интеграция</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-2">Поддерживаемые браузеры:</h3>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• Chrome</li>
                    <li>• Firefox</li>
                    <li>• Chromium</li>
                    <li>• Safari</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Особенности */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Ключевые особенности</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature) => (
                  <div key={feature.title} className="border border-secondary-200 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl">{feature.icon}</span>
                      <h3 className="font-semibold text-secondary-900">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-secondary-600 mb-3">{feature.description}</p>
                    <ul className="space-y-1">
                      {feature.details.map((detail, index) => (
                        <li key={index} className="text-xs text-secondary-500">• {detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Установка и использование */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Установка и использование</h2>
              
              <CodeBlock 
                code={`# Установка компонента
npm i --save @snack-uikit/button

# Использование
import { ButtonFilled } from '@snack-uikit/button';
import { useThemeConfig } from '@snack-uikit/utils';
import DefaultBrand from '@snack-uikit/figma-tokens/build/css/brand.module.css';

const themeMap = {
  Light: DefaultBrand.light,
  Dark: DefaultBrand.dark,
};

function App() {
  const { themeClassName } = useThemeConfig({
    themeMap, 
    defaultTheme: 'Light'
  });
  
  return (
    <div className={themeClassName}>
      <ButtonFilled label='OK'/>
    </div>
  );
}`}
                language="tsx"
                title="Пример использования"
              />
            </div>

            {/* Команда */}
            <div className="card">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Команда разработки</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {team.map((member) => (
                  <div key={member.name} className="text-center p-4 bg-secondary-50 rounded-lg">
                    <div className="font-medium text-secondary-900">{member.name}</div>
                    <div className="text-sm text-secondary-600">{member.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
