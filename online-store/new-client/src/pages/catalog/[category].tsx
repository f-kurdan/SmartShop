import { useRouter } from 'next/router'
import React, { ReactNode, useState } from 'react'

export function getStaticProps() {

}

const Category = ({category}:{category: string}) => {
    const router = useRouter()
    return (
        <div className='flex flex-row justify-around items-start mt-3'>
            <div className='flex flex-col w-2/3 min-h-fit mr-10'>
                {router.query.category}
            </div>
        </div>
    )
}

export default Category