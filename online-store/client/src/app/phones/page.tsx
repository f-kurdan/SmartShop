import Filter from '@/components/product-lists/filter'
import PhonesList from '@/components/product-lists/phones'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-row justify-around items-start'>
      <Filter />
      <PhonesList />
    </div>
  )
}

export default Page