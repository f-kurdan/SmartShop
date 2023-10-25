import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-br from-white via-black to-purple-700'>
        <main className='min-h-screen'>
          {children}
        </main>
      </body>
    </html>
  )
}

