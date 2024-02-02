import React, { useEffect, useState } from 'react'
import { montserrat } from '../../../../styles/fonts'
import Dialog from '../../dialogs/dialog'
import { HandlerContext, SetterContext } from '../../../../contexts/Contexts'
import CategoriesList from './list'

const CategoriesAdminList = () => {
    const [showCategoryModal, setShowCategoryModal] = useState(false)
    const [addedItem, setAddedItem] = useState('')

    const onCancelClick = () => setShowCategoryModal(false)

    const handleClickOutside = (e: MouseEvent, modal: HTMLElement | null, button: HTMLElement | null, buttonsList: HTMLElement | null) => {
        if (e.target !== modal && e.target !== button && !modal?.contains(e.target as Node) && buttonsList) {
            buttonsList.style.filter = 'none'
            setShowCategoryModal(false)
        }
    }

    const handleOpeningModal = (e: MouseEvent, button: HTMLElement | null, buttonsList: HTMLElement | null) => {
        if (e.target === button && buttonsList) {
            buttonsList.style.filter = 'blur(5px)'
        }
    }

    useEffect(() => {
        const modal = document.getElementById('creation-dialog')
        const button = document.getElementById('create-category-button')
        const buttonsList = document.getElementById('buttons-list')
        if (modal && button && buttonsList?.style) {
            window.addEventListener("click", (e) => handleOpeningModal(e, button, buttonsList))
            window.addEventListener("click", (e) => handleClickOutside(e, modal, button, buttonsList))
        }

        return () => {
            window.addEventListener("click", (e) => handleOpeningModal(e, button, buttonsList))
            window.removeEventListener("click", (e) => handleClickOutside(e, modal, button, buttonsList)
            )
        }
    }, [])

    return (
        <HandlerContext.Provider value={onCancelClick}>
            <SetterContext.Provider value={setAddedItem}>
            <div className={`${montserrat.className} flex flex-col justify-start items-center px-10 py-14 w-full rounded-sm borde bg-gray-50 shadow-lg text-gray-700 gap-y-16`}>
                <div className='flex flex-row justify-between items-center gap-5'>
                <h1 className={`font-bold text-5xl text-center text-gray-600 ${showCategoryModal ? 'blur-md' : ''} `} >
                    Категории {addedItem}
                </h1>
                <span onClick={() => setShowCategoryModal(true)} id='create-category-button' className={`transition-all duration-300 bg-purple-300 p-4 text-center w-1/2 rounded-xl cursor-pointer active:blur-sm border-2 border-black  ${showCategoryModal ? 'blur-md' : ''}`} >
                    Добавить категорию
                </span>
                </div>
                <Dialog
                    name='category'
                    toShow={showCategoryModal}
                    title='Создание категории' />
                <CategoriesList blur={showCategoryModal} />
            </div>
            </SetterContext.Provider>
        </HandlerContext.Provider>
    )
}

export default CategoriesAdminList 