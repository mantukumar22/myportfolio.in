import React from 'react'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mantu Kumar — Full Stack & Agentic AI Developer',
  description:
    'Portfolio of Mantu Kumar — Full Stack Developer and Agentic AI Developer from Patna, India. Built 8+ projects, competed in 3 hackathons, open to freelance and full-time.',
  keywords: [
    'Mantu Kumar',
    'Full Stack Developer',
    'Agentic AI Developer',
    'MERN Stack',
    'React',
    'Node.js',
    'Patna',
    'Portfolio',
  ],
  authors: [{ name: 'Mantu Kumar' }],
  openGraph: {
    title: 'Mantu Kumar — Full Stack & Agentic AI Developer',
    description: "Built Agentic AI & 5+ Startup Websites | BCA'27",
    url: 'https://mantukumar.dev',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${cormorantGaramond.variable} font-sans antialiased bg-white text-slate-900 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
