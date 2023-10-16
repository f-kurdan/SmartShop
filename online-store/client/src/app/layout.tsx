import './globals.css'
import { Inter } from 'next/font/google'
import Header  from '../components/header'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <body>
        <Header />
        <main>
        {children}
        </main>
      </body>
    </html>
  )
}
