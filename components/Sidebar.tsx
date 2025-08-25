'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  BookOpenIcon, 
  SwatchIcon, 
  CubeIcon, 
  DocumentTextIcon,
  CommandLineIcon,
  CogIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

interface NavItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children?: NavItem[]
}

const navigation: NavItem[] = [
  {
    name: 'Обзор',
    href: '/',
    icon: BookOpenIcon,
  },
  {
    name: 'О проекте',
    href: '/about',
    icon: BookOpenIcon,
  },
  {
    name: 'Принципы',
    href: '/principles',
    icon: CogIcon,
  },
  {
    name: 'Цвета',
    href: '/colors',
    icon: SwatchIcon,
    children: [
      { name: 'Палитра', href: '/colors/palette', icon: SwatchIcon },
      { name: 'Семантика', href: '/colors/semantics', icon: SwatchIcon },
      { name: 'Доступность', href: '/colors/accessibility', icon: SwatchIcon },
    ]
  },
  {
    name: 'Типографика',
    href: '/typography',
    icon: DocumentTextIcon,
    children: [
      { name: 'Шрифты', href: '/typography/fonts', icon: DocumentTextIcon },
      { name: 'Размеры', href: '/typography/sizes', icon: DocumentTextIcon },
      { name: 'Иерархия', href: '/typography/hierarchy', icon: DocumentTextIcon },
    ]
  },
  {
    name: 'Компоненты',
    href: '/components',
    icon: CubeIcon,
    children: [
      { name: 'Кнопки', href: '/components/buttons', icon: CubeIcon },
      { name: 'Формы', href: '/components/forms', icon: CubeIcon },
      { name: 'Навигация', href: '/components/navigation', icon: CubeIcon },
      { name: 'Карточки', href: '/components/cards', icon: CubeIcon },
      { name: 'Модальные окна', href: '/components/modals', icon: CubeIcon },
    ]
  },
  {
    name: 'Паттерны',
    href: '/patterns',
    icon: CommandLineIcon,
    children: [
      { name: 'Макеты', href: '/patterns/layouts', icon: CommandLineIcon },
      { name: 'Интеракция', href: '/patterns/interaction', icon: CommandLineIcon },
      { name: 'Обратная связь', href: '/patterns/feedback', icon: CommandLineIcon },
    ]
  },
]

interface NavItemProps {
  item: NavItem
  level?: number
}

function NavItemComponent({ item, level = 0 }: NavItemProps) {
  const pathname = usePathname()
  const [isExpanded, setIsExpanded] = useState(pathname.startsWith(item.href))
  const isActive = pathname === item.href
  const hasChildren = item.children && item.children.length > 0

  return (
    <div>
      <Link
        href={item.href}
        className={`sidebar-link ${isActive ? 'active' : ''}`}
        style={{ paddingLeft: `${level * 16 + 12}px` }}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        <item.icon className="w-5 h-5 mr-3" />
        <span className="flex-1">{item.name}</span>
        {hasChildren && (
          isExpanded ? (
            <ChevronDownIcon className="w-4 h-4" />
          ) : (
            <ChevronRightIcon className="w-4 h-4" />
          )
        )}
      </Link>
      
      {hasChildren && isExpanded && (
        <div className="mt-1">
          {item.children!.map((child) => (
            <NavItemComponent key={child.href} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-secondary-200 h-screen overflow-y-auto">
      <div className="p-6 border-b border-secondary-200">
        <h1 className="text-xl font-bold text-primary-600">Patternist Wiki</h1>
        <p className="text-sm text-secondary-600 mt-1">Дизайн-система</p>
      </div>
      
      <nav className="p-4 space-y-1">
        {navigation.map((item) => (
          <NavItemComponent key={item.href} item={item} />
        ))}
      </nav>
    </div>
  )
}
