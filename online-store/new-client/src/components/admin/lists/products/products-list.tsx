import React, { useEffect, useState } from 'react'
import { HandlerContext, NameContext } from '../../../../contexts/Contexts'
import ProductCreatingDialog from '../../dialogs/products/product-creating-dialog'
import { montserrat } from '../../../../styles/fonts'

const ProductsAdminList = () => {
    const [showProductModal, setShowProductModal] = useState(false)

    const onCancelClick = () => setShowProductModal(false)

    const handleClickOutside = (e: MouseEvent, modal: HTMLElement | null, button: HTMLElement | null) => {
        if (e.target !== modal && e.target !== button && !modal?.contains(e.target as Node)) {
            document.getElementById("buttons-list")!.style.filter = 'none'
            setShowProductModal(false)
        }
    }

    const handleOpeningModal = (e: MouseEvent, button: HTMLElement | null) => {
        if (e.target === button) {
            document.getElementById("buttons-list")!.style.filter = 'blur(5px)'
        }
    }

    useEffect(() => {
        const modal = document.getElementById('product-creation-dialog')
        const button = document.getElementById('create-product-button')
        window.addEventListener("click", (e) => handleClickOutside(e, modal, button))
        window.addEventListener("click", (e) => handleOpeningModal(e, button))

        return () => {
            window.removeEventListener("click", (e) => handleClickOutside(e, modal, button))
            window.removeEventListener("click", (e) => handleOpeningModal(e, button))
        }
    }, [])

    return (
        <HandlerContext.Provider value={onCancelClick}>
            <div className={`${montserrat.className} flex flex-col justify-start items-center px-10 py-14 w-full h-[85vh] rounded-sm borde bg-gray-50 shadow-lg text-gray-700 gap-y-16`}>
                <div className='flex flex-row justify-between items-center gap-5'>
                    <h1 className={`font-bold text-5xl text-center text-gray-600 ${showProductModal ? 'blur-md' : ''} `} >
                        Товары
                    </h1>
                    <div onClick={() => setShowProductModal(true)} id='create-product-button' className={`transition-all duration-300 bg-purple-300 p-4 text-center w-1/2 rounded-xl cursor-pointer active:blur-sm border-2 border-black  ${showProductModal ? 'blur-md' : ''}`} >
                        Добавить товар
                    </div>
                </div>
                <NameContext.Provider value='product' >
                    <ProductCreatingDialog state={showProductModal}
                        name='product'
                        title='Добавить товар' />
                </NameContext.Provider>
            </div>
        </HandlerContext.Provider>
    )
}

export default ProductsAdminList