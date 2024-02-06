import React, { useEffect, useRef, useState } from 'react'
import { montserrat } from '../../../../styles/fonts'
import Dialog from '../../dialogs/dialog'
import { HandlerContext, SetterContext } from '../../../../contexts/Contexts'
import CategoriesList from './list'
import Backdrop from '../backdrop'

const CategoriesAdminList = () => {
    const [showCategoryModal, setShowCategoryModal] = useState(false)
    const backdropRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const onClickOutside = (e: MouseEvent) => {
            if (backdropRef.current && backdropRef.current === e.target) {
                setShowCategoryModal(false)
            }
        }
        
        document.addEventListener('click', onClickOutside)

        return () => document.removeEventListener('click', onClickOutside)
    }, [])

    const onCancelClick = () => {
        setShowCategoryModal(false)
    }

    const onClick = () => {
        setShowCategoryModal(true)
    }

    return (
        <HandlerContext.Provider value={onCancelClick}>
            <div className={`${montserrat.className} flex flex-col justify-start items-center px-10 py-14 w-full rounded-sm borde bg-gray-50 shadow-lg text-gray-700 gap-y-16`}>
                <div className='flex flex-row justify-between items-center gap-5'>
                    <h1 className={`font-bold text-5xl text-center text-gray-600 `} >
                        Категории
                    </h1>
                    <button onClick={onClick} id='create-category-button' className={`transition-all duration-300 bg-purple-300 p-4 text-center w-1/2 rounded-xl cursor-pointer active:blur-sm border-2 border-black`} >
                        Добавить категорию
                    </button>
                </div>
                <Dialog
                    name='category'
                    toShow={showCategoryModal}
                    title='Создание категории' />
                <Backdrop isOpen={showCategoryModal}
                backdropRef={backdropRef}/>
                <CategoriesList blur={showCategoryModal} />
            </div>
        </HandlerContext.Provider>
    )
}

export default CategoriesAdminList 