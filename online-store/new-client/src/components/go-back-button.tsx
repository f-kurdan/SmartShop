import { NextRouter } from 'next/router'
import React from 'react'

const GoBackButton = ({router}:{router:NextRouter}) => {
  return (
    <div onClick={() => router.back()} className='bg-slate-50 border-solid w-1/12 text-center border-black border-2 rounded-lg inline-block p-3'>Назад</div>
  )
}

export default GoBackButton