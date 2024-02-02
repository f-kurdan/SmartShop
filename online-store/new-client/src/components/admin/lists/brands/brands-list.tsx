import React, { useEffect, useState } from 'react'
import { HandlerContext } from '../../../../contexts/Contexts'
import { montserrat } from '../../../../styles/fonts'
import Dialog from '../../dialogs/dialog'
import BrandsList from './list'

const BrandsAdminList = () => {
    const [showBrandModal, setShowBrandModal] = useState(false)
    const onCancelClick = () => setShowBrandModal(false)

    const handleClickOutside = (e: MouseEvent, modal: HTMLElement | null, button: HTMLElement | null) => {
        if (e.target !== modal && e.target !== button && !modal?.contains(e.target as Node)) {
            document.getElementById("buttons-list")!.style.filter = 'none'
            setShowBrandModal(false)
        }
    }

    const handleOpeningModal = (e: MouseEvent, button: HTMLElement | null) => {
        if (e.target === button) {
            document.getElementById("buttons-list")!.style.filter = 'blur(5px)'
        }
    }

    useEffect(() => {
        const modal = document.getElementById('creation-dialog')
        const button = document.getElementById('create-brand-button')
        window.addEventListener("click", (e) => handleClickOutside(e, modal, button))

        return () => {
            window.removeEventListener("click", (e) => handleClickOutside(e, modal, button))}
    }, [])

    useEffect(() => {
        const button = document.getElementById('create-brand-button')
        window.addEventListener("click", (e) => handleOpeningModal(e, button))

        return () => window.removeEventListener("click", (e) => handleOpeningModal(e, button))
    }, [])

    return (
        <HandlerContext.Provider value={onCancelClick}>
            <div className={`${montserrat.className} flex flex-col justify-start items-center px-10 py-14 w-full h-[85vh] rounded-sm borde bg-gray-50 shadow-lg text-gray-700 gap-y-16`}>
                <h1 className={`font-bold text-5xl text-center text-gray-600 ${showBrandModal ? 'blur-md' : ''} `} >
                    Бренды
                </h1>
                <div onClick={() => setShowBrandModal(true)} id='create-brand-button' className={`transition-all duration-300 bg-purple-300 p-4 text-center w-1/2 rounded-xl cursor-pointer active:blur-sm border-2 border-black  ${showBrandModal ? 'blur-md' : ''}`} >
                    Добавить бренд
                </div>
                <Dialog
                    name='brand'
                    toShow={showBrandModal}
                    title='Создание бренда' />
                <BrandsList blur={showBrandModal} />
            </div>
        </HandlerContext.Provider>
    )
}

export default BrandsAdminList