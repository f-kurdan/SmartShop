import { ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon, ShoppingCartIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'
import Logout from './logout'


const textStyle = 'text-sm';
const iconStyle = 'w-5 h-5';
const linkStyle = 'hover:bg-gradient-to-br hover:text-white hover:from-indigo-500 hover:via-sky-600 hover:to-blue-700 block  flex flex-col justify-center items-center mx-1 p-1 rounded-md ';

const RightSideButtons = () => {
    return (
        <div className='flex flex-row absolute right-2 gap-1'>
            <Link href={'/admin'} className={`${linkStyle} hover:cursor-pointer  active:from-purple-950 active:via-red-700 active:to-yellow-600`}>
                <WrenchScrewdriverIcon className={iconStyle} />
                <h3 className={textStyle}>Админ</h3>
            </Link>
            <Link href='/auth'>
                <div className={`${linkStyle} hover:cursor-pointer active:from-purple-950 active:via-red-700 active:to-yellow-600 `}>
                    <ArrowLeftOnRectangleIcon className={`${iconStyle} rotate-180`} />
                    <h3 className={textStyle}>Войти</h3>
                </div>
            </Link>
            <Link href='/auth'>
                <div className={`${linkStyle} group `}>
                    <ArrowRightOnRectangleIcon className={`${iconStyle} rotate-180`} />
                    <h3 className={`${textStyle}`}>Выйти</h3>
                    <div className='shadow-md py-4 px-4 absolute w-fit bg-white hidden top-12 z-10 group-hover:block rounded-md'>
                        <Logout />
                    </div>
                </div>
            </Link>
            <Link href='/cart'>
                <div className={`${linkStyle} hover:cursor-pointer active:from-purple-950 active:via-red-700 active:to-yellow-600`}>
                    <ShoppingCartIcon className={iconStyle} />
                    <h3 className={textStyle}>Корзина</h3>
                </div>
            </Link>
        </div>
    )
}

export default RightSideButtons