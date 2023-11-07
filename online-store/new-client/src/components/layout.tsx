import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import { montserrat, rubik, syne, unbounded } from '@/styles/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className={`${unbounded.className} bg-gradient-to-br from-white via-black to-blue-700 `}>
      <main className='min-h-screen'>
        <Navbar />
        {children}
      </main>
      <Footer />
    </div>
  )
}

