import Image from 'next/image'
import React, { useState } from 'react'

const ProductImage = ({ name, image }: { name: string, image: string }) => {
    const [loading, setLoading] = useState(true)

    function onImageLoad() {
        setLoading(false)
    }
    
    return (
        <>
            <Image
                className={loading ? 'animate-pulse w-[90px] h-[200px] max-h-44 max-w-min rounded-xl bg-gray-100' : 'max-h-44 max-w-min'}
                src={`${process.env.NEXT_PUBLIC_STOREAPI_URL}/${image}`}
                alt={name}
                width={200} height={200}
                onLoadingComplete={onImageLoad}
            />
        </>
    )
}

export default ProductImage