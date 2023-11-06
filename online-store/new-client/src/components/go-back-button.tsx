import { NextRouter } from 'next/router'
import React from 'react'

const GoBackButton = ({router}:{router:NextRouter}) => {
  return (
    <div onClick={() => router.back()} className='bg-slate-50 rounded-xl w-fit text-center inline-block p-3 hover:cursor-pointer hover:outline hover:outline-2 hover:outline-blue-700'>Назад к списку</div>
  )
}

export default GoBackButton