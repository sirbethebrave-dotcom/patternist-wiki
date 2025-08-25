'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import CodeBlock from '@/components/CodeBlock'

export default function FormsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: '',
    newsletter: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const formComponents = [
    {
      name: 'Text Input',
      description: 'Базовое поле ввода текста',
      example: `<input 
  type="text" 
  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
  placeholder="Введите текст"
/>`
    },
    {
      name: 'Textarea',
      description: 'Многострочное поле ввода',
      example: `<textarea 
  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
  rows={4}
  placeholder="Введите сообщение"
/>`
    },
    {
      name: 'Select',
      description: 'Выпадающий список',
      example: `<select className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
  <option value="">Выберите опцию</option>
  <option value="option1">Опция 1</option>
  <option value="option2">Опция 2</option>
</select>`
    },
    {
      name: 'Checkbox',
      description: 'Флажок для выбора',
      example: `<label className="flex items-center space-x-2">
  <input 
    type="checkbox" 
    className="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
  />
  <span className="text-sm text-secondary-700">Согласен с условиями</span>
</label>`
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
                Формы
              </h1>
              <p className="text-lg text-secondary-600">
                Компоненты для создания интерактивных форм с валидацией
              </p>
            </div>

            {/* Form Components */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Компоненты форм</h2>
              <div className="space-y-6">
                {formComponents.map((component) => (
                  <div key={component.name} className="border-b border-secondary-200 pb-6 last:border-b-0">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                        {component.name}
                      </h3>
                      <p className="text-secondary-600">{component.description}</p>
                    </div>
                    <CodeBlock 
                      code={component.example}
                      language="tsx"
                      title="Пример кода"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Form Example */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Интерактивный пример</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Категория
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Выберите категорию</option>
                    <option value="general">Общие вопросы</option>
                    <option value="support">Техническая поддержка</option>
                    <option value="feedback">Обратная связь</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Введите ваше сообщение..."
                  />
                </div>
                
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                    />
                    <span className="text-sm text-secondary-700">
                      Подписаться на новости
                    </span>
                  </label>
                </div>
                
                <div className="flex space-x-4">
                  <button type="submit" className="btn-primary">
                    Отправить
                  </button>
                  <button type="button" className="btn-secondary">
                    Очистить
                  </button>
                </div>
              </form>
            </div>

            {/* Form Validation */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Валидация форм</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">Клиентская валидация</h3>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• Проверка обязательных полей</li>
                    <li>• Валидация формата email</li>
                    <li>• Проверка минимальной длины</li>
                    <li>• Визуальная обратная связь</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">Серверная валидация</h3>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li>• Проверка данных на сервере</li>
                    <li>• Обработка ошибок</li>
                    <li>• Безопасность данных</li>
                    <li>• Логирование ошибок</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="card">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Лучшие практики</h2>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">✅ Рекомендации</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Используйте понятные лейблы для полей</li>
                    <li>• Группируйте связанные поля</li>
                    <li>• Предоставляйте понятные сообщения об ошибках</li>
                    <li>• Используйте прогресс-индикаторы для длинных форм</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Избегайте</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Слишком длинных форм без разбивки</li>
                    <li>• Неясных сообщений об ошибках</li>
                    <li>• Отсутствия обратной связи</li>
                    <li>• Сложной валидации без объяснений</li>
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
