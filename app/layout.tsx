import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Viet Kieu',
  description: 'Directory of Vietnamese businesses and creators',
  icons: {
    icon: '/images/icons/favicon.ico',
    apple: '/images/icons/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Playfair+Display:ital@1&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
