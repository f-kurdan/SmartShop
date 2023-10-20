import React from 'react'

const categories = [
  { name: "ТЕЛЕФОНЫ", src: "phone.png" },
  { name: "НАУШНИКИ", src: "headphone.png" },
  { name: "ПЛАНШЕТЫ", src: "tablet.png" },
  { name: "СМАРТ-ЧАСЫ", src: "watch.png" },
  { name: "НОУТБУКИ", src: "laptop.png" },
  { name: "КАМЕРЫ", src: "camera.png" },
]

const Categories = () => {
  return (
    <div className='grid grid-cols-3 gap-6 w-7/12 mt-8 relative '>
      {categories.map((cat, index) => (
        <div key={index} className='w-60 flex flex-col justify-center items-center p-7 bg-white  min-w-fit rounded-3xl shadow-lg transition duration-300 hover:scale-105 hover:cursor-pointer ' >
          <img className='w-32 h-32'  src={cat.src} alt="category" />
          <div className='mt-3 text-base text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600' >{cat.name}</div>
        </div>
      ))}
    </div>
  )
}

export default Categories