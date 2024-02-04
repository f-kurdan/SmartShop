import React, { useEffect, useRef, useState } from 'react'
import { HandlerContext, NameContext } from '../../../../contexts/Contexts'
import ProductCreatingDialog from '../../dialogs/products/product-creating-dialog'
import { montserrat } from '../../../../styles/fonts'
import ProductsList from './list'

const ProductsAdminList = ({ setToBlurList }: { setToBlurList: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [showProductModal, setShowProductModal] = useState(false)
    const dialogRef = useRef<HTMLDialogElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    const onClickOutside = (e: MouseEvent) => {
        const element = dialogRef.current;
        if (element && !element.contains(e.target as Node) && e.target !== buttonRef.current) {
            setShowProductModal(false)
            setToBlurList(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', onClickOutside)

        return () => document.removeEventListener('click', onClickOutside)
    }, [])

    const onCancelClick = () => {
        setShowProductModal(false)
        setToBlurList(false)
    }

    const onClick = () => {
        setToBlurList(true)
        setShowProductModal(true)
    }

    return (
        <HandlerContext.Provider value={onCancelClick}>
            <div className={`${montserrat.className} flex flex-col justify-start items-center px-10 py-14 w-full h-[85vh] rounded-sm borde bg-gray-50 shadow-lg text-gray-700 gap-y-16`}>
                <div className='flex flex-row justify-between items-center gap-5'>
                    <h1 className={`font-bold text-5xl text-center text-gray-600 ${showProductModal ? 'blur-md' : ''} `} >
                        Товары
                    </h1>
                    <button ref={buttonRef} onClick={onClick} id='create-product-button' className={`transition-all duration-300 bg-purple-300 p-4 text-center w-1/2 rounded-xl cursor-pointer active:blur-sm border-2 border-black  ${showProductModal ? 'blur-md' : ''}`} >
                        Добавить товар
                    </button>
                </div>
                <NameContext.Provider value='product' >
                    <ProductCreatingDialog 
                        state={showProductModal}
                        dialogRef={dialogRef}
                        name='product'
                        title='Добавить товар' />
                </NameContext.Provider>
                <ProductsList blur={showProductModal} />
            </div>
        </HandlerContext.Provider>
    )
}

export default ProductsAdminList