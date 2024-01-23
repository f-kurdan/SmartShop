import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowUpIcon } from '@heroicons/react/24/solid'

const GoToTopButton = () => {

  useEffect(() => {
    window.onscroll = () => {
      const button = document.getElementById('goToTop')
      if (window.scrollY <= 400 && button) {
        button.style.opacity = '0'
      } else if (button) {
        button.style.opacity = '1'
      }
    }

    return () => {
      window.onscroll = null
    }
  }, [])

  return (
    <div id='goToTop' className={`transition-all duration-300 bg-black border-2 rounded-full fixed bottom-10 right-16 p-2 hover:outline hover:outline-8 hover:outline-cyan-200 ${hide ? "opacity-0" : "opacity-100"}`}>
      <Link href='#' >
        <ArrowUpIcon width={40} height={40} color='white' />
      </Link>
    </div>
  )
}

export default GoToTopButton