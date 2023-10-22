import Link from 'next/link'
import React from 'react'

const categories = [
  { slug: "phones", name: "ТЕЛЕФОНЫ", src: "phone.png" },
  { slug: "headphones", name: "НАУШНИКИ", src: "headphone.png" },
  { slug: "tablet", name: "ПЛАНШЕТЫ", src: "tablet.png" },
  { slug: "watch",name: "СМАРТ-ЧАСЫ", src: "watch.png" },
  { slug: "laptop",name: "НОУТБУКИ", src: "laptop.png" },
  { slug: "camera",name: "КАМЕРЫ", src: "camera.png" },
]

const Categories = () => {
  return (
    <div className='grid grid-cols-3 gap-6 w-7/12 mt-8 mb-14 relative '>
      {categories.map((cat, index) => (
        <Link href={`/${cat.slug}`}>
          <div key={index} className='w-60 flex flex-col justify-center items-center p-7 bg-white  min-w-fit rounded-3xl shadow-lg shadow-black/30 transition duration-500 hover:scale-105 hover:cursor-pointer ' >
            <img className='w-32 h-32' src={cat.src} alt="category" />
            <div className='mt-3 text-base text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-sky-600 to-blue-700 ' >{cat.name}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Categories