'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

export default function AdminLoginPage() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Простая проверка (в реальном проекте используйте безопасную аутентификацию)
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      // Сохраняем в localStorage (в реальном проекте используйте JWT)
      localStorage.setItem('adminAuthenticated', 'true')
      router.push('/admin/dashboard')
    } else {
      setError('Неверные учетные данные')
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Заголовок */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-secondary-900 mb-2">
              Snack Uikit Admin
            </h1>
            <p className="text-secondary-600">
              Панель администратора
            </p>
          </div>

          {/* Форма входа */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {/* Поле пользователя */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-secondary-700 mb-2">
                Имя пользователя
              </label>
              <input
                id="username"
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Введите имя пользователя"
                required
              />
            </div>

            {/* Поле пароля */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-secondary-700 mb-2">
                Пароль
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="w-full px-4 py-3 pr-12 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Введите пароль"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-400 hover:text-secondary-600"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Кнопка входа */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
            >
              {isLoading ? 'Вход...' : 'Войти'}
            </button>
          </form>

          {/* Подсказка */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Тестовые данные:</strong><br />
              Логин: <code>admin</code><br />
              Пароль: <code>admin123</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
