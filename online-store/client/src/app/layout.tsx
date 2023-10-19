import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import Footer from '@/components/main-page/footer'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Магазин гаджетов | SmartShop</title>
        <meta name="description" content={"Магазин смартфонов, ноутбуков, планшетов  и других гаджетов"} />
        <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet"></link>
      </head>
      <body className='bg-amber-50'>
        <main>
        <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
