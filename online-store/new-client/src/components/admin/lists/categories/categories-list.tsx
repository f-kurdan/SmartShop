import React, { useEffect, useRef, useState } from 'react'
import { montserrat } from '../../../../styles/fonts'
import Dialog from '../../dialogs/dialog'
import { HandlerContext, SetterContext } from '../../../../contexts/Contexts'
import CategoriesList from './list'

const CategoriesAdminList = ({ setToBlurList }: { setToBlurList: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [showCategoryModal, setShowCategoryModal] = useState(false)
    const dialogRef = useRef<HTMLDialogElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    
    useEffect(() => {
        const onClickOutside = (e: MouseEvent) => {
            const element = dialogRef.current;
            if (element && !element.contains(e.target as Node) && e.target !== buttonRef.current) {
                setShowCategoryModal(false)
                setToBlurList(false)
            }
        }
        
        document.addEventListener('click', onClickOutside)

        return () => document.removeEventListener('click', onClickOutside)
    }, [])

    const onCancelClick = () => {
        setShowCategoryModal(false)
        setToBlurList(false)
    }

    const onClick = () => {
        setToBlurList(true)
        setShowCategoryModal(true)
    }

    return (
        <HandlerContext.Provider value={onCancelClick}>
            <div className={`${montserrat.className} flex flex-col justify-start items-center px-10 py-14 w-full rounded-sm borde bg-gray-50 shadow-lg text-gray-700 gap-y-16`}>
                <div className='flex flex-row justify-between items-center gap-5'>
                    <h1 className={`font-bold text-5xl text-center text-gray-600 ${showCategoryModal ? 'blur-md' : ''} `} >
                        Категории
                    </h1>
                    <button ref={buttonRef} onClick={onClick} id='create-category-button' className={`transition-all duration-300 bg-purple-300 p-4 text-center w-1/2 rounded-xl cursor-pointer active:blur-sm border-2 border-black  ${showCategoryModal ? 'blur-md' : ''}`} >
                        Добавить категорию
                    </button>
                </div>
                <Dialog
                    dialogRef={dialogRef}
                    name='category'
                    toShow={showCategoryModal}
                    title='Создание категории' />
                <CategoriesList blur={showCategoryModal} />
            </div>
        </HandlerContext.Provider>
    )
}

export default CategoriesAdminList 