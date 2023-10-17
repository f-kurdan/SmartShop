import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/header'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>SmartShop</title>
        <meta name="description" content={"Магазин смартфонов, смартчасов, ноутбуков"} />
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
