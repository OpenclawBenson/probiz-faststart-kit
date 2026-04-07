import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ProBiz FastStart Kit - Recruit Your First Contractor in 14 Days',
  description: 'The complete recruiting system for new ProBiz members. 10 pre-written emails, conversation scripts, social media templates, and 30-day action plan.',
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
