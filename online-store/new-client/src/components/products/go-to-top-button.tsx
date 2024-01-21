import { ArrowUpIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

const GoToTopButton = () => {
  // TODO: Add smooth scrolling
  return (
    <div className='transition-all duration-300 bg-black border-2 rounded-full absolute bottom-6 right-16 p-2 hover:outline hover:outline-8 hover:outline-cyan-200'>
      <Link href='#' >
        <ArrowUpIcon width={40} height={40} color='white' />
      </Link>
    </div>
  )
}

export default GoToTopButton