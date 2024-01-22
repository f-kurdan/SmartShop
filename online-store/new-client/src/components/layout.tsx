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
    <div className={`${unbounded.className} bg-gradient-to-br from-white  to-neutral-200 `}>
      <main className=''>
        <Navbar />
        <div className='flex flex-col items-center min-h-[90vh] mx-auto'>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

