import PhonesList from '@/components/lists/phones'
import React from 'react'

const Page = ({params}: {params: {slug: string} }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <PhonesList slug={params.slug} />
    </div>
  )
}

export default Page