import Image from 'next/image'
import React from 'react'

const BannerImage = () => {
  return (
    <div className='relative w-fit max-h-fit mt-7'>
        <Image src="/banner.jpg" alt='баннер с гаджетами' width={850} height={850} className='rounded-3xl object-cover' />
        <div className='absolute text-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>СМОТРЕТЬ ВСЕ ТОВАРЫ</div>
    </div>
  )
}

export default BannerImage