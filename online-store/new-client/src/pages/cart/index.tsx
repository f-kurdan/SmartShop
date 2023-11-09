import CartTable from '@/components/cart/cart-table'
import CustomerInfo from '@/components/cart/customer-info'
import DeliveryType from '@/components/cart/delivery-type'
import ShippingInfo from '@/components/cart/shipping-info'
import { montserrat } from '@/styles/fonts'
import React from 'react'

const Cart = () => {
    return (
        <div className={`${montserrat.className} flex flex-col justify-center items-center px-10 py-5 my-3 w-11/12 ounded-sm border border-gray-200 bg-white shadow-lg rounded-2xl text-gray-700`}>
            <div className=' flex flex-col gap-4 w-9/12 justify-center items-stretch'>
                <header className="border-b border-gray-100 py-2 ">
                    <h1 className="font-black  text-2xl">
                        Корзина
                    </h1>
                </header>
                <CartTable />
                <div className='grid grid-cols-2 border border-solid rounded-lg'>
                    <CustomerInfo />
                    <DeliveryType />
                </div>
                <ShippingInfo />
                <div className='self-end '>
                    <button className='transition-all duration-300 text-center shadow-md hover:invert active:blur-sm shadow-gray-300/70 p-2 bg-lime-300 rounded-lg'>Оформить заказ</button>
                </div>
                {/* <div>Корзина пуста</div> */}
            </div>
        </div>
    )
}

export default Cart