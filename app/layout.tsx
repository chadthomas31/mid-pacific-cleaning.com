import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mid Pacific Cleaning - Kate McCluskey & Darci Gonzalves',
  description: 'Extraordinary cleaning services in Maui, Hawaii. Professional, reliable, and eco-friendly cleaning solutions for your home and business.',
  keywords: 'cleaning services, Maui, Hawaii, professional cleaning, eco-friendly, residential cleaning, commercial cleaning',
  authors: [{ name: 'Kate McCluskey & Darci Gonzalves' }],
  openGraph: {
    title: 'Mid Pacific Cleaning - Maui\'s Premier Cleaning Service',
    description: 'Professional cleaning services in Maui, Hawaii by Kate McCluskey & Darci Gonzalves',
    type: 'website',
    locale: 'en_US',
  },
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
