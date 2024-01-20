import React, { useState } from 'react'
import { HandlerContext, NameContext } from '../../contexts/Contexts'
import { montserrat } from '../../styles/fonts'
import Dialog from './dialogs/dialog'
import ProductCreatingDialog from './dialogs/products/product-creating-dialog'

const EntitiyCreationSection = ({
    showCategoryModal,
    showBrandModal,
    showProductAddingModal,
    setShowCategoryModal,
    setShowBrandModal,
    setShowProductAddingModal }:{
        showCategoryModal: boolean,
        showBrandModal: boolean,
        showProductAddingModal:boolean
        setShowCategoryModal: React.Dispatch<any>,
        setShowBrandModal: React.Dispatch<any>,
        setShowProductAddingModal: React.Dispatch<any>
    }) => {

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
        <HandlerContext.Provider value={handleCancelClick}>
            <div className={`${montserrat.className} flex flex-col justify-start items-center px-10 py-14 full h-[85vh] ounded-sm borde bg-gray-50 shadow-lg text-gray-700 gap-y-16`}>
                <h1 className={`font-bold text-5xl text-center text-gray-600 ${toBloor ? 'blur-md' : ''} `} >Панель администратора</h1>
                <div onClick={() => setShowCategoryModal(true)} className={`transition-all duration-300 bg-purple-300 p-4 text-center w-1/2 rounded-xl cursor-pointer active:blur-sm border-2 border-black  ${toBloor ? 'blur-md' : ''}`} >
                    Добавить категорию
                </div>
                <Dialog
                    name='category'
                    toShow={showCategoryModal}
                    title='Создание категории' />
                <div onClick={() => setShowBrandModal(true)} className={`transition-all duration-30 bg-lime-300  p-4 text-center w-1/2 rounded-xl cursor-pointer active:blur-sm border-2 border-black ${toBloor ? 'blur-md' : ''}`}>
                    Добавить бренд
                </div>
                <Dialog
                    name='brand'
                    toShow={showBrandModal}
                    title='Создание бренда' />
                <div onClick={() => setShowProductAddingModal(true)} className={`transition-all duration-300 bg-cyan-300  p-4 text-center w-1/2 rounded-xl cursor-pointer active:blur-sm border-2 border-black  ${toBloor ? 'blur-md' : ''}`}>
                    Добавить товар
                </div>
                <NameContext.Provider value='product' >
                    <ProductCreatingDialog state={showProductAddingModal}
                        name='product'
                        title='Добавить товар' />
                </NameContext.Provider>
            </div>
        </HandlerContext.Provider>
    )
}

export default EntitiyCreationSection