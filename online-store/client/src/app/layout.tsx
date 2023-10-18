import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
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
        <meta name="description" content={"Магазин смартфонов, планшетов, ноутбуков b других гаджетов"} />
      </head>
      <body className='bg-amber-50 fon'>
        <main>
        <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
