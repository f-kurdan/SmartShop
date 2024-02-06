import React, { useEffect, useRef, useState } from 'react'
import { HandlerContext, NameContext } from '../../../../contexts/Contexts'
import ProductCreatingDialog from '../../dialogs/products/product-creating-dialog'
import { montserrat } from '../../../../styles/fonts'
import ProductsList from './list'
import Backdrop from '../backdrop'

const ProductsAdminList = () => {
    const [showProductModal, setShowProductModal] = useState(false)
    const backdropRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        const onClickOutside = (e: MouseEvent) => {
            if (backdropRef.current && backdropRef.current === e.target) {
                setShowProductModal(false)
            }
        }
        
        document.addEventListener('click', onClickOutside)

        return () => document.removeEventListener('click', onClickOutside)
    }, [])

    const onCancelClick = () => {
        setShowProductModal(false)
    }

    const onClick = () => {
        setShowProductModal(true)
    }

    return (
        <HandlerContext.Provider value={onCancelClick}>
            <div className={`${montserrat.className} flex flex-col justify-start items-center px-10 py-14 w-full rounded-sm borde bg-gray-50 shadow-lg text-gray-700 gap-y-16`}>
                <div className='flex flex-row justify-between items-center gap-5'>
                    <h1 className={`font-bold text-5xl text-center text-gray-600 ${showProductModal ? 'blur-md' : ''} `} >
                        Товары
                    </h1>
                    <button onClick={onClick} id='create-product-button' className={`transition-all duration-300 bg-purple-300 p-4 text-center w-1/2 rounded-xl cursor-pointer active:blur-sm border-2 border-black  ${showProductModal ? 'blur-md' : ''}`} >
                        Добавить товар
                    </button>
                </div>
                <NameContext.Provider value='product' >
                    <ProductCreatingDialog
                        state={showProductModal}
                        name='product'
                        title='Добавить товар'/>
                </NameContext.Provider>
                <Backdrop isOpen={showProductModal}
                    backdropRef={backdropRef} />
                <ProductsList
                    blur={showProductModal} />
            </div>
        </HandlerContext.Provider>
    )
}

export default ProductsAdminList