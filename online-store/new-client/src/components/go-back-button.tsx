import { NextRouter } from 'next/router'
import React from 'react'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid';


const GoBackButton = ({ router }: { router: NextRouter }) => {
  return (
    <div onClick={() => router.back()} className='transition-all duration-300 bg-white rounded-xl flex justify-center w-60 p-3  hover:shadow-lg hover:shadow-black/30 hover:cursor-pointer active:blur-sm  '>
      <ArrowSmallLeftIcon width={100} height={40} className='text-cyan-400' />
    </div>
  )
}

export default GoBackButton