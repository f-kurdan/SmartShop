import React, { useEffect, useRef, useState } from 'react'
import { HandlerContext, NameContext } from '../../../../contexts/Contexts'
import ProductCreatingDialog from '../../dialogs/products/product-creating-dialog'
import { montserrat } from '../../../../styles/fonts'
import ProductsList from './list'
import { product } from '../../../../types'

const ProductsAdminList = ({ setToBlurList }: { setToBlurList: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [showProductModal, setShowProductModal] = useState(false)
    const [productToChange, setProductToChange] = useState<product | undefined>()
    const dialogRef = useRef<HTMLDialogElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const changeButtonRef = useRef<HTMLButtonElement>(null)

    const onClickOutside = (e: MouseEvent, buttons: Element[]) => {
        const element = dialogRef.current;
        console.log("includes: ", buttons.some(el => el == e.target))
        if (element
            && !element.contains(e.target as Node)
            && e.target !== buttonRef.current
            && e.target !== changeButtonRef.current
            && !buttons.some(el => el == e.target)) {
            setShowProductModal(false)
            setToBlurList(false)
        }
    }

    useEffect(() => {
        const buttons = Array.from(document.getElementsByClassName('product-list-button'))
        document.addEventListener('click', (e) => onClickOutside(e, buttons))

        return () => document.removeEventListener('click', (e) => onClickOutside(e, buttons))
    }, [])

    const onCancelClick = () => {
        setShowProductModal(false)
        setToBlurList(false)
    }

    const onClick = (product?: product) => {
        setToBlurList(true)
        setShowProductModal(true)
        if (product)
            setProductToChange(product)
    }

    return (
        <HandlerContext.Provider value={onCancelClick}>
            <div className={`${montserrat.className} flex flex-col justify-start items-center px-10 py-14 w-full rounded-sm borde bg-gray-50 shadow-lg text-gray-700 gap-y-16`}>
                <div className='flex flex-row justify-between items-center gap-5'>
                    <h1 className={`font-bold text-5xl text-center text-gray-600 ${showProductModal ? 'blur-md' : ''} `} >
                        Товары
                    </h1>
                    <button ref={buttonRef} onClick={(e) => onClick()} id='create-product-button' className={`transition-all duration-300 bg-purple-300 p-4 text-center w-1/2 rounded-xl cursor-pointer active:blur-sm border-2 border-black  ${showProductModal ? 'blur-md' : ''}`} >
                        Добавить товар
                    </button>
                </div>
                <NameContext.Provider value='product' >
                    <ProductCreatingDialog
                        state={showProductModal}
                        dialogRef={dialogRef}
                        name='product'
                        title='Добавить товар'
                        defaultProduct={productToChange} />
                </NameContext.Provider>
                <ProductsList
                    onChangeClick={onClick}
                    blur={showProductModal} />
            </div>
        </HandlerContext.Provider>
    )
}

export default ProductsAdminList