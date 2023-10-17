import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/header'
import Footer from '@/components/footer'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>SmartShop</title>
        <meta name="description" content={"Магазин смартфонов, планшетов, ноутбуков"} />
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
