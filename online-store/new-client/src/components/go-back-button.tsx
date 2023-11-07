import { NextRouter } from 'next/router'
import React from 'react'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid';


const GoBackButton = ({ router }: { router: NextRouter }) => {
  return (
    <div onClick={() => router.back()} className='bg-slate-50 rounded-xl w-fit text-center inline-block p-3  hover:cursor-pointer hover:outline hover:outline-4 hover:outline-lime-200 active:outline-lime-400 '>
      <ArrowSmallLeftIcon className='w-5 h-5' />
    </div>
  )
}

export default GoBackButton