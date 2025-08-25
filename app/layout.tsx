import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Snack Uikit - Дизайн-система Wiki',
  description: 'Документация и руководство по дизайн-системе Snack Uikit от Cloud.ru и TeamSnack',
  keywords: ['дизайн-система', 'UI', 'UX', 'компоненты', 'паттерны', 'snack uikit', 'cloud.ru', 'teamsnack'],
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
