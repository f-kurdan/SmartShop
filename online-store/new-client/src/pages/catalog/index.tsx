import NoItems from '@/components/item-lists/no-items';
import { products } from '@/data'
import Image from 'next/image';
import React from 'react'
import { Query, QueryClient, dehydrate, useQuery } from 'react-query'

const getProducts = () => {
  return Promise.resolve(products);
}

export async function getStatincProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["products"], getProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60,
  }
}

const Component = () => {
  const { isLoading, data } = useQuery(["products"], getProducts)

  return (
    <div className='flex flex-row justify-around items-start mt-3'>
      {/* <div className='flex flex-col w-2/3 min-h-fit mr-10'> */}
        {data?.length ? (
          <div className='flex flex-col w-2/3 min-h-fit mr-10'>
            {data.map((item, index) =>
            (<div key={index} className='flex flex-row justify-evenly items-start px-10 py-7 bg-white mb-2 rounded-xl shadow-lg shadow-black/30 '>
              <Image className='max-w-48 max-h-48' src={item.photo} alt={item.name} width={160} height={160} />
              <div className='flex flex-col justify-start items-start text-sm px-3'>
                <p className='mb-5 text-sm font-semibold hover:text-blue-600 hover:cursor-pointer'>{item.name}</p>
                {!!item.characteristics.length && item.characteristics.map(char => (
                  <p className='mb-3'><span className='font-semibold'>{char.name}: </span>{char.value}</p>
                ))}
              </div>
              <div className='min-w-fit self-end text-center'>
                <p className='border-2 border-black border-solid  p-1 '>
                  {item.price}
                </p>
                <p className='bg-lime-400 hover:invert p-1 transition duration-400 hover:cursor-pointer'>В корзину</p>
              </div>
            </div>)
            )}
          </div>
        ) : (<NoItems />)}
      {/* </div> */}
    </div>
  )
}

export default Component