import { ArrowUpIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

const GoToTopButton = () => {
  return (
    <div className='bg-black border-2 rounded-lg absolute bottom-8 right-8'>

    <Link href='#' >
        <ArrowUpIcon width={50} height={50} />
    </Link>
    </div>
  )
}

export default GoToTopButton