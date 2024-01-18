import Dialog from '@/components/admin/dialogs/dialog';
import ProductCreatingDialog from '@/components/admin/dialogs/products/product-creating-dialog';
import { HandlerContext, NameContext } from '@/contexts/Contexts';
import { montserrat } from '@/styles/fonts'
import React, { useState } from 'react'
import EntitiyCreationSection from '../../components/admin/entitiy-creation-section';

const index = () => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showBrandModal, setShowBrandModal] = useState(false);
  const [showProductAddingModal, setShowProductAddingModal] = useState(false);

  const onClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // e.preventDefault()
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

  const toBloor = showBrandModal || showCategoryModal || showProductAddingModal
  return (
    <div className='flex flex-row gap-2 p-2'>
      <div className='flex flex-col justify-center gap-2 p-3 w-[35%] bg-gray-50 text-center '>
        <h1 className='rounded-lg bg-white p-3 cursor-pointer'>Список категорий</h1>
        <h1 className='rounded-lg bg-white p-3 cursor-pointer'>Список брендов</h1>
        <h1 className='rounded-lg bg-white p-3 cursor-pointer'>Список товаров</h1>
      </div>
      <EntitiyCreationSection />
    </div>
  )
}

export default index