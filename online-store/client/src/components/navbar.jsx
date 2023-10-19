import React from 'react'

const textStyle = 'text-black px-0.5';
const iconStyle = 'w-5 h-5';
const linkStyle = 'hover:bg-gradient-to-r hover:from-sky-200 hover:to-indigo-100 flex flex-col justify-center items-center mx-1 rounded-lg pt-1 mb-5 hover:cursor-pointer';

const Navbar = () => {
    return (
        <div className="fixed top-0 p-2 flex flex-row align-middle border-solid w-full h-auto bg-white z-10 shadow-sm">
            <h3 className='bg-gradient-to-r from-indigo-500 via-sky-600 to-blue-700 hover:from-purple-950 hover:via-red-700 hover:to-yellow-600 rounded-2xl p-2 text-white hover:cursor-pointer'>SmartShop</h3>
            <div className='absolute right-2 flex flex-row justify-items-end'>
                <div className={linkStyle}>
                    <img className={iconStyle} src="icons/admin.svg" alt="" />
                    <h3 className={textStyle}>Админ</h3>
                </div>
                <div className={linkStyle}>
                    <img className={iconStyle}  src="icons/login.svg" alt="" />
                    <h3 className={textStyle}>Войти</h3>
                </div>
                <div className={linkStyle}>
                    <img className={`${iconStyle} rotate-180`} src="icons/logout.svg" alt="" />
                    <h3 className={textStyle}>Выйти</h3>
                </div>
                <div className={linkStyle}>
                <img className={iconStyle} src="icons/cart.svg" alt="" />
                    <h3 className={textStyle}>Корзина</h3>
                </div>
            </div>
        </div>
    )
}

export default Navbar;