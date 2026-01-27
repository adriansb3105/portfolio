import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Adrian Serrano | Senior Full Stack Developer – Java | React | AWS',
  description: 'Senior Full Stack Developer with 8+ years of experience specializing in Java, Spring Boot, React, and cloud-native architectures. Building scalable, high-performance enterprise applications.',
  keywords: ['Full Stack Developer', 'Java Developer', 'React Developer', 'Spring Boot', 'Software Engineer', 'Senior Developer', 'Web Development', 'Cloud Architecture', 'Microservices'],
  authors: [{ name: 'Adrian Serrano' }],
  creator: 'Adrian Serrano',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adrianserrano.pro',
    siteName: 'Adrian Serrano Portfolio',
    title: 'Adrian Serrano | Senior Full Stack Developer',
    description: 'Senior Full Stack Developer with 8+ years of experience building scalable enterprise applications with Java, React, and cloud technologies.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adrian Serrano | Senior Full Stack Developer',
    description: 'Senior Full Stack Developer specializing in Java & React. Building scalable solutions with modern technologies.',
    creator: '@adriansb3105',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: '/apple-touch-icon.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
