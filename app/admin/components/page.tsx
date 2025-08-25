'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  PlusIcon, 
  PencilIcon, 
  TrashIcon, 
  EyeIcon,
  CogIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export default function AdminComponentsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [components, setComponents] = useState([
    {
      id: 1,
      name: 'Button',
      category: 'Basic',
      status: 'active',
      version: '1.2.0',
      lastUpdated: '2 часа назад',
      description: 'Основной компонент кнопки'
    },
    {
      id: 2,
      name: 'Input',
      category: 'Form',
      status: 'active',
      version: '1.1.5',
      lastUpdated: '1 день назад',
      description: 'Поле ввода текста'
    },
    {
      id: 3,
      name: 'Modal',
      category: 'Overlay',
      status: 'draft',
      version: '0.9.2',
      lastUpdated: '3 дня назад',
      description: 'Модальное окно'
    },
    {
      id: 4,
      name: 'Card',
      category: 'Layout',
      status: 'active',
      version: '1.0.1',
      lastUpdated: '1 неделю назад',
      description: 'Карточка контента'
    }
  ])
  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem('adminAuthenticated')
    if (!auth) {
      router.push('/admin/login')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleDelete = (id: number) => {
    if (confirm('Вы уверены, что хотите удалить этот компонент?')) {
      setComponents(components.filter(comp => comp.id !== id))
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircleIcon className="w-4 h-4 text-green-500" />
      case 'draft':
        return <ExclamationTriangleIcon className="w-4 h-4 text-yellow-500" />
      default:
        return <ExclamationTriangleIcon className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Активен'
      case 'draft':
        return 'Черновик'
      default:
        return 'Неизвестно'
    }
  }

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
              <h1 className="text-2xl font-bold text-secondary-900">Управление компонентами</h1>
              <p className="text-sm text-secondary-600">Библиотека компонентов Snack Uikit</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/admin/dashboard" className="text-secondary-600 hover:text-secondary-900">
                ← Назад к дашборду
              </Link>
              <Link href="/admin/components/new" className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center">
                <PlusIcon className="w-4 h-4 mr-2" />
                Добавить компонент
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Фильтры */}
        <div className="bg-white rounded-lg shadow-sm border border-secondary-200 p-6 mb-6">
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">Категория</label>
              <select className="border border-secondary-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="">Все категории</option>
                <option value="Basic">Basic</option>
                <option value="Form">Form</option>
                <option value="Layout">Layout</option>
                <option value="Overlay">Overlay</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">Статус</label>
              <select className="border border-secondary-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="">Все статусы</option>
                <option value="active">Активен</option>
                <option value="draft">Черновик</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">Поиск</label>
              <input
                type="text"
                placeholder="Поиск компонентов..."
                className="border border-secondary-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Таблица компонентов */}
        <div className="bg-white rounded-lg shadow-sm border border-secondary-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-secondary-200">
            <h2 className="text-lg font-semibold text-secondary-900">Компоненты ({components.length})</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-secondary-200">
              <thead className="bg-secondary-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Компонент
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Категория
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Статус
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Версия
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Обновлен
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-secondary-200">
                {components.map((component) => (
                  <tr key={component.id} className="hover:bg-secondary-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-secondary-900">{component.name}</div>
                        <div className="text-sm text-secondary-500">{component.description}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {component.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getStatusIcon(component.status)}
                        <span className="ml-2 text-sm text-secondary-900">
                          {getStatusText(component.status)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-900">
                      {component.version}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-500">
                      {component.lastUpdated}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <Link href={`/admin/components/${component.id}`} className="text-blue-600 hover:text-blue-900">
                          <EyeIcon className="w-4 h-4" />
                        </Link>
                        <Link href={`/admin/components/${component.id}/edit`} className="text-green-600 hover:text-green-900">
                          <PencilIcon className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(component.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
