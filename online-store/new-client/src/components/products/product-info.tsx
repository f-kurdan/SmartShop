import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { productAdded, productInstanceRemoved } from '@/redux/cart/cartSlice'
import { getColors, getStorageSizes } from '@/services/charachteristics.service'
import { product } from '@/types'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { useQuery } from 'react-query'


const ProductInfo = ({ data }: {
    data: product | undefined
}) => {
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const router = useRouter()
    const path = usePathname()
    const selectedColor = params?.get('color') ?? "white";
    const selectedStorageSize = Number(params?.get('storage')) ?? 128;
    const dispatch = useAppDispatch();

    const cart = useAppSelector(state => state.cart.value)
    const productQuantityInCart = cart.find(i => i.product.id === data?.id)

    const { data: colors } = useQuery(['colors', data?.model, selectedStorageSize], () => getColors(data?.model, selectedStorageSize))

    const { data: storageSizes } = useQuery(['storage', data?.model, selectedColor], () => getStorageSizes(data?.model, selectedColor))

    const changeColor = (color: string) => {
        params.set('color', color)
        router.replace(`${path}?${params}`)
    }

    const changeStorageSize = (storage: string) => {
        params.set('storage', storage)
        router.replace(`${path}?${params}`)
    }

    return (
        <div className='flex flex-col w-[400px] justify-start items-start text-base px-3'>
            <p className='font-black text-lg w-full'>{data?.name}</p>
            <div className='flex flex-row gap-2 justify-center items-center mt-5'>
                {colors?.map(color =>
                (
                    <div onClick={() => changeColor(color)} key={color} className={`border-2 p-4 ${color === 'white' || color === 'black' ? `bg-${color}` : 'bg-' + color + '-200'}  ${color === selectedColor ? "outline outline-[3] outline-cyan-200" : ""} rounded-full cursor-pointer`}></div>
                ))}
            </div>
            <div className='flex flex-row gap-2 justify-center items-center mt-5'>
                {storageSizes?.map(size =>
                (
                    <div onClick={() => changeStorageSize(size.toString())} key={size} className={`border-2 p-3 rounded-3xl cursor-pointer ${size === selectedStorageSize ? "outline outline-[3] outline-cyan-200" : ""}`}>{size} {size > 32 ? `Гб` : 'Тб'}</div>
                ))}
            </div>
            <div className='flex flex-col justify-center items-start my-5 min-w-fit text-center'>
                <p className='border-2 border-black border-solid p-1 w-24 '>
                    {data?.price} ₽
                </p>
                <div className='flex flex-row justify-center gap-4 items-stretch'>
                    {!!productQuantityInCart?.quantity ?
                        (<p onClick={() => router.push('/cart')} className='bg-lime-400 hover:invert p-1 transition duration-400 cursor-pointer'>Перейти в корзину</p>)
                        : (<p onClick={() => dispatch(productAdded({ product: data!, quantity: 1 }))} className='bg-lime-400 hover:invert p-1 transition duration-400 cursor-pointer min-w-[6rem]'>Купить</p>)}
                    {!!productQuantityInCart?.quantity && (<div className='flex flex-row justify-center gap-2 items-center px-3 border-2 rounded-2xl border-gray-500 '>
                        <MinusIcon onClick={() => dispatch(productInstanceRemoved({ product: data!, quantity: 1 }))} width={20} height={20}  className='cursor-pointer active:blur-sm'/>
                        <span className='border-l-2 border-r-2 border-s-gray-300 px-2'>{productQuantityInCart?.quantity}</span>
                        <PlusIcon onClick={() => dispatch(productAdded({ product: data!, quantity: 1 }))} width={20} height={20} color='black' className=' cursor-pointer active:blur-sm'/>
                    </div>)}
                </div>
            </div>
            {!!data?.specifications?.length && data?.specifications.map(char => (
                <p className='mb-3'><span className='font-black'>{char.name}: </span>{char.value}</p>
            ))}
        </div>
    )
}


export default ProductInfo