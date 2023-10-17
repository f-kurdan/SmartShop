import React from 'react'

const Header = () => {
    return (
        <div className="fixed p-2 flex flex-row align-middle border-solid w-full h-auto bg-gray-800">
            <h3 className='text-gray-50 px-1'>SmartShop</h3>
            <div className=' flex flex-row justify-self-end'>
                <h3 className='text-gray-50 px-1'>Админ</h3>
                <h3 className='text-gray-50 px-1'>Войти</h3>
                <h3 className='text-gray-50 px-1'>Выйти</h3>
                <h3 className='text-gray-50 px-1'>Корзина</h3>
            </div>
        </div>
    )
}

export default Header;