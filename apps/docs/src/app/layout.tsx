import './globals.css'

import type { Metadata } from 'next'
import type { ChildrenProps } from 'react'

export const metadata: Metadata = {
  title: 'Next.js Tailwind Template',
  description: 'Next.js Tailwind Template',
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html className="h-full" lang="en">
      <body className="bg-white/90">{children}</body>
    </html>
  )
}
