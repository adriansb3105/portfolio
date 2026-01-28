import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Adrian Serrano | Senior Full Stack Developer',
  description: 'Building, scaling, and maintaining production systems using Java, Spring Boot, React, and AWS. 6+ years of strong background in backend-driven architecture, cloud-native development, and modern DevOps practices.',
  keywords: ['Full Stack Developer', 'Java Developer', 'React Developer', 'Spring Boot', 'Software Engineer', 'Senior Developer', 'Web Development', 'AWS', 'Cloud Architecture', 'Microservices'],
  authors: [{ name: 'Adrian Serrano' }],
  creator: 'Adrian Serrano',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adrianserrano.pro',
    siteName: 'Adrian Serrano Portfolio',
    title: 'Adrian Serrano | Senior Full Stack Developer',
    description: 'Building, scaling, and maintaining production systems using Java, Spring Boot, React, and AWS. 6+ years of strong background in backend-driven architecture, cloud-native development, and modern DevOps practices.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adrian Serrano | Senior Full Stack Developer',
    description: 'Building, scaling, and maintaining production systems using Java, Spring Boot, React, and AWS. 6+ years of strong background in backend-driven architecture, cloud-native development, and modern DevOps practices.',
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
