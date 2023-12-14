import { product } from '@/types'
import React from 'react'

const Specs = ({ product }: { product: product }) => {
    return (
        <>
            {!!product?.specifications?.length && product?.specifications.map(char => (
                <p key={char.name} className='mb-3'><span className='font-black'>{char.name}: </span>{char.value}</p>))}
        </>
    )
}

export default Specs