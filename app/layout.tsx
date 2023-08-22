import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ModelProvider } from '@/components/model-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AIForge',
  description: 'A SaaS application for the creation and analysis of a wide array of AI functionalities.',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body className={inter.className}>
          <ModelProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
