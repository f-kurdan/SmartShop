import React from 'react'

const categories = [
  { name: "Телефоны", src: "phone.png" },
  { name: "Наушники", src: "headphone.png" },
  { name: "Планшеты", src: "tablet.png" },
  { name: "Часы", src: "watch.png" },
  { name: "Ноутбуки", src: "laptop.png" },
  { name: "Камеры", src: "camera.png" },
]

const Categories = () => {
  return (
    <div className='grid grid-cols-3 gap-5 w-11/12 mx-12 mt-12 relative '>
      {categories.map((cat, index) => (
        <div key={index} className='flex flex-col justify-center items-center p-5 bg-white border-2 border-solid border-black min-w-fit' >
          <img className='w-32 h-32'  src={cat.src} alt="category" />
          <div >{cat.name}</div>
        </div>
      ))}
    </div>
  )
}

export default Categories