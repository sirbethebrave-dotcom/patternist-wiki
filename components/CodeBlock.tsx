'use client'

import { useState } from 'react'
import { ClipboardDocumentIcon, CheckIcon } from '@heroicons/react/24/outline'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
}

export default function CodeBlock({ code, language = 'tsx', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="my-6">
      {title && (
        <div className="bg-secondary-100 px-4 py-2 rounded-t-lg border-b border-secondary-200">
          <span className="text-sm font-medium text-secondary-700">{title}</span>
        </div>
      )}
      <div className="relative">
        <pre className={`bg-secondary-900 text-secondary-100 p-4 rounded-lg overflow-x-auto ${title ? 'rounded-t-none' : ''}`}>
          <code className={`language-${language}`}>{code}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-2 rounded bg-secondary-800 hover:bg-secondary-700 transition-colors"
          title="Копировать код"
        >
          {copied ? (
            <CheckIcon className="w-4 h-4 text-green-400" />
          ) : (
            <ClipboardDocumentIcon className="w-4 h-4 text-secondary-300" />
          )}
        </button>
      </div>
    </div>
  )
}
