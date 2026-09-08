import React from 'react'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Inter, Poppins } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AxarTech | Transforming Ideas into Digital Reality',
  description: 'Premium IT company specializing in web development, mobile apps, UI/UX design, and digital solutions.',
  generator: 'v0.app',
}

import ScrollProgress from '@/components/ui/scroll-progress'
import FloatingActionBar from '@/components/floating-action-bar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`smooth-scroll ${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-background font-inter antialiased text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <ScrollProgress />
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
          </div>
          <FloatingActionBar />
        </ThemeProvider>
      </body>
    </html>
  )
}
