import { useAppSelector } from '@/hooks/reduxHooks';
import { ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon, ShoppingCartIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'
import Logout from './logout'
import cookie from 'js-cookie';


const textStyle = 'text-sm';
const iconStyle = 'w-5 h-5';
const linkStyle = 'hover:bg-gradient-to-br hover:text-white hover:from-indigo-500 hover:via-sky-600 hover:to-blue-700 block  flex flex-col justify-center items-center mx-1 p-1 rounded-md ';

const RightSideButtons = () => {
    const cart = useAppSelector(state => state.cart.value)
    const token = cookie.get('jwt');

    const count = cart.reduce((acc, next) => acc + next.quantity, 0)

    return (
        <div className='flex flex-row absolute right-2 gap-1'>

            {token ? (
                <>
                    <Link href={'/admin'} className={`${linkStyle} cursor-pointer  active:from-purple-950 active:via-red-700 active:to-yellow-600`}>
                        <WrenchScrewdriverIcon className={iconStyle} />
                        <h3 className={textStyle}>Админ</h3>
                    </Link>
                    <Link href='/'>
                        <div className={`${linkStyle} group `}>
                            <ArrowRightOnRectangleIcon className={`${iconStyle} rotate-180`} />
                            <h3 className={`${textStyle}`}>Выйти</h3>
                            <div className='shadow-md py-4 px-4 absolute w-fit bg-white hidden top-12 z-10 group-hover:block rounded-md'>
                                <Logout />
                            </div>
                        </div>
                    </Link>
                </>) : (
                <Link href='/auth'>
                    <div className={`${linkStyle} cursor-pointer active:from-purple-950 active:via-red-700 active:to-yellow-600 `}>
                        <ArrowLeftOnRectangleIcon className={`${iconStyle} rotate-180`} />
                        <h3 className={textStyle}>Войти</h3>
                    </div>
                </Link>)}
            <Link href='/cart'>
                <div className={`${linkStyle} relative cursor-pointer active:from-purple-950 active:via-red-700 active:to-yellow-600`}>
                    <ShoppingCartIcon className={iconStyle} />
                    {!!count ? <div className='absolute flex flex-row justify-center items-center bg-lime-200 right-0 top-0 p-3 w-5 h-5  text-sm rounded-full'>
                        <span>{count}</span>
                    </div> : ''}
                    <h3 className={textStyle}>Корзина</h3>
                </div>
            </Link>
        </div>
    )
}

export default RightSideButtons