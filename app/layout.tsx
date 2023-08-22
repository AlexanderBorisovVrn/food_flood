import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import  React from 'react'
const inter = Inter({ subsets: ['cyrillic','latin'] })

export const metadata: Metadata = {
  title: 'FoodFlood',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
