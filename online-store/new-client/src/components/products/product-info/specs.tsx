import { product } from '@/types'
import React from 'react'

const Specs = ({ product }: { product: product }) => {
    return (
        <>
            {!!product?.productInfo?.length && product?.productInfo.map(info => (
                <p key={info.name} className='mb-3'><span className='font-black'>{info.name}: </span>{info.description}</p>))}
        </>
    )
}

export default Specs