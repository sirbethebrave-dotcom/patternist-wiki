'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  ChartBarIcon, 
  DocumentTextIcon, 
  CogIcon, 
  UsersIcon,
  ArrowRightIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/outline'

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Проверяем аутентификацию
    const auth = localStorage.getItem('adminAuthenticated')
    if (!auth) {
      router.push('/admin/login')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated')
    router.push('/admin/login')
  }

  const stats = [
    { name: 'Всего страниц', value: '12', icon: DocumentTextIcon, color: 'bg-blue-500' },
    { name: 'Компонентов', value: '45', icon: CogIcon, color: 'bg-green-500' },
    { name: 'Посетителей', value: '1,234', icon: UsersIcon, color: 'bg-purple-500' },
    { name: 'Обновлений', value: '8', icon: ChartBarIcon, color: 'bg-orange-500' }
  ]

  const recentPages = [
    { title: 'Кнопки', path: '/components/buttons', lastModified: '2 часа назад' },
    { title: 'Формы', path: '/components/forms', lastModified: '1 день назад' },
    { title: 'Цвета', path: '/colors', lastModified: '3 дня назад' },
    { title: 'Типографика', path: '/typography', lastModified: '1 неделю назад' }
  ]

  if (!isAuthenticated) {
    return <div>Загрузка...</div>
  }

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-secondary-900">Snack Uikit Admin</h1>
              <p className="text-sm text-secondary-600">Панель управления</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-secondary-600">Администратор</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm"
              >
                Выйти
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-lg shadow-sm border border-secondary-200 p-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${stat.color} text-white`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-secondary-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-secondary-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Быстрые действия */}
          <div className="bg-white rounded-lg shadow-sm border border-secondary-200 p-6">
            <h2 className="text-lg font-semibold text-secondary-900 mb-4">Быстрые действия</h2>
            <div className="space-y-3">
              <Link href="/admin/pages/new" className="flex items-center justify-between p-3 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors">
                <div className="flex items-center">
                  <PlusIcon className="w-5 h-5 text-primary-600 mr-3" />
                  <span className="text-primary-700 font-medium">Создать новую страницу</span>
                </div>
                <ArrowRightIcon className="w-4 h-4 text-primary-600" />
              </Link>
              
              <Link href="/admin/components" className="flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                <div className="flex items-center">
                  <CogIcon className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-green-700 font-medium">Управление компонентами</span>
                </div>
                <ArrowRightIcon className="w-4 h-4 text-green-600" />
              </Link>
              
              <Link href="/admin/settings" className="flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                <div className="flex items-center">
                  <CogIcon className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-purple-700 font-medium">Настройки сайта</span>
                </div>
                <ArrowRightIcon className="w-4 h-4 text-purple-600" />
              </Link>
            </div>
          </div>

          {/* Последние страницы */}
          <div className="bg-white rounded-lg shadow-sm border border-secondary-200 p-6">
            <h2 className="text-lg font-semibold text-secondary-900 mb-4">Последние страницы</h2>
            <div className="space-y-3">
              {recentPages.map((page) => (
                <div key={page.path} className="flex items-center justify-between p-3 border border-secondary-200 rounded-lg">
                  <div>
                    <h3 className="font-medium text-secondary-900">{page.title}</h3>
                    <p className="text-sm text-secondary-600">{page.lastModified}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Link href={`/admin/pages/edit${page.path}`} className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                      <PencilIcon className="w-4 h-4" />
                    </Link>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Навигация по разделам */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-secondary-200 p-6">
          <h2 className="text-lg font-semibold text-secondary-900 mb-4">Управление разделами</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/admin/pages" className="p-4 border border-secondary-200 rounded-lg hover:bg-secondary-50 transition-colors">
              <DocumentTextIcon className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="font-medium text-secondary-900">Страницы</h3>
              <p className="text-sm text-secondary-600">Управление контентом</p>
            </Link>
            
            <Link href="/admin/components" className="p-4 border border-secondary-200 rounded-lg hover:bg-secondary-50 transition-colors">
              <CogIcon className="w-8 h-8 text-green-600 mb-2" />
              <h3 className="font-medium text-secondary-900">Компоненты</h3>
              <p className="text-sm text-secondary-600">Библиотека компонентов</p>
            </Link>
            
            <Link href="/admin/analytics" className="p-4 border border-secondary-200 rounded-lg hover:bg-secondary-50 transition-colors">
              <ChartBarIcon className="w-8 h-8 text-purple-600 mb-2" />
              <h3 className="font-medium text-secondary-900">Аналитика</h3>
              <p className="text-sm text-secondary-600">Статистика посещений</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
