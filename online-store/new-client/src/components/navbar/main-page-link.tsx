import Link from 'next/link'
import React from 'react'

const MainPageLink = () => {
    return (
        <Link href='/' className='absolute  left-10'>
            <h3 className='transition duration-500 mx-3 bg-gradient-to-br from-indigo-500 via-sky-600 to-blue-700 hover:from-purple-950 hover:via-red-700 hover:to-yellow-600 rounded-2xl p-2 text-white cursor-pointer active:blur-sm'>SmartShop</h3>
        </Link>
    )
}

export default MainPageLink