import React, { useState } from 'react';
import EntitiyCreationSection from '../../components/admin/entitiy-creation-section';
import CategoriesAdminList from '../../components/admin/lists/categories-list';
import BrandsAdminList from '../../components/admin/lists/brands-list';
import ProductsAdminList from '../../components/admin/lists/products-list';

const index = () => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showBrandModal, setShowBrandModal] = useState(false);
  const [showProductAddingModal, setShowProductAddingModal] = useState(false);
  const [toShow, setToShow] = useState(false)
  const [selectedList, setSelectedList] = useState('');
  

  const onClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

//     if (showCategoryModal)
//     setShowCategoryModal(false)
// if (showBrandModal)
//     setShowBrandModal(false)
// if (showProductAddingModal)
//     setShowProductAddingModal(false)
  }

  const toBloor = showBrandModal || showCategoryModal || showProductAddingModal
  return (
    <div onClick={onClickOutside} className={`flex flex-row gap-2 p-2 w-[80%] `}>
      <div id='buttons-list' className={`flex flex-col justify-center gap-2 p-3 w-[35%] bg-gray-50 text-center ${toBloor ? 'blur-md' : ''}`}>
        <h1 onClick={() => setSelectedList('categories')} className='rounded-lg bg-white p-3 cursor-pointer'>Список категорий</h1>
        <h1 onClick={() => setSelectedList('brands')} className='rounded-lg bg-white p-3 cursor-pointer'>Список брендов</h1>
        <h1 onClick={() => setSelectedList('products')} className='rounded-lg bg-white p-3 cursor-pointer'>Список товаров</h1>
      </div>
      {selectedList === 'categories'? 
      (<CategoriesAdminList/>) : 
      selectedList === 'brands' ?
    (<BrandsAdminList />) :
    selectedList === 'products' ?
    (<ProductsAdminList />) :
      (<EntitiyCreationSection 
        showCategoryModal={showCategoryModal}
        showBrandModal={showBrandModal}
        showProductAddingModal={showProductAddingModal}
        setShowCategoryModal={setShowCategoryModal}
        setShowBrandModal={setShowBrandModal}
        setShowProductAddingModal={setShowProductAddingModal}  
        />)
      }
    </div>
  )
}

export default index