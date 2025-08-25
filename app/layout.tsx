import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Patternist Wiki - Дизайн-система',
  description: 'Документация и руководство по дизайн-системе Patternist Wiki',
  keywords: ['дизайн-система', 'UI', 'UX', 'компоненты', 'паттерны', 'patternist', 'wiki'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-secondary-50">
        {children}
      </body>
    </html>
  )
}
