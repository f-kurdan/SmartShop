import React from 'react'
import Footer from './footer'
import Navbar from './navbar/navbar'
import { montserrat, rubik, syne, unbounded } from '@/styles/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className={`${unbounded.className}  bg-gradient-to-br from-white via-cyan-100 to-purple-100 `}>
      <main className='min-h-screen'>
        <Navbar />
        <div className='flex flex-col justify-center items-center'>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

