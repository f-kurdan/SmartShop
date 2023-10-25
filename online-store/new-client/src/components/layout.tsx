import React from 'react'
import Footer from './footer'
import Navbar from './navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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

