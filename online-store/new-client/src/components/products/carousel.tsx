import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image'
import React, { useState } from 'react'

const Carousel = ({ images }: { images: string[] }) => {
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
        <div className='flex flex-row justify-center transition-all duration-300 group relative w-fit max-h-fit border-[0.5px] border-gray-300 rounded-2xl min-w-[50%] min-h-[400px]'>
            <div onClick={onLeftClick} className='transition-all duration-300 group-hover:block hidden cursor-pointer p-4 absolute left-1 top-1/2 rounded-full bg-cyan-100 opacity-70' >
                <ArrowLeftIcon width={20} height={20} />
            </div>
            <Image className=' rounded-2xl object-contain overflow-hidden max-h-[400px] ' src={`${process.env.NEXT_PUBLIC_STOREAPI_URL}/${images[currentIndex]}`} alt={'data!.name'} width={400} height={250} />
            <div onClick={onRightClick} className='group-hover:block hidden cursor-pointer p-4 absolute right-1 top-1/2 rounded-full bg-cyan-100 opacity-70' >
                <ArrowRightIcon width={20} height={20} />
            </div>
        </div>
    )
}

export default Carousel