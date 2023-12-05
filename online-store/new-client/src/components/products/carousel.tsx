import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image'
import React, { useState } from 'react'




const urls = [
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%3D%3D',
    'https://images.unsplash.com/photo-1612442058361-17…xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1508685096489-7a…xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1579065560489-98…xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]

const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className='transition-all duration-300 group relative'>
            <div className='transition-all duration-300 group-hover:block hidden cursor-pointer p-4 absolute left-1 top-1/2 rounded-full bg-white opacity-70' >
                <ArrowLeftIcon width={20} height={20} />
            </div>
            <Image className='max-h-96 max-w-min object-cover transition duration-500' src={urls[currentIndex]} alt={'data!.name'} width={400} height={400} />
            <div className='group-hover:block hidden cursor-pointer p-4 absolute right-1 top-1/2 rounded-full bg-white opacity-70' >
                <ArrowRightIcon width={20} height={20} />
            </div>
        </div>
    )
}

export default Carousel