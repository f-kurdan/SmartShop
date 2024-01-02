import Dialog from '@/components/admin/dialog';
import ProductCreatingDialog from '@/components/admin/product-creating-dialog';
import { HandlerContext, NameContext } from '@/contexts/Contexts';
import { montserrat } from '@/styles/fonts'
import React, { useState } from 'react'

const index = () => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showBrandModal, setShowBrandModal] = useState(false);
  const [showProductAddingModal, setShowProductAddingModal] = useState(false);

  const onClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    if (e.target === e.currentTarget) {
      if (showCategoryModal)
        setShowCategoryModal(false)
      if (showBrandModal)
        setShowBrandModal(false)
      if (showProductAddingModal)
        setShowProductAddingModal(false)
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
    <HandlerContext.Provider value={handleCancelClick}>
      <div onClick={onClickOutside} className={`${montserrat.className} flex flex-col justify-start items-center px-10 py-14 w-11/12 h-screen my-2 ounded-sm border border-gray-200 bg-gray-50 shadow-lg text-gray-700 gap-y-16`}>
        <h1 className='font-bold text-5xl text-center text-gray-600 '>Панель администратора</h1>
        <div onClick={() => setShowCategoryModal(true)} className='transition-all duration-300 bg-purple-300 p-4 text-center w-1/2 rounded-xl cursor-pointer active:blur-sm border-2 border-black '>
          Добавить категорию
        </div>
        <NameContext.Provider value='category' >
          <Dialog state={showCategoryModal}
            title='Создание категории' />
        </NameContext.Provider>
        <div onClick={() => setShowBrandModal(true)} className='transition-all duration-30 bg-lime-300  p-4 text-center w-1/2 rounded-xl cursor-pointer active:blur-sm border-2 border-black'>
          Добавить бренд
        </div>
        <NameContext.Provider value='brand' >
          <Dialog state={showBrandModal}
            title='Создание бренда' />
        </NameContext.Provider>
        <div onClick={() => setShowProductAddingModal(true)} className='transition-all duration-300 bg-cyan-300  p-4 text-center w-1/2 rounded-xl cursor-pointer active:blur-sm border-2 border-black '>
          Добавить товар
        </div>
        <NameContext.Provider value='product' >
          <ProductCreatingDialog state={showProductAddingModal}
            title='Добавить товар' />
        </NameContext.Provider>
      </div>
    </HandlerContext.Provider>
  )
}

export default index