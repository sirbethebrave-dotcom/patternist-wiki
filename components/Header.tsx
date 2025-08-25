'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline'

interface HeaderProps {
  onMenuToggle: () => void
}

export default function Header({ onMenuToggle }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="bg-white border-b border-secondary-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary-100 transition-colors"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
          
          <div className="hidden lg:block">
            <h2 className="text-lg font-semibold text-secondary-900">Документация</h2>
          </div>
        </div>
        
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
            <input
              type="text"
              placeholder="Поиск по документации..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-sm text-secondary-600">
            <span>Версия 1.0.0</span>
          </div>
          <Link 
            href="/admin/login" 
            className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Админка
          </Link>
        </div>
      </div>
    </header>
  )
}
