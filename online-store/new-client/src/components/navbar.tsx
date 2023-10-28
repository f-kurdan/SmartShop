import Link from 'next/link';
import React from 'react';
import { WrenchScrewdriverIcon, ArrowRightOnRectangleIcon, ArrowLeftOnRectangleIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import CatalogDropdown from './catalog-dropdown';
import { category } from '@/types';

const textStyle = 'text-black text-sm';
const iconStyle = 'w-5 h-5';
const linkStyle = 'hover:invert hover:bg-gradient-to-br hover:from-yellow-300 hover:via-red-500 hover:to-yellow-300 flex flex-col justify-center items-center mx-1 p-1 rounded-md hover:cursor-pointer ';

const Navbar = () => {
    return (
        <div className="sticky top-0 flex flex-row justify-center items-center border-solid w-full h-14 bg-white z-10 shadow-sm opacity-90 px-5">
            <CatalogDropdown />
            <Link href='/'>
                <h3 className='transition duration-500 mx-3 bg-gradient-to-br from-indigo-500 via-sky-600 to-blue-700 hover:from-purple-950 hover:via-red-700 hover:to-yellow-600 rounded-2xl p-2 text-white hover:cursor-pointer'>SmartShop</h3>
            </Link>
            <div className='flex flex-row absolute right-2 gap-1'>
                <div className={linkStyle}>
                    <WrenchScrewdriverIcon className={iconStyle} />
                    <h3 className={textStyle}>Админ</h3>
                </div>
                <div className={linkStyle}>
                    <ArrowLeftOnRectangleIcon className={`${iconStyle} rotate-180`}/>
                    <h3 className={textStyle}>Войти</h3>
                </div>
                <div className={linkStyle}>
                    <ArrowRightOnRectangleIcon className={`${iconStyle} rotate-180`} />
                    <h3 className={textStyle}>Выйти</h3>
                </div>
                <div className={linkStyle}>
                    <ShoppingCartIcon className={iconStyle} />
                    <h3 className={textStyle}>Корзина</h3>
                </div>
            </div>
        </div>
    )
}

export default Navbar;