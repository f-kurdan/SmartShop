import CancelButton from '@/components/admin/cancel-button';
import Dialog from '@/components/admin/dialog';
import { HandlerContext } from '@/contexts/HandlerContexts';
import { NameContext } from '@/contexts/NameContext';
import { montserrat } from '@/styles/fonts'
import React, { useState } from 'react'

const index = () => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showBrandModal, setShowBrandModal] = useState(false);
  const [showProductAddingModal, setShowProductAddingModal] = useState(false);

  const onClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      if (showCategoryModal)
        setShowCategoryModal(show => show = false)
      if (showBrandModal)
        setShowBrandModal(show => show = false)
      if (showProductAddingModal)
        setShowProductAddingModal(show => show = false)
    }
  }

  const handleCancelClick = (value: string) => {
    switch (value) {
      case 'category':
        setShowCategoryModal(false);
        break;
      case 'brand':
        setShowBrandModal(false)
        break
      case 'product':
        setShowProductAddingModal(false)
        break;
    }
  }

  return (
    <div onClick={(e) => onClickOutside(e)} className={`${montserrat.className} flex flex-col justify-center items-center px-10 py-5 w-11/12 h-screen my-8 ounded-sm border border-gray-200 bg-gray-50 shadow-lg text-gray-700 gap-y-16`}>
      <h1 className='font-bold text-5xl text-center text-gray-600'>Панель администратора</h1>
      <div onClick={() => setShowCategoryModal(true)} className='transition-all duration-300 text-white bg-purple-300 p-4 text-center w-1/2 rounded-xl hover:cursor-pointer active:blur-sm'>
        Создать категорию
      </div>
      <HandlerContext.Provider value={handleCancelClick}>
        <NameContext.Provider value='category' >
          <Dialog state={showCategoryModal}
            title='Создание категории' />
        </NameContext.Provider>
      </HandlerContext.Provider>
      <div onClick={() => setShowBrandModal(true)} className='transition-all duration-300 text-white bg-lime-300  p-4 text-center w-1/2 rounded-xl hover:cursor-pointer active:blur-sm'>
        Добавить бренд
      </div>
      <HandlerContext.Provider value={handleCancelClick}>
        <NameContext.Provider value='brand' >

          <Dialog state={showBrandModal}
            title='Создание бренда' />
        </NameContext.Provider>
      </HandlerContext.Provider>
      <HandlerContext.Provider value={handleCancelClick}>
        <Dialog state={showCategoryModal}
          title='Создание категории' />
      </HandlerContext.Provider>
      <div onClick={() => setShowProductAddingModal(true)} className='transition-all duration-300 text-white bg-cyan-300  p-4 text-center w-1/2 rounded-xl hover:cursor-pointer active:blur-sm'>
        Добавить товар
      </div>
      <HandlerContext.Provider value={handleCancelClick}>
        <NameContext.Provider value='product' >

          <Dialog state={showProductAddingModal}
            title='Добавить товар' />
        </NameContext.Provider>
      </HandlerContext.Provider>
    </div>
  )
}

export default index