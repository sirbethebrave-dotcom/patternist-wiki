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
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #eff6ff 0%, #f1f5f9 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{ maxWidth: '28rem', width: '100%' }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          padding: '2rem'
        }}>
          {/* Заголовок */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ 
              fontSize: '1.875rem', 
              fontWeight: 'bold', 
              color: '#1e293b', 
              marginBottom: '0.5rem' 
            }}>
              Patternist Wiki Admin
            </h1>
            <p style={{ color: '#64748b' }}>
              Панель администратора
            </p>
          </div>

          {/* Форма входа */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {error && (
              <div style={{
                backgroundColor: '#fef2f2',
                border: '1px solid #fecaca',
                color: '#dc2626',
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem'
              }}>
                {error}
              </div>
            )}

            {/* Поле пользователя */}
            <div>
              <label htmlFor="username" style={{ 
                display: 'block', 
                fontSize: '0.875rem', 
                fontWeight: '500', 
                color: '#475569', 
                marginBottom: '0.5rem' 
              }}>
                Имя пользователя
              </label>
              <input
                id="username"
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '1px solid #cbd5e1',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
                placeholder="Введите имя пользователя"
                required
              />
            </div>

            {/* Поле пароля */}
            <div>
              <label htmlFor="password" style={{ 
                display: 'block', 
                fontSize: '0.875rem', 
                fontWeight: '500', 
                color: '#475569', 
                marginBottom: '0.5rem' 
              }}>
                Пароль
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    paddingRight: '3rem',
                    border: '1px solid #cbd5e1',
                    borderRadius: '0.5rem',
                    fontSize: '1rem'
                  }}
                  placeholder="Введите пароль"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#94a3b8',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {/* Кнопка входа */}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                backgroundColor: isLoading ? '#93c5fd' : '#2563eb',
                color: 'white',
                fontWeight: '500',
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                fontSize: '1rem'
              }}
            >
              {isLoading ? 'Вход...' : 'Войти'}
            </button>
          </form>

          {/* Подсказка */}
          <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            backgroundColor: '#dbeafe',
            border: '1px solid #bfdbfe',
            borderRadius: '0.5rem'
          }}>
            <p style={{ fontSize: '0.875rem', color: '#1d4ed8' }}>
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
