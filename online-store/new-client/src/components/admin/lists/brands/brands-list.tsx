import React, { useEffect, useRef, useState } from 'react'
import { HandlerContext } from '../../../../contexts/Contexts'
import { montserrat } from '../../../../styles/fonts'
import Dialog from '../../dialogs/dialog'
import BrandsList from './list'
import Backdrop from '../backdrop'

const BrandsAdminList = () => {
    const [showBrandModal, setShowBrandModal] = useState(false)
    const backdropRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        const onClickOutside = (e: MouseEvent) => {
            if (backdropRef.current && backdropRef.current === e.target) {
                setShowBrandModal(false)
            }
        }
        document.addEventListener('click', onClickOutside)

        return () => document.removeEventListener('click', onClickOutside)
    }, [])

    const onCancelClick = () => {
        setShowBrandModal(false)
    }

    const onClick = () => {
        setShowBrandModal(true)
    }
    
    return (
        <HandlerContext.Provider value={onCancelClick}>
            <div className={`${montserrat.className}  flex flex-col justify-start items-center px-10 py-14 w-full rounded-sm borde bg-gray-50 shadow-lg text-gray-700 gap-y-16`}>
            <div className='flex flex-row justify-between items-center gap-5'>
                <h1 className={`font-bold text-5xl text-center text-gray-600 ${showBrandModal ? 'blur-md' : ''} `} >
                    Бренды
                </h1>
                <button onClick={onClick} id='create-brand-button' className={`transition-all duration-300 bg-purple-300 p-4 text-center w-1/2 rounded-xl cursor-pointer active:blur-sm border-2 border-black  ${showBrandModal ? 'blur-md' : ''}`} >
                    Добавить бренд
                </button>
            </div>
                <Dialog
                    name='brand'
                    toShow={showBrandModal}
                    title='Создание бренда' />
                <Backdrop isOpen={showBrandModal}
                backdropRef={backdropRef}/>
                <BrandsList blur={showBrandModal} />
            </div>
        </HandlerContext.Provider>
    )
}

export default BrandsAdminList