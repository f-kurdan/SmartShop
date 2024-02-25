import React from 'react'

const ProductsLoading = () => {
    const shadowItems = Array.from({ length: 12 });

    return (
            <div className='flex flex-row gap-2 flex-wrap justify-center items-center'>
                {shadowItems.map((item, index) => (
                    <div key={index} className='flex flex-col gap-2 justify-evenly items-center p-5 bg-white w-72 h-80'>
                        <div className='w-[90px] h-[200px] rounded-xl bg-gray-100' ></div>
                        <div className='flex flex-col justify-center items-center gap-1 justify-self-end w-[150px]'>
                            <div className='w-full h-[1rem] bg-gray-100 rounded-lg'>
                            </div>
                            <div className='w-[50px] h-[1rem] bg-gray-100 rounded-lg'></div>
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default ProductsLoading