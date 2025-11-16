import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { AuthInitializer } from '@/components/auth-initializer'

const geistSans = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Commodities Management',
  description: 'Manage commodities with ease'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geistSans.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system"
          enableSystem
          storageKey="theme-preference"
          forcedTheme={undefined}
        >
          <AuthInitializer />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
