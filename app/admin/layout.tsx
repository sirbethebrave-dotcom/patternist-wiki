import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Patternist Wiki Admin',
  description: 'Панель администратора Patternist Wiki',
}

export default function AdminLayout({
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
