import { montserrat } from '@/styles/fonts'
import React, { useState } from 'react'

const index = () => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const onClickOutside = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (e.target === e.currentTarget && showCategoryModal) setShowCategoryModal(show => show = false)
  }

  return (
    <div onClick={(e) => onClickOutside(e)} className={`${montserrat.className} flex flex-col justify-center items-center px-10 py-5 w-11/12 h-screen my-8 ounded-sm border border-gray-200 bg-gray-50 shadow-lg text-gray-700 gap-y-16`}>
      <h1 className='font-bold text-5xl text-center text-gray-600'>Панель администратора</h1>
      <div onClick={() => setShowCategoryModal(show => show = true)} className='transition-all duration-300 text-white bg-purple-300 p-4 text-center w-1/2 rounded-xl hover:cursor-pointer active:blur-sm'>        
        Создать категорию
      </div>
      <div className={`fixed top-1/4 transition-all duration-100 h-1/2 z-10 bg-white flex-col ${showCategoryModal? "block" : "hidden"} items-start p-5 rounded-lg shadow-lg w-1/2`}>
      <div className='font-bold text-3xl text-center text-gray-600'>
        Создание категории
        </div>
      </div>
      <div className='transition-all duration-300 text-white bg-lime-300  p-4 text-center w-1/2 rounded-xl hover:cursor-pointer active:blur-sm'>
        Добавить бренд
      </div>
      <div className='transition-all duration-300 text-white bg-cyan-300  p-4 text-center w-1/2 rounded-xl hover:cursor-pointer active:blur-sm'>
        Добавить товар
      </div>
    </div>
  )
}

export default index