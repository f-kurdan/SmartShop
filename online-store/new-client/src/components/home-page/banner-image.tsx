import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BannerImage = () => {
  return (
    <Link href="/catalog">
      <div className='text-white group relative rounded-3xl w-fit max-h-fit mt-7 overflow-hidden cursor-pointer'>
        <Image src="/banner.jpg" alt='баннер с гаджетами' width={850} height={850}
          className='rounded-3xl object-cover transition duration-500 group-hover:scale-110 ' />
        <div className='absolute transition duration-500 text-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  opacity-5 group-hover:opacity-100'>СМОТРЕТЬ ВСЕ ТОВАРЫ</div>
      </div>
    </Link>
  )
}

export default BannerImage