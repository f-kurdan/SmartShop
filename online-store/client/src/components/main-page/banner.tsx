import { Syne } from 'next/font/google'
import React from 'react'

const Banner = () => {
  return (
    <div className='text-white relative bg-transparent rounded-3xl'>
      <div style={{"fontFamily": "Syne"}} className='text-7xl'>
        SmartShop
      </div>
      <div  className='text-2xl text-center'>
        магазин гаджетов
      </div>
    </div>
  )
}

export default Banner