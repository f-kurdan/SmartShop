// import { Metadata } from 'next';
import { Montserrat, Rubik, Syne, Unbounded } from 'next/font/google';
import React, { useState } from 'react'
import Footer from './footer'
import Navbar from './navbar'

// export const metadata: Metadata = {
//   title : "Магазин гаджетов | SmartShop",
//   description: "Магазин смартфонов, ноутбуков, планшетов  и других гаджетов"
// }

const unbounded = Unbounded({ subsets: ["cyrillic", "latin"], weight: "300", display: "swap", variable: '--var-unbounded' });
const montserrat = Montserrat({ subsets: ["cyrillic", "latin"], weight: "500", display: "swap", variable: '--var-mont' });
const rubik = Rubik({ subsets: ["cyrillic", "latin"], display: "swap", variable: '--var-rubik' });
const syne = Syne({ subsets: ["latin"], weight: "800", display: "swap", variable: '--var-syne' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`${unbounded.variable} ${montserrat.variable} ${rubik.variable} ${syne.variable}`}>
      <body className='bg-gradient-to-br from-white via-black to-purple-700'>
        <main className='min-h-screen'>
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

