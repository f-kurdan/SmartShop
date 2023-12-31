import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image'
import React, { useState } from 'react'

const Carousel = ({images}:{images:string[]}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const onLeftClick = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? images?.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const onRightClick = () => {
        const isLastImage = currentIndex === images?.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <div className='transition-all duration-300 group relative '>
            <div onClick={onLeftClick} className='transition-all duration-300 group-hover:block hidden cursor-pointer p-4 absolute left-1 top-1/2 rounded-full bg-cyan-100 opacity-70' >
                <ArrowLeftIcon width={20} height={20} />
            </div>
            <Image className='max-h-96 rounded-2xl max-w-min object-cover' src={`${process.env.NEXT_PUBLIC_STOREAPI_URL}/${images[currentIndex]}`} alt={'data!.name'} width={400} height={400} />
            <div onClick={onRightClick} className='group-hover:block hidden cursor-pointer p-4 absolute right-1 top-1/2 rounded-full bg-cyan-100 opacity-70' >
                <ArrowRightIcon width={20} height={20} />
            </div>
        </div>
    )
}

export default Carousel