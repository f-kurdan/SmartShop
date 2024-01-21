import React, { useEffect, useState } from 'react'
import { montserrat } from '../../../../styles/fonts'
import Dialog from '../../dialogs/dialog'
import { HandlerContext } from '../../../../contexts/Contexts'
import List from './list'

const CategoriesAdminList = () => {
    const [showCategoryModal, setShowCategoryModal] = useState(false)
    
    const onCancelClick = () => setShowCategoryModal(false)

    const handleClickOutside = (e: MouseEvent, modal: HTMLElement | null, button: HTMLElement | null) => {
        if (e.target !== modal && e.target !== button && !modal?.contains(e.target as Node)) {
            document.getElementById("buttons-list")!.style.filter = 'none'
            setShowCategoryModal(false)
        }
    }

    const handleOpeningModal = (e: MouseEvent, button: HTMLElement | null) => {
        if (e.target === button) {
            document.getElementById("buttons-list")!.style.filter = 'blur(5px)'
        }
    }

    useEffect(() => {
        const modal = document.getElementById('creation-dialog')
        const button = document.getElementById('create-category-button')
        window.addEventListener("click", (e) => handleClickOutside(e, modal, button), true)

        return () => {
            window.removeEventListener("click", (e) => handleClickOutside(e, modal, button))}
    }, [])

    useEffect(() => {
        const button = document.getElementById('create-category-button')
        window.addEventListener("click", (e) => handleOpeningModal(e, button))

        return () => window.removeEventListener("click", (e) => handleOpeningModal(e, button))
    }, [])

    return (
        <HandlerContext.Provider value={onCancelClick}>
            <div className={`${montserrat.className} flex flex-col justify-start items-center px-10 py-14 w-full ounded-sm borde bg-gray-50 shadow-lg text-gray-700 gap-y-16`}>
                <h1 className={`font-bold text-5xl text-center text-gray-600 ${showCategoryModal ? 'blur-md' : ''} `} >
                    Категории
                </h1>
                <div onClick={() => setShowCategoryModal(true)} id='create-category-button' className={`transition-all duration-300 bg-purple-300 p-4 text-center w-1/2 rounded-xl cursor-pointer active:blur-sm border-2 border-black  ${showCategoryModal ? 'blur-md' : ''}`} >
                    Добавить категорию
                </div>
                <Dialog
                    name='category'
                    toShow={showCategoryModal}
                    title='Создание категории' />
                <List />
            </div>
        </HandlerContext.Provider>
    )
}

export default CategoriesAdminList 