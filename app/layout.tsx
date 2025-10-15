import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://mid-pacific-cleaning.com'),
  title: 'Mid Pacific Cleaning - Kate McCluskey & Darci Gonzalves',
  description: 'Extraordinary cleaning services in Maui, Hawaii. Professional, reliable, and eco-friendly cleaning solutions for your home and business.',
  keywords: 'cleaning services, Maui, Hawaii, professional cleaning, eco-friendly, residential cleaning, commercial cleaning',
  authors: [{ name: 'Kate McCluskey & Darci Gonzalves' }],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Mid Pacific Cleaning - Maui\'s Premier Cleaning Service',
    description: 'Professional cleaning services in Maui, Hawaii by Kate McCluskey & Darci Gonzalves',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Mid Pacific Cleaning Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mid Pacific Cleaning - Maui\'s Premier Cleaning Service',
    description: 'Professional cleaning services in Maui, Hawaii by Kate McCluskey & Darci Gonzalves',
    images: ['/logo.png'],
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
