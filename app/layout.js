import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Children } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Sandeep Kumar - Cybersecurity Portfolio',
  description: 'Cybersecurity portfolio showcasing projects, skills, and labs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} cyber-grid bg-background text-foreground antialiased`}>
        <ThemeProvider>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
